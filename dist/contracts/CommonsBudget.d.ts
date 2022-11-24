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
    type ProposalDataStruct = {
        state: PromiseOrValue<BigNumberish>;
        proposalType: PromiseOrValue<BigNumberish>;
        proposalResult: PromiseOrValue<BigNumberish>;
        proposer: PromiseOrValue<string>;
        title: PromiseOrValue<string>;
        countingFinishTime: PromiseOrValue<BigNumberish>;
        fundingAllowed: PromiseOrValue<boolean>;
        fundWithdrawn: PromiseOrValue<boolean>;
        start: PromiseOrValue<BigNumberish>;
        end: PromiseOrValue<BigNumberish>;
        startAssess: PromiseOrValue<BigNumberish>;
        endAssess: PromiseOrValue<BigNumberish>;
        docHash: PromiseOrValue<BytesLike>;
        fundAmount: PromiseOrValue<BigNumberish>;
        assessParticipantSize: PromiseOrValue<BigNumberish>;
        assessData: PromiseOrValue<BigNumberish>[];
        validatorSize: PromiseOrValue<BigNumberish>;
        voteResult: PromiseOrValue<BigNumberish>[];
        voteAddress: PromiseOrValue<string>;
    };
    type ProposalDataStructOutput = [
        number,
        number,
        number,
        string,
        string,
        BigNumber,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber,
        BigNumber[],
        string
    ] & {
        state: number;
        proposalType: number;
        proposalResult: number;
        proposer: string;
        title: string;
        countingFinishTime: BigNumber;
        fundingAllowed: boolean;
        fundWithdrawn: boolean;
        start: BigNumber;
        end: BigNumber;
        startAssess: BigNumber;
        endAssess: BigNumber;
        docHash: string;
        fundAmount: BigNumber;
        assessParticipantSize: BigNumber;
        assessData: BigNumber[];
        validatorSize: BigNumber;
        voteResult: BigNumber[];
        voteAddress: string;
    };
}
export interface CommonsBudgetInterface extends utils.Interface {
    functions: {
        "allowFunding(bytes32)": FunctionFragment;
        "assessProposal(bytes32,uint256,uint256,uint64[])": FunctionFragment;
        "canDistributeVoteFees(bytes32)": FunctionFragment;
        "changeVoteParam(address,address)": FunctionFragment;
        "checkWithdrawState(bytes32)": FunctionFragment;
        "createFundProposal(bytes32,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "createSystemProposal(bytes32,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "distributeVoteFees(bytes32,uint256)": FunctionFragment;
        "finishVote(bytes32,uint256,uint64[])": FunctionFragment;
        "getProposalData(bytes32)": FunctionFragment;
        "getProposalValues(bytes32)": FunctionFragment;
        "getStorageContractAddress()": FunctionFragment;
        "isManager(address)": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "manager()": FunctionFragment;
        "owner()": FunctionFragment;
        "refuseFunding(bytes32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setManager(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdraw(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowFunding" | "assessProposal" | "canDistributeVoteFees" | "changeVoteParam" | "checkWithdrawState" | "createFundProposal" | "createSystemProposal" | "distributeVoteFees" | "finishVote" | "getProposalData" | "getProposalValues" | "getStorageContractAddress" | "isManager" | "isOwner" | "manager" | "owner" | "refuseFunding" | "renounceOwnership" | "setManager" | "supportsInterface" | "transferOwnership" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowFunding", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "assessProposal", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "canDistributeVoteFees", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "changeVoteParam", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "getProposalData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getProposalValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getStorageContractAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "isManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "refuseFunding", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "allowFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assessProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canDistributeVoteFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeVoteParam", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkWithdrawState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFundProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSystemProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeVoteFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finishVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStorageContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refuseFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AssessmentFinish(bytes32,bool)": EventFragment;
        "FundTransfer(bytes32)": EventFragment;
        "FundWithdrawAllow(bytes32)": EventFragment;
        "FundWithdrawRefuse(bytes32)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Received(address,uint256)": EventFragment;
        "VoteCountingFinish(bytes32,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssessmentFinish"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundWithdrawAllow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundWithdrawRefuse"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ReceivedEventObject {
    arg0: string;
    arg1: BigNumber;
}
export declare type ReceivedEvent = TypedEvent<[
    string,
    BigNumber
], ReceivedEventObject>;
export declare type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
export interface VoteCountingFinishEventObject {
    proposalID: string;
    countingResult: boolean;
}
export declare type VoteCountingFinishEvent = TypedEvent<[
    string,
    boolean
], VoteCountingFinishEventObject>;
export declare type VoteCountingFinishEventFilter = TypedEventFilter<VoteCountingFinishEvent>;
export interface CommonsBudget extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CommonsBudgetInterface;
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
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        canDistributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            code: string;
            countingFinishTime: BigNumber;
        }>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[ICommonsBudget.ProposalDataStructOutput]>;
        getProposalValues(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStorageContractAddress(overrides?: CallOverrides): Promise<[string] & {
            contractAddress: string;
        }>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    canDistributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        code: string;
        countingFinishTime: BigNumber;
    }>;
    createFundProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ICommonsBudget.ProposalDataStructOutput>;
    getProposalValues(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getStorageContractAddress(overrides?: CallOverrides): Promise<string>;
    isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    manager(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        canDistributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            code: string;
            countingFinishTime: BigNumber;
        }>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ICommonsBudget.ProposalDataStructOutput>;
        getProposalValues(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getStorageContractAddress(overrides?: CallOverrides): Promise<string>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        manager(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setManager(newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
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
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Received(address,uint256)"(arg0?: null, arg1?: null): ReceivedEventFilter;
        Received(arg0?: null, arg1?: null): ReceivedEventFilter;
        "VoteCountingFinish(bytes32,bool)"(proposalID?: null, countingResult?: null): VoteCountingFinishEventFilter;
        VoteCountingFinish(proposalID?: null, countingResult?: null): VoteCountingFinishEventFilter;
    };
    estimateGas: {
        allowFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        canDistributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalValues(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getStorageContractAddress(overrides?: CallOverrides): Promise<BigNumber>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        canDistributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeVoteFees(_proposalID: PromiseOrValue<BytesLike>, _start: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalValues(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStorageContractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isManager(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refuseFunding(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
