import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVoteraVote, IVoteraVoteInterface } from "../../contracts/IVoteraVote";
export declare class IVoteraVote__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IVoteraVoteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVoteraVote;
}
