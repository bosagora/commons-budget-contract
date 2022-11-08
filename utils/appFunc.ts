import fetch, { HeadersInit, Response } from 'node-fetch';
import { ethers, network } from 'hardhat';
import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { BigNumber, Wallet } from "ethers";
import dayjs from 'dayjs';
import { ExecutionResult } from 'graphql';
import {
    SignInMemberMutationVariables,
    SignInMemberMutation,
    IsMemberQueryVariables,
    IsMemberQuery,
    SignUpMemberMutationVariables,
    SignUpMemberMutation,
    GetProposalByIdQueryVariables,
    JoinProposalMutationVariables,
    JoinProposalMutation,
    SubmitBallotMutationVariables,
    SubmitBallotMutation,
    RecordBallotMutationVariables,
    RecordBallotMutation,
    SubmitAssessMutationVariables,
    SubmitAssessMutation,
} from './generated/generated';
import { NonceManager } from '@ethersproject/experimental';
import { GasPriceManager } from './GasPriceManager';

export enum VOTE_SELECT {
    BLANK,
    YES,
    NO,
}

export interface AssessResult {
    sequence: number;
    value: number;
}

export enum EnumAssess {
    COMPLETENESS = 0,
    REALIZATION,
    PROFITABILITY,
    ATTRACTIVENESS,
    EXPANSION,
}

let jwt: string | undefined;

export function setJwt(_jwt: string | undefined) {
    jwt = _jwt;
}

class HTTPResponseError extends Error {
    response: Response;

    constructor(response: Response, ...args) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
        this.response = response;
    }
}

const checkStatus = (response: Response) => {
    if (response.ok) {
        return response;
    } else {
        throw new HTTPResponseError(response);
    }
}

