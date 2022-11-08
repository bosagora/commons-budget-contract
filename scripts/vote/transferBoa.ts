import { Wallet, BigNumber, Signer } from "ethers";
import { ethers } from "hardhat";
import { promises } from "fs";
import { NonceManager } from '@ethersproject/experimental';
import { GasPriceManager } from "../../utils/GasPriceManager";

const ARG_KEYFILE = './env/.keyList';

async function transferBoa(from: Signer, to: string, value: BigNumber) {
    const tx = { to, value };
    const transaction = await from.sendTransaction(tx);
    return transaction;
}

function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function main() {
    const { provider } = ethers;
    const voterManager = new NonceManager(new GasPriceManager(new Wallet(process.env.VOTE_KEY || '', provider)));

    let amountInEthers = '10.0';
    const value = ethers.utils.parseEther(amountInEthers);

    const contents = await promises.readFile(ARG_KEYFILE);
    const lines = contents.toString('utf-8').split(/\r?\n/);

    for (let i = 0; i < lines.length; i += 1) {
        const datas = lines[i].split(' ');
        if (datas.length < 2) {
            continue;
        }
        const validator = new Wallet(datas[1], provider);
        const transaction = await transferBoa(voterManager, validator.address, value);
        console.log(`send to=${datas[0]} txHash=${transaction.hash}`);
        await delay(100);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
