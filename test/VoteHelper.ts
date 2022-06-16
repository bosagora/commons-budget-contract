import { ethers } from "hardhat";
import crypto from "crypto";
import { Wallet } from "ethers";

export function getHash(body: string): string {
    const hash = crypto.createHash("sha256");
    hash.update(Buffer.from(body, "utf8"));
    return ethers.utils.hexZeroPad(`0x${hash.digest("hex")}`, 32);
}

export function makeCommitment(
    signer: Wallet,
    vote: string,
    sender: string,
    choice: number,
    nonce: number
): Promise<string> {
    const abiCoder = ethers.utils.defaultAbiCoder;
    const encodedResult = abiCoder.encode(
        ["address", "address", "uint64", "uint64"],
        [vote, sender, choice, nonce]
    );
    const sig = signer
        ._signingKey()
        .signDigest(ethers.utils.keccak256(encodedResult));
    return Promise.resolve(ethers.utils.joinSignature(sig));
}

export function signCommitment(
    signer: Wallet,
    vote: string,
    sender: string,
    commitment: string
): Promise<string> {
    const abiCoder = ethers.utils.defaultAbiCoder;
    const encodedResult = abiCoder.encode(
        ["address", "address", "bytes"],
        [vote, sender, commitment]
    );
    const sig = signer
        ._signingKey()
        .signDigest(ethers.utils.keccak256(encodedResult));
    return Promise.resolve(ethers.utils.joinSignature(sig));
}