export async function sendGraphql<TInput, TOutput>(query: string, variables: TInput) {
    const body = {
        query, variables
    }
    const headers: HeadersInit = jwt ? {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
    } : {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    try {
        const response = await fetch(process.env.VOTERA_SERVER_GRAPHQL || '', {
            method: 'post',
            body: JSON.stringify(body),
            headers,
        });
        checkStatus(response);

        const data = await response.json() as ExecutionResult<TOutput>;
        return data;
    } catch (err) {
        console.error(err);
        if (err instanceof HTTPResponseError) {
            const errorBody = await err.response.text();
            console.error(`Error body: ${errorBody}`);
        }
    }
}

const DOMAIN_NAME_SIGNUP = 'Votera SignUp';
const DOMAIN_NAME_SIGNIN = 'Votera SignIn';
const VOTERA_SIGNTYPE_VERSION = '1';
const TYPED_SIGNATURE_VERSION = 'V4';

const signInType: Record<string, Array<TypedDataField>> = {
    SignType: [
        { name: 'myWallet', type: 'address' },
        { name: 'signTime', type: 'string' },
    ],
};

const signUpType: Record<string, Array<TypedDataField>> = {
    SignType: [
        { name: 'myWallet', type: 'address' },
        { name: 'userName', type: 'string' },
        { name: 'signTime', type: 'string' },
    ],
};

function getSignInDomain(): TypedDataDomain {
    return {
        name: DOMAIN_NAME_SIGNIN,
        version: VOTERA_SIGNTYPE_VERSION,
        chainId: network.config.chainId,
        verifyingContract: process.env.COMMONS_BUDGET_CONTRACT,
    };
}

function getSignUpDomain(): TypedDataDomain {
    return {
        name: DOMAIN_NAME_SIGNUP,
        version: VOTERA_SIGNTYPE_VERSION,
        chainId: network.config.chainId,
        verifyingContract: process.env.COMMONS_BUDGET_CONTRACT,
    };
}

const SignInMemberDoc = `mutation SignInMember($input: signInMemberInput!) {
    signInMember(input: $input) {
        jwt
        user {
            id
            member {
                id
                address
                username
            }
            user_feed {
                id
                locale
                myProposalsNews
                likeProposalsNews
                newProposalsNews
                myCommentsNews
                etcNews
            }
        }
        push {
            id
            isActive
        }
    }
}`;

export async function login(wallet: Wallet) {
    const domain = getSignInDomain();
    const signTime = dayjs().format('YYYY-MM-DD HH:mm:ss ZZ');
    const signValue = {
        myWallet: wallet.address,
        signTime,
    };
    const signature = await wallet._signTypedData(domain, signInType, signValue);
    const loginResult = await sendGraphql<SignInMemberMutationVariables, SignInMemberMutation>(
        SignInMemberDoc,
        { input: { data: { address: wallet.address, signTime, signature }}},
    );
    if (loginResult?.data?.signInMember?.jwt) {
        return loginResult.data.signInMember; 
    }
    throw new Error(`failed to login address: ${wallet.address}`);
}

const IsMemberDoc = `query isMember($address: String!) {
    isMember(address: $address)
}`

const SignUpMemberDoc = `mutation SignUpMember($input: signUpMemberInput!) {
    signUpMember(input: $input) {
        jwt
        user {
            id
            member {
                id
                address
                username
            }
            user_feed {
                id
                locale
                myProposalsNews
                likeProposalsNews
                newProposalsNews
                myCommentsNews
                etcNews
            }
        }
        push {
            id
            isActive
        }
    }
}`;

export async function enroll(wallet: Wallet, username: string) {
    const isMemberResponse = await sendGraphql<IsMemberQueryVariables, IsMemberQuery>(IsMemberDoc, { address: wallet.address });
    if (isMemberResponse?.data?.isMember) {
        console.log(`isMemberTrue ${wallet.address}`);
        return;
    }

    const domain = getSignUpDomain();
    const signTime = dayjs().format('YYYY-MM-DD HH:mm:ss ZZ');
    const signValue = {
        myWallet: wallet.address,
        userName: username,
        signTime,
    };
    const signature = await wallet._signTypedData(domain, signUpType, signValue);
    const signUpResult = await sendGraphql<SignUpMemberMutationVariables, SignUpMemberMutation>(
        SignUpMemberDoc,
        { input: { data: { address: wallet.address, signTime, username, signature }}},
    );
    if (signUpResult?.data?.signUpMember?.jwt) {
        return signUpResult?.data?.signUpMember?.jwt;
    }
    console.error('response = ', signUpResult);
    throw new Error(`Failed to enroll ${wallet.address}`);
}

const ProposalStatusDoc = `query getProposalStatusById($proposalId: String!) {
    proposalStatusById(proposalId: $proposalId) {
        id
        isLike
        isJoined
    }
}`;

type ProposalStatusByIdQuery = { __typename?: 'Query', proposalStatusById?: { __typename?: 'ProposalStatus', id: string, isLike?: boolean | null, isJoined?: boolean | null } | null};

export async function proposalStatusById(proposalId: string, jwt?: string | null) {
    try {
        if (jwt) {
            setJwt(jwt);
        }
        const statusResponse = await sendGraphql<GetProposalByIdQueryVariables, ProposalStatusByIdQuery>(ProposalStatusDoc, { proposalId });
        if (statusResponse?.data?.proposalStatusById) {
            return statusResponse.data.proposalStatusById;
        }
        console.error('response = ', statusResponse);
        throw new Error(`failed to get proposalStatusById proposalId=${proposalId}`);
    } finally {
        setJwt(undefined);
    }
}

const JoinProposalDoc = `mutation joinProposal($input: JoinProposalInput!) {
    joinProposal(input: $input) {
        invalidValidator
        proposal {
            id
        }
    }
}`

export async function joinProposal(id: string, memberId: string, jwt: string) {
    try {
        setJwt(jwt);
        const joinResponse = await sendGraphql<JoinProposalMutationVariables, JoinProposalMutation>(
            JoinProposalDoc,
            { input: { data: { actor: memberId, id } }},
        );
        if (joinResponse?.data?.joinProposal) {
            return joinResponse.data.joinProposal;
        }
        console.error('joinProposal response = ', joinResponse);
        throw new Error(`failed to joinProposal proposal.id=${id} member.id=${memberId}`);
    } finally {
        setJwt(undefined);
    }
}

const SubmitBallotDoc = `mutation submitBallot($input: SubmitBallotInput!) {
    submitBallot(input: $input) {
        commitment
        signature
    }
}`;

export async function submitBallot(wallet: Wallet, proposalId: string, choice: VOTE_SELECT, jwt: string) {
    try {
        setJwt(jwt);
        const submitResponse = await sendGraphql<SubmitBallotMutationVariables, SubmitBallotMutation>(
            SubmitBallotDoc,
            { input: { data: { address: wallet.address, proposalId, choice }}},
        );
        if (submitResponse?.data?.submitBallot) {
            return submitResponse.data.submitBallot;
        }
        console.error('submitResponse response = ', submitResponse);
        throw new Error(`failed to submitBallot proposalId=${proposalId} address=${wallet.address}`);
    } finally {
        setJwt(undefined);
    }
}

const RecordBallotDoc = `mutation recordBallot($input: RecordBallotInput!) {
    recordBallot(input: $input) {
        ballot {
            id
        }
    }
}`;

export async function recordBallot(wallet: Wallet, proposalId: string, commitment: string, txHash: string, jwt: string) {
    try {
        setJwt(jwt);
        const recordResponse = await sendGraphql<RecordBallotMutationVariables, RecordBallotMutation>(
            RecordBallotDoc,
            { input: { data: { proposalId, commitment, address: wallet.address, transactionHash: txHash }}},
        );
        if (recordResponse?.data?.recordBallot) {
            return;
        }
        console.error('recordBallot response = ', recordResponse);
        throw new Error(`failed to recordBallot proposalId=${proposalId} address=${wallet.address} transactionhash=${txHash}`);
    } finally {
        setJwt(undefined);
    }
}

export async function voteValidator(wallet: Wallet, proposalId: string, choice: VOTE_SELECT) {
    const loginResponse = await login(wallet);
    const jwt = loginResponse.jwt;
    const memberId = loginResponse.user?.member?.id;
    if (!jwt || !memberId) {
        throw new Error('failed to login');
    }

    const status = await proposalStatusById(proposalId, jwt);
    if (!status.isJoined) {
        await joinProposal(status.id, memberId, jwt);
    }

    const submitResponse = await submitBallot(wallet, proposalId, choice, jwt);
    if (!submitResponse.commitment || !submitResponse.signature) {
        throw new Error('failed to get commitment, signature');
    }

    const signer = new NonceManager(new GasPriceManager(wallet));
    const voteraVoteFactory = await ethers.getContractFactory('VoteraVote', signer);
    const voteraVote = voteraVoteFactory.attach(process.env.VOTERA_VOTE_CONTRACT || '');

    const submitTx = await voteraVote.submitBallot(proposalId, submitResponse.commitment, submitResponse.signature);
    if (!submitTx) {
        throw new Error('failed transaction submitBallot');
    }

    await recordBallot(wallet, proposalId, submitResponse.commitment, submitTx.hash, jwt);
}

const SubmitAssessDoc = `mutation submitAssess($input: SubmitAssessInput!) {
    submitAssess(input: $input) {
        post {
            id
            type
            status
        }
    }
}
`

export async function submitAssess(proposalId: string, data: AssessResult[], txHash: string, jwt: string) {
    try {
        setJwt(jwt);

        const content = data.map((d) => ({
            __typename: 'ComponentPostScaleAnswer',
            value: d.value,
            sequence: d.sequence,
        }));
    
        const assessResponse = await sendGraphql<SubmitAssessMutationVariables, SubmitAssessMutation>(
            SubmitAssessDoc,
            { input: { data: { proposalId, content, transactionHash: txHash }}},
        );
        if (assessResponse?.data?.submitAssess) {
            return assessResponse.data.submitAssess;
        }
        console.error('submitAssess response = ', assessResponse);
        throw new Error(`failed to submitAssess proposalId=${proposalId} transactionHash=${txHash}`);
    } finally {
        setJwt(undefined);
    }
}

export async function assessValidator(wallet: Wallet, proposalId: string, data: AssessResult[]) {
    const loginResponse = await login(wallet);
    const jwt = loginResponse.jwt;
    const memberId = loginResponse.user?.member?.id;
    if (!jwt || !memberId) {
        throw new Error('failed to login');
    }

    const status = await proposalStatusById(proposalId, jwt);
    if (!status.isJoined) {
        await joinProposal(status.id, memberId, jwt);
    }

    const values = data.map((d) => BigNumber.from(d.value));

    const signer = new NonceManager(new GasPriceManager(wallet));
    const voteraVoteFactory = await ethers.getContractFactory('VoteraVote', signer);
    const voteraVote = voteraVoteFactory.attach(process.env.VOTERA_VOTE_CONTRACT || '');

    const assessTx = await voteraVote.submitAssess(proposalId, values);
    if (!assessTx) {
        throw new Error('failed transaction submitAssess');
    }

    await submitAssess(proposalId, data, assessTx.hash, jwt);
}
