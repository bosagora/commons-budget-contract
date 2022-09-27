// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { GasPriceManager } from "../utils/GasPriceManager";

import { Wallet } from "ethers";
import { ethers } from "hardhat";

import { NonceManager } from "@ethersproject/experimental";

async function main() {
    const commonsBudgetFactory = await ethers.getContractFactory("CommonsBudget");
    const voteraVoteFactory = await ethers.getContractFactory("VoteraVote");

    const provider = ethers.provider;

    const admin = new Wallet(process.env.ADMIN_KEY || "");
    const adminSigner = new NonceManager(new GasPriceManager(provider.getSigner(admin.address)));
    const commonsBudget = await commonsBudgetFactory.connect(adminSigner).deploy();
    await commonsBudget.deployed();
    const blockDeployed = await ethers.provider.getBlock("latest");

    console.log("commonsBudget - deployed to:", commonsBudget.address, ", block: ", blockDeployed.number);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
