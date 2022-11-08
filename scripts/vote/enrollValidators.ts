import { Wallet } from "ethers";
import { ethers } from "hardhat";
import { promises } from "fs";
import { enroll } from '../../utils/appFunc';

const ARG_KEYFILE = './env/.keyList';

async function main() {
    const { provider } = ethers;
    const contents = await promises.readFile(ARG_KEYFILE);
    const lines = contents.toString('utf-8').split(/\r?\n/);

    for (let i = 0; i < lines.length; i += 1) {
        const datas = lines[i].split(' ');
        if (datas.length < 2) {
            continue;
        }
        const validator = new Wallet(datas[1], provider);
        await enroll(validator, datas[0]);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
