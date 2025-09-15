import { NonceManager } from "@ethersproject/experimental";
import { ethers } from "hardhat";

import { HardhatAccount } from "../../../src/HardhatAccount";

async function main() {
    const factory = await ethers.getContractFactory("IssuedContract");
    const deployer = new NonceManager(await ethers.getSigner(HardhatAccount.ledgerAddress[0]));

    const commonsBudgetAddress = process.env.COMMONS_BUDGET_CONTRACT;
    console.log(commonsBudgetAddress);
    if (commonsBudgetAddress !== undefined) {
        const contract = await factory.attach(process.env.ISSUED_CONTRACT || "");
        const tx = await contract.connect(deployer).setCommonsBudgetAddress(commonsBudgetAddress);
        console.log("Waiting for confirmation");
        await tx.wait();
        console.log("CommonsBudget address:", commonsBudgetAddress, "set into IssuedContract:", contract.address);
    } else {
        console.log("Not defined 'process.env.COMMONS_BUDGET_CONTRACT' in environment");
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
