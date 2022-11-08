import { Wallet } from "ethers";
import { ethers } from "hardhat";
import { promises } from "fs";
import { voteValidator, VOTE_SELECT } from '../../utils/appFunc';

const ARG_KEYFILE = './env/.keyList';
const ARG_PROPOSALID = '0x199e60a99b0bb810746a08213c3deb25887e8bcbe9e7ba1cb80c2fc7875d9f1d';
const ARG_SKIP = 5;
const ARG_YESCOUNT = 191;
const ARG_NOCOUNT = 191;

async function main() {
    const { provider } = ethers;

    const contents = await promises.readFile(ARG_KEYFILE);
    const lines = contents.toString('utf-8').split(/\r?\n/);

    const proposalId = ARG_PROPOSALID;
    const skip = ARG_SKIP;
    let yesCount = ARG_YESCOUNT;
    let noCount = ARG_NOCOUNT;
    const size = Math.min(yesCount + noCount + skip, lines.length);
    for (let i = skip; i < size; i += 1) {
        if (yesCount === 0 && noCount === 0) {
            break;
        }

        const datas = lines[i].split(' ');
        if (datas.length < 2) {
            continue;
        }
        const wallet = new Wallet(datas[1], provider);
        if (yesCount >= noCount && yesCount > 0) {
            await voteValidator(wallet, proposalId, VOTE_SELECT.YES);
            console.log(`${datas[0]} YES`);
            yesCount -= 1;
        } else if (yesCount < noCount && noCount > 0) {
            await voteValidator(wallet, proposalId, VOTE_SELECT.NO);
            console.log(`${datas[0]} NO`);
            noCount -= 1;
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
