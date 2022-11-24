import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace ICommonsBudget {
    type ProposalInputStruct = {
        start: PromiseOrValue<BigNumberish>;
        end: PromiseOrValue<BigNumberish>;
        startAssess: PromiseOrValue<BigNumberish>;
        endAssess: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        docHash: PromiseOrValue<BytesLike>;
        title: PromiseOrValue<string>;
    };
    type ProposalInputStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        start: BigNumber;
        end: BigNumber;
        startAssess: BigNumber;
        endAssess: BigNumber;
        amount: BigNumber;
        docHash: string;
        title: string;
    };
}
export interface ICommonsBudgetInterface extends utils.Interface {
    functions: {
        "allowFunding(bytes32)": FunctionFragment;
        "assessProposal(bytes32,uint256,uint256,uint64[])": FunctionFragment;
        "checkWithdrawState(bytes32)": FunctionFragment;
        "createFundProposal(bytes32,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "createSystemProposal(bytes32,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "distributeVoteFees(bytes32,uint256)": FunctionFragment;
        "finishVote(bytes32,uint256,uint64[])": FunctionFragment;
        "isManager(address)": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "refuseFunding(bytes32)": FunctionFragment;
        "setManager(address)": FunctionFragment;
        "withdraw(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowFunding" | "assessProposal" | "checkWithdrawState" | "createFundProposal" | "createSystemProposal" | "distributeVoteFees" | "finishVote" | "isManager" | "isOwner" | "refuseFunding" | "setManager" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowFunding", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "assessProposal", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "checkWithdrawState", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createFundProposal", values: [
        PromiseOrValue<BytesLike>,
        ICommonsBudget.ProposalInputStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createSystemProposal", values: [
        PromiseOrValue<BytesLike>,
        ICommonsBudget.ProposalInputStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "distributeVoteFees", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "finishVote", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "isManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "refuseFunding", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "allowFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assessProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkWithdrawState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFundProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSystemProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeVoteFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finishVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refuseFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AssessmentFinish(bytes32,bool)": EventFragment;
        "FundTransfer(bytes32)": EventFragment;
        "FundWithdrawAllow(bytes32)": EventFragment;
        "FundWithdrawRefuse(bytes32)": EventFragment;
        "VoteCountingFinish(bytes32,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssessmentFinish"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundWithdrawAllow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundWithdrawRefuse"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCountingFinish"): EventFragment;
}
export interface AssessmentFinishEventObject {
    proposalID: string;
    assessResult: boolean;
}
export declare type AssessmentFinishEvent = TypedEvent<[
    string,
    boolean
], AssessmentFinishEventObject>;
export declare type AssessmentFinishEventFilter = TypedEventFilter<AssessmentFinishEvent>;
export interface FundTransferEventObject {
    proposalID: string;
}
export declare type FundTransferEvent = TypedEvent<[string], FundTransferEventObject>;
export declare type FundTransferEventFilter = TypedEventFilter<FundTransferEvent>;
export interface FundWithdrawAllowEventObject {
    proposalID: string;
}
export declare type FundWithdrawAllowEvent = TypedEvent<[
    string
], FundWithdrawAllowEventObject>;
export declare type FundWithdrawAllowEventFilter = TypedEventFilter<FundWithdrawAllowEvent>;
export interface FundWithdrawRefuseEventObject {
    proposalID: string;
}
export declare type FundWithdrawRefuseEvent = TypedEvent<[
    string
], FundWithdrawRefuseEventObject>;
export declare type FundWithdrawRefuseEventFilter = TypedEventFilter<FundWithdrawRefuseEvent>;
export interface VoteCountingFinishEventObject {
    proposalID: string;
    countingResult: boolean;
}
export declare type VoteCountingFinishEvent = TypedEvent<[
    string,
    boolean
], VoteCountingFinishEventObject>;
export declare type VoteCountingFinishEventFilter = TypedEventFilter<VoteCountingFinishEvent>;
export interface ICommonsBudget extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICommonsBudgetInterface;
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
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        assessProposal(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, assessParticipantSize: PromiseOrValue<BigNumberish>, assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            code: string;
            countingFinishTime: BigNumber;
        }>;
        createFundProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createSystemProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finishVote(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assessProposal(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, assessParticipantSize: PromiseOrValue<BigNumberish>, assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        code: string;
        countingFinishTime: BigNumber;
    }>;
    createFundProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createSystemProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finishVote(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        assessProposal(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, assessParticipantSize: PromiseOrValue<BigNumberish>, assessData: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            code: string;
            countingFinishTime: BigNumber;
        }>;
        createFundProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createSystemProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        finishVote(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, voteResult: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setManager(newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssessmentFinish(bytes32,bool)"(proposalID?: null, assessResult?: null): AssessmentFinishEventFilter;
        AssessmentFinish(proposalID?: null, assessResult?: null): AssessmentFinishEventFilter;
        "FundTransfer(bytes32)"(proposalID?: null): FundTransferEventFilter;
        FundTransfer(proposalID?: null): FundTransferEventFilter;
        "FundWithdrawAllow(bytes32)"(proposalID?: null): FundWithdrawAllowEventFilter;
        FundWithdrawAllow(proposalID?: null): FundWithdrawAllowEventFilter;
        "FundWithdrawRefuse(bytes32)"(proposalID?: null): FundWithdrawRefuseEventFilter;
        FundWithdrawRefuse(proposalID?: null): FundWithdrawRefuseEventFilter;
        "VoteCountingFinish(bytes32,bool)"(proposalID?: null, countingResult?: null): VoteCountingFinishEventFilter;
        VoteCountingFinish(proposalID?: null, countingResult?: null): VoteCountingFinishEventFilter;
    };
    estimateGas: {
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assessProposal(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, assessParticipantSize: PromiseOrValue<BigNumberish>, assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        createFundProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createSystemProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finishVote(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        assessProposal(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, assessParticipantSize: PromiseOrValue<BigNumberish>, assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFundProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createSystemProposal(proposalID: PromiseOrValue<BytesLike>, proposalInput: ICommonsBudget.ProposalInputStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finishVote(proposalID: PromiseOrValue<BytesLike>, validatorSize: PromiseOrValue<BigNumberish>, voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
