import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ICommonsStorageInterface extends utils.Interface {
    functions: {
        "setFundProposalFeePermil(uint32)": FunctionFragment;
        "setSystemProposalFee(uint256)": FunctionFragment;
        "setVoteQuorumFactor(uint32)": FunctionFragment;
        "setVoterFee(uint256)": FunctionFragment;
        "setWithdrawDelayPeriod(uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setFundProposalFeePermil" | "setSystemProposalFee" | "setVoteQuorumFactor" | "setVoterFee" | "setWithdrawDelayPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "setFundProposalFeePermil", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSystemProposalFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVoteQuorumFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVoterFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawDelayPeriod", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "setFundProposalFeePermil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemProposalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoteQuorumFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoterFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawDelayPeriod", data: BytesLike): Result;
    events: {};
}
export interface ICommonsStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICommonsStorageInterface;
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
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
