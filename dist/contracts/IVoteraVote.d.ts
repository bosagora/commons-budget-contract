import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IVoteraVoteInterface extends utils.Interface {
    functions: {
        "getManager()": FunctionFragment;
        "getValidatorAt(bytes32,uint256)": FunctionFragment;
        "getValidatorCount(bytes32)": FunctionFragment;
        "getVoteResult(bytes32)": FunctionFragment;
        "init(bytes32,bool,uint64,uint64,uint64,uint64)": FunctionFragment;
        "isValidatorListFinalized(bytes32)": FunctionFragment;
        "submitBallot(bytes32,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getManager" | "getValidatorAt" | "getValidatorCount" | "getVoteResult" | "init" | "isValidatorListFinalized" | "submitBallot"): FunctionFragment;
    encodeFunctionData(functionFragment: "getManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getValidatorAt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getValidatorCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getVoteResult", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isValidatorListFinalized", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "submitBallot", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoteResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidatorListFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitBallot", data: BytesLike): Result;
    events: {};
}
export interface IVoteraVote extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVoteraVoteInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getManager(overrides?: CallOverrides): Promise<[string]>;
        getValidatorAt(proposalID: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getValidatorCount(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVoteResult(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        init(proposalID: PromiseOrValue<BytesLike>, useAssess: PromiseOrValue<boolean>, startVote: PromiseOrValue<BigNumberish>, endVote: PromiseOrValue<BigNumberish>, startAssess: PromiseOrValue<BigNumberish>, endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        submitBallot(proposalID: PromiseOrValue<BytesLike>, commitment: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getManager(overrides?: CallOverrides): Promise<string>;
    getValidatorAt(proposalID: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getValidatorCount(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getVoteResult(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
    init(proposalID: PromiseOrValue<BytesLike>, useAssess: PromiseOrValue<boolean>, startVote: PromiseOrValue<BigNumberish>, endVote: PromiseOrValue<BigNumberish>, startAssess: PromiseOrValue<BigNumberish>, endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    submitBallot(proposalID: PromiseOrValue<BytesLike>, commitment: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getManager(overrides?: CallOverrides): Promise<string>;
        getValidatorAt(proposalID: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getValidatorCount(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoteResult(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
        init(proposalID: PromiseOrValue<BytesLike>, useAssess: PromiseOrValue<boolean>, startVote: PromiseOrValue<BigNumberish>, endVote: PromiseOrValue<BigNumberish>, startAssess: PromiseOrValue<BigNumberish>, endAssess: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        submitBallot(proposalID: PromiseOrValue<BytesLike>, commitment: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getManager(overrides?: CallOverrides): Promise<BigNumber>;
        getValidatorAt(proposalID: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getValidatorCount(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoteResult(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        init(proposalID: PromiseOrValue<BytesLike>, useAssess: PromiseOrValue<boolean>, startVote: PromiseOrValue<BigNumberish>, endVote: PromiseOrValue<BigNumberish>, startAssess: PromiseOrValue<BigNumberish>, endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        submitBallot(proposalID: PromiseOrValue<BytesLike>, commitment: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidatorAt(proposalID: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidatorCount(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVoteResult(proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(proposalID: PromiseOrValue<BytesLike>, useAssess: PromiseOrValue<boolean>, startVote: PromiseOrValue<BigNumberish>, endVote: PromiseOrValue<BigNumberish>, startAssess: PromiseOrValue<BigNumberish>, endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitBallot(proposalID: PromiseOrValue<BytesLike>, commitment: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
