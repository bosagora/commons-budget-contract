import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface CommonsStorageInterface extends utils.Interface {
    functions: {
        "approvalDiffPercent()": FunctionFragment;
        "assessProposal(bytes32,uint256,uint256,uint64[])": FunctionFragment;
        "changeVoteParam(address,address)": FunctionFragment;
        "checkWithdrawState(bytes32,address)": FunctionFragment;
        "createFundProposal(bytes32,address,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "createSystemProposal(bytes32,address,(uint64,uint64,uint64,uint64,uint256,bytes32,string),bytes)": FunctionFragment;
        "finishVote(bytes32,uint256,uint64[])": FunctionFragment;
        "fundProposalFeePermil()": FunctionFragment;
        "getProposalData(bytes32)": FunctionFragment;
        "maxVoteFee()": FunctionFragment;
        "setFundProposalFeePermil(uint32)": FunctionFragment;
        "setFundingAllowed(bytes32,bool)": FunctionFragment;
        "setSystemProposalFee(uint256)": FunctionFragment;
        "setVoteQuorumFactor(uint32)": FunctionFragment;
        "setVoterFee(uint256)": FunctionFragment;
        "setWithdrawDelayPeriod(uint32)": FunctionFragment;
        "setWithdrawn(bytes32)": FunctionFragment;
        "systemProposalFee()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "voteAddress()": FunctionFragment;
        "voteFeeDistribCount()": FunctionFragment;
        "voteManager()": FunctionFragment;
        "voteQuorumFactor()": FunctionFragment;
        "voterFee()": FunctionFragment;
        "withdrawDelayPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approvalDiffPercent" | "assessProposal" | "changeVoteParam" | "checkWithdrawState" | "createFundProposal" | "createSystemProposal" | "finishVote" | "fundProposalFeePermil" | "getProposalData" | "maxVoteFee" | "setFundProposalFeePermil" | "setFundingAllowed" | "setSystemProposalFee" | "setVoteQuorumFactor" | "setVoterFee" | "setWithdrawDelayPeriod" | "setWithdrawn" | "systemProposalFee" | "transferOwnership" | "voteAddress" | "voteFeeDistribCount" | "voteManager" | "voteQuorumFactor" | "voterFee" | "withdrawDelayPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "approvalDiffPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "assessProposal", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "changeVoteParam", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkWithdrawState", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createFundProposal", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        ICommonsBudget.ProposalInputStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createSystemProposal", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        ICommonsBudget.ProposalInputStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "finishVote", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "fundProposalFeePermil", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposalData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxVoteFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFundProposalFeePermil", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFundingAllowed", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSystemProposalFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVoteQuorumFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVoterFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawDelayPeriod", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawn", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "systemProposalFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "voteAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "voteFeeDistribCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "voteManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "voteQuorumFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "voterFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawDelayPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "approvalDiffPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assessProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeVoteParam", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkWithdrawState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFundProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSystemProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finishVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundProposalFeePermil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxVoteFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFundProposalFeePermil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFundingAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemProposalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoteQuorumFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoterFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawDelayPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemProposalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteFeeDistribCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteQuorumFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voterFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDelayPeriod", data: BytesLike): Result;
    events: {};
}
export interface CommonsStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CommonsStorageInterface;
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
        approvalDiffPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, requestAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            code: string;
        }>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundProposalFeePermil(overrides?: CallOverrides): Promise<[number]>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[ICommonsBudget.ProposalDataStructOutput]>;
        maxVoteFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFundingAllowed(_proposalID: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        setWithdrawn(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        systemProposalFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        voteAddress(overrides?: CallOverrides): Promise<[string]>;
        voteFeeDistribCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        voteManager(overrides?: CallOverrides): Promise<[string]>;
        voteQuorumFactor(overrides?: CallOverrides): Promise<[number]>;
        voterFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawDelayPeriod(overrides?: CallOverrides): Promise<[number]>;
    };
    approvalDiffPercent(overrides?: CallOverrides): Promise<BigNumber>;
    assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, requestAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    createFundProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundProposalFeePermil(overrides?: CallOverrides): Promise<number>;
    getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ICommonsBudget.ProposalDataStructOutput>;
    maxVoteFee(overrides?: CallOverrides): Promise<BigNumber>;
    setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFundingAllowed(_proposalID: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
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
    setWithdrawn(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    systemProposalFee(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    voteAddress(overrides?: CallOverrides): Promise<string>;
    voteFeeDistribCount(overrides?: CallOverrides): Promise<BigNumber>;
    voteManager(overrides?: CallOverrides): Promise<string>;
    voteQuorumFactor(overrides?: CallOverrides): Promise<number>;
    voterFee(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawDelayPeriod(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        approvalDiffPercent(overrides?: CallOverrides): Promise<BigNumber>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, requestAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
        fundProposalFeePermil(overrides?: CallOverrides): Promise<number>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ICommonsBudget.ProposalDataStructOutput>;
        maxVoteFee(overrides?: CallOverrides): Promise<BigNumber>;
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFundingAllowed(_proposalID: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSystemProposalFee(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVoteQuorumFactor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVoterFee(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawDelayPeriod(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawn(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        systemProposalFee(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        voteAddress(overrides?: CallOverrides): Promise<string>;
        voteFeeDistribCount(overrides?: CallOverrides): Promise<BigNumber>;
        voteManager(overrides?: CallOverrides): Promise<string>;
        voteQuorumFactor(overrides?: CallOverrides): Promise<number>;
        voterFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDelayPeriod(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        approvalDiffPercent(overrides?: CallOverrides): Promise<BigNumber>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, requestAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundProposalFeePermil(overrides?: CallOverrides): Promise<BigNumber>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxVoteFee(overrides?: CallOverrides): Promise<BigNumber>;
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFundingAllowed(_proposalID: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        setWithdrawn(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        systemProposalFee(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        voteAddress(overrides?: CallOverrides): Promise<BigNumber>;
        voteFeeDistribCount(overrides?: CallOverrides): Promise<BigNumber>;
        voteManager(overrides?: CallOverrides): Promise<BigNumber>;
        voteQuorumFactor(overrides?: CallOverrides): Promise<BigNumber>;
        voterFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDelayPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approvalDiffPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assessProposal(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _assessParticipantSize: PromiseOrValue<BigNumberish>, _assessData: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeVoteParam(_voteManager: PromiseOrValue<string>, _voteAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkWithdrawState(_proposalID: PromiseOrValue<BytesLike>, requestAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFundProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createSystemProposal(_proposalID: PromiseOrValue<BytesLike>, proposer: PromiseOrValue<string>, _proposalInput: ICommonsBudget.ProposalInputStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finishVote(_proposalID: PromiseOrValue<BytesLike>, _validatorSize: PromiseOrValue<BigNumberish>, _voteResult: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundProposalFeePermil(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalData(_proposalID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxVoteFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFundProposalFeePermil(_value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFundingAllowed(_proposalID: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        setWithdrawn(_proposalID: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        systemProposalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        voteAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voteFeeDistribCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voteManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voteQuorumFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voterFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawDelayPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
