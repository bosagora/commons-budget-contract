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

        voteAddress = await budget.getProposalVoteAddress(proposal);

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

        for (let i = 0; i < 3; i += 1) {
            const candidate = await voteraVote.candidates(i);
            expect(candidate.voteCount).equal(BigNumber.from(voteCounts[i]));
        }

        const proposalData = await voteBudget.getProposalData(proposal);
        expect(proposalData.validatorSize).equal(validatorCount);
        for (let i = 0; i < 3; i += 1) {
            expect(proposalData.voteCounts[i]).equal(BigNumber.from(voteCounts[i]));
        }
    });
});
