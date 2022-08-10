import chai, { expect } from "chai";
import crypto from "crypto";
import { solidity, MockProvider } from "ethereum-waffle";
import { BigNumber, utils, Wallet } from "ethers";
import { ethers, network, waffle } from "hardhat";
import {
    CommonsBudget,
    CommonsBudget__factory as CommonsBudgetFactory,
    VoteraVote,
    VoteraVote__factory as VoteraVoteFactory,
} from "../typechain";
import { makeCommitment, signCommitment, signFundProposal, signSystemProposal } from "./VoteHelper";

import * as assert from "assert";

const AddressZero = "0x0000000000000000000000000000000000000000";
const AddressNormal = "0xcD958D25697A04B0e55BF13c5ADE051beE046354";
const DocHash = "0x9f18669085971c1306dd0096ec531e71ad2732fd0e783068f2a3aba628613231";

chai.use(solidity);

describe("Test actions by contract owner", () => {
    let contract: CommonsBudget;
    let voteraVote: VoteraVote;

    const basicFee = ethers.utils.parseEther("100.0");
    const fundAmount = ethers.utils.parseEther("10000.0");

    const provider = waffle.provider;
    const [admin, voteManager, ...validators] = provider.getWallets();
    const amount = BigNumber.from(10).pow(18);
    const admin_signer = provider.getSigner(admin.address);

    let proposal: string;

    before(async () => {
        const commonsBudgetFactory = await ethers.getContractFactory("CommonsBudget");
        contract = (await commonsBudgetFactory.deploy()) as CommonsBudget;
        await contract.deployed();

        const voteraVoteFactory = await ethers.getContractFactory("VoteraVote");
        voteraVote = await voteraVoteFactory.connect(admin).deploy();
        await voteraVote.deployed();
        await voteraVote.changeCommonBudgetContract(contract.address);

        const voteAddress = voteraVote.address;
        const changeParamTx = await contract.changeVoteParam(voteManager.address, voteAddress);
        await changeParamTx.wait();
    });

    beforeEach(() => {
        proposal = `0x${crypto.randomBytes(32).toString("hex")}`;
    });

    it("Check if admin can distribute vote fees", async () => {
        const blockLatest = await ethers.provider.getBlock("latest");
        const title = "SystemProposalTitle";
        const startTime = blockLatest.timestamp + 30000;
        const endTime = startTime + 30000;
        const openTime = endTime + 30;
        const docHash = DocHash;
        const signProposal = await signSystemProposal(voteManager, proposal, title, startTime, endTime, docHash);
        const validatorBudget = CommonsBudgetFactory.connect(contract.address, validators[0]);
        const makeProposalTx = await validatorBudget.createSystemProposal(
            proposal,
            { start: startTime, end: endTime, startAssess: 0, endAssess: 0, docHash, amount: 0, title },
            signProposal,
            { value: basicFee }
        );
        await makeProposalTx.wait();

        // ready to start voting
        const voteAddress = (await contract.getProposalData(proposal)).voteAddress;
        await voteraVote.setupVoteInfo(proposal, startTime, endTime, openTime, "info");

        // add only half of validators
        const validators1 = validators.slice(0, validators.length / 2);
        const validators2 = validators.slice(validators1.length, validators.length);
        await voteraVote.addValidators(
            proposal,
            validators1.map((v) => v.address),
            false
        );
        expect(await contract.connect(admin_signer).canDistributeVoteFees(proposal)).equal(false);

        // add all the validators
        await voteraVote.addValidators(
            proposal,
            validators2.map((v) => v.address),
            true
        );
        expect(await contract.connect(admin_signer).canDistributeVoteFees(proposal)).equal(true);
    });

    it("Distribute fees to more than 500 validators", async () => {
        let blockLatest = await ethers.provider.getBlock("latest");
        const title = "SystemProposalTitle";
        const startTime = blockLatest.timestamp + 30000;
        const endTime = startTime + 30000;
        const openTime = endTime + 30;
        const docHash = DocHash;
        const signProposal = await signSystemProposal(voteManager, proposal, title, startTime, endTime, docHash);
        const validatorBudget = CommonsBudgetFactory.connect(contract.address, validators[0]);
        const makeProposalTx = await validatorBudget.createSystemProposal(
            proposal,
            { start: startTime, end: endTime, startAssess: 0, endAssess: 0, docHash, amount: 0, title },
            signProposal,
            { value: basicFee }
        );
        await makeProposalTx.wait();

        // create more validators and have 108 validators in total
        let manyValidators: Wallet[] = validators;
        const addCount = (await contract.vote_fee_distrib_count()).toNumber();
        for (let i = 0; i < addCount; i++) {
            manyValidators = manyValidators.concat(provider.createEmptyWallet());
        }

        // ready to start voting
        const voteAddress = (await contract.getProposalData(proposal)).voteAddress;
        await voteraVote.setupVoteInfo(proposal, startTime, endTime, openTime, "info");
        const count = Math.floor(manyValidators.length / 100);
        for (let i = 0; i < count; i++) {
            const start = i * 100;
            await voteraVote.addValidators(
                proposal,
                manyValidators.slice(start, start + 100).map((v) => v.address),
                false
            );
        }
        await voteraVote.addValidators(
            proposal,
            manyValidators.slice(addCount, manyValidators.length).map((v) => v.address),
            true
        );

        // get validators' balances to be compared with their balances after paying fees
        const prevBalances = new Map<string, BigNumber>();
        const val_addresses = await voteraVote.getValidators(proposal);
        expect(val_addresses.length).equals(manyValidators.length);
        for (const address of val_addresses) {
            prevBalances.set(address, await provider.getBalance(address));
        }

        // distribute vote fess to validators
        const max_count_dist = (await contract.connect(admin_signer).vote_fee_distrib_count()).toNumber();
        const dist_call_count = val_addresses.length / max_count_dist;
        for (let i = 0; i < dist_call_count; i++) {
            const start = i * max_count_dist;
            await contract.distributeVoteFees(proposal, start);
            await network.provider.send("evm_mine");
        }

        // compares voters' balances with previous balances
        // the specified fee should be added to all the voters' balances
        const voterFee = await contract.getVoterFee();
        await network.provider.send("evm_mine");
        for (const address of val_addresses) {
            const curBalance = await provider.getBalance(address);
            const prevBalance = prevBalances.get(address);
            expect(curBalance.sub(prevBalance ?? 0).toNumber()).equal(voterFee.toNumber());
        }

        // try to distribute vote fess to validators AGAIN
        for (let i = 0; i < dist_call_count; i++) {
            const start = i * max_count_dist;
            await contract.distributeVoteFees(proposal, start);
            await network.provider.send("evm_mine");
        }

        // there must be no change for validators' balances although
        // `admin` distributes vote fees again because the fees had
        // already been distributed.
        for (const address of val_addresses) {
            const curBalance = await provider.getBalance(address);
            const prevBalance = prevBalances.get(address);
            expect(curBalance.sub(prevBalance ?? 0).toNumber()).equal(voterFee.toNumber());
        }
    });
});
