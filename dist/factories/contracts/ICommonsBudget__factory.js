"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICommonsBudget__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "assessResult",
                type: "bool",
            },
        ],
        name: "AssessmentFinish",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
        ],
        name: "FundTransfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
        ],
        name: "FundWithdrawAllow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
        ],
        name: "FundWithdrawRefuse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "countingResult",
                type: "bool",
            },
        ],
        name: "VoteCountingFinish",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_proposalID",
                type: "bytes32",
            },
        ],
        name: "allowFunding",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "validatorSize",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "assessParticipantSize",
                type: "uint256",
            },
            {
                internalType: "uint64[]",
                name: "assessData",
                type: "uint64[]",
            },
        ],
        name: "assessProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_proposalID",
                type: "bytes32",
            },
        ],
        name: "checkWithdrawState",
        outputs: [
            {
                internalType: "string",
                name: "code",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "countingFinishTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "start",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "end",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "startAssess",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "endAssess",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "docHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                ],
                internalType: "struct ICommonsBudget.ProposalInput",
                name: "proposalInput",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "createFundProposal",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "start",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "end",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "startAssess",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "endAssess",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "docHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                ],
                internalType: "struct ICommonsBudget.ProposalInput",
                name: "proposalInput",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "createSystemProposal",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_proposalID",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_start",
                type: "uint256",
            },
        ],
        name: "distributeVoteFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "proposalID",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "validatorSize",
                type: "uint256",
            },
            {
                internalType: "uint64[]",
                name: "voteResult",
                type: "uint64[]",
            },
        ],
        name: "finishVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isManager",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_proposalID",
                type: "bytes32",
            },
        ],
        name: "refuseFunding",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newManager",
                type: "address",
            },
        ],
        name: "setManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_proposalID",
                type: "bytes32",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ICommonsBudget__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICommonsBudget__factory = ICommonsBudget__factory;
ICommonsBudget__factory.abi = _abi;