import { NonceManager } from "@ethersproject/experimental";
import { ethers } from "hardhat";

import { HardhatAccount } from "../../../src/HardhatAccount";

async function main() {
    const factory = await ethers.getContractFactory("IssuedContract");
    const deployer = new NonceManager(await ethers.getSigner(HardhatAccount.ledgerAddress[0]));

    const contract = await factory.attach(process.env.ISSUED_CONTRACT || "");
    const newOwner = process.env.NEW_OWNER_ADDRESS ;
    if (newOwner !== undefined) {
        const tx = await contract.connect(deployer).setOwner(newOwner);
        console.log("Waiting for confirmation");
        await tx.wait();
        console.log("New owner set to IssuedContract:", newOwner);
    } else {
        console.log("Not defined 'process.env.NEW_OWNER_ADDRESS' in environment");
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
