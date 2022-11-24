import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace VoteraVote {
    type BallotStruct = {
        key: PromiseOrValue<string>;
        choice: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
        commitment: PromiseOrValue<BytesLike>;
    };
    type BallotStructOutput = [string, number, BigNumber, string] & {
        key: string;
        choice: number;
        nonce: BigNumber;
        commitment: string;
    };
}
export interface VoteraVoteInterface extends utils.Interface {
    functions: {
        "ASSESS_ITEM_SIZE()": FunctionFragment;
        "addValidators(bytes32,address[],bool)": FunctionFragment;
        "changeCommonBudgetContract(address)": FunctionFragment;
        "commonsBudgetAddress()": FunctionFragment;
        "countAssess(bytes32)": FunctionFragment;
        "countVote(bytes32)": FunctionFragment;
        "getAssessAt(bytes32,uint256)": FunctionFragment;
        "getAssessCount(bytes32)": FunctionFragment;
        "getAssessResult(bytes32)": FunctionFragment;
        "getBallot(bytes32,address)": FunctionFragment;
        "getBallotAt(bytes32,uint256)": FunctionFragment;
        "getBallotCount(bytes32)": FunctionFragment;
        "getManager()": FunctionFragment;
        "getValidatorAt(bytes32,uint256)": FunctionFragment;
        "getValidatorCount(bytes32)": FunctionFragment;
        "getVoteResult(bytes32)": FunctionFragment;
        "init(bytes32,bool,uint64,uint64,uint64,uint64)": FunctionFragment;
        "isContainAssess(bytes32,address)": FunctionFragment;
        "isContainBallot(bytes32,address)": FunctionFragment;
        "isContainValidator(bytes32,address)": FunctionFragment;
        "isValidatorListFinalized(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "revealBallot(bytes32,address[],uint8[],uint256[])": FunctionFragment;
        "setupVoteInfo(bytes32,uint64,uint64,uint64,string)": FunctionFragment;
        "submitAssess(bytes32,uint64[])": FunctionFragment;
        "submitBallot(bytes32,bytes32,bytes)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "voteInfos(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ASSESS_ITEM_SIZE" | "addValidators" | "changeCommonBudgetContract" | "commonsBudgetAddress" | "countAssess" | "countVote" | "getAssessAt" | "getAssessCount" | "getAssessResult" | "getBallot" | "getBallotAt" | "getBallotCount" | "getManager" | "getValidatorAt" | "getValidatorCount" | "getVoteResult" | "init" | "isContainAssess" | "isContainBallot" | "isContainValidator" | "isValidatorListFinalized" | "owner" | "renounceOwnership" | "revealBallot" | "setupVoteInfo" | "submitAssess" | "submitBallot" | "transferOwnership" | "voteInfos"): FunctionFragment;
    encodeFunctionData(functionFragment: "ASSESS_ITEM_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addValidators", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "changeCommonBudgetContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "commonsBudgetAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "countAssess", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "countVote", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAssessAt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAssessCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAssessResult", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getBallot", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBallotAt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBallotCount", values: [PromiseOrValue<BytesLike>]): string;
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
    encodeFunctionData(functionFragment: "isContainAssess", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isContainBallot", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isContainValidator", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isValidatorListFinalized", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revealBallot", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setupVoteInfo", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "submitAssess", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "submitBallot", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "voteInfos", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "ASSESS_ITEM_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addValidators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCommonBudgetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commonsBudgetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countAssess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssessAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssessCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssessResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBallot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBallotAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBallotCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoteResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContainAssess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContainBallot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContainValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidatorListFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revealBallot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setupVoteInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitAssess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitBallot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteInfos", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "VoteResultPublished(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteResultPublished"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface VoteResultPublishedEventObject {
    _proposalID: string;
}
export declare type VoteResultPublishedEvent = TypedEvent<[
    string
], VoteResultPublishedEventObject>;
export declare type VoteResultPublishedEventFilter = TypedEventFilter<VoteResultPublishedEvent>;
export interface VoteraVote extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VoteraVoteInterface;
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
        ASSESS_ITEM_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        addValidators(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _finalized: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeCommonBudgetContract(_commonsBudgetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commonsBudgetAddress(overrides?: CallOverrides): Promise<[string]>;
        countAssess(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        countVote(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAssessAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getAssessCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssessResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getBallot(_proposalID: PromiseOrValue<BytesLike>, _validator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[VoteraVote.BallotStructOutput]>;
        getBallotAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getBallotCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getManager(overrides?: CallOverrides): Promise<[string]>;
        getValidatorAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getValidatorCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVoteResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        init(_proposalID: PromiseOrValue<BytesLike>, _useAssess: PromiseOrValue<boolean>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _startAssess: PromiseOrValue<BigNumberish>, _endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isContainAssess(_proposalId: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isContainBallot(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isContainValidator(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revealBallot(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _choices: PromiseOrValue<BigNumberish>[], _nonces: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setupVoteInfo(_proposalID: PromiseOrValue<BytesLike>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _openVote: PromiseOrValue<BigNumberish>, _info: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitAssess(_proposalID: PromiseOrValue<BytesLike>, _assess: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitBallot(_proposalID: PromiseOrValue<BytesLike>, _commitment: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        voteInfos(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            boolean,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            state: number;
            useAssess: boolean;
            commonsBudgetAddress: string;
            startAssess: BigNumber;
            endAssess: BigNumber;
            startVote: BigNumber;
            endVote: BigNumber;
            openVote: BigNumber;
            info: string;
        }>;
    };
    ASSESS_ITEM_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    addValidators(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _finalized: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeCommonBudgetContract(_commonsBudgetAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commonsBudgetAddress(overrides?: CallOverrides): Promise<string>;
    countAssess(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    countVote(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAssessAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getAssessCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getAssessResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getBallot(_proposalID: PromiseOrValue<BytesLike>, _validator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VoteraVote.BallotStructOutput>;
    getBallotAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getBallotCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getManager(overrides?: CallOverrides): Promise<string>;
    getValidatorAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getValidatorCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getVoteResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
    init(_proposalID: PromiseOrValue<BytesLike>, _useAssess: PromiseOrValue<boolean>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _startAssess: PromiseOrValue<BigNumberish>, _endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isContainAssess(_proposalId: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isContainBallot(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isContainValidator(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revealBallot(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _choices: PromiseOrValue<BigNumberish>[], _nonces: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setupVoteInfo(_proposalID: PromiseOrValue<BytesLike>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _openVote: PromiseOrValue<BigNumberish>, _info: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitAssess(_proposalID: PromiseOrValue<BytesLike>, _assess: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitBallot(_proposalID: PromiseOrValue<BytesLike>, _commitment: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    voteInfos(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        number,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        state: number;
        useAssess: boolean;
        commonsBudgetAddress: string;
        startAssess: BigNumber;
        endAssess: BigNumber;
        startVote: BigNumber;
        endVote: BigNumber;
        openVote: BigNumber;
        info: string;
    }>;
    callStatic: {
        ASSESS_ITEM_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        addValidators(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _finalized: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        changeCommonBudgetContract(_commonsBudgetAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        commonsBudgetAddress(overrides?: CallOverrides): Promise<string>;
        countAssess(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        countVote(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getAssessAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getAssessCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssessResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getBallot(_proposalID: PromiseOrValue<BytesLike>, _validator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VoteraVote.BallotStructOutput>;
        getBallotAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getBallotCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getManager(overrides?: CallOverrides): Promise<string>;
        getValidatorAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getValidatorCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoteResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber[]>;
        init(_proposalID: PromiseOrValue<BytesLike>, _useAssess: PromiseOrValue<boolean>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _startAssess: PromiseOrValue<BigNumberish>, _endAssess: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isContainAssess(_proposalId: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isContainBallot(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isContainValidator(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        revealBallot(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _choices: PromiseOrValue<BigNumberish>[], _nonces: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setupVoteInfo(_proposalID: PromiseOrValue<BytesLike>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _openVote: PromiseOrValue<BigNumberish>, _info: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        submitAssess(_proposalID: PromiseOrValue<BytesLike>, _assess: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        submitBallot(_proposalID: PromiseOrValue<BytesLike>, _commitment: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        voteInfos(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            boolean,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            state: number;
            useAssess: boolean;
            commonsBudgetAddress: string;
            startAssess: BigNumber;
            endAssess: BigNumber;
            startVote: BigNumber;
            endVote: BigNumber;
            openVote: BigNumber;
            info: string;
        }>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "VoteResultPublished(bytes32)"(_proposalID?: null): VoteResultPublishedEventFilter;
        VoteResultPublished(_proposalID?: null): VoteResultPublishedEventFilter;
    };
    estimateGas: {
        ASSESS_ITEM_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        addValidators(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _finalized: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeCommonBudgetContract(_commonsBudgetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commonsBudgetAddress(overrides?: CallOverrides): Promise<BigNumber>;
        countAssess(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        countVote(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAssessAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssessCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssessResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getBallot(_proposalID: PromiseOrValue<BytesLike>, _validator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBallotAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBallotCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getManager(overrides?: CallOverrides): Promise<BigNumber>;
        getValidatorAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getValidatorCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoteResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        init(_proposalID: PromiseOrValue<BytesLike>, _useAssess: PromiseOrValue<boolean>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _startAssess: PromiseOrValue<BigNumberish>, _endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isContainAssess(_proposalId: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isContainBallot(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isContainValidator(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revealBallot(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _choices: PromiseOrValue<BigNumberish>[], _nonces: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setupVoteInfo(_proposalID: PromiseOrValue<BytesLike>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _openVote: PromiseOrValue<BigNumberish>, _info: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitAssess(_proposalID: PromiseOrValue<BytesLike>, _assess: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitBallot(_proposalID: PromiseOrValue<BytesLike>, _commitment: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        voteInfos(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ASSESS_ITEM_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addValidators(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _finalized: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeCommonBudgetContract(_commonsBudgetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commonsBudgetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        countAssess(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        countVote(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAssessAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssessCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssessResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBallot(_proposalID: PromiseOrValue<BytesLike>, _validator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBallotAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBallotCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidatorAt(_proposalID: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidatorCount(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVoteResult(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_proposalID: PromiseOrValue<BytesLike>, _useAssess: PromiseOrValue<boolean>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _startAssess: PromiseOrValue<BigNumberish>, _endAssess: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isContainAssess(_proposalId: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContainBallot(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContainValidator(_proposalID: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidatorListFinalized(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revealBallot(_proposalID: PromiseOrValue<BytesLike>, _validators: PromiseOrValue<string>[], _choices: PromiseOrValue<BigNumberish>[], _nonces: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setupVoteInfo(_proposalID: PromiseOrValue<BytesLike>, _startVote: PromiseOrValue<BigNumberish>, _endVote: PromiseOrValue<BigNumberish>, _openVote: PromiseOrValue<BigNumberish>, _info: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitAssess(_proposalID: PromiseOrValue<BytesLike>, _assess: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitBallot(_proposalID: PromiseOrValue<BytesLike>, _commitment: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        voteInfos(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
