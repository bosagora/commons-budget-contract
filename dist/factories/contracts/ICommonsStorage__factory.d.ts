import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICommonsStorage, ICommonsStorageInterface } from "../../contracts/ICommonsStorage";
export declare class ICommonsStorage__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ICommonsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICommonsStorage;
}
