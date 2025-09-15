import { NonceManager } from "@ethersproject/experimental";
import { Wallet } from "ethers";
import { ethers } from "hardhat";
import { GasPriceManager } from "../../../src/utils/GasPriceManager";

async function main() {
    const issuedFactory = await ethers.getContractFactory("IssuedContract");
    const issued = await issuedFactory.attach(process.env.ISSUED_CONTRACT || "");
    const commonsBudgetAddress = await issued.getCommonsBudgetAddress();
    console.log("CommonsBudget address:", commonsBudgetAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
