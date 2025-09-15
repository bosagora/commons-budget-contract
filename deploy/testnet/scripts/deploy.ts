import { NonceManager } from "@ethersproject/experimental";
import { ethers } from "hardhat";

import { HardhatAccount } from "../../../src/HardhatAccount";

async function main() {
    const factory = await ethers.getContractFactory("IssuedContract");

    const deployer = new NonceManager(await ethers.getSigner(HardhatAccount.ledgerAddress[0]));
    const contract = await factory.connect(deployer).deploy();
    await contract.deployed();

    console.log("IssuedContract - deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
