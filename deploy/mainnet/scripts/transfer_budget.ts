import { NonceManager } from "@ethersproject/experimental";

import { BigNumber } from "ethers";
import { ethers } from "hardhat";

import { HardhatAccount } from "../../../src/HardhatAccount";

async function main() {
    const commonsBudgetFactory = await ethers.getContractFactory("CommonsBudget");
    const issuedFactory = await ethers.getContractFactory("IssuedContract");
    const deployer = new NonceManager(await ethers.getSigner(HardhatAccount.ledgerAddress[0]));

    const cent = BigNumber.from(10).pow(18);
    const amount = BigNumber.from(process.env.BUDGET_AMOUNT_BOA || 0).mul(cent);
    console.log("amount: ", amount);

    const commonsBudget = await commonsBudgetFactory.attach(process.env.COMMONS_BUDGET_CONTRACT || "");
    const issued = await issuedFactory.attach(process.env.ISSUED_CONTRACT || "");

    await commonsBudget.setIssuedContractAddress(issued.address);
    await commonsBudget.connect(deployer).transferBudget(amount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
