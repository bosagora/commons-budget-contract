import { NonceManager } from "@ethersproject/experimental";
import { ethers } from "hardhat";

import { HardhatAccount } from "../../../src/HardhatAccount";

async function main() {
    const factory = await ethers.getContractFactory("CommonsBudget");

    const deployer = new NonceManager(await ethers.getSigner(HardhatAccount.ledgerAddress[0]));
    const contract = await factory.connect(deployer).deploy();
    await contract.deployed();

    console.log("CommonsBudget - deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
