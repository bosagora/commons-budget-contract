import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers, network, waffle } from "hardhat";
import crypto from "crypto";
import { BigNumber } from "ethers";
import {
    CommonsBudget,
    CommonsBudget__factory as CommonsBudgetFactory,
    VoteraVote,
    VoteraVote__factory as VoteraVoteFactory,
    // eslint-disable-next-line node/no-missing-import
} from "../typechain";
import { getHash, makeCommitment, signCommitment } from "./VoteHelper";

const AddressZero = "0x0000000000000000000000000000000000000000";

chai.use(solidity);

async function displayBalance(address: string, message: string) {
    const balance = await ethers.provider.getBalance(address);
    console.log(`${message}_balance = ${balance}`);
}

describe("VoteraVote", function () {
    let libraryVoteraVote: string;
    let budget: CommonsBudget;

    const provider = waffle.provider;
    const [deployer, budgetChair, voteChair, ...validators] = provider.getWallets();
    const basicFee = ethers.utils.parseEther("0.0001");

    let proposal: string;
    let voteAddress: string;
    let voteraVote: VoteraVote;
    let voteBudget: CommonsBudget;

    before(async () => {
        // deploy VoteraVote
        const voteraVoteFactory = await ethers.getContractFactory("VoteraVote");
        const libVoteraVote = await voteraVoteFactory.connect(deployer).deploy();
        await libVoteraVote.deployed();
        libraryVoteraVote = libVoteraVote.address;

        // deploy CommonsBudget
        const bugetFactory = await ethers.getContractFactory("CommonsBudget");
        budget = await bugetFactory.connect(budgetChair).deploy();
        await budget.deployed();

        // change parameter for voteraVote
        const changeParamTx = await budget.changeVoteParam(voteChair.address, libraryVoteraVote);
        await changeParamTx.wait();
    });

    beforeEach(async function () {
        // generate random proposal id (which is address type)
        proposal = `0x${crypto.randomBytes(32).toString("hex")}`;

        // get current blocktime and set vote basic parameter
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const docHash = getHash("bodyHash");

        // make proposal data (by validator)
        const validatorBudget = CommonsBudgetFactory.connect(budget.address, validators[0]);
        const makeProposalTx = await validatorBudget.makeSystemProposalData(
            proposal,
            "Votera Vote Test",
            startTime,
            endTime,
            docHash,
            { value: basicFee }
        );
        await makeProposalTx.wait();

        voteAddress = (await budget.getProposalData(proposal)).voteAddress;

        voteraVote = VoteraVoteFactory.connect(voteAddress, voteChair);
        voteBudget = CommonsBudgetFactory.connect(budget.address, voteChair);
    });

    it("Check VoteraVote normal lifecycle", async function () {
        expect(await voteraVote.chair()).to.be.equal(voteChair.address);
        expect(await voteraVote.proposalID()).to.be.equal(proposal);

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        displayBalance(voteChair.address, "init");

        // Setup Vote Information
        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");

        // Add Validator list for voter confirmation
        const addValidatorTx = await voteraVote.addValidators(
            validators.map((v) => v.address)
        );
        await addValidatorTx.wait();

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // notify starting of vote
        const voteStartedTx = await voteBudget.voteStarted(proposal);
        await voteStartedTx.wait();

        // prepare ballot
        const choices: number[] = [];
        const nonces: number[] = [];
        const expectVoteCounts: number[] = [0, 0, 0];
        const voterCount = validators.length - 1;

        for (let i = 0; i < voterCount; i += 1) {
            const c = i % 3;
            choices.push(c);
            nonces.push(i + 1);
            expectVoteCounts[c] += 1;
        }

        // submit ballot
        let submitBallotTx;
        for (let i = 0; i < voterCount; i += 1) {
            const commitment = await makeCommitment(
                validators[i],
                voteAddress,
                validators[i].address,
                choices[i],
                nonces[i]
            );
            const signature = await signCommitment(
                voteChair,
                voteAddress,
                validators[i].address,
                commitment
            );

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            submitBallotTx = await ballotVote.submitBallot(
                voteAddress,
                commitment,
                signature
            );
        }

        expect(await voteraVote.ballotCount()).equal(voterCount);

        if (submitBallotTx) {
            await submitBallotTx.wait();
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // check read ballot information
        for (let i = 0; i < voterCount; i += 1) {
            const ballot = await voteraVote.getBallotAtIndex(i);
            expect(ballot.key).equal(validators[i].address);
        }

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        // reveal ballot (by voteraServer)
        const keys1 = validators.map((v) => v.address).slice(0, 4);
        const choice1 = choices.slice(0, 4);
        const nonce1 = nonces.slice(0, 4);

        const revealTx1 = await voteraVote.revealBallot(keys1, choice1, nonce1);
        await revealTx1.wait();

        await expect(voteraVote.registerResult()).to.be.revertedWith("E002");

        const keys2 = validators.map((v) => v.address).slice(4, voterCount);
        const choice2 = choices.slice(4, voterCount);
        const nonce2 = nonces.slice(4, voterCount);

        await voteraVote.revealBallot(keys2, choice2, nonce2);

        const registerTx = await voteraVote.registerResult();
        await registerTx.wait();

        // check vote result
        const validatorCount = await voteraVote.getValidatorCount();
        const voteCounts = await voteraVote.getVoteCounts();
        for (let i = 0; i < 3; i += 1) {
            expect(voteCounts[i]).equal(expectVoteCounts[i]);
        }

        const votePublishedTx = await voteBudget.votePublished(
            proposal,
            validatorCount,
            voteCounts
        );
        await votePublishedTx.wait();

        displayBalance(voteChair.address, "end_");

        const proposalData = await voteBudget.getProposalData(proposal);
        expect(proposalData.validatorSize).equal(validatorCount);
        for (let i = 0; i < 3; i += 1) {
            expect(proposalData.voteCounts[i]).equal(BigNumber.from(voteCounts[i]));
        }
    });

    it("init: E001 - directly deployed contract cannot be initialized", async () => {
        const factory = await ethers.getContractFactory("VoteraVote");
        const voteraVote = await factory.deploy();
        await voteraVote.deployed();

        await expect(voteraVote.init(voteChair.address, proposal, budget.address)).to.be.revertedWith("E001");
    });

    it("changeChair", async () => {
        const newVoteChair = validators[1];
        const changeChairTx = await voteraVote.changeChair(newVoteChair.address);
        await changeChairTx.wait();

        expect(await voteraVote.getChair()).equal(newVoteChair.address);
    });

    it("changeChair: E000", async () => {
        const newVoteChair = validators[1];

        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.changeChair(newVoteChair.address)).to.be.revertedWith("E000");
    });

    it("changeChair: E001", async () => {
        const invalidParam = AddressZero;
        await expect(voteraVote.changeChair(invalidParam)).to.be.revertedWith("E001");
    });

    it("setupVoteInfo: E000", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.setupVoteInfo(startTime, endTime, openTime, "info")).to.be.revertedWith("E000");
    });

    it("setupVoteInfo: E001", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        // block.timestamp < _startVote
        const invalidStartTime = blockLatest.timestamp - 100
        await expect(voteraVote.setupVoteInfo(invalidStartTime, endTime, openTime, "info")).to.be.revertedWith("E001");

        // 0 < _startVote && _startVote < _endVote && _endVote < _openVote
        const invalidEndTime = startTime - 100;
        await expect(voteraVote.setupVoteInfo(startTime, invalidEndTime, openTime, "info")).to.be.revertedWith("E001");
        const invalidOpenTime = endTime - 100;
        await expect(voteraVote.setupVoteInfo(startTime, endTime, invalidOpenTime, "info")).to.be.revertedWith("E001");
    });

    it("setupVoteInfo: E002", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");

        // call setupVoteInfo again
        await expect(voteraVote.setupVoteInfo(startTime, endTime, openTime, "info")).to.be.revertedWith("E002");
    });

    it("changeVoteInfo", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");

        expect(await voteraVote.startVote()).equal(BigNumber.from(startTime));
        expect(await voteraVote.endVote()).equal(BigNumber.from(endTime));
        expect(await voteraVote.openVote()).equal(BigNumber.from(openTime));
        expect(await voteraVote.info()).equal("info");

        const newStartTime = startTime + 86400;
        const newEndTime = newStartTime + 86400;
        const newOpenTime = newEndTime + 30;

        await voteraVote.changeVoteInfo(newStartTime, newEndTime, newOpenTime);

        expect(await voteraVote.startVote()).equal(BigNumber.from(newStartTime));
        expect(await voteraVote.endVote()).equal(BigNumber.from(newEndTime));
        expect(await voteraVote.openVote()).equal(BigNumber.from(newOpenTime));
    });

    it("changeVoteInfo: E000", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.changeVoteInfo(startTime, endTime, openTime)).to.be.revertedWith("E000");
    });

    it("changeVoteInfo: E001", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        // 0 < _startVote && _startVote < _endVote && _endVote < _openVote,
        const invalidStartTime = 0;
        await expect(voteraVote.changeVoteInfo(invalidStartTime, endTime, openTime)).to.be.revertedWith("E001");
        const invalidEndTime = startTime - 100;
        await expect(voteraVote.changeVoteInfo(startTime, invalidEndTime, openTime)).to.be.revertedWith("E001");
        const invalidOpenTime = endTime - 100;
        await expect(voteraVote.changeVoteInfo(startTime, endTime, invalidOpenTime)).to.be.revertedWith("E001");
    });

    it("changeVoteInfo: E003 - call changeVoteInfo without setupVoteInfo", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await expect(voteraVote.changeVoteInfo(startTime, endTime, openTime)).to.be.revertedWith("E003");
    });

    it("changeVoteInfo: E003 - already started", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await expect(voteraVote.changeVoteInfo(blockLatest.timestamp - 100, endTime, openTime)).to.be.revertedWith("E003");

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const newStartTime = startTime + 86400;
        const newEndTime = newStartTime + 86400;
        const newOpenTime = newEndTime + 30;
        await expect(voteraVote.changeVoteInfo(newStartTime, newEndTime, newOpenTime)).to.be.revertedWith("E003");
    });

    it("addValidators", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");

        await voteraVote.addValidators(validators.slice(0, 5).map((v) => v.address));
        expect(await voteraVote.getValidatorCount()).equal(BigNumber.from(5));
        for (let i = 0; i < 5; i += 1) {
            expect(await voteraVote.getValidatorAt(i)).equal(validators[i].address);
        }

        await voteraVote.addValidators(validators.slice(3).map((v) => v.address));
        expect(await voteraVote.getValidatorCount()).equal(BigNumber.from(validators.length));
        for (let i = 0; i< validators.length; i += 1) {
            expect(await voteraVote.getValidatorAt(i)).equal(validators[i].address);
        }
    });

    it("addValidators: E000", async () => {
        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.addValidators(validators.map((v) => v.address))).to.be.revertedWith("E000");
    });

    it("addValidators: E003", async () => {
        // call addValidators without setupVoteInfo
        await expect(voteraVote.addValidators(validators.map((v) => v.address))).to.be.revertedWith("E003");

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // call addValidators after voteStart
        await expect(voteraVote.addValidators(validators.map((v) => v.address))).to.be.revertedWith("E003");
    });

    it("submitBallot", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");
        
        const choice = 1;
        const nonce = 1;

        // validator[0]
        const commitment = await makeCommitment(validators[0], voteAddress, validators[0].address, choice, nonce);
        const signature = await signCommitment(voteChair, voteAddress, validators[0].address, commitment);

        const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[0]);
        await ballotVote.submitBallot(voteAddress, commitment, signature);

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(1));

        const ballot = await ballotVote.myBallot();
        expect(ballot.key).equal(validators[0].address);
        expect(ballot.choice).equal(BigNumber.from(0)); // not yet revealed
        expect(ballot.nonce).equal(BigNumber.from(0));
        expect(ballot.commitment).equal(commitment);

        // validator[1]
        const commitment1 = await makeCommitment(validators[1], voteAddress, validators[1].address, choice, nonce);
        const signature1 = await signCommitment(voteChair, voteAddress, validators[1].address, commitment1);

        const ballotVote1 = VoteraVoteFactory.connect(voteAddress, validators[1]);
        await ballotVote1.submitBallot(voteAddress, commitment1, signature1);

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(2));

        const ballot1 = await ballotVote1.myBallot();
        expect(ballot1.key).equal(validators[1].address);
        expect(ballot1.choice).equal(BigNumber.from(0));
        expect(ballot1.nonce).equal(BigNumber.from(0));
        expect(ballot1.commitment).equal(commitment1);

        // overwrite by validator[0]
        const newChoice = 2;
        const newNonce = 2;
        const newCommitment = await makeCommitment(validators[0], voteAddress, validators[0].address, newChoice, newNonce);
        const newSignature = await signCommitment(voteChair, voteAddress, validators[0].address, newCommitment);

        await ballotVote.submitBallot(voteAddress, newCommitment, newSignature);

        // confirm ballotCount not changed
        expect(await voteraVote.ballotCount()).equal(BigNumber.from(2));
        const ballotChanged = await ballotVote.myBallot();
        expect(ballotChanged.key).equal(validators[0].address);
        expect(ballotChanged.choice).equal(BigNumber.from(0));
        expect(ballotChanged.nonce).equal(BigNumber.from(0));
        expect(ballotChanged.commitment).equal(newCommitment);
    });

    it("submitBallot: E000", async () => {
        const choice = 1;
        const nonce = 1;

        const caller = validators[1];
        const commitment = await makeCommitment(caller, voteAddress, caller.address, choice, nonce);
        const signature = await signCommitment(voteChair, voteAddress, caller.address, commitment);
        const callerVote = VoteraVoteFactory.connect(voteAddress, caller);
        await expect(callerVote.submitBallot(voteAddress, commitment, signature)).to.be.revertedWith("E000"); // not initialized vote

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        // remove validators[0]
        await voteraVote.addValidators(validators.slice(1).map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        await callerVote.submitBallot(voteAddress, commitment, signature);

        // validator[0]
        const invalidCaller = validators[0];
        const commitmentOfInvalidCaller = await makeCommitment(invalidCaller, voteAddress, invalidCaller.address, choice, nonce);
        const signatureOfInvalidCaller = await signCommitment(voteChair, voteAddress, invalidCaller.address, commitmentOfInvalidCaller);

        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.submitBallot(voteAddress, commitmentOfInvalidCaller, signatureOfInvalidCaller)).to.be.revertedWith("E000");
    });

    it("submitBallot: E001", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choice = 1;
        const nonce = 1;

        // validator[0]
        const commitment = await makeCommitment(validators[0], voteAddress, validators[0].address, choice, nonce);
        const signature = await signCommitment(voteChair, voteAddress, validators[0].address, commitment);

        const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[0]);
        const invalidVoteAddress = libraryVoteraVote;
        await expect(ballotVote.submitBallot(invalidVoteAddress, commitment, signature)).to.be.revertedWith("E001");

        const invalidCaller = validators[1];
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller);
        await expect(invalidCallerVote.submitBallot(voteAddress, commitment, signature)).to.be.revertedWith("E001");

        const invalidSigner = budgetChair;
        const invalidSignature = await signCommitment(invalidSigner, voteAddress, validators[0].address, commitment);
        await expect(ballotVote.submitBallot(voteAddress, commitment, invalidSignature)).to.be.revertedWith("E001");
    });

    it("submitBallot: E004", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        const choice = 1;
        const nonce = 1;

        // validator[0]
        const commitment = await makeCommitment(validators[0], voteAddress, validators[0].address, choice, nonce);
        const signature = await signCommitment(voteChair, voteAddress, validators[0].address, commitment);

        const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[0]);
        await expect(ballotVote.submitBallot(voteAddress, commitment, signature)).to.be.revertedWith("E004");
    });

    it("submitBallot: E003", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choice = 1;
        const nonce = 1;

        // validator[0]
        const commitment = await makeCommitment(validators[0], voteAddress, validators[0].address, choice, nonce);
        const signature = await signCommitment(voteChair, voteAddress, validators[0].address, commitment);

        const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[0]);
        await expect(ballotVote.submitBallot(voteAddress, commitment, signature)).to.be.revertedWith("E003");
    });

    it("getBallotAtIndex", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const commitments: string[] = [];

        for (let i = 0; i < 2; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(commitments.length));

        for (let i = 0; i < commitments.length; i += 1) {
            const ballot = await voteraVote.getBallotAtIndex(i);
            expect(ballot.key).equal(validators[i].address);
            expect(ballot.choice).equal(BigNumber.from(0));
            expect(ballot.nonce).equal(BigNumber.from(0));
            expect(ballot.commitment).equal(commitments[i]);
        }
    });

    it("getBallotAtIndex: E001", async () => {
        await expect(voteraVote.getBallotAtIndex(0)).to.be.revertedWith("E001"); // not initialized

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const commitments: string[] = [];

        for (let i = 0; i < 2; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(commitments.length));

        const ballot = await voteraVote.getBallotAtIndex(0);
        expect(ballot.key).equal(validators[0].address);
        expect(ballot.commitment).equal(commitments[0]);

        const invalidInput = 3;
        await expect(voteraVote.getBallotAtIndex(invalidInput)).to.be.revertedWith("E001");
    });

    it("getBallotAtIndex: E004", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const commitments: string[] = [];

        for (let i = 0; i < 2; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        await expect(voteraVote.getBallotAtIndex(0)).to.be.revertedWith("E004");
    });

    it("revealBallot", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];

        for (let i = 0; i < 2; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            choices.push(choice);
            nonces.push(nonce);
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(commitments.length));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        const keys = validators.slice(0, choices.length).map((v) => v.address);

        await voteraVote.revealBallot(keys, choices, nonces);

        for (let i = 0; i < commitments.length; i += 1) {
            const ballot = await voteraVote.getBallotAtIndex(i);
            expect(ballot.key).equal(validators[i].address);
            expect(ballot.choice).equal(BigNumber.from(choices[i]));
            expect(ballot.nonce).equal(BigNumber.from(nonces[i]));
            expect(ballot.commitment).equal(commitments[i]);
        }
    });

    it("revealBallot: E000", async () => {
        const keys = validators.map((v) => v.address);
        const choices = validators.map((v, i) => i % 3);
        const nonces = validators.map((v, i) => i + 1);

        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.revealBallot(keys, choices, nonces)).to.be.revertedWith("E000");
    });

    it("revealBallot: E004", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const keys = validators.map((v) => v.address);
        const choices = validators.map((v, i) => i % 3);
        const nonces = validators.map((v, i) => i + 1);

        await expect(voteraVote.revealBallot(keys, choices, nonces)).to.be.revertedWith("E004");
    });

    it("revealBallot: E001", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // prepare ballot
        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];

        for (let i = 0; i < 2; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            choices.push(choice);
            nonces.push(nonce);
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(commitments.length));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        const keys = validators.slice(0, choices.length).map((v) => v.address);

        const invalidChoices = choices.slice(1);
        await expect(voteraVote.revealBallot(keys, invalidChoices, nonces)).to.be.revertedWith("E001");
        const invalidNoncesSize = nonces.slice(1);
        await expect(voteraVote.revealBallot(keys, choices, invalidNoncesSize)).to.be.revertedWith("E001");

        const invalidNoncesZero = nonces.map((o, i) => i === 0 ? 0 : o);
        await expect(voteraVote.revealBallot(keys, choices, invalidNoncesZero)).to.be.revertedWith("E001");

        const invalidNoncesSign = nonces.map((o, i) => i === 0 ? o + 1 : o);
        await expect(voteraVote.revealBallot(keys, choices, invalidNoncesSign)).to.be.revertedWith("E001");

        const invalidChoicesSign = choices.map((c, i) => i === 1 ? c + 1 : c);
        await expect(voteraVote.revealBallot(keys, invalidChoicesSign, nonces)).to.be.revertedWith("E001");
    });

    it("revealBallot: E002", async () => {
        const voterCount = 3;
        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];

        for (let i = 0; i < voterCount; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            
            choices.push(choice);
            nonces.push(nonce);
            commitments.push(commitment);
        }

        const keys = validators.slice(0, voterCount).map((v) => v.address);

        await expect(voteraVote.revealBallot(keys, choices, nonces)).to.be.revertedWith("E002"); // not initialized

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        for (let i = 0; i < voterCount; i += 1) {
            const commitment = commitments[i];
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(voterCount));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        await voteraVote.revealBallot(keys, choices, nonces);
        
        await voteraVote.registerResult();

        // already called registerResult
        await expect(voteraVote.revealBallot(keys, choices, nonces)).to.be.revertedWith("E002");
    });

    it("registerResult&getVoteCounts", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];
        const expectVoteCounts: number[] = [0, 0, 0];
        const voterCount = 5;

        for (let i = 0; i < voterCount; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            choices.push(choice);
            nonces.push(nonce);
            expectVoteCounts[choice] += 1;
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(voterCount));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        const keys = validators.slice(0, voterCount).map((v) => v.address);

        await voteraVote.revealBallot(keys, choices, nonces);
        
        await voteraVote.registerResult();

        const voteCounts = await voteraVote.getVoteCounts();
        for (let i = 0; i < 3; i += 1) {
            expect(voteCounts[i]).equal(expectVoteCounts[i]);
        }
    });

    it("registerResult&getVoteCounts - no voter", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(0));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        await voteraVote.registerResult();

        const voteCounts = await voteraVote.getVoteCounts();
        for (let i = 0; i < 3; i += 1) {
            expect(voteCounts[i]).equal(BigNumber.from(0));
        }
    });

    it("registerResult: E000", async () => {
        const invalidCaller = budgetChair;
        const invalidCallerVote = VoteraVoteFactory.connect(voteAddress, invalidCaller); 
        await expect(invalidCallerVote.registerResult()).to.be.revertedWith("E000");
    });

    it("registerResult: E004", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        await expect(voteraVote.registerResult()).to.be.revertedWith("E004");
    })

    it("registerResult: E002 - not initialized && duplicated call", async () => {
        await expect(voteraVote.registerResult()).to.be.revertedWith("E002"); // not initialized

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];
        const expectVoteCounts: number[] = [0, 0, 0];
        const voterCount = 5;

        for (let i = 0; i < voterCount; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            choices.push(choice);
            nonces.push(nonce);
            expectVoteCounts[choice] += 1;
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(voterCount));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        const keys = validators.slice(0, voterCount).map((v) => v.address);

        await voteraVote.revealBallot(keys, choices, nonces);
        
        await voteraVote.registerResult();
        await expect(voteraVote.registerResult()).to.be.revertedWith("E002"); // duplicated call
    });

    it("registerResult: E002 - not revealed", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        const choices: number[] = [];
        const nonces: number[] = [];
        const commitments: string[] = [];
        const expectVoteCounts: number[] = [0, 0, 0];
        const voterCount = 5;

        for (let i = 0; i < voterCount; i += 1) {
            const choice = i % 3;
            const nonce = i + 1;
            const commitment = await makeCommitment(validators[i], voteAddress, validators[i].address, choice, nonce);
            const signature = await signCommitment(voteChair, voteAddress, validators[i].address, commitment);
            
            choices.push(choice);
            nonces.push(nonce);
            expectVoteCounts[choice] += 1;
            commitments.push(commitment);

            const ballotVote = VoteraVoteFactory.connect(voteAddress, validators[i]);
            await ballotVote.submitBallot(voteAddress, commitment, signature);
        }

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(voterCount));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        await expect(voteraVote.registerResult()).to.be.revertedWith("E002");

        const keys = validators.slice(0, voterCount).map((v) => v.address);

        const notYetKeys = keys.slice(1);
        const notYetChoices = choices.slice(1);
        const notYetNonces = nonces.slice(1);

        await voteraVote.revealBallot(notYetKeys, notYetChoices, notYetNonces);

        await expect(voteraVote.registerResult()).to.be.revertedWith("E002");
    });

    it("getVoteCounts: E004", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        await expect(voteraVote.getVoteCounts()).to.be.revertedWith("E004");
    });

    it("getVoteCounts: E002", async () => {
        await expect(voteraVote.getVoteCounts()).to.be.revertedWith("E002");

        const blockLatest = await ethers.provider.getBlock("latest");
        const startTime = blockLatest.timestamp + 86400; // 1 day
        const endTime = startTime + 86400; // 1 day
        const openTime = endTime + 30;

        await voteraVote.setupVoteInfo(startTime, endTime, openTime, "info");
        await voteraVote.addValidators(validators.map((v) => v.address));

        // wait until startTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        // wait until endTime
        await network.provider.send("evm_increaseTime", [86400]);
        await network.provider.send("evm_mine");

        expect(await voteraVote.ballotCount()).equal(BigNumber.from(0));

        // wait until openTime
        await network.provider.send("evm_increaseTime", [30]);
        await network.provider.send("evm_mine");

        await expect(voteraVote.getVoteCounts()).to.be.revertedWith("E002");
    });
});
