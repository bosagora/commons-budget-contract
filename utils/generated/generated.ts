import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ComponentPostAnswerListAnswerDynamicZoneInput: any;
  Date: any;
  DateTime: any;
  InteractionActionDynamicZoneInput: any;
  JSON: any;
  Long: any;
  PostContentDynamicZoneInput: any;
  QuestionContentDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type Activity = {
  __typename?: 'Activity';
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
  board?: Maybe<Board>;
  commentCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Member>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  memberCount: Scalars['Int'];
  name: Scalars['String'];
  participantCount: Scalars['Int'];
  poll?: Maybe<Poll>;
  posts?: Maybe<Array<Maybe<Post>>>;
  proposal?: Maybe<Proposal>;
  readCount: Scalars['Int'];
  status: Enum_Activity_Status;
  survey?: Maybe<Survey>;
  type: Enum_Activity_Type;
  updatedAt: Scalars['DateTime'];
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityAttachmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ActivityAggregator = {
  __typename?: 'ActivityAggregator';
  avg?: Maybe<ActivityAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ActivityAggregatorMax>;
  min?: Maybe<ActivityAggregatorMin>;
  sum?: Maybe<ActivityAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ActivityAggregatorAvg = {
  __typename?: 'ActivityAggregatorAvg';
  commentCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  participantCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorMax = {
  __typename?: 'ActivityAggregatorMax';
  commentCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  participantCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorMin = {
  __typename?: 'ActivityAggregatorMin';
  commentCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  participantCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorSum = {
  __typename?: 'ActivityAggregatorSum';
  commentCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  participantCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  aggregate?: Maybe<ActivityAggregator>;
  groupBy?: Maybe<ActivityGroupBy>;
  values?: Maybe<Array<Maybe<Activity>>>;
};

export type ActivityConnectionBoard = {
  __typename?: 'ActivityConnectionBoard';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionCommentCount = {
  __typename?: 'ActivityConnectionCommentCount';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ActivityConnectionCreatedAt = {
  __typename?: 'ActivityConnectionCreatedAt';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ActivityConnectionCreator = {
  __typename?: 'ActivityConnectionCreator';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionDescription = {
  __typename?: 'ActivityConnectionDescription';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ActivityConnectionId = {
  __typename?: 'ActivityConnectionId';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionMemberCount = {
  __typename?: 'ActivityConnectionMemberCount';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ActivityConnectionName = {
  __typename?: 'ActivityConnectionName';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ActivityConnectionParticipantCount = {
  __typename?: 'ActivityConnectionParticipantCount';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ActivityConnectionPoll = {
  __typename?: 'ActivityConnectionPoll';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionProposal = {
  __typename?: 'ActivityConnectionProposal';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionReadCount = {
  __typename?: 'ActivityConnectionReadCount';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ActivityConnectionStatus = {
  __typename?: 'ActivityConnectionStatus';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ActivityConnectionSurvey = {
  __typename?: 'ActivityConnectionSurvey';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ActivityConnectionType = {
  __typename?: 'ActivityConnectionType';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ActivityConnectionUpdatedAt = {
  __typename?: 'ActivityConnectionUpdatedAt';
  connection?: Maybe<ActivityConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ActivityGroupBy = {
  __typename?: 'ActivityGroupBy';
  board?: Maybe<Array<Maybe<ActivityConnectionBoard>>>;
  commentCount?: Maybe<Array<Maybe<ActivityConnectionCommentCount>>>;
  createdAt?: Maybe<Array<Maybe<ActivityConnectionCreatedAt>>>;
  creator?: Maybe<Array<Maybe<ActivityConnectionCreator>>>;
  description?: Maybe<Array<Maybe<ActivityConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ActivityConnectionId>>>;
  memberCount?: Maybe<Array<Maybe<ActivityConnectionMemberCount>>>;
  name?: Maybe<Array<Maybe<ActivityConnectionName>>>;
  participantCount?: Maybe<Array<Maybe<ActivityConnectionParticipantCount>>>;
  poll?: Maybe<Array<Maybe<ActivityConnectionPoll>>>;
  proposal?: Maybe<Array<Maybe<ActivityConnectionProposal>>>;
  readCount?: Maybe<Array<Maybe<ActivityConnectionReadCount>>>;
  status?: Maybe<Array<Maybe<ActivityConnectionStatus>>>;
  survey?: Maybe<Array<Maybe<ActivityConnectionSurvey>>>;
  type?: Maybe<Array<Maybe<ActivityConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<ActivityConnectionUpdatedAt>>>;
};

export type ActivityInput = {
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  board?: InputMaybe<Scalars['ID']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  participantCount?: InputMaybe<Scalars['Int']>;
  poll?: InputMaybe<Scalars['ID']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  proposal?: InputMaybe<Scalars['ID']>;
  readCount?: InputMaybe<Scalars['Int']>;
  status: Enum_Activity_Status;
  survey?: InputMaybe<Scalars['ID']>;
  type: Enum_Activity_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ActivityPostsPayload = {
  __typename?: 'ActivityPostsPayload';
  count?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<PostStatus>>>;
  values?: Maybe<Array<Maybe<Post>>>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Agora = {
  __typename?: 'Agora';
  agoraScanUrl?: Maybe<Scalars['String']>;
  boaScanUrl?: Maybe<Scalars['String']>;
  commonsBudgetAddress?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  privacyTermUrl?: Maybe<Scalars['String']>;
  proposalFundMax?: Maybe<Scalars['String']>;
  proposalFundMin?: Maybe<Scalars['String']>;
  providerUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userServiceTermUrl?: Maybe<Scalars['String']>;
  voteraVoteAddress?: Maybe<Scalars['String']>;
};

export type AgoraInput = {
  agoraScanUrl?: InputMaybe<Scalars['String']>;
  boaScanUrl?: InputMaybe<Scalars['String']>;
  commonsBudgetAddress?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  privacyTermUrl?: InputMaybe<Scalars['String']>;
  proposalFundMax?: InputMaybe<Scalars['String']>;
  proposalFundMin?: InputMaybe<Scalars['String']>;
  providerUrl?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userServiceTermUrl?: InputMaybe<Scalars['String']>;
  voteraVoteAddress?: InputMaybe<Scalars['String']>;
};

export type AlarmStatus = {
  etcNews?: InputMaybe<Scalars['Boolean']>;
  likeProposalsNews?: InputMaybe<Scalars['Boolean']>;
  myCommentsNews?: InputMaybe<Scalars['Boolean']>;
  myProposalsNews?: InputMaybe<Scalars['Boolean']>;
  newProposalsNews?: InputMaybe<Scalars['Boolean']>;
};

export type AssessResultPayload = {
  __typename?: 'AssessResultPayload';
  assessData?: Maybe<Array<Maybe<Scalars['String']>>>;
  assessParticipantSize?: Maybe<Scalars['String']>;
  isProposer?: Maybe<Scalars['Boolean']>;
  isValidVoter?: Maybe<Scalars['Boolean']>;
  needEvaluation?: Maybe<Scalars['Boolean']>;
  proposalState?: Maybe<Enum_Assess_Proposal_State>;
};

export type Ballot = {
  __typename?: 'Ballot';
  cipherText?: Maybe<Scalars['String']>;
  commitment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  member?: Maybe<Member>;
  proposal?: Maybe<Proposal>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  updatedAt: Scalars['DateTime'];
};


export type BallotTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type BallotAggregator = {
  __typename?: 'BallotAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BallotConnection = {
  __typename?: 'BallotConnection';
  aggregate?: Maybe<BallotAggregator>;
  groupBy?: Maybe<BallotGroupBy>;
  values?: Maybe<Array<Maybe<Ballot>>>;
};

export type BallotConnectionCipherText = {
  __typename?: 'BallotConnectionCipherText';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BallotConnectionCommitment = {
  __typename?: 'BallotConnectionCommitment';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BallotConnectionCreatedAt = {
  __typename?: 'BallotConnectionCreatedAt';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BallotConnectionId = {
  __typename?: 'BallotConnectionId';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BallotConnectionMember = {
  __typename?: 'BallotConnectionMember';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BallotConnectionProposal = {
  __typename?: 'BallotConnectionProposal';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BallotConnectionUpdatedAt = {
  __typename?: 'BallotConnectionUpdatedAt';
  connection?: Maybe<BallotConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BallotGroupBy = {
  __typename?: 'BallotGroupBy';
  cipherText?: Maybe<Array<Maybe<BallotConnectionCipherText>>>;
  commitment?: Maybe<Array<Maybe<BallotConnectionCommitment>>>;
  createdAt?: Maybe<Array<Maybe<BallotConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<BallotConnectionId>>>;
  member?: Maybe<Array<Maybe<BallotConnectionMember>>>;
  proposal?: Maybe<Array<Maybe<BallotConnectionProposal>>>;
  updatedAt?: Maybe<Array<Maybe<BallotConnectionUpdatedAt>>>;
};

export type BallotInput = {
  cipherText?: InputMaybe<Scalars['String']>;
  commitment: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Board = {
  __typename?: 'Board';
  activities?: Maybe<Array<Maybe<Activity>>>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Member>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type BoardActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type BoardAggregator = {
  __typename?: 'BoardAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BoardConnection = {
  __typename?: 'BoardConnection';
  aggregate?: Maybe<BoardAggregator>;
  groupBy?: Maybe<BoardGroupBy>;
  values?: Maybe<Array<Maybe<Board>>>;
};

export type BoardConnectionCreatedAt = {
  __typename?: 'BoardConnectionCreatedAt';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BoardConnectionCreator = {
  __typename?: 'BoardConnectionCreator';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BoardConnectionDescription = {
  __typename?: 'BoardConnectionDescription';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BoardConnectionId = {
  __typename?: 'BoardConnectionId';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BoardConnectionName = {
  __typename?: 'BoardConnectionName';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BoardConnectionUpdatedAt = {
  __typename?: 'BoardConnectionUpdatedAt';
  connection?: Maybe<BoardConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BoardGroupBy = {
  __typename?: 'BoardGroupBy';
  createdAt?: Maybe<Array<Maybe<BoardConnectionCreatedAt>>>;
  creator?: Maybe<Array<Maybe<BoardConnectionCreator>>>;
  description?: Maybe<Array<Maybe<BoardConnectionDescription>>>;
  id?: Maybe<Array<Maybe<BoardConnectionId>>>;
  name?: Maybe<Array<Maybe<BoardConnectionName>>>;
  updatedAt?: Maybe<Array<Maybe<BoardConnectionUpdatedAt>>>;
};

export type BoardInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CheckProposalFeeInput = {
  data?: InputMaybe<CheckProposalFeeInputData>;
};

export type CheckProposalFeeInputData = {
  proposalId: Scalars['String'];
  transactionHash: Scalars['String'];
};

export type CheckProposalFeePayload = {
  __typename?: 'CheckProposalFeePayload';
  proposal?: Maybe<Proposal>;
  status?: Maybe<Enum_Fee_Status>;
};

/**
 * 객관식 문제에서 선택가능한 선택지(보기 또는 옵션) 하나에 해당하는 컴포넌트.
 * 예시)
 * "가장 좋아하는 음식 하나를 다음 네 가지 중에서 고르세요."
 * 가. 피자	나. 짜장	다. 김치볶음밥	라. 된장찌개
 *
 * 위 문제에서  보기는 [가, 나, 다, 라]의 네 개이다.
 * 위 예에서, '가', '나', '다', '라'는 ChoiceOption 컴포넌트의 레이블(label) 필드, 이 보기들이 문제 내에서 보여지는 순서는 ChoiceOption 컴포넌트의 순서(sequence) 필드, '피자', '짜장면', '김치볶음밥', '된장찌개' 등의 문구는 텍스트(text) 필드, 마지막으로 사용자가 답안 작성시 선택한 보기에 대해서 전체 집계할 때 그 선택된 보기들을 어떤 숫자값으로 매핑할지는 값(value) 필드에 저장한다.
 * 보기 항목에 이미지를 나타내고자 할 경우, 이미지(image) 필드에 저장한다.
 */
export type ComponentActivityChoiceOption = {
  __typename?: 'ComponentActivityChoiceOption';
  id: Scalars['ID'];
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type ComponentActivityChoiceOptionInput = {
  sequence?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

/**
 * 한 개의 객관식 문제에 포함된 여러 선택지(보기 또는 옵션) 목록.
 * 예시)
 * "가장 좋아하는 음식 하나를 다음 네 가지 중에서 고르세요."
 * 가. 피자	나. 짜장	다. 김치볶음밥	라. 된장찌개
 *
 * 위 문제에서 보기는 [가, 나, 다, 라]의 네 개이다. ChoiceOptionList는 그 네 개의 보기를 포함하며 각 보기 하나 하나는 ChoiceOption 컴포넌트로 정의된다.
 */
export type ComponentActivityChoiceOptionList = {
  __typename?: 'ComponentActivityChoiceOptionList';
  id: Scalars['ID'];
  item?: Maybe<Array<Maybe<ComponentActivityChoiceOption>>>;
};

export type ComponentActivityChoiceOptionListInput = {
  item?: InputMaybe<Array<InputMaybe<ComponentActivityChoiceOptionInput>>>;
};

/** 리커트 척도 문제의 보기에 지정하는 사용자 정의 레이블. 기본적으로는 시스템이 제공하는 레이블을 사용할 수 있지만, 시스템과 다른 방식으로 레이블을 붙이고 싶을 때 사용함. 예를 들어, 5점 척도 문제에서 빈도를 묻는 질문에서, 1. 전혀 경험 없음, 2. 한 번 경험, 3. 가끔 경험, 4. 자주 경험, 5. 항상 경험 식의 보기를 주고 싶을 때 사용할 수 있음. 양 끝 자리에만 레이블을 보여주고 다른 눈금 자리에는 보여주지 않으려면 양 끝 자리 레이블만 지정하면 됨. 즉, [ { key: 1, label: "전혀 경험 없음" }, { key: 5, label: "항상 경험" } ] */
export type ComponentActivityCustomLabel = {
  __typename?: 'ComponentActivityCustomLabel';
  id: Scalars['ID'];
  key: Scalars['Int'];
  label: Scalars['String'];
};

export type ComponentActivityCustomLabelInput = {
  key: Scalars['Int'];
  label: Scalars['String'];
};

/** 액티비티에 대한 옵션 중 투표에만 해당하는 추가 설정 옵션 */
export type ComponentActivityPollOption = {
  __typename?: 'ComponentActivityPollOption';
  id: Scalars['ID'];
  isOptionsShuffled?: Maybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivityPollOptionInput = {
  isOptionsShuffled?: InputMaybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: InputMaybe<Scalars['Boolean']>;
  isResubmittable?: InputMaybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: InputMaybe<Scalars['Boolean']>;
};

/** 설문 질문 중 리커트 척도 문항에 대해 설정하는 옵션 */
export type ComponentActivityScaleOption = {
  __typename?: 'ComponentActivityScaleOption';
  id: Scalars['ID'];
  max: Scalars['Int'];
  min?: Maybe<Scalars['Int']>;
};

export type ComponentActivityScaleOptionInput = {
  max: Scalars['Int'];
  min?: InputMaybe<Scalars['Int']>;
};

/** 액티비티에 대한 옵션 중 설문에만 해당하는 추가 설정 옵션 */
export type ComponentActivitySurveyOption = {
  __typename?: 'ComponentActivitySurveyOption';
  id: Scalars['ID'];
  isResubmittable?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivitySurveyOptionInput = {
  isResubmittable?: InputMaybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: InputMaybe<Scalars['Boolean']>;
};

/** 주관식 문제에 대해 설정하는 옵션 */
export type ComponentActivityTextOption = {
  __typename?: 'ComponentActivityTextOption';
  characterLimit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type ComponentActivityTextOptionInput = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};

export type ComponentCommonContact = {
  __typename?: 'ComponentCommonContact';
  alias?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonContactInput = {
  alias?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonPeriod = {
  __typename?: 'ComponentCommonPeriod';
  begin: Scalars['Date'];
  end: Scalars['Date'];
  id: Scalars['ID'];
};

export type ComponentCommonPeriodInput = {
  begin: Scalars['Date'];
  end: Scalars['Date'];
};

export type ComponentCommonRichtextInstruction = {
  __typename?: 'ComponentCommonRichtextInstruction';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentCommonRichtextInstructionInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonSimpleInstruction = {
  __typename?: 'ComponentCommonSimpleInstruction';
  attachment?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentCommonSimpleInstructionInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageCompanyEvent = {
  __typename?: 'ComponentHomepageCompanyEvent';
  article?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Componenthomepagecompanyevent_Category>;
  eventDate?: Maybe<Scalars['Date']>;
  eventDateText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  summary?: Maybe<Scalars['String']>;
};

export type ComponentHomepageCompanyEventInput = {
  article?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Enum_Componenthomepagecompanyevent_Category>;
  eventDate?: InputMaybe<Scalars['Date']>;
  eventDateText?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

/** 사용자 반응이 좋아요에 해당하는 경우 추가 저장 정보 */
export type ComponentInteractionLike = {
  __typename?: 'ComponentInteractionLike';
  id: Scalars['ID'];
  type: Enum_Componentinteractionlike_Type;
};

export type ComponentInteractionLikeInput = {
  type?: InputMaybe<Enum_Componentinteractionlike_Type>;
};

/** 사용자 반응 중에서 조회(읽음)에 해당하는 경우 추가 저장 정보 */
export type ComponentInteractionRead = {
  __typename?: 'ComponentInteractionRead';
  count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type ComponentInteractionReadInput = {
  count?: InputMaybe<Scalars['Int']>;
};

/** 신고 사유에 해당하는 컴포넌트 타입 */
export type ComponentInteractionReport = {
  __typename?: 'ComponentInteractionReport';
  id: Scalars['ID'];
  status?: Maybe<Enum_Componentinteractionreport_Status>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentInteractionReportInput = {
  status?: InputMaybe<Enum_Componentinteractionreport_Status>;
  text?: InputMaybe<Scalars['String']>;
};

/** 이 컴포넌트는 컴포넌트에서 dynamic zone을 지원하는지 테스트할 목적으로 만들었다. 모델 JSON 파일에서 dynamic zone 타입 필드를 작성하는 것이 가능하지만 문제는 이렇게 만들어진 컴포넌트 필드에 대한 렌더링 지원이 안 되어 Strapi 프론트엔드에서는 데이터 입력이 불가능하다는 것이다. */
export type ComponentPostAnswerList = {
  __typename?: 'ComponentPostAnswerList';
  answer: Array<Maybe<ComponentPostAnswerListAnswerDynamicZone>>;
  id: Scalars['ID'];
};

export type ComponentPostAnswerListAnswerDynamicZone = ComponentPostScaleAnswer | ComponentPostSingleChoiceAnswer;

export type ComponentPostAnswerListInput = {
  answer: Array<Scalars['ComponentPostAnswerListAnswerDynamicZoneInput']>;
};

/** 게시판에 올리는 게시글 */
export type ComponentPostArticle = {
  __typename?: 'ComponentPostArticle';
  attachment?: Maybe<UploadFile>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentPostArticleInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** 액티비티에 대한 댓글 */
export type ComponentPostCommentOnActivity = {
  __typename?: 'ComponentPostCommentOnActivity';
  attachment?: Maybe<UploadFile>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type ComponentPostCommentOnActivityInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

/** 액티비티 참여 응답(설문, 투표, 퀴즈에 대한 응답, 게시판 게시글, 아이디어 제안 등)에 달리는 댓글 */
export type ComponentPostCommentOnPost = {
  __typename?: 'ComponentPostCommentOnPost';
  attachment?: Maybe<UploadFile>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type ComponentPostCommentOnPostInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

/** 댓글에 달리는 답글 */
export type ComponentPostReply = {
  __typename?: 'ComponentPostReply';
  attachment?: Maybe<UploadFile>;
  id: Scalars['ID'];
  replyTo?: Maybe<Member>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentPostReplyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  replyTo?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

/** 리커트 척도 유형의 문제에 대한 답 */
export type ComponentPostScaleAnswer = {
  __typename?: 'ComponentPostScaleAnswer';
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ComponentPostScaleAnswerInput = {
  key?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** 객관식 문제에 대한 답으로 선택한 보기(옵션) */
export type ComponentPostSelection = {
  __typename?: 'ComponentPostSelection';
  id: Scalars['ID'];
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ComponentPostSelectionInput = {
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** 객관식 문제에 대한 답. 보기 중에서 하나만 고르는 단수선택에 사용됨 */
export type ComponentPostSingleChoiceAnswer = {
  __typename?: 'ComponentPostSingleChoiceAnswer';
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  selection?: Maybe<Array<Maybe<ComponentPostSelection>>>;
  sequence?: Maybe<Scalars['Int']>;
};

export type ComponentPostSingleChoiceAnswerInput = {
  key?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['ID']>;
  selection?: InputMaybe<Array<InputMaybe<ComponentPostSelectionInput>>>;
  sequence?: InputMaybe<Scalars['Int']>;
};

export type ComponentSurveyScaleResult = {
  __typename?: 'ComponentSurveyScaleResult';
  count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ComponentSurveyScaleResultInput = {
  count?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type ComponentSurveySingleChoiceOptionResult = {
  __typename?: 'ComponentSurveySingleChoiceOptionResult';
  count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ComponentSurveySingleChoiceOptionResultInput = {
  count?: InputMaybe<Scalars['Int']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type Copyright = {
  __typename?: 'Copyright';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CopyrightInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  text?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum Enum_Activity_Status {
  Blocked = 'BLOCKED',
  Closed = 'CLOSED',
  Deleted = 'DELETED',
  Open = 'OPEN'
}

export enum Enum_Activity_Type {
  Board = 'BOARD',
  Poll = 'POLL',
  Survey = 'SURVEY'
}

export enum Enum_Assess_Proposal_State {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Invalid = 'INVALID',
  Rejected = 'REJECTED'
}

export enum Enum_Componenthomepagecompanyevent_Category {
  Management = 'MANAGEMENT',
  Market = 'MARKET',
  Social = 'SOCIAL',
  Technology = 'TECHNOLOGY'
}

export enum Enum_Componentinteractionlike_Type {
  Angry = 'ANGRY',
  Best = 'BEST',
  Happy = 'HAPPY',
  Like = 'LIKE',
  Sad = 'SAD'
}

export enum Enum_Componentinteractionreport_Status {
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export enum Enum_Feeds_Type {
  Assess_24HrDeadline = 'ASSESS_24HR_DEADLINE',
  AssessClosed = 'ASSESS_CLOSED',
  AssessPending = 'ASSESS_PENDING',
  NewOpinionComment = 'NEW_OPINION_COMMENT',
  NewOpinionLike = 'NEW_OPINION_LIKE',
  NewProposal = 'NEW_PROPOSAL',
  NewProposalNotice = 'NEW_PROPOSAL_NOTICE',
  Voting_24HrDeadline = 'VOTING_24HR_DEADLINE',
  VotingClosed = 'VOTING_CLOSED',
  VotingPending = 'VOTING_PENDING',
  VotingStart = 'VOTING_START'
}

export enum Enum_Fee_Status {
  Expired = 'EXPIRED',
  Invalid = 'INVALID',
  Irrelevant = 'IRRELEVANT',
  Mining = 'MINING',
  Paid = 'PAID',
  Wait = 'WAIT'
}

export enum Enum_Follow_Type {
  Post = 'POST',
  ProposalCreate = 'PROPOSAL_CREATE',
  ProposalJoin = 'PROPOSAL_JOIN'
}

export enum Enum_Interaction_Type {
  LikePost = 'LIKE_POST',
  LikeProposal = 'LIKE_PROPOSAL',
  ReadActivity = 'READ_ACTIVITY',
  ReadPost = 'READ_POST',
  ReportPost = 'REPORT_POST',
  ReportProposal = 'REPORT_PROPOSAL'
}

export enum Enum_Memberrole_Scope {
  Activity = 'ACTIVITY',
  Proposal = 'PROPOSAL',
  System = 'SYSTEM'
}

export enum Enum_Memberrole_Status {
  Block = 'BLOCK',
  Leave = 'LEAVE',
  Normal = 'NORMAL',
  Pending = 'PENDING'
}

export enum Enum_Memberrole_Type {
  Administrator = 'ADMINISTRATOR',
  Auditor = 'AUDITOR',
  Editor = 'EDITOR',
  Guest = 'GUEST',
  User = 'USER'
}

export enum Enum_Member_Status {
  Deleted = 'DELETED',
  Open = 'OPEN'
}

export enum Enum_Post_Status {
  Deleted = 'DELETED',
  Open = 'OPEN'
}

export enum Enum_Post_Type {
  BoardArticle = 'BOARD_ARTICLE',
  CommentOnActivity = 'COMMENT_ON_ACTIVITY',
  CommentOnPost = 'COMMENT_ON_POST',
  PollResponse = 'POLL_RESPONSE',
  ReplyOnComment = 'REPLY_ON_COMMENT',
  SurveyResponse = 'SURVEY_RESPONSE'
}

export enum Enum_Proposal_Status {
  Assess = 'ASSESS',
  Cancel = 'CANCEL',
  Closed = 'CLOSED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  PendingAssess = 'PENDING_ASSESS',
  PendingVote = 'PENDING_VOTE',
  Reject = 'REJECT',
  Vote = 'VOTE'
}

export enum Enum_Proposal_Type {
  Business = 'BUSINESS',
  System = 'SYSTEM'
}

export enum Enum_Question_Type {
  Scale = 'SCALE',
  SingleChoice = 'SINGLE_CHOICE'
}

export enum Enum_Survey_Type {
  Closed = 'CLOSED',
  Realtime = 'REALTIME'
}

export enum Enum_Vote_Proposal_State {
  Approved = 'APPROVED',
  AssessmentFailed = 'ASSESSMENT_FAILED',
  InvalidQuorum = 'INVALID_QUORUM',
  None = 'NONE',
  Rejected = 'REJECTED',
  Running = 'RUNNING',
  Withdrawn = 'WITHDRAWN'
}

export type FeePolicyPayload = {
  __typename?: 'FeePolicyPayload';
  fundProposalFeePermil?: Maybe<Scalars['String']>;
  systemProposalFee?: Maybe<Scalars['String']>;
  voterFee?: Maybe<Scalars['String']>;
  withdrawDelayPeriod?: Maybe<Scalars['Int']>;
};

export type FeedInput = {
  content?: InputMaybe<Scalars['JSON']>;
  created_by?: InputMaybe<Scalars['ID']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<Scalars['JSON']>;
  target: Scalars['String'];
  type: Enum_Feeds_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Feeds = {
  __typename?: 'Feeds';
  content?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isRead?: Maybe<Scalars['Boolean']>;
  navigation?: Maybe<Scalars['JSON']>;
  target: Scalars['String'];
  type: Enum_Feeds_Type;
  updatedAt: Scalars['DateTime'];
};

export type FeedsAggregator = {
  __typename?: 'FeedsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FeedsConnection = {
  __typename?: 'FeedsConnection';
  aggregate?: Maybe<FeedsAggregator>;
  groupBy?: Maybe<FeedsGroupBy>;
  values?: Maybe<Array<Maybe<Feeds>>>;
};

export type FeedsConnectionContent = {
  __typename?: 'FeedsConnectionContent';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type FeedsConnectionCreatedAt = {
  __typename?: 'FeedsConnectionCreatedAt';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FeedsConnectionId = {
  __typename?: 'FeedsConnectionId';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FeedsConnectionIsRead = {
  __typename?: 'FeedsConnectionIsRead';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type FeedsConnectionNavigation = {
  __typename?: 'FeedsConnectionNavigation';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type FeedsConnectionTarget = {
  __typename?: 'FeedsConnectionTarget';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FeedsConnectionType = {
  __typename?: 'FeedsConnectionType';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FeedsConnectionUpdatedAt = {
  __typename?: 'FeedsConnectionUpdatedAt';
  connection?: Maybe<FeedsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FeedsGroupBy = {
  __typename?: 'FeedsGroupBy';
  content?: Maybe<Array<Maybe<FeedsConnectionContent>>>;
  createdAt?: Maybe<Array<Maybe<FeedsConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<FeedsConnectionId>>>;
  isRead?: Maybe<Array<Maybe<FeedsConnectionIsRead>>>;
  navigation?: Maybe<Array<Maybe<FeedsConnectionNavigation>>>;
  target?: Maybe<Array<Maybe<FeedsConnectionTarget>>>;
  type?: Maybe<Array<Maybe<FeedsConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<FeedsConnectionUpdatedAt>>>;
};

export type FeedsStatus = {
  __typename?: 'FeedsStatus';
  notReadCount?: Maybe<Scalars['Int']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  doc_hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Follow = {
  __typename?: 'Follow';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isFeedActive?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Follow_Type>;
  updatedAt: Scalars['DateTime'];
  user_feed?: Maybe<UserFeed>;
};

export type FollowAggregator = {
  __typename?: 'FollowAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FollowConnection = {
  __typename?: 'FollowConnection';
  aggregate?: Maybe<FollowAggregator>;
  groupBy?: Maybe<FollowGroupBy>;
  values?: Maybe<Array<Maybe<Follow>>>;
};

export type FollowConnectionCreatedAt = {
  __typename?: 'FollowConnectionCreatedAt';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FollowConnectionId = {
  __typename?: 'FollowConnectionId';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FollowConnectionIsFeedActive = {
  __typename?: 'FollowConnectionIsFeedActive';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type FollowConnectionTarget = {
  __typename?: 'FollowConnectionTarget';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FollowConnectionType = {
  __typename?: 'FollowConnectionType';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FollowConnectionUpdatedAt = {
  __typename?: 'FollowConnectionUpdatedAt';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FollowConnectionUser_Feed = {
  __typename?: 'FollowConnectionUser_feed';
  connection?: Maybe<FollowConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FollowGroupBy = {
  __typename?: 'FollowGroupBy';
  createdAt?: Maybe<Array<Maybe<FollowConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<FollowConnectionId>>>;
  isFeedActive?: Maybe<Array<Maybe<FollowConnectionIsFeedActive>>>;
  target?: Maybe<Array<Maybe<FollowConnectionTarget>>>;
  type?: Maybe<Array<Maybe<FollowConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<FollowConnectionUpdatedAt>>>;
  user_feed?: Maybe<Array<Maybe<FollowConnectionUser_Feed>>>;
};

export type FollowInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  isFeedActive?: InputMaybe<Scalars['Boolean']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Follow_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
};

export type History = {
  __typename?: 'History';
  companyEvent?: Maybe<Array<Maybe<ComponentHomepageCompanyEvent>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type HistoryInput = {
  companyEvent?: InputMaybe<Array<InputMaybe<ComponentHomepageCompanyEventInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Home = {
  __typename?: 'Home';
  createdAt: Scalars['DateTime'];
  greeting?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type HomeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  greeting?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

/**
 * 사용자가 특정 게시물이나 그룹, 액티비티, 게시물, 댓글, 답글 등에 대해 좋아요(LIKE), 신고(REPORT), 조회(READ) 등의 반응을 할 때 이를 저장합니다. 멤버에 대한 반응(차단하기, 보이스 양도 등)은 memberInteraction이라는 별도 타입으로 정의함.
 *
 * 이 컬렉션에 대한 쿼리 예시는 다음과 같음
 *
 * ## Query 작성 방법:
 *
 * query {
 *   interactions {
 *     id
 *     created_by {
 *       id
 *     }
 *     type
 *     action {
 *       __typename
 *       ... on ComponentInteractionLike {
 *         type
 *       }
 *       ... on ComponentInteractionRead {
 *         count
 *       }      ... on ComponentInteractionReport {
 *         reason
 *         text
 *       }
 *     }
 *     activity {
 *       id
 *     }
 *     group {
 *       id
 *     }
 *     post {
 *       id
 *     }
 *   }
 * }
 *
 *
 *
 * ## Mutation 작성 방법:
 *
 * mutation {
 *   createInteraction( input:
 *     { data: {
 *      type: REPORT_GROUP,
 *       action: [ {
 *         __typename:"ComponentInteractionReport"
 *         reason: PRIVACY_VIOLATION
 *       } ],
 *       group: 1 }
 *     }
 *   )
 *   {
 *   interaction {
 *     id
 *   }
 * }
 */
export type Interaction = {
  __typename?: 'Interaction';
  action: Array<Maybe<InteractionActionDynamicZone>>;
  activity?: Maybe<Activity>;
  actor?: Maybe<Member>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  post?: Maybe<Post>;
  proposal?: Maybe<Proposal>;
  type: Enum_Interaction_Type;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};

export type InteractionActionDynamicZone = ComponentInteractionLike | ComponentInteractionRead | ComponentInteractionReport;

export type InteractionAggregator = {
  __typename?: 'InteractionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InteractionConnection = {
  __typename?: 'InteractionConnection';
  aggregate?: Maybe<InteractionAggregator>;
  groupBy?: Maybe<InteractionGroupBy>;
  values?: Maybe<Array<Maybe<Interaction>>>;
};

export type InteractionConnectionActivity = {
  __typename?: 'InteractionConnectionActivity';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionConnectionActor = {
  __typename?: 'InteractionConnectionActor';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionConnectionCreatedAt = {
  __typename?: 'InteractionConnectionCreatedAt';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type InteractionConnectionId = {
  __typename?: 'InteractionConnectionId';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionConnectionPost = {
  __typename?: 'InteractionConnectionPost';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionConnectionProposal = {
  __typename?: 'InteractionConnectionProposal';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionConnectionType = {
  __typename?: 'InteractionConnectionType';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InteractionConnectionUpdatedAt = {
  __typename?: 'InteractionConnectionUpdatedAt';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type InteractionConnectionUser = {
  __typename?: 'InteractionConnectionUser';
  connection?: Maybe<InteractionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InteractionGroupBy = {
  __typename?: 'InteractionGroupBy';
  activity?: Maybe<Array<Maybe<InteractionConnectionActivity>>>;
  actor?: Maybe<Array<Maybe<InteractionConnectionActor>>>;
  createdAt?: Maybe<Array<Maybe<InteractionConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<InteractionConnectionId>>>;
  post?: Maybe<Array<Maybe<InteractionConnectionPost>>>;
  proposal?: Maybe<Array<Maybe<InteractionConnectionProposal>>>;
  type?: Maybe<Array<Maybe<InteractionConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<InteractionConnectionUpdatedAt>>>;
  user?: Maybe<Array<Maybe<InteractionConnectionUser>>>;
};

export type InteractionInput = {
  action: Array<Scalars['InteractionActionDynamicZoneInput']>;
  activity?: InputMaybe<Scalars['ID']>;
  actor?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  post?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  type: Enum_Interaction_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type IsValidatorPayload = {
  __typename?: 'IsValidatorPayload';
  publicKey?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type JoinProposalInput = {
  data?: InputMaybe<JoinProposalInputData>;
};

export type JoinProposalInputData = {
  actor: Scalars['ID'];
  id: Scalars['ID'];
};

export type JoinProposalPayload = {
  __typename?: 'JoinProposalPayload';
  invalidValidator?: Maybe<Scalars['Boolean']>;
  proposal?: Maybe<Proposal>;
};

export type ListFeedsPayload = {
  __typename?: 'ListFeedsPayload';
  count?: Maybe<Scalars['Int']>;
  notReadCount?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Feeds>>>;
};

export type ListMyBallotsPayload = {
  __typename?: 'ListMyBallotsPayload';
  count?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<MyBallot>>>;
};

export type ListProposalPayload = {
  __typename?: 'ListProposalPayload';
  count?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<ProposalStatus>>>;
  values?: Maybe<Array<Maybe<Proposal>>>;
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

/** 웍스페이스, 그룹, 액티비티의 멤버. 익명 옵션이 아닌 경우, 그룹이나 액티비티에서 별도의 멤버를 생성하지 않으며 웍스페이스의 멤버가 그 웍스페이스에 속해 있는 모든 그룹이나 액티비티에 접근할 수 있다. 하지만 어떤 익명 옵션으로 만들어지는 그룹인 경우에는 웍스페이스의 멤버와 다른 멤버 계정이 만들어지고 그 활동 가능한 범위는 해당 그룹으로만 제한된다. 마찬가지로 그룹 내의 모든 액티비티는 그룹 멤버로 참여 가능하지만 익명 옵션으로 만든 액티비티라면 그 안에서만 사용할 수 있는 별도의 멤버 계정이 만들어진다. Member는 Workspace, Group, Activity, Post, Interaction, MemberInteraction, MemberRole 등 다른 컬렉션에서 creator, writer, actor 등의 역할로 참조되지만 반대로 Member로부터 다른 컬렉션 정보에 대한 직접 참조를 저장하지 않아야 한다. 의도되지 않은 접근으로 멤버에 연결된 모든 정보가 노출될 수 있기 때문에 연결 고리를 끊기 위한 것이다. */
export type Member = {
  __typename?: 'Member';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastAccessTime?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  username: Scalars['String'];
};

export type MemberAggregator = {
  __typename?: 'MemberAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  aggregate?: Maybe<MemberAggregator>;
  groupBy?: Maybe<MemberGroupBy>;
  values?: Maybe<Array<Maybe<Member>>>;
};

export type MemberConnectionAddress = {
  __typename?: 'MemberConnectionAddress';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MemberConnectionCreatedAt = {
  __typename?: 'MemberConnectionCreatedAt';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MemberConnectionId = {
  __typename?: 'MemberConnectionId';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberConnectionLastAccessTime = {
  __typename?: 'MemberConnectionLastAccessTime';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MemberConnectionUpdatedAt = {
  __typename?: 'MemberConnectionUpdatedAt';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MemberConnectionUser = {
  __typename?: 'MemberConnectionUser';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberConnectionUsername = {
  __typename?: 'MemberConnectionUsername';
  connection?: Maybe<MemberConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MemberGroupBy = {
  __typename?: 'MemberGroupBy';
  address?: Maybe<Array<Maybe<MemberConnectionAddress>>>;
  createdAt?: Maybe<Array<Maybe<MemberConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<MemberConnectionId>>>;
  lastAccessTime?: Maybe<Array<Maybe<MemberConnectionLastAccessTime>>>;
  updatedAt?: Maybe<Array<Maybe<MemberConnectionUpdatedAt>>>;
  user?: Maybe<Array<Maybe<MemberConnectionUser>>>;
  username?: Maybe<Array<Maybe<MemberConnectionUsername>>>;
};

export type MemberInput = {
  address: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  lastAccessTime?: InputMaybe<Scalars['DateTime']>;
  lastSignTime?: InputMaybe<Scalars['Int']>;
  lastSignature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Member_Status>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

/**
 * 시스템 수준(scope: SYSTEM)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 디포라 서비스 관리. 가장 최상위 사용자로서 모든 기능과 데이터 접근 가능.
 * type이 USER인 경우, 디포라 앱 로그인. 자신의 웍스페이스 생성. 공개된 액티비티에 GUEST로 참여 가능. 디포라에 가입하면 USER type으로 멤버가 됨.
 *
 * 웍스페이스 수준(scope: WORKSPACE)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 웍스페이스 관리. 웍스페이스 사용자 초대. 기존 사용자 탈퇴 처리. 신고된 콘텐츠 삭제. 공식 그룹 생성. 공식 이벤트 생성.
 * type이 USER인 경우, 해당 웍스페이스의 기본 그룹에 자동 가입되며 초대된 그룹에도 가입할 수 있음.
 * 동일한 멤버가 SYSTEM 수준에서는 USER인 사람이, WORKSPACE 수준에서는 ADMINISTRATOR, USER, GUEST 중 하나의 역할로 참여하게 되며 새로 aaid를 발급하지 않음.(새로 발급하는 방식에 대해서는 나중에 생각해 볼 것)
 *
 * 그룹 수준(scope: GROUP)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 그룹에 대한 관리(그룹 정보 수정, 멤버 초대나 삭제, 게시판 설정 등).
 * type이 USER인 경우, 해당 그룹의 모든 액티비티에 참여 가능.
 *
 * 액티비티 수준(scope: ACTIVITY)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 액티비티 관리(액티비티 정보 수정, 마감 연장이나 단축 등)
 * type이 USER인 경우, 해당 액티비티에 참여.
 * type이 EDITOR인 경우, 질의응답 이벤트에 올라오는 질문들에 대해 답변 등록.
 * type이 GUEST인 경우, 웍스페이스 중 초대받은 액티비티로만 바로 들어가게 됨. 회사 외부인 대상 설문 조사 등을 위한 사용자 유형. 웍스페이스의 공통 이벤트나 공지 등을 받을 수 없으며 자신이 참여한 액티비티만 볼 수 있음.
 */
export type MemberRole = {
  __typename?: 'MemberRole';
  activity?: Maybe<Activity>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  member?: Maybe<Member>;
  proposal?: Maybe<Proposal>;
  scope?: Maybe<Enum_Memberrole_Scope>;
  status?: Maybe<Enum_Memberrole_Status>;
  type?: Maybe<Enum_Memberrole_Type>;
  updatedAt: Scalars['DateTime'];
};

export type MemberRoleAggregator = {
  __typename?: 'MemberRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MemberRoleConnection = {
  __typename?: 'MemberRoleConnection';
  aggregate?: Maybe<MemberRoleAggregator>;
  groupBy?: Maybe<MemberRoleGroupBy>;
  values?: Maybe<Array<Maybe<MemberRole>>>;
};

export type MemberRoleConnectionActivity = {
  __typename?: 'MemberRoleConnectionActivity';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberRoleConnectionCreatedAt = {
  __typename?: 'MemberRoleConnectionCreatedAt';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MemberRoleConnectionId = {
  __typename?: 'MemberRoleConnectionId';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberRoleConnectionMember = {
  __typename?: 'MemberRoleConnectionMember';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberRoleConnectionProposal = {
  __typename?: 'MemberRoleConnectionProposal';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MemberRoleConnectionScope = {
  __typename?: 'MemberRoleConnectionScope';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MemberRoleConnectionStatus = {
  __typename?: 'MemberRoleConnectionStatus';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MemberRoleConnectionType = {
  __typename?: 'MemberRoleConnectionType';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MemberRoleConnectionUpdatedAt = {
  __typename?: 'MemberRoleConnectionUpdatedAt';
  connection?: Maybe<MemberRoleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MemberRoleGroupBy = {
  __typename?: 'MemberRoleGroupBy';
  activity?: Maybe<Array<Maybe<MemberRoleConnectionActivity>>>;
  createdAt?: Maybe<Array<Maybe<MemberRoleConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<MemberRoleConnectionId>>>;
  member?: Maybe<Array<Maybe<MemberRoleConnectionMember>>>;
  proposal?: Maybe<Array<Maybe<MemberRoleConnectionProposal>>>;
  scope?: Maybe<Array<Maybe<MemberRoleConnectionScope>>>;
  status?: Maybe<Array<Maybe<MemberRoleConnectionStatus>>>;
  type?: Maybe<Array<Maybe<MemberRoleConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<MemberRoleConnectionUpdatedAt>>>;
};

export type MemberRoleInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  scope?: InputMaybe<Enum_Memberrole_Scope>;
  status?: InputMaybe<Enum_Memberrole_Status>;
  type?: InputMaybe<Enum_Memberrole_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = Activity | ActivityAggregator | ActivityAggregatorAvg | ActivityAggregatorMax | ActivityAggregatorMin | ActivityAggregatorSum | ActivityConnection | ActivityConnectionBoard | ActivityConnectionCommentCount | ActivityConnectionCreatedAt | ActivityConnectionCreator | ActivityConnectionDescription | ActivityConnectionId | ActivityConnectionMemberCount | ActivityConnectionName | ActivityConnectionParticipantCount | ActivityConnectionPoll | ActivityConnectionProposal | ActivityConnectionReadCount | ActivityConnectionStatus | ActivityConnectionSurvey | ActivityConnectionType | ActivityConnectionUpdatedAt | ActivityGroupBy | ActivityPostsPayload | Agora | AssessResultPayload | Ballot | BallotAggregator | BallotConnection | BallotConnectionCipherText | BallotConnectionCommitment | BallotConnectionCreatedAt | BallotConnectionId | BallotConnectionMember | BallotConnectionProposal | BallotConnectionUpdatedAt | BallotGroupBy | Board | BoardAggregator | BoardConnection | BoardConnectionCreatedAt | BoardConnectionCreator | BoardConnectionDescription | BoardConnectionId | BoardConnectionName | BoardConnectionUpdatedAt | BoardGroupBy | CheckProposalFeePayload | ComponentActivityChoiceOption | ComponentActivityChoiceOptionList | ComponentActivityCustomLabel | ComponentActivityPollOption | ComponentActivityScaleOption | ComponentActivitySurveyOption | ComponentActivityTextOption | ComponentCommonContact | ComponentCommonPeriod | ComponentCommonRichtextInstruction | ComponentCommonSimpleInstruction | ComponentHomepageCompanyEvent | ComponentInteractionLike | ComponentInteractionRead | ComponentInteractionReport | ComponentPostAnswerList | ComponentPostArticle | ComponentPostCommentOnActivity | ComponentPostCommentOnPost | ComponentPostReply | ComponentPostScaleAnswer | ComponentPostSelection | ComponentPostSingleChoiceAnswer | ComponentSurveyScaleResult | ComponentSurveySingleChoiceOptionResult | Copyright | FeePolicyPayload | Feeds | FeedsAggregator | FeedsConnection | FeedsConnectionContent | FeedsConnectionCreatedAt | FeedsConnectionId | FeedsConnectionIsRead | FeedsConnectionNavigation | FeedsConnectionTarget | FeedsConnectionType | FeedsConnectionUpdatedAt | FeedsGroupBy | FeedsStatus | Follow | FollowAggregator | FollowConnection | FollowConnectionCreatedAt | FollowConnectionId | FollowConnectionIsFeedActive | FollowConnectionTarget | FollowConnectionType | FollowConnectionUpdatedAt | FollowConnectionUser_Feed | FollowGroupBy | History | Home | I18NLocale | Interaction | InteractionAggregator | InteractionConnection | InteractionConnectionActivity | InteractionConnectionActor | InteractionConnectionCreatedAt | InteractionConnectionId | InteractionConnectionPost | InteractionConnectionProposal | InteractionConnectionType | InteractionConnectionUpdatedAt | InteractionConnectionUser | InteractionGroupBy | IsValidatorPayload | JoinProposalPayload | ListFeedsPayload | ListMyBallotsPayload | ListProposalPayload | Member | MemberAggregator | MemberConnection | MemberConnectionAddress | MemberConnectionCreatedAt | MemberConnectionId | MemberConnectionLastAccessTime | MemberConnectionUpdatedAt | MemberConnectionUser | MemberConnectionUsername | MemberGroupBy | MemberRole | MemberRoleAggregator | MemberRoleConnection | MemberRoleConnectionActivity | MemberRoleConnectionCreatedAt | MemberRoleConnectionId | MemberRoleConnectionMember | MemberRoleConnectionProposal | MemberRoleConnectionScope | MemberRoleConnectionStatus | MemberRoleConnectionType | MemberRoleConnectionUpdatedAt | MemberRoleGroupBy | MyBallot | Poll | PollAggregator | PollConnection | PollConnectionActivity | PollConnectionCreatedAt | PollConnectionCreator | PollConnectionId | PollConnectionUpdatedAt | PollGroupBy | Post | PostAggregator | PostAggregatorAvg | PostAggregatorMax | PostAggregatorMin | PostAggregatorSum | PostCommentsPayload | PostConnection | PostConnectionActivity | PostConnectionCommentCount | PostConnectionCreatedAt | PostConnectionId | PostConnectionLikeCount | PostConnectionParentPost | PostConnectionReadCount | PostConnectionReportCount | PostConnectionStatus | PostConnectionType | PostConnectionUpdatedAt | PostConnectionWriter | PostGroupBy | PostStatus | Proposal | ProposalAggregator | ProposalAggregatorAvg | ProposalAggregatorMax | ProposalAggregatorMin | ProposalAggregatorSum | ProposalConnection | ProposalConnectionAssessEnd | ProposalConnectionAssessPeriod | ProposalConnectionAssessStart | ProposalConnectionCommonsBudgetAddress | ProposalConnectionCreateTx | ProposalConnectionCreatedAt | ProposalConnectionCreator | ProposalConnectionDescription | ProposalConnectionDoc_Hash | ProposalConnectionFundingAmount | ProposalConnectionId | ProposalConnectionLikeCount | ProposalConnectionLogo | ProposalConnectionMemberCount | ProposalConnectionName | ProposalConnectionPaidComplete | ProposalConnectionProposalId | ProposalConnectionProposal_Begin | ProposalConnectionProposal_Fee | ProposalConnectionProposer_Address | ProposalConnectionStatus | ProposalConnectionTimeAlarm_Notified | ProposalConnectionType | ProposalConnectionUpdatedAt | ProposalConnectionVotePeriod | ProposalConnectionVote_End | ProposalConnectionVote_Open | ProposalConnectionVote_Start | ProposalConnectionVoteraVoteAddress | ProposalFeePayload | ProposalGroupBy | ProposalStatus | Push | PushAggregator | PushConnection | PushConnectionCreatedAt | PushConnectionId | PushConnectionIsActive | PushConnectionUpdatedAt | PushConnectionUser_Feed | PushGroupBy | Question | QuestionAggregator | QuestionAggregatorAvg | QuestionAggregatorMax | QuestionAggregatorMin | QuestionAggregatorSum | QuestionConnection | QuestionConnectionCreatedAt | QuestionConnectionDescription | QuestionConnectionId | QuestionConnectionPoll | QuestionConnectionSequence | QuestionConnectionSurvey | QuestionConnectionTitle | QuestionConnectionType | QuestionConnectionUpdatedAt | QuestionGroupBy | ReadArticlePayload | RecordBallotPayload | ReportPostPayload | SignTypeDomain | SignTypeMemberPayload | SubmitAssessPayload | SubmitBallotPayload | Survey | SurveyAggregator | SurveyConnection | SurveyConnectionActivity | SurveyConnectionCreatedAt | SurveyConnectionCreator | SurveyConnectionId | SurveyConnectionType | SurveyConnectionUpdatedAt | SurveyGroupBy | TogglePostLikePayload | Transaction | TransactionAggregator | TransactionAggregatorAvg | TransactionAggregatorMax | TransactionAggregatorMin | TransactionAggregatorSum | TransactionConnection | TransactionConnectionBallot | TransactionConnectionBlockNumber | TransactionConnectionCreatedAt | TransactionConnectionFrom | TransactionConnectionGasPrice | TransactionConnectionGasUsed | TransactionConnectionId | TransactionConnectionMethod | TransactionConnectionPost | TransactionConnectionProposal | TransactionConnectionReason | TransactionConnectionStatus | TransactionConnectionTransactionHash | TransactionConnectionUpdatedAt | TransactionGroupBy | UpdateReceiptPayload | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionDoc_Hash | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserFeed | UserFeedAggregator | UserFeedConnection | UserFeedConnectionCreatedAt | UserFeedConnectionEtcNews | UserFeedConnectionId | UserFeedConnectionLikeProposalsNews | UserFeedConnectionLocale | UserFeedConnectionMyCommentsNews | UserFeedConnectionMyProposalsNews | UserFeedConnectionNewProposalsNews | UserFeedConnectionUpdatedAt | UserFeedConnectionUser | UserFeedGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeEx | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionMember | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUser_Feed | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Validator | ValidatorAggregator | ValidatorAggregatorAvg | ValidatorAggregatorMax | ValidatorAggregatorMin | ValidatorAggregatorSum | ValidatorConnection | ValidatorConnectionAddress | ValidatorConnectionAssessUpdate | ValidatorConnectionBallotUpdate | ValidatorConnectionChoice | ValidatorConnectionCreatedAt | ValidatorConnectionId | ValidatorConnectionProposal | ValidatorConnectionPublicKey | ValidatorConnectionUpdatedAt | ValidatorGroupBy | Version | VoteCountPayload | VotePeriodPayload | VoteStatusPayload | CheckDupUserNamePayload | CreateActivityPayload | CreateBallotPayload | CreateBoardPayload | CreateFeedPayload | CreateFollowPayload | CreateInteractionPayload | CreateMemberPayload | CreateMemberRolePayload | CreatePollPayload | CreatePostPayload | CreateProposalPayload | CreatePushPayload | CreateQuestionPayload | CreateRolePayload | CreateSurveyPayload | CreateTransactionPayload | CreateUserFeedPayload | CreateUserPayload | CreateValidatorPayload | DeleteActivityPayload | DeleteAgoraPayload | DeleteBallotPayload | DeleteBoardPayload | DeleteCopyrightPayload | DeleteFeedPayload | DeleteFilePayload | DeleteFollowPayload | DeleteHistoryPayload | DeleteHomePayload | DeleteInteractionPayload | DeleteMemberPayload | DeleteMemberRolePayload | DeletePollPayload | DeletePostPayload | DeleteProposalPayload | DeletePushPayload | DeleteQuestionPayload | DeleteRolePayload | DeleteSurveyPayload | DeleteTransactionPayload | DeleteUserFeedPayload | DeleteUserPayload | DeleteValidatorPayload | DeleteVersionPayload | UpdateActivityPayload | UpdateAgoraPayload | UpdateBallotPayload | UpdateBoardPayload | UpdateCopyrightPayload | UpdateFeedPayload | UpdateFollowPayload | UpdateHistoryPayload | UpdateHomePayload | UpdateInteractionPayload | UpdateMemberPayload | UpdateMemberRolePayload | UpdatePollPayload | UpdatePostPayload | UpdateProposalPayload | UpdatePushPayload | UpdateQuestionPayload | UpdateRolePayload | UpdateSurveyPayload | UpdateTransactionPayload | UpdateUserFeedPayload | UpdateUserPayload | UpdateValidatorPayload | UpdateVersionPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createActivity?: Maybe<CreateActivityPayload>;
  createBallot?: Maybe<CreateBallotPayload>;
  createBoard?: Maybe<CreateBoardPayload>;
  createFeed?: Maybe<CreateFeedPayload>;
  createFollow?: Maybe<CreateFollowPayload>;
  createInteraction?: Maybe<CreateInteractionPayload>;
  createMember?: Maybe<CreateMemberPayload>;
  createMemberRole?: Maybe<CreateMemberRolePayload>;
  createPoll?: Maybe<CreatePollPayload>;
  createPost?: Maybe<CreatePostPayload>;
  /** Create a new Proposal */
  createProposal?: Maybe<CreateProposalPayload>;
  createPush?: Maybe<CreatePushPayload>;
  createQuestion?: Maybe<CreateQuestionPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createSurvey?: Maybe<CreateSurveyPayload>;
  createTransaction?: Maybe<CreateTransactionPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createUserFeed?: Maybe<CreateUserFeedPayload>;
  createValidator?: Maybe<CreateValidatorPayload>;
  deleteActivity?: Maybe<DeleteActivityPayload>;
  deleteAgora?: Maybe<DeleteAgoraPayload>;
  deleteBallot?: Maybe<DeleteBallotPayload>;
  deleteBoard?: Maybe<DeleteBoardPayload>;
  deleteCopyright?: Maybe<DeleteCopyrightPayload>;
  deleteFeed?: Maybe<DeleteFeedPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteFollow?: Maybe<DeleteFollowPayload>;
  deleteHistory?: Maybe<DeleteHistoryPayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  deleteInteraction?: Maybe<DeleteInteractionPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  deleteMemberRole?: Maybe<DeleteMemberRolePayload>;
  deletePoll?: Maybe<DeletePollPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  deleteProposal?: Maybe<DeleteProposalPayload>;
  deletePush?: Maybe<DeletePushPayload>;
  deleteQuestion?: Maybe<DeleteQuestionPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSurvey?: Maybe<DeleteSurveyPayload>;
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserFeed?: Maybe<DeleteUserFeedPayload>;
  deleteValidator?: Maybe<DeleteValidatorPayload>;
  deleteVersion?: Maybe<DeleteVersionPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  joinProposal?: Maybe<JoinProposalPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  readArticle?: Maybe<ReadArticlePayload>;
  recordBallot?: Maybe<RecordBallotPayload>;
  register: UsersPermissionsLoginPayload;
  reportPost?: Maybe<ReportPostPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  restorePost?: Maybe<ReportPostPayload>;
  signInMember?: Maybe<SignTypeMemberPayload>;
  signUpMember?: Maybe<SignTypeMemberPayload>;
  submitAssess?: Maybe<SubmitAssessPayload>;
  submitBallot?: Maybe<SubmitBallotPayload>;
  togglePostLike?: Maybe<TogglePostLikePayload>;
  updateActivity?: Maybe<UpdateActivityPayload>;
  updateAgora?: Maybe<UpdateAgoraPayload>;
  updateBallot?: Maybe<UpdateBallotPayload>;
  updateBoard?: Maybe<UpdateBoardPayload>;
  updateCopyright?: Maybe<UpdateCopyrightPayload>;
  updateFeed?: Maybe<UpdateFeedPayload>;
  updateFileInfo: UploadFile;
  updateFollow?: Maybe<UpdateFollowPayload>;
  updateHistory?: Maybe<UpdateHistoryPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  updateInteraction?: Maybe<UpdateInteractionPayload>;
  updateMember?: Maybe<UpdateMemberPayload>;
  updateMemberRole?: Maybe<UpdateMemberRolePayload>;
  updatePoll?: Maybe<UpdatePollPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  updateProposal?: Maybe<UpdateProposalPayload>;
  updatePush?: Maybe<UpdatePushPayload>;
  updateQuestion?: Maybe<UpdateQuestionPayload>;
  updateReceipt?: Maybe<UpdateReceiptPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateSurvey?: Maybe<UpdateSurveyPayload>;
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserAlarmStatus?: Maybe<UpdateUserFeedPayload>;
  updateUserFeed?: Maybe<UpdateUserFeedPayload>;
  updateUserPushToken?: Maybe<UpdateUserFeedPayload>;
  updateValidator?: Maybe<UpdateValidatorPayload>;
  updateVersion?: Maybe<UpdateVersionPayload>;
  upload: UploadFile;
};


export type MutationCreateActivityArgs = {
  input?: InputMaybe<CreateActivityInput>;
};


export type MutationCreateBallotArgs = {
  input?: InputMaybe<CreateBallotInput>;
};


export type MutationCreateBoardArgs = {
  input?: InputMaybe<CreateBoardInput>;
};


export type MutationCreateFeedArgs = {
  input?: InputMaybe<CreateFeedInput>;
};


export type MutationCreateFollowArgs = {
  input?: InputMaybe<CreateFollowInput>;
};


export type MutationCreateInteractionArgs = {
  input?: InputMaybe<CreateInteractionInput>;
};


export type MutationCreateMemberArgs = {
  input?: InputMaybe<CreateMemberInput>;
};


export type MutationCreateMemberRoleArgs = {
  input?: InputMaybe<CreateMemberRoleInput>;
};


export type MutationCreatePollArgs = {
  input?: InputMaybe<CreatePollInput>;
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<CreatePostInput>;
};


export type MutationCreateProposalArgs = {
  input?: InputMaybe<CreateProposalInput>;
};


export type MutationCreatePushArgs = {
  input?: InputMaybe<CreatePushInput>;
};


export type MutationCreateQuestionArgs = {
  input?: InputMaybe<CreateQuestionInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateSurveyArgs = {
  input?: InputMaybe<CreateSurveyInput>;
};


export type MutationCreateTransactionArgs = {
  input?: InputMaybe<CreateTransactionInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateUserFeedArgs = {
  input?: InputMaybe<CreateUserFeedInput>;
};


export type MutationCreateValidatorArgs = {
  input?: InputMaybe<CreateValidatorInput>;
};


export type MutationDeleteActivityArgs = {
  input?: InputMaybe<DeleteActivityInput>;
};


export type MutationDeleteBallotArgs = {
  input?: InputMaybe<DeleteBallotInput>;
};


export type MutationDeleteBoardArgs = {
  input?: InputMaybe<DeleteBoardInput>;
};


export type MutationDeleteFeedArgs = {
  input?: InputMaybe<DeleteFeedInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteFollowArgs = {
  input?: InputMaybe<DeleteFollowInput>;
};


export type MutationDeleteInteractionArgs = {
  input?: InputMaybe<DeleteInteractionInput>;
};


export type MutationDeleteMemberArgs = {
  input?: InputMaybe<DeleteMemberInput>;
};


export type MutationDeleteMemberRoleArgs = {
  input?: InputMaybe<DeleteMemberRoleInput>;
};


export type MutationDeletePollArgs = {
  input?: InputMaybe<DeletePollInput>;
};


export type MutationDeletePostArgs = {
  input?: InputMaybe<DeletePostInput>;
};


export type MutationDeleteProposalArgs = {
  input?: InputMaybe<DeleteProposalInput>;
};


export type MutationDeletePushArgs = {
  input?: InputMaybe<DeletePushInput>;
};


export type MutationDeleteQuestionArgs = {
  input?: InputMaybe<DeleteQuestionInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteSurveyArgs = {
  input?: InputMaybe<DeleteSurveyInput>;
};


export type MutationDeleteTransactionArgs = {
  input?: InputMaybe<DeleteTransactionInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteUserFeedArgs = {
  input?: InputMaybe<DeleteUserFeedInput>;
};


export type MutationDeleteValidatorArgs = {
  input?: InputMaybe<DeleteValidatorInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationJoinProposalArgs = {
  input: JoinProposalInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationReadArticleArgs = {
  id: Scalars['ID'];
};


export type MutationRecordBallotArgs = {
  input: RecordBallotInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationReportPostArgs = {
  input?: InputMaybe<ReportPostInput>;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationRestorePostArgs = {
  input?: InputMaybe<ReportPostInput>;
};


export type MutationSignInMemberArgs = {
  input: SignInMemberInput;
};


export type MutationSignUpMemberArgs = {
  input: SignUpMemberInput;
};


export type MutationSubmitAssessArgs = {
  input: SubmitAssessInput;
};


export type MutationSubmitBallotArgs = {
  input: SubmitBallotInput;
};


export type MutationTogglePostLikeArgs = {
  input?: InputMaybe<TogglePostLikeInput>;
};


export type MutationUpdateActivityArgs = {
  input?: InputMaybe<UpdateActivityInput>;
};


export type MutationUpdateAgoraArgs = {
  input?: InputMaybe<UpdateAgoraInput>;
};


export type MutationUpdateBallotArgs = {
  input?: InputMaybe<UpdateBallotInput>;
};


export type MutationUpdateBoardArgs = {
  input?: InputMaybe<UpdateBoardInput>;
};


export type MutationUpdateCopyrightArgs = {
  input?: InputMaybe<UpdateCopyrightInput>;
};


export type MutationUpdateFeedArgs = {
  input?: InputMaybe<UpdateFeedInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateFollowArgs = {
  input?: InputMaybe<UpdateFollowInput>;
};


export type MutationUpdateHistoryArgs = {
  input?: InputMaybe<UpdateHistoryInput>;
};


export type MutationUpdateHomeArgs = {
  input?: InputMaybe<UpdateHomeInput>;
};


export type MutationUpdateInteractionArgs = {
  input?: InputMaybe<UpdateInteractionInput>;
};


export type MutationUpdateMemberArgs = {
  input?: InputMaybe<UpdateMemberInput>;
};


export type MutationUpdateMemberRoleArgs = {
  input?: InputMaybe<UpdateMemberRoleInput>;
};


export type MutationUpdatePollArgs = {
  input?: InputMaybe<UpdatePollInput>;
};


export type MutationUpdatePostArgs = {
  input?: InputMaybe<UpdatePostInput>;
};


export type MutationUpdateProposalArgs = {
  input?: InputMaybe<UpdateProposalInput>;
};


export type MutationUpdatePushArgs = {
  input?: InputMaybe<UpdatePushInput>;
};


export type MutationUpdateQuestionArgs = {
  input?: InputMaybe<UpdateQuestionInput>;
};


export type MutationUpdateReceiptArgs = {
  input: UpdateReceiptInput;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateSurveyArgs = {
  input?: InputMaybe<UpdateSurveyInput>;
};


export type MutationUpdateTransactionArgs = {
  input?: InputMaybe<UpdateTransactionInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateUserAlarmStatusArgs = {
  input: UpdateUserAlarmStatusInput;
};


export type MutationUpdateUserFeedArgs = {
  input?: InputMaybe<UpdateUserFeedInput>;
};


export type MutationUpdateUserPushTokenArgs = {
  input: UpdateUserPushTokenInput;
};


export type MutationUpdateValidatorArgs = {
  input?: InputMaybe<UpdateValidatorInput>;
};


export type MutationUpdateVersionArgs = {
  input?: InputMaybe<UpdateVersionInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type MyBallot = {
  __typename?: 'MyBallot';
  choice?: Maybe<Scalars['Int']>;
  commitment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** 액티비티를 구성하는 내용 중 투표(Poll) 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 투표 뿐만 아니라 여러 투표에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능. */
export type Poll = {
  __typename?: 'Poll';
  activity?: Maybe<Activity>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Member>;
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<Question>>>;
  updatedAt: Scalars['DateTime'];
};


/** 액티비티를 구성하는 내용 중 투표(Poll) 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 투표 뿐만 아니라 여러 투표에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능. */
export type PollQuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PollAggregator = {
  __typename?: 'PollAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PollConnection = {
  __typename?: 'PollConnection';
  aggregate?: Maybe<PollAggregator>;
  groupBy?: Maybe<PollGroupBy>;
  values?: Maybe<Array<Maybe<Poll>>>;
};

export type PollConnectionActivity = {
  __typename?: 'PollConnectionActivity';
  connection?: Maybe<PollConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PollConnectionCreatedAt = {
  __typename?: 'PollConnectionCreatedAt';
  connection?: Maybe<PollConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PollConnectionCreator = {
  __typename?: 'PollConnectionCreator';
  connection?: Maybe<PollConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PollConnectionId = {
  __typename?: 'PollConnectionId';
  connection?: Maybe<PollConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PollConnectionUpdatedAt = {
  __typename?: 'PollConnectionUpdatedAt';
  connection?: Maybe<PollConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PollGroupBy = {
  __typename?: 'PollGroupBy';
  activity?: Maybe<Array<Maybe<PollConnectionActivity>>>;
  createdAt?: Maybe<Array<Maybe<PollConnectionCreatedAt>>>;
  creator?: Maybe<Array<Maybe<PollConnectionCreator>>>;
  id?: Maybe<Array<Maybe<PollConnectionId>>>;
  updatedAt?: Maybe<Array<Maybe<PollConnectionUpdatedAt>>>;
};

export type PollInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type Post = {
  __typename?: 'Post';
  activity?: Maybe<Activity>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
  childPosts?: Maybe<Array<Maybe<Post>>>;
  commentCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<PostContentDynamicZone>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  likeCount?: Maybe<Scalars['Int']>;
  parentPost?: Maybe<Post>;
  readCount?: Maybe<Scalars['Int']>;
  reportCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Post_Status>;
  type: Enum_Post_Type;
  updatedAt: Scalars['DateTime'];
  writer?: Maybe<Member>;
};


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type PostAttachmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type PostChildPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  avg?: Maybe<PostAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostAggregatorMax>;
  min?: Maybe<PostAggregatorMin>;
  sum?: Maybe<PostAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostAggregatorAvg = {
  __typename?: 'PostAggregatorAvg';
  commentCount?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
  reportCount?: Maybe<Scalars['Float']>;
};

export type PostAggregatorMax = {
  __typename?: 'PostAggregatorMax';
  commentCount?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
  reportCount?: Maybe<Scalars['Float']>;
};

export type PostAggregatorMin = {
  __typename?: 'PostAggregatorMin';
  commentCount?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
  reportCount?: Maybe<Scalars['Float']>;
};

export type PostAggregatorSum = {
  __typename?: 'PostAggregatorSum';
  commentCount?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  readCount?: Maybe<Scalars['Float']>;
  reportCount?: Maybe<Scalars['Float']>;
};

export type PostCommentsPayload = {
  __typename?: 'PostCommentsPayload';
  count?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<PostStatus>>>;
  values?: Maybe<Array<Maybe<Post>>>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate?: Maybe<PostAggregator>;
  groupBy?: Maybe<PostGroupBy>;
  values?: Maybe<Array<Maybe<Post>>>;
};

export type PostConnectionActivity = {
  __typename?: 'PostConnectionActivity';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostConnectionCommentCount = {
  __typename?: 'PostConnectionCommentCount';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type PostConnectionCreatedAt = {
  __typename?: 'PostConnectionCreatedAt';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostConnectionLikeCount = {
  __typename?: 'PostConnectionLikeCount';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type PostConnectionParentPost = {
  __typename?: 'PostConnectionParentPost';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostConnectionReadCount = {
  __typename?: 'PostConnectionReadCount';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type PostConnectionReportCount = {
  __typename?: 'PostConnectionReportCount';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type PostConnectionStatus = {
  __typename?: 'PostConnectionStatus';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostConnectionType = {
  __typename?: 'PostConnectionType';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostConnectionUpdatedAt = {
  __typename?: 'PostConnectionUpdatedAt';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PostConnectionWriter = {
  __typename?: 'PostConnectionWriter';
  connection?: Maybe<PostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostContentDynamicZone = ComponentPostArticle | ComponentPostCommentOnActivity | ComponentPostCommentOnPost | ComponentPostReply | ComponentPostScaleAnswer | ComponentPostSingleChoiceAnswer;

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  activity?: Maybe<Array<Maybe<PostConnectionActivity>>>;
  commentCount?: Maybe<Array<Maybe<PostConnectionCommentCount>>>;
  createdAt?: Maybe<Array<Maybe<PostConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<PostConnectionId>>>;
  likeCount?: Maybe<Array<Maybe<PostConnectionLikeCount>>>;
  parentPost?: Maybe<Array<Maybe<PostConnectionParentPost>>>;
  readCount?: Maybe<Array<Maybe<PostConnectionReadCount>>>;
  reportCount?: Maybe<Array<Maybe<PostConnectionReportCount>>>;
  status?: Maybe<Array<Maybe<PostConnectionStatus>>>;
  type?: Maybe<Array<Maybe<PostConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<PostConnectionUpdatedAt>>>;
  writer?: Maybe<Array<Maybe<PostConnectionWriter>>>;
};

export type PostInput = {
  activity?: InputMaybe<Scalars['ID']>;
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  childPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commentCount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Array<Scalars['PostContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  parentPost?: InputMaybe<Scalars['ID']>;
  readCount?: InputMaybe<Scalars['Int']>;
  reportCount?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Enum_Post_Status>;
  type: Enum_Post_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
  writer?: InputMaybe<Scalars['ID']>;
};

export type PostStatus = {
  __typename?: 'PostStatus';
  id: Scalars['ID'];
  isLike?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  isReported?: Maybe<Scalars['Boolean']>;
};

export type Proposal = {
  __typename?: 'Proposal';
  activities?: Maybe<Array<Maybe<Activity>>>;
  assessEnd?: Maybe<Scalars['Int']>;
  assessPeriod?: Maybe<ComponentCommonPeriod>;
  assessStart?: Maybe<Scalars['Int']>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
  commonsBudgetAddress?: Maybe<Scalars['String']>;
  createTx?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Member>;
  description?: Maybe<Scalars['String']>;
  doc_hash?: Maybe<Scalars['String']>;
  fundingAmount?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  likeCount: Scalars['Int'];
  logo?: Maybe<UploadFile>;
  memberCount: Scalars['Int'];
  name: Scalars['String'];
  paidComplete?: Maybe<Scalars['Boolean']>;
  proposalId?: Maybe<Scalars['String']>;
  proposal_begin?: Maybe<Scalars['Int']>;
  proposal_fee?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status: Enum_Proposal_Status;
  timeAlarm_notified?: Maybe<Scalars['Boolean']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  type: Enum_Proposal_Type;
  updatedAt: Scalars['DateTime'];
  validators?: Maybe<Array<Maybe<Validator>>>;
  votePeriod?: Maybe<ComponentCommonPeriod>;
  vote_end?: Maybe<Scalars['Int']>;
  vote_open?: Maybe<Scalars['Int']>;
  vote_start?: Maybe<Scalars['Int']>;
  voteraVoteAddress?: Maybe<Scalars['String']>;
};


export type ProposalActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProposalAttachmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProposalTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProposalValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ProposalAggregator = {
  __typename?: 'ProposalAggregator';
  avg?: Maybe<ProposalAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ProposalAggregatorMax>;
  min?: Maybe<ProposalAggregatorMin>;
  sum?: Maybe<ProposalAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProposalAggregatorAvg = {
  __typename?: 'ProposalAggregatorAvg';
  assessEnd?: Maybe<Scalars['Float']>;
  assessStart?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  proposal_begin?: Maybe<Scalars['Float']>;
  vote_end?: Maybe<Scalars['Float']>;
  vote_open?: Maybe<Scalars['Float']>;
  vote_start?: Maybe<Scalars['Float']>;
};

export type ProposalAggregatorMax = {
  __typename?: 'ProposalAggregatorMax';
  assessEnd?: Maybe<Scalars['Float']>;
  assessStart?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  proposal_begin?: Maybe<Scalars['Float']>;
  vote_end?: Maybe<Scalars['Float']>;
  vote_open?: Maybe<Scalars['Float']>;
  vote_start?: Maybe<Scalars['Float']>;
};

export type ProposalAggregatorMin = {
  __typename?: 'ProposalAggregatorMin';
  assessEnd?: Maybe<Scalars['Float']>;
  assessStart?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  proposal_begin?: Maybe<Scalars['Float']>;
  vote_end?: Maybe<Scalars['Float']>;
  vote_open?: Maybe<Scalars['Float']>;
  vote_start?: Maybe<Scalars['Float']>;
};

export type ProposalAggregatorSum = {
  __typename?: 'ProposalAggregatorSum';
  assessEnd?: Maybe<Scalars['Float']>;
  assessStart?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
  memberCount?: Maybe<Scalars['Float']>;
  proposal_begin?: Maybe<Scalars['Float']>;
  vote_end?: Maybe<Scalars['Float']>;
  vote_open?: Maybe<Scalars['Float']>;
  vote_start?: Maybe<Scalars['Float']>;
};

export type ProposalConnection = {
  __typename?: 'ProposalConnection';
  aggregate?: Maybe<ProposalAggregator>;
  groupBy?: Maybe<ProposalGroupBy>;
  values?: Maybe<Array<Maybe<Proposal>>>;
};

export type ProposalConnectionAssessEnd = {
  __typename?: 'ProposalConnectionAssessEnd';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionAssessPeriod = {
  __typename?: 'ProposalConnectionAssessPeriod';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProposalConnectionAssessStart = {
  __typename?: 'ProposalConnectionAssessStart';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionCommonsBudgetAddress = {
  __typename?: 'ProposalConnectionCommonsBudgetAddress';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionCreateTx = {
  __typename?: 'ProposalConnectionCreateTx';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionCreatedAt = {
  __typename?: 'ProposalConnectionCreatedAt';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProposalConnectionCreator = {
  __typename?: 'ProposalConnectionCreator';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProposalConnectionDescription = {
  __typename?: 'ProposalConnectionDescription';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionDoc_Hash = {
  __typename?: 'ProposalConnectionDoc_hash';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionFundingAmount = {
  __typename?: 'ProposalConnectionFundingAmount';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionId = {
  __typename?: 'ProposalConnectionId';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProposalConnectionLikeCount = {
  __typename?: 'ProposalConnectionLikeCount';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionLogo = {
  __typename?: 'ProposalConnectionLogo';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProposalConnectionMemberCount = {
  __typename?: 'ProposalConnectionMemberCount';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionName = {
  __typename?: 'ProposalConnectionName';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionPaidComplete = {
  __typename?: 'ProposalConnectionPaidComplete';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ProposalConnectionProposalId = {
  __typename?: 'ProposalConnectionProposalId';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionProposal_Begin = {
  __typename?: 'ProposalConnectionProposal_begin';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionProposal_Fee = {
  __typename?: 'ProposalConnectionProposal_fee';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionProposer_Address = {
  __typename?: 'ProposalConnectionProposer_address';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionStatus = {
  __typename?: 'ProposalConnectionStatus';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionTimeAlarm_Notified = {
  __typename?: 'ProposalConnectionTimeAlarm_notified';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ProposalConnectionType = {
  __typename?: 'ProposalConnectionType';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalConnectionUpdatedAt = {
  __typename?: 'ProposalConnectionUpdatedAt';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProposalConnectionVotePeriod = {
  __typename?: 'ProposalConnectionVotePeriod';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProposalConnectionVote_End = {
  __typename?: 'ProposalConnectionVote_end';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionVote_Open = {
  __typename?: 'ProposalConnectionVote_open';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionVote_Start = {
  __typename?: 'ProposalConnectionVote_start';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ProposalConnectionVoteraVoteAddress = {
  __typename?: 'ProposalConnectionVoteraVoteAddress';
  connection?: Maybe<ProposalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProposalFeePayload = {
  __typename?: 'ProposalFeePayload';
  amount?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  docHash?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  endAssess?: Maybe<Scalars['Int']>;
  feeAmount?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  startAssess?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Fee_Status>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Proposal_Type>;
};

export type ProposalGroupBy = {
  __typename?: 'ProposalGroupBy';
  assessEnd?: Maybe<Array<Maybe<ProposalConnectionAssessEnd>>>;
  assessPeriod?: Maybe<Array<Maybe<ProposalConnectionAssessPeriod>>>;
  assessStart?: Maybe<Array<Maybe<ProposalConnectionAssessStart>>>;
  commonsBudgetAddress?: Maybe<Array<Maybe<ProposalConnectionCommonsBudgetAddress>>>;
  createTx?: Maybe<Array<Maybe<ProposalConnectionCreateTx>>>;
  createdAt?: Maybe<Array<Maybe<ProposalConnectionCreatedAt>>>;
  creator?: Maybe<Array<Maybe<ProposalConnectionCreator>>>;
  description?: Maybe<Array<Maybe<ProposalConnectionDescription>>>;
  doc_hash?: Maybe<Array<Maybe<ProposalConnectionDoc_Hash>>>;
  fundingAmount?: Maybe<Array<Maybe<ProposalConnectionFundingAmount>>>;
  id?: Maybe<Array<Maybe<ProposalConnectionId>>>;
  likeCount?: Maybe<Array<Maybe<ProposalConnectionLikeCount>>>;
  logo?: Maybe<Array<Maybe<ProposalConnectionLogo>>>;
  memberCount?: Maybe<Array<Maybe<ProposalConnectionMemberCount>>>;
  name?: Maybe<Array<Maybe<ProposalConnectionName>>>;
  paidComplete?: Maybe<Array<Maybe<ProposalConnectionPaidComplete>>>;
  proposalId?: Maybe<Array<Maybe<ProposalConnectionProposalId>>>;
  proposal_begin?: Maybe<Array<Maybe<ProposalConnectionProposal_Begin>>>;
  proposal_fee?: Maybe<Array<Maybe<ProposalConnectionProposal_Fee>>>;
  proposer_address?: Maybe<Array<Maybe<ProposalConnectionProposer_Address>>>;
  status?: Maybe<Array<Maybe<ProposalConnectionStatus>>>;
  timeAlarm_notified?: Maybe<Array<Maybe<ProposalConnectionTimeAlarm_Notified>>>;
  type?: Maybe<Array<Maybe<ProposalConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<ProposalConnectionUpdatedAt>>>;
  votePeriod?: Maybe<Array<Maybe<ProposalConnectionVotePeriod>>>;
  vote_end?: Maybe<Array<Maybe<ProposalConnectionVote_End>>>;
  vote_open?: Maybe<Array<Maybe<ProposalConnectionVote_Open>>>;
  vote_start?: Maybe<Array<Maybe<ProposalConnectionVote_Start>>>;
  voteraVoteAddress?: Maybe<Array<Maybe<ProposalConnectionVoteraVoteAddress>>>;
};

export type ProposalInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  assessEnd?: InputMaybe<Scalars['Int']>;
  assessPeriod?: InputMaybe<ComponentCommonPeriodInput>;
  assessStart?: InputMaybe<Scalars['Int']>;
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commonsBudgetAddress?: InputMaybe<Scalars['String']>;
  createTx?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  doc_hash?: InputMaybe<Scalars['String']>;
  fundingAmount?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['ID']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  paidComplete?: InputMaybe<Scalars['Boolean']>;
  proposalId?: InputMaybe<Scalars['String']>;
  proposal_begin?: InputMaybe<Scalars['Int']>;
  proposal_fee?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status: Enum_Proposal_Status;
  timeAlarm_notified?: InputMaybe<Scalars['Boolean']>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type: Enum_Proposal_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
  validators?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  votePeriod: ComponentCommonPeriodInput;
  vote_end?: InputMaybe<Scalars['Int']>;
  vote_open?: InputMaybe<Scalars['Int']>;
  vote_start?: InputMaybe<Scalars['Int']>;
  voteraVoteAddress?: InputMaybe<Scalars['String']>;
};

export type ProposalStatus = {
  __typename?: 'ProposalStatus';
  id: Scalars['ID'];
  isJoined?: Maybe<Scalars['Boolean']>;
  isLike?: Maybe<Scalars['Boolean']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Push = {
  __typename?: 'Push';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  user_feed?: Maybe<UserFeed>;
};

export type PushAggregator = {
  __typename?: 'PushAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PushConnection = {
  __typename?: 'PushConnection';
  aggregate?: Maybe<PushAggregator>;
  groupBy?: Maybe<PushGroupBy>;
  values?: Maybe<Array<Maybe<Push>>>;
};

export type PushConnectionCreatedAt = {
  __typename?: 'PushConnectionCreatedAt';
  connection?: Maybe<PushConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PushConnectionId = {
  __typename?: 'PushConnectionId';
  connection?: Maybe<PushConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PushConnectionIsActive = {
  __typename?: 'PushConnectionIsActive';
  connection?: Maybe<PushConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type PushConnectionUpdatedAt = {
  __typename?: 'PushConnectionUpdatedAt';
  connection?: Maybe<PushConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PushConnectionUser_Feed = {
  __typename?: 'PushConnectionUser_feed';
  connection?: Maybe<PushConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PushGroupBy = {
  __typename?: 'PushGroupBy';
  createdAt?: Maybe<Array<Maybe<PushConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<PushConnectionId>>>;
  isActive?: Maybe<Array<Maybe<PushConnectionIsActive>>>;
  updatedAt?: Maybe<Array<Maybe<PushConnectionUpdatedAt>>>;
  user_feed?: Maybe<Array<Maybe<PushConnectionUser_Feed>>>;
};

export type PushInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  token: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  activities?: Maybe<Array<Maybe<Activity>>>;
  activitiesConnection?: Maybe<ActivityConnection>;
  activity?: Maybe<Activity>;
  activityPosts?: Maybe<ActivityPostsPayload>;
  agora?: Maybe<Agora>;
  assessResult?: Maybe<AssessResultPayload>;
  ballot?: Maybe<Ballot>;
  ballots?: Maybe<Array<Maybe<Ballot>>>;
  ballotsConnection?: Maybe<BallotConnection>;
  board?: Maybe<Board>;
  boards?: Maybe<Array<Maybe<Board>>>;
  boardsConnection?: Maybe<BoardConnection>;
  checkDupUserName?: Maybe<CheckDupUserNamePayload>;
  checkProposalFee?: Maybe<CheckProposalFeePayload>;
  copyright?: Maybe<Copyright>;
  feePolicy?: Maybe<FeePolicyPayload>;
  feed?: Maybe<Feeds>;
  feeds?: Maybe<Array<Maybe<Feeds>>>;
  feedsConnection?: Maybe<FeedsConnection>;
  feedsStatus?: Maybe<FeedsStatus>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  follow?: Maybe<Follow>;
  follows?: Maybe<Array<Maybe<Follow>>>;
  followsConnection?: Maybe<FollowConnection>;
  getSignInDomain?: Maybe<SignTypeDomain>;
  getSignUpDomain?: Maybe<SignTypeDomain>;
  history?: Maybe<History>;
  home?: Maybe<Home>;
  interaction?: Maybe<Interaction>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  interactionsConnection?: Maybe<InteractionConnection>;
  isMember?: Maybe<Scalars['Boolean']>;
  isValidator?: Maybe<IsValidatorPayload>;
  listAssessValidators?: Maybe<Array<Maybe<Validator>>>;
  listBallotValidators?: Maybe<Array<Maybe<Validator>>>;
  listFeeds?: Maybe<ListFeedsPayload>;
  listMyBallots?: Maybe<ListMyBallotsPayload>;
  listPosts?: Maybe<Array<Maybe<Post>>>;
  listProposal?: Maybe<ListProposalPayload>;
  me?: Maybe<UsersPermissionsMe>;
  meEx?: Maybe<UsersPermissionsMeEx>;
  meFeedEx?: Maybe<UserFeed>;
  member?: Maybe<Member>;
  memberRole?: Maybe<MemberRole>;
  memberRoles?: Maybe<Array<Maybe<MemberRole>>>;
  memberRolesConnection?: Maybe<MemberRoleConnection>;
  members?: Maybe<Array<Maybe<Member>>>;
  membersConnection?: Maybe<MemberConnection>;
  myMembers?: Maybe<Array<Maybe<Member>>>;
  poll?: Maybe<Poll>;
  polls?: Maybe<Array<Maybe<Poll>>>;
  pollsConnection?: Maybe<PollConnection>;
  post?: Maybe<Post>;
  postComments?: Maybe<PostCommentsPayload>;
  postStatus?: Maybe<PostStatus>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  proposal?: Maybe<Proposal>;
  proposalByActivity?: Maybe<Proposal>;
  proposalById?: Maybe<Proposal>;
  proposalFee?: Maybe<ProposalFeePayload>;
  proposalStatusByActivity?: Maybe<ProposalStatus>;
  proposalStatusById?: Maybe<ProposalStatus>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  proposalsConnection?: Maybe<ProposalConnection>;
  push?: Maybe<Push>;
  pushes?: Maybe<Array<Maybe<Push>>>;
  pushesConnection?: Maybe<PushConnection>;
  question?: Maybe<Question>;
  questions?: Maybe<Array<Maybe<Question>>>;
  questionsConnection?: Maybe<QuestionConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  survey?: Maybe<Survey>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  surveysConnection?: Maybe<SurveyConnection>;
  transaction?: Maybe<Transaction>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  transactionsConnection?: Maybe<TransactionConnection>;
  user?: Maybe<UsersPermissionsUser>;
  userFeed?: Maybe<UserFeed>;
  userFeeds?: Maybe<Array<Maybe<UserFeed>>>;
  userFeedsConnection?: Maybe<UserFeedConnection>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  validator?: Maybe<Validator>;
  validators?: Maybe<Array<Maybe<Validator>>>;
  validatorsConnection?: Maybe<ValidatorConnection>;
  version?: Maybe<Version>;
  voteCount?: Maybe<VoteCountPayload>;
  voteStatus?: Maybe<VoteStatusPayload>;
};


export type QueryActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryActivitiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryActivityArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryActivityPostsArgs = {
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};


export type QueryAgoraArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAssessResultArgs = {
  actor?: InputMaybe<Scalars['String']>;
  proposalId: Scalars['String'];
};


export type QueryBallotArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBallotsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBallotsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBoardsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBoardsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCheckDupUserNameArgs = {
  username: Scalars['String'];
};


export type QueryCheckProposalFeeArgs = {
  proposalId: Scalars['String'];
  transactionHash: Scalars['String'];
};


export type QueryCopyrightArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFeedArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFeedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFeedsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFollowArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFollowsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFollowsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryHistoryArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryInteractionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryInteractionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryIsMemberArgs = {
  address: Scalars['String'];
};


export type QueryIsValidatorArgs = {
  address: Scalars['String'];
};


export type QueryListAssessValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  proposalId: Scalars['String'];
  start?: InputMaybe<Scalars['Int']>;
};


export type QueryListBallotValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  proposalId: Scalars['String'];
  start?: InputMaybe<Scalars['Int']>;
};


export type QueryListFeedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryListMyBallotsArgs = {
  actor: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  proposalId: Scalars['String'];
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
};


export type QueryListPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryListProposalArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMemberArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMemberRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMemberRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMemberRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMembersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPollArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPollsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPollsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPostCommentsArgs = {
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
};


export type QueryPostStatusArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPostsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProposalArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProposalByActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryProposalByIdArgs = {
  proposalId: Scalars['String'];
};


export type QueryProposalFeeArgs = {
  proposalId: Scalars['String'];
};


export type QueryProposalStatusByActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryProposalStatusByIdArgs = {
  proposalId: Scalars['String'];
};


export type QueryProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProposalsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPushArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPushesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPushesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryQuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySurveyArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySurveysArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySurveysConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTransactionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUserFeedArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUserFeedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserFeedsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryValidatorArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryValidatorsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVersionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryVoteCountArgs = {
  proposalId: Scalars['String'];
};


export type QueryVoteStatusArgs = {
  actor?: InputMaybe<Scalars['String']>;
  proposalId: Scalars['String'];
};

/**
 * 설문, 퀴즈, 투표 등에 포함되는 문제.
 * 각 문제를 별도로 저장함으로써 참여자의 답안이 어떤 문제를 참조하는 지 지정할 수 있는 장점이 있으며, 문제은행을 만들기 용이하다. 설문조사, 퀴즈, 투표 양식을 새로 만들어 저장하려면, 먼저 이 컬렉션에 문제들을 생성하여 저장하고, 만들어진 문제들의 ID 목록을 Survey, Quiz, Poll 컬렉션의 questions 필드에 저장한다.
 *
 * ## Mutation 방법:
 * mutation newQuestion {
 *  createQuestion (input: {
 *  data: {
 *  sequence: 1
 *  type: SINGLE_CHOICE,
 *  title: "수리능력 평가",
 *  description: "1부터 10까지의 합은?",
 *  content: {
 *  __typename: "ComponentActivityChoiceOptionList",
 *  item: [
 *  {
 *  sequence: 1,
 *  label: "가",
 *  text: "11",
 *  value: 11
 *  },
 *  {
 *  sequence: 2,
 *  label: "나",
 *  text: "50",
 *  value: 50
 *  },
 *  {
 *  sequence: 3,
 *  label: "다",
 *  text: "55",
 *  value: 55
 *  },
 *  {
 *  sequence: 4,
 *  label: "라",
 *  text: "101",
 *  value: 101
 *  },
 *  ]
 *  }
 *  tags: "#수리영역 #덧셈 #퀴즈 #자연수",
 *  point: 10,
 *  quiz: 1,
 *  survey: null,
 *  poll: null,
 *  workspace: 1
 *  }
 *  }
 * ) {
 *  question {
 *  ...questionFields
 *  }
 *  }
 *  }
 */
export type Question = {
  __typename?: 'Question';
  content: Array<Maybe<QuestionContentDynamicZone>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  poll?: Maybe<Poll>;
  sequence: Scalars['Int'];
  survey?: Maybe<Survey>;
  title?: Maybe<Scalars['String']>;
  type: Enum_Question_Type;
  updatedAt: Scalars['DateTime'];
};

export type QuestionAggregator = {
  __typename?: 'QuestionAggregator';
  avg?: Maybe<QuestionAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestionAggregatorMax>;
  min?: Maybe<QuestionAggregatorMin>;
  sum?: Maybe<QuestionAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuestionAggregatorAvg = {
  __typename?: 'QuestionAggregatorAvg';
  sequence?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorMax = {
  __typename?: 'QuestionAggregatorMax';
  sequence?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorMin = {
  __typename?: 'QuestionAggregatorMin';
  sequence?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorSum = {
  __typename?: 'QuestionAggregatorSum';
  sequence?: Maybe<Scalars['Float']>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  aggregate?: Maybe<QuestionAggregator>;
  groupBy?: Maybe<QuestionGroupBy>;
  values?: Maybe<Array<Maybe<Question>>>;
};

export type QuestionConnectionCreatedAt = {
  __typename?: 'QuestionConnectionCreatedAt';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionConnectionDescription = {
  __typename?: 'QuestionConnectionDescription';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionConnectionId = {
  __typename?: 'QuestionConnectionId';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionConnectionPoll = {
  __typename?: 'QuestionConnectionPoll';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionConnectionSequence = {
  __typename?: 'QuestionConnectionSequence';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionConnectionSurvey = {
  __typename?: 'QuestionConnectionSurvey';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionConnectionTitle = {
  __typename?: 'QuestionConnectionTitle';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionConnectionType = {
  __typename?: 'QuestionConnectionType';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionConnectionUpdatedAt = {
  __typename?: 'QuestionConnectionUpdatedAt';
  connection?: Maybe<QuestionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionContentDynamicZone = ComponentActivityChoiceOptionList | ComponentActivityScaleOption | ComponentActivityTextOption;

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  createdAt?: Maybe<Array<Maybe<QuestionConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<QuestionConnectionDescription>>>;
  id?: Maybe<Array<Maybe<QuestionConnectionId>>>;
  poll?: Maybe<Array<Maybe<QuestionConnectionPoll>>>;
  sequence?: Maybe<Array<Maybe<QuestionConnectionSequence>>>;
  survey?: Maybe<Array<Maybe<QuestionConnectionSurvey>>>;
  title?: Maybe<Array<Maybe<QuestionConnectionTitle>>>;
  type?: Maybe<Array<Maybe<QuestionConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<QuestionConnectionUpdatedAt>>>;
};

export type QuestionInput = {
  content: Array<Scalars['QuestionContentDynamicZoneInput']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  poll?: InputMaybe<Scalars['ID']>;
  sequence: Scalars['Int'];
  survey?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type: Enum_Question_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ReadArticlePayload = {
  __typename?: 'ReadArticlePayload';
  post?: Maybe<Post>;
  status?: Maybe<PostStatus>;
};

export type RecordBallotInput = {
  data?: InputMaybe<RecordBallotInputData>;
};

export type RecordBallotInputData = {
  address: Scalars['String'];
  commitment: Scalars['String'];
  proposalId: Scalars['String'];
  transactionHash?: InputMaybe<Scalars['String']>;
};

export type RecordBallotPayload = {
  __typename?: 'RecordBallotPayload';
  ballot?: Maybe<Ballot>;
};

export type ReportPostInput = {
  data?: InputMaybe<ReportPostInputData>;
};

export type ReportPostInputData = {
  activityId: Scalars['ID'];
  actor: Scalars['ID'];
  postId: Scalars['ID'];
};

export type ReportPostPayload = {
  __typename?: 'ReportPostPayload';
  interaction?: Maybe<Interaction>;
  post?: Maybe<Post>;
  status?: Maybe<PostStatus>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type SignTypeDomain = {
  __typename?: 'SignTypeDomain';
  chainId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  verifyingContract?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SignTypeMemberPayload = {
  __typename?: 'SignTypeMemberPayload';
  feeds?: Maybe<FeedsStatus>;
  jwt?: Maybe<Scalars['String']>;
  push?: Maybe<Push>;
  user: UsersPermissionsUser;
};

export type SubmitAssessInput = {
  data?: InputMaybe<SubmitAssessInputData>;
};

export type SubmitAssessInputData = {
  content?: InputMaybe<Array<InputMaybe<Scalars['PostContentDynamicZoneInput']>>>;
  proposalId: Scalars['String'];
  transactionHash?: InputMaybe<Scalars['String']>;
};

export type SubmitAssessPayload = {
  __typename?: 'SubmitAssessPayload';
  post?: Maybe<Post>;
};

export type SubmitBallotInput = {
  data?: InputMaybe<SubmitBallotInputData>;
};

export type SubmitBallotInputData = {
  address: Scalars['String'];
  choice: Scalars['Int'];
  proposalId: Scalars['String'];
};

export type SubmitBallotPayload = {
  __typename?: 'SubmitBallotPayload';
  ballot?: Maybe<Ballot>;
  commitment?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

/**
 * 액티비티를 구성하는 내용 중 설문조사 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 설문조사 양식 뿐만 아니라 여러 설문조사에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 작성 방법:
 * mutation {
 *   createSurvey (input:
 *     {
 *       data: {
 *         title: "서비스 만족도 조사",
 *         description: "디포라 서비스에 대한 사용자 여러분의 만족도에 대한 설문조사입니다. 귀하의 소중한 의견을 반영하여 더욱 향상된 서비스 제공하고자 하오니 적극적인 참여 부탁드립니다.",
 *         isTemplate: true,
 *         option: {
 *           __typename: "ComponentActivityTemplateOption",
 *           scope: SYSTEM,
 *           availableIn: ""
 *         },
 *         questions: []
 *         activity: null,
 *         template: null,
 *         workspace: 1
 *       }
 *     }
 *   )
 *   {
 *     survey {
 *       ...surveyFields
 *     }
 *   }
 * }
 *
 * #참고: 위에서 사용한 surveyFields fragment는 아래와 같다.
 * fragment surveyFields on Survey {
 *   id
 *   title
 *   description
 *   option {
 *     ... on ComponentActivitySurveyOption {
 *       resubmit
 *     }
 *     ... on ComponentActivityTemplateOption {
 *       scope
 *       availableIn
 *     }
 *   }
 *   questions {
 *     ...questionFields
 *   }
 *   workspace {
 *     id
 *   }
 *   activity {
 *     id
 *   }
 * }
 *
 * fragment questionFields on Question {
 *   id
 *   type
 *   title
 *   description
 *   content {
 *     ... on ComponentActivityScaleOption {
 *       type
 *       min
 *       max
 *       customLabel {
 *         key
 *         label
 *       }
 *     }
 *     ... on ComponentActivityTextOption {
 *       characterLimit
 *     }
 *     ... on ComponentActivityChoiceOptionList {
 *       item {
 *         sequence
 *         label
 *         text
 *         image {
 *           url
 *         }
 *         value
 *       }
 *     }
 *   }
 *   tags
 * }
 */
export type Survey = {
  __typename?: 'Survey';
  activity?: Maybe<Activity>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Member>;
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<Question>>>;
  scaleResults?: Maybe<Array<Maybe<ComponentSurveyScaleResult>>>;
  type?: Maybe<Enum_Survey_Type>;
  updatedAt: Scalars['DateTime'];
};


/**
 * 액티비티를 구성하는 내용 중 설문조사 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 설문조사 양식 뿐만 아니라 여러 설문조사에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 작성 방법:
 * mutation {
 *   createSurvey (input:
 *     {
 *       data: {
 *         title: "서비스 만족도 조사",
 *         description: "디포라 서비스에 대한 사용자 여러분의 만족도에 대한 설문조사입니다. 귀하의 소중한 의견을 반영하여 더욱 향상된 서비스 제공하고자 하오니 적극적인 참여 부탁드립니다.",
 *         isTemplate: true,
 *         option: {
 *           __typename: "ComponentActivityTemplateOption",
 *           scope: SYSTEM,
 *           availableIn: ""
 *         },
 *         questions: []
 *         activity: null,
 *         template: null,
 *         workspace: 1
 *       }
 *     }
 *   )
 *   {
 *     survey {
 *       ...surveyFields
 *     }
 *   }
 * }
 *
 * #참고: 위에서 사용한 surveyFields fragment는 아래와 같다.
 * fragment surveyFields on Survey {
 *   id
 *   title
 *   description
 *   option {
 *     ... on ComponentActivitySurveyOption {
 *       resubmit
 *     }
 *     ... on ComponentActivityTemplateOption {
 *       scope
 *       availableIn
 *     }
 *   }
 *   questions {
 *     ...questionFields
 *   }
 *   workspace {
 *     id
 *   }
 *   activity {
 *     id
 *   }
 * }
 *
 * fragment questionFields on Question {
 *   id
 *   type
 *   title
 *   description
 *   content {
 *     ... on ComponentActivityScaleOption {
 *       type
 *       min
 *       max
 *       customLabel {
 *         key
 *         label
 *       }
 *     }
 *     ... on ComponentActivityTextOption {
 *       characterLimit
 *     }
 *     ... on ComponentActivityChoiceOptionList {
 *       item {
 *         sequence
 *         label
 *         text
 *         image {
 *           url
 *         }
 *         value
 *       }
 *     }
 *   }
 *   tags
 * }
 */
export type SurveyQuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type SurveyAggregator = {
  __typename?: 'SurveyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SurveyConnection = {
  __typename?: 'SurveyConnection';
  aggregate?: Maybe<SurveyAggregator>;
  groupBy?: Maybe<SurveyGroupBy>;
  values?: Maybe<Array<Maybe<Survey>>>;
};

export type SurveyConnectionActivity = {
  __typename?: 'SurveyConnectionActivity';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SurveyConnectionCreatedAt = {
  __typename?: 'SurveyConnectionCreatedAt';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SurveyConnectionCreator = {
  __typename?: 'SurveyConnectionCreator';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SurveyConnectionId = {
  __typename?: 'SurveyConnectionId';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SurveyConnectionType = {
  __typename?: 'SurveyConnectionType';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SurveyConnectionUpdatedAt = {
  __typename?: 'SurveyConnectionUpdatedAt';
  connection?: Maybe<SurveyConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SurveyGroupBy = {
  __typename?: 'SurveyGroupBy';
  activity?: Maybe<Array<Maybe<SurveyConnectionActivity>>>;
  createdAt?: Maybe<Array<Maybe<SurveyConnectionCreatedAt>>>;
  creator?: Maybe<Array<Maybe<SurveyConnectionCreator>>>;
  id?: Maybe<Array<Maybe<SurveyConnectionId>>>;
  type?: Maybe<Array<Maybe<SurveyConnectionType>>>;
  updatedAt?: Maybe<Array<Maybe<SurveyConnectionUpdatedAt>>>;
};

export type SurveyInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  scaleResults?: InputMaybe<Array<InputMaybe<ComponentSurveyScaleResultInput>>>;
  type?: InputMaybe<Enum_Survey_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TogglePostLikeInput = {
  data?: InputMaybe<TogglePostLikeInputData>;
};

export type TogglePostLikeInputData = {
  isLike: Scalars['Boolean'];
  memberId: Scalars['String'];
  postId: Scalars['String'];
};

export type TogglePostLikePayload = {
  __typename?: 'TogglePostLikePayload';
  isLike?: Maybe<Scalars['Boolean']>;
  post?: Maybe<Post>;
  status?: Maybe<PostStatus>;
};

export type Transaction = {
  __typename?: 'Transaction';
  ballot?: Maybe<Ballot>;
  blockNumber?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  from?: Maybe<Scalars['String']>;
  gasPrice?: Maybe<Scalars['Long']>;
  gasUsed?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  proposal?: Maybe<Proposal>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transactionHash: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionAggregator = {
  __typename?: 'TransactionAggregator';
  avg?: Maybe<TransactionAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TransactionAggregatorMax>;
  min?: Maybe<TransactionAggregatorMin>;
  sum?: Maybe<TransactionAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TransactionAggregatorAvg = {
  __typename?: 'TransactionAggregatorAvg';
  blockNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorMax = {
  __typename?: 'TransactionAggregatorMax';
  blockNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorMin = {
  __typename?: 'TransactionAggregatorMin';
  blockNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorSum = {
  __typename?: 'TransactionAggregatorSum';
  blockNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  aggregate?: Maybe<TransactionAggregator>;
  groupBy?: Maybe<TransactionGroupBy>;
  values?: Maybe<Array<Maybe<Transaction>>>;
};

export type TransactionConnectionBallot = {
  __typename?: 'TransactionConnectionBallot';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionBlockNumber = {
  __typename?: 'TransactionConnectionBlockNumber';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type TransactionConnectionCreatedAt = {
  __typename?: 'TransactionConnectionCreatedAt';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TransactionConnectionFrom = {
  __typename?: 'TransactionConnectionFrom';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionConnectionGasPrice = {
  __typename?: 'TransactionConnectionGasPrice';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionGasUsed = {
  __typename?: 'TransactionConnectionGasUsed';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionId = {
  __typename?: 'TransactionConnectionId';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionMethod = {
  __typename?: 'TransactionConnectionMethod';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionConnectionPost = {
  __typename?: 'TransactionConnectionPost';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionProposal = {
  __typename?: 'TransactionConnectionProposal';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionConnectionReason = {
  __typename?: 'TransactionConnectionReason';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionConnectionStatus = {
  __typename?: 'TransactionConnectionStatus';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type TransactionConnectionTransactionHash = {
  __typename?: 'TransactionConnectionTransactionHash';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionConnectionUpdatedAt = {
  __typename?: 'TransactionConnectionUpdatedAt';
  connection?: Maybe<TransactionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TransactionGroupBy = {
  __typename?: 'TransactionGroupBy';
  ballot?: Maybe<Array<Maybe<TransactionConnectionBallot>>>;
  blockNumber?: Maybe<Array<Maybe<TransactionConnectionBlockNumber>>>;
  createdAt?: Maybe<Array<Maybe<TransactionConnectionCreatedAt>>>;
  from?: Maybe<Array<Maybe<TransactionConnectionFrom>>>;
  gasPrice?: Maybe<Array<Maybe<TransactionConnectionGasPrice>>>;
  gasUsed?: Maybe<Array<Maybe<TransactionConnectionGasUsed>>>;
  id?: Maybe<Array<Maybe<TransactionConnectionId>>>;
  method?: Maybe<Array<Maybe<TransactionConnectionMethod>>>;
  post?: Maybe<Array<Maybe<TransactionConnectionPost>>>;
  proposal?: Maybe<Array<Maybe<TransactionConnectionProposal>>>;
  reason?: Maybe<Array<Maybe<TransactionConnectionReason>>>;
  status?: Maybe<Array<Maybe<TransactionConnectionStatus>>>;
  transactionHash?: Maybe<Array<Maybe<TransactionConnectionTransactionHash>>>;
  updatedAt?: Maybe<Array<Maybe<TransactionConnectionUpdatedAt>>>;
};

export type TransactionInput = {
  ballot?: InputMaybe<Scalars['ID']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  from?: InputMaybe<Scalars['String']>;
  gasPrice?: InputMaybe<Scalars['Long']>;
  gasUsed?: InputMaybe<Scalars['Long']>;
  method?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transactionHash: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UpdateReceiptData = {
  hash: Scalars['String'];
};

export type UpdateReceiptInput = {
  data?: InputMaybe<UpdateReceiptData>;
};

export type UpdateReceiptPayload = {
  __typename?: 'UpdateReceiptPayload';
  status?: Maybe<Scalars['Int']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  doc_hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionDoc_Hash = {
  __typename?: 'UploadFileConnectionDoc_hash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  doc_hash?: Maybe<Array<Maybe<UploadFileConnectionDoc_Hash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserAlarmStatusInput = {
  alarmStatus?: InputMaybe<AlarmStatus>;
};

export type UserFeed = {
  __typename?: 'UserFeed';
  createdAt: Scalars['DateTime'];
  etcNews?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  likeProposalsNews?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  myCommentsNews?: Maybe<Scalars['Boolean']>;
  myProposalsNews?: Maybe<Scalars['Boolean']>;
  newProposalsNews?: Maybe<Scalars['Boolean']>;
  pushes?: Maybe<Array<Maybe<Push>>>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};


export type UserFeedPushesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UserFeedAggregator = {
  __typename?: 'UserFeedAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserFeedConnection = {
  __typename?: 'UserFeedConnection';
  aggregate?: Maybe<UserFeedAggregator>;
  groupBy?: Maybe<UserFeedGroupBy>;
  values?: Maybe<Array<Maybe<UserFeed>>>;
};

export type UserFeedConnectionCreatedAt = {
  __typename?: 'UserFeedConnectionCreatedAt';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserFeedConnectionEtcNews = {
  __typename?: 'UserFeedConnectionEtcNews';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserFeedConnectionId = {
  __typename?: 'UserFeedConnectionId';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserFeedConnectionLikeProposalsNews = {
  __typename?: 'UserFeedConnectionLikeProposalsNews';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserFeedConnectionLocale = {
  __typename?: 'UserFeedConnectionLocale';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UserFeedConnectionMyCommentsNews = {
  __typename?: 'UserFeedConnectionMyCommentsNews';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserFeedConnectionMyProposalsNews = {
  __typename?: 'UserFeedConnectionMyProposalsNews';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserFeedConnectionNewProposalsNews = {
  __typename?: 'UserFeedConnectionNewProposalsNews';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserFeedConnectionUpdatedAt = {
  __typename?: 'UserFeedConnectionUpdatedAt';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserFeedConnectionUser = {
  __typename?: 'UserFeedConnectionUser';
  connection?: Maybe<UserFeedConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserFeedGroupBy = {
  __typename?: 'UserFeedGroupBy';
  createdAt?: Maybe<Array<Maybe<UserFeedConnectionCreatedAt>>>;
  etcNews?: Maybe<Array<Maybe<UserFeedConnectionEtcNews>>>;
  id?: Maybe<Array<Maybe<UserFeedConnectionId>>>;
  likeProposalsNews?: Maybe<Array<Maybe<UserFeedConnectionLikeProposalsNews>>>;
  locale?: Maybe<Array<Maybe<UserFeedConnectionLocale>>>;
  myCommentsNews?: Maybe<Array<Maybe<UserFeedConnectionMyCommentsNews>>>;
  myProposalsNews?: Maybe<Array<Maybe<UserFeedConnectionMyProposalsNews>>>;
  newProposalsNews?: Maybe<Array<Maybe<UserFeedConnectionNewProposalsNews>>>;
  updatedAt?: Maybe<Array<Maybe<UserFeedConnectionUpdatedAt>>>;
  user?: Maybe<Array<Maybe<UserFeedConnectionUser>>>;
};

export type UserFeedInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  etcNews?: InputMaybe<Scalars['Boolean']>;
  likeProposalsNews?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  myCommentsNews?: InputMaybe<Scalars['Boolean']>;
  myProposalsNews?: InputMaybe<Scalars['Boolean']>;
  newProposalsNews?: InputMaybe<Scalars['Boolean']>;
  pushes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  member?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UserPushTokenInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  pushId?: InputMaybe<Scalars['ID']>;
  pushToken?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeEx = {
  __typename?: 'UsersPermissionsMeEx';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  member?: Maybe<Member>;
  role?: Maybe<UsersPermissionsMeRole>;
  user_feed?: Maybe<UserFeed>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  member?: Maybe<Member>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  user_feed?: Maybe<UserFeed>;
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionMember = {
  __typename?: 'UsersPermissionsUserConnectionMember';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUser_Feed = {
  __typename?: 'UsersPermissionsUserConnectionUser_feed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  member?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMember>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  user_feed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUser_Feed>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Validator = {
  __typename?: 'Validator';
  address?: Maybe<Scalars['String']>;
  assessUpdate?: Maybe<Scalars['Int']>;
  ballotUpdate?: Maybe<Scalars['Int']>;
  choice?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  proposal?: Maybe<Proposal>;
  publicKey?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ValidatorAggregator = {
  __typename?: 'ValidatorAggregator';
  avg?: Maybe<ValidatorAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ValidatorAggregatorMax>;
  min?: Maybe<ValidatorAggregatorMin>;
  sum?: Maybe<ValidatorAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ValidatorAggregatorAvg = {
  __typename?: 'ValidatorAggregatorAvg';
  assessUpdate?: Maybe<Scalars['Float']>;
  ballotUpdate?: Maybe<Scalars['Float']>;
  choice?: Maybe<Scalars['Float']>;
};

export type ValidatorAggregatorMax = {
  __typename?: 'ValidatorAggregatorMax';
  assessUpdate?: Maybe<Scalars['Float']>;
  ballotUpdate?: Maybe<Scalars['Float']>;
  choice?: Maybe<Scalars['Float']>;
};

export type ValidatorAggregatorMin = {
  __typename?: 'ValidatorAggregatorMin';
  assessUpdate?: Maybe<Scalars['Float']>;
  ballotUpdate?: Maybe<Scalars['Float']>;
  choice?: Maybe<Scalars['Float']>;
};

export type ValidatorAggregatorSum = {
  __typename?: 'ValidatorAggregatorSum';
  assessUpdate?: Maybe<Scalars['Float']>;
  ballotUpdate?: Maybe<Scalars['Float']>;
  choice?: Maybe<Scalars['Float']>;
};

export type ValidatorConnection = {
  __typename?: 'ValidatorConnection';
  aggregate?: Maybe<ValidatorAggregator>;
  groupBy?: Maybe<ValidatorGroupBy>;
  values?: Maybe<Array<Maybe<Validator>>>;
};

export type ValidatorConnectionAddress = {
  __typename?: 'ValidatorConnectionAddress';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ValidatorConnectionAssessUpdate = {
  __typename?: 'ValidatorConnectionAssessUpdate';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ValidatorConnectionBallotUpdate = {
  __typename?: 'ValidatorConnectionBallotUpdate';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ValidatorConnectionChoice = {
  __typename?: 'ValidatorConnectionChoice';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ValidatorConnectionCreatedAt = {
  __typename?: 'ValidatorConnectionCreatedAt';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ValidatorConnectionId = {
  __typename?: 'ValidatorConnectionId';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ValidatorConnectionProposal = {
  __typename?: 'ValidatorConnectionProposal';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ValidatorConnectionPublicKey = {
  __typename?: 'ValidatorConnectionPublicKey';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ValidatorConnectionUpdatedAt = {
  __typename?: 'ValidatorConnectionUpdatedAt';
  connection?: Maybe<ValidatorConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ValidatorGroupBy = {
  __typename?: 'ValidatorGroupBy';
  address?: Maybe<Array<Maybe<ValidatorConnectionAddress>>>;
  assessUpdate?: Maybe<Array<Maybe<ValidatorConnectionAssessUpdate>>>;
  ballotUpdate?: Maybe<Array<Maybe<ValidatorConnectionBallotUpdate>>>;
  choice?: Maybe<Array<Maybe<ValidatorConnectionChoice>>>;
  createdAt?: Maybe<Array<Maybe<ValidatorConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ValidatorConnectionId>>>;
  proposal?: Maybe<Array<Maybe<ValidatorConnectionProposal>>>;
  publicKey?: Maybe<Array<Maybe<ValidatorConnectionPublicKey>>>;
  updatedAt?: Maybe<Array<Maybe<ValidatorConnectionUpdatedAt>>>;
};

export type ValidatorInput = {
  address?: InputMaybe<Scalars['String']>;
  assessUpdate?: InputMaybe<Scalars['Int']>;
  ballotUpdate?: InputMaybe<Scalars['Int']>;
  choice?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  hasAssess?: InputMaybe<Scalars['Boolean']>;
  hasBallot?: InputMaybe<Scalars['Boolean']>;
  proposal?: InputMaybe<Scalars['ID']>;
  publicKey?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  android?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  ios?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type VersionInput = {
  android?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ios?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type VoteCountPayload = {
  __typename?: 'VoteCountPayload';
  assessCount?: Maybe<Scalars['Int']>;
  ballotCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  validatorCount?: Maybe<Scalars['Int']>;
};

export type VotePeriodPayload = {
  __typename?: 'VotePeriodPayload';
  begin?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type VoteStatusPayload = {
  __typename?: 'VoteStatusPayload';
  canWithdrawAt?: Maybe<Scalars['Int']>;
  countingFinishTime?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  isProposer?: Maybe<Scalars['Boolean']>;
  isValidVoter?: Maybe<Scalars['Boolean']>;
  needVote?: Maybe<Scalars['Boolean']>;
  validatorSize?: Maybe<Scalars['String']>;
  voteProposalState?: Maybe<Enum_Vote_Proposal_State>;
  voteResult?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CheckDupUserNamePayload = {
  __typename?: 'checkDupUserNamePayload';
  duplicated?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type CreateActivityInput = {
  data?: InputMaybe<ActivityInput>;
};

export type CreateActivityPayload = {
  __typename?: 'createActivityPayload';
  activity?: Maybe<Activity>;
};

export type CreateBallotInput = {
  data?: InputMaybe<BallotInput>;
};

export type CreateBallotPayload = {
  __typename?: 'createBallotPayload';
  ballot?: Maybe<Ballot>;
};

export type CreateBoardInput = {
  data?: InputMaybe<BoardInput>;
};

export type CreateBoardPayload = {
  __typename?: 'createBoardPayload';
  board?: Maybe<Board>;
};

export type CreateFeedInput = {
  data?: InputMaybe<FeedInput>;
};

export type CreateFeedPayload = {
  __typename?: 'createFeedPayload';
  feed?: Maybe<Feeds>;
};

export type CreateFollowInput = {
  data?: InputMaybe<FollowInput>;
};

export type CreateFollowPayload = {
  __typename?: 'createFollowPayload';
  follow?: Maybe<Follow>;
};

export type CreateInteractionInput = {
  data?: InputMaybe<InteractionInput>;
};

export type CreateInteractionPayload = {
  __typename?: 'createInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export type CreateMemberInput = {
  data?: InputMaybe<MemberInput>;
};

export type CreateMemberPayload = {
  __typename?: 'createMemberPayload';
  member?: Maybe<Member>;
};

export type CreateMemberRoleInput = {
  data?: InputMaybe<MemberRoleInput>;
};

export type CreateMemberRolePayload = {
  __typename?: 'createMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export type CreatePollInput = {
  data?: InputMaybe<PollInput>;
};

export type CreatePollPayload = {
  __typename?: 'createPollPayload';
  poll?: Maybe<Poll>;
};

export type CreatePostInput = {
  data?: InputMaybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type CreateProposalInput = {
  data?: InputMaybe<ProposalInput>;
};

export type CreateProposalPayload = {
  __typename?: 'createProposalPayload';
  proposal?: Maybe<Proposal>;
};

export type CreatePushInput = {
  data?: InputMaybe<PushInput>;
};

export type CreatePushPayload = {
  __typename?: 'createPushPayload';
  push?: Maybe<Push>;
};

export type CreateQuestionInput = {
  data?: InputMaybe<QuestionInput>;
};

export type CreateQuestionPayload = {
  __typename?: 'createQuestionPayload';
  question?: Maybe<Question>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSurveyInput = {
  data?: InputMaybe<SurveyInput>;
};

export type CreateSurveyPayload = {
  __typename?: 'createSurveyPayload';
  survey?: Maybe<Survey>;
};

export type CreateTransactionInput = {
  data?: InputMaybe<TransactionInput>;
};

export type CreateTransactionPayload = {
  __typename?: 'createTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type CreateUserFeedInput = {
  data?: InputMaybe<UserFeedInput>;
};

export type CreateUserFeedPayload = {
  __typename?: 'createUserFeedPayload';
  userFeed?: Maybe<UserFeed>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateValidatorInput = {
  data?: InputMaybe<ValidatorInput>;
};

export type CreateValidatorPayload = {
  __typename?: 'createValidatorPayload';
  validator?: Maybe<Validator>;
};

export type DeleteActivityInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteActivityPayload = {
  __typename?: 'deleteActivityPayload';
  activity?: Maybe<Activity>;
};

export type DeleteAgoraPayload = {
  __typename?: 'deleteAgoraPayload';
  agora?: Maybe<Agora>;
};

export type DeleteBallotInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBallotPayload = {
  __typename?: 'deleteBallotPayload';
  ballot?: Maybe<Ballot>;
};

export type DeleteBoardInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBoardPayload = {
  __typename?: 'deleteBoardPayload';
  board?: Maybe<Board>;
};

export type DeleteCopyrightPayload = {
  __typename?: 'deleteCopyrightPayload';
  copyright?: Maybe<Copyright>;
};

export type DeleteFeedInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFeedPayload = {
  __typename?: 'deleteFeedPayload';
  feed?: Maybe<Feeds>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteFollowInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFollowPayload = {
  __typename?: 'deleteFollowPayload';
  follow?: Maybe<Follow>;
};

export type DeleteHistoryPayload = {
  __typename?: 'deleteHistoryPayload';
  history?: Maybe<History>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type DeleteInteractionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteInteractionPayload = {
  __typename?: 'deleteInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export type DeleteMemberInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteMemberPayload = {
  __typename?: 'deleteMemberPayload';
  member?: Maybe<Member>;
};

export type DeleteMemberRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteMemberRolePayload = {
  __typename?: 'deleteMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export type DeletePollInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePollPayload = {
  __typename?: 'deletePollPayload';
  poll?: Maybe<Poll>;
};

export type DeletePostInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export type DeleteProposalInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProposalPayload = {
  __typename?: 'deleteProposalPayload';
  proposal?: Maybe<Proposal>;
};

export type DeletePushInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePushPayload = {
  __typename?: 'deletePushPayload';
  push?: Maybe<Push>;
};

export type DeleteQuestionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteQuestionPayload = {
  __typename?: 'deleteQuestionPayload';
  question?: Maybe<Question>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSurveyInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteSurveyPayload = {
  __typename?: 'deleteSurveyPayload';
  survey?: Maybe<Survey>;
};

export type DeleteTransactionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTransactionPayload = {
  __typename?: 'deleteTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type DeleteUserFeedInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserFeedPayload = {
  __typename?: 'deleteUserFeedPayload';
  userFeed?: Maybe<UserFeed>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteValidatorInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteValidatorPayload = {
  __typename?: 'deleteValidatorPayload';
  validator?: Maybe<Validator>;
};

export type DeleteVersionPayload = {
  __typename?: 'deleteVersionPayload';
  version?: Maybe<Version>;
};

export type EditActivityInput = {
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  board?: InputMaybe<Scalars['ID']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  participantCount?: InputMaybe<Scalars['Int']>;
  poll?: InputMaybe<Scalars['ID']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  proposal?: InputMaybe<Scalars['ID']>;
  readCount?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Enum_Activity_Status>;
  survey?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Activity_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAgoraInput = {
  agoraScanUrl?: InputMaybe<Scalars['String']>;
  boaScanUrl?: InputMaybe<Scalars['String']>;
  commonsBudgetAddress?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  privacyTermUrl?: InputMaybe<Scalars['String']>;
  proposalFundMax?: InputMaybe<Scalars['String']>;
  proposalFundMin?: InputMaybe<Scalars['String']>;
  providerUrl?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userServiceTermUrl?: InputMaybe<Scalars['String']>;
  voteraVoteAddress?: InputMaybe<Scalars['String']>;
};

export type EditBallotInput = {
  cipherText?: InputMaybe<Scalars['String']>;
  commitment?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditBoardInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentActivityChoiceOptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EditComponentActivityChoiceOptionListInput = {
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Array<InputMaybe<EditComponentActivityChoiceOptionInput>>>;
};

export type EditComponentActivityCustomLabelInput = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
};

export type EditComponentActivityPollOptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  isOptionsShuffled?: InputMaybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: InputMaybe<Scalars['Boolean']>;
  isResubmittable?: InputMaybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: InputMaybe<Scalars['Boolean']>;
};

export type EditComponentActivityScaleOptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type EditComponentActivitySurveyOptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  isResubmittable?: InputMaybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: InputMaybe<Scalars['Boolean']>;
};

export type EditComponentActivityTextOptionInput = {
  characterLimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCommonContactInput = {
  alias?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentCommonPeriodInput = {
  begin?: InputMaybe<Scalars['Date']>;
  end?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCommonRichtextInstructionInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCommonSimpleInstructionInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentHomepageCompanyEventInput = {
  article?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Enum_Componenthomepagecompanyevent_Category>;
  eventDate?: InputMaybe<Scalars['Date']>;
  eventDateText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type EditComponentInteractionLikeInput = {
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Componentinteractionlike_Type>;
};

export type EditComponentInteractionReadInput = {
  count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentInteractionReportInput = {
  id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Enum_Componentinteractionreport_Status>;
  text?: InputMaybe<Scalars['String']>;
};

export type EditComponentPostAnswerListInput = {
  answer: Array<Scalars['ComponentPostAnswerListAnswerDynamicZoneInput']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentPostArticleInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPostCommentOnActivityInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type EditComponentPostCommentOnPostInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type EditComponentPostReplyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  replyTo?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type EditComponentPostScaleAnswerInput = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EditComponentPostSelectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EditComponentPostSingleChoiceAnswerInput = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['ID']>;
  selection?: InputMaybe<Array<InputMaybe<EditComponentPostSelectionInput>>>;
  sequence?: InputMaybe<Scalars['Int']>;
};

export type EditComponentSurveyScaleResultInput = {
  count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EditComponentSurveySingleChoiceOptionResultInput = {
  count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EditCopyrightInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  text?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFeedInput = {
  content?: InputMaybe<Scalars['JSON']>;
  created_by?: InputMaybe<Scalars['ID']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  navigation?: InputMaybe<Scalars['JSON']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Feeds_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  doc_hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditFollowInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  isFeedActive?: InputMaybe<Scalars['Boolean']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Follow_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
};

export type EditHistoryInput = {
  companyEvent?: InputMaybe<Array<InputMaybe<EditComponentHomepageCompanyEventInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditHomeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  greeting?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditInteractionInput = {
  action: Array<Scalars['InteractionActionDynamicZoneInput']>;
  activity?: InputMaybe<Scalars['ID']>;
  actor?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  post?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Interaction_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditMemberInput = {
  address?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  lastAccessTime?: InputMaybe<Scalars['DateTime']>;
  lastSignTime?: InputMaybe<Scalars['Int']>;
  lastSignature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Member_Status>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditMemberRoleInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  member?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  scope?: InputMaybe<Enum_Memberrole_Scope>;
  status?: InputMaybe<Enum_Memberrole_Status>;
  type?: InputMaybe<Enum_Memberrole_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPollInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPostInput = {
  activity?: InputMaybe<Scalars['ID']>;
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  childPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commentCount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Array<Scalars['PostContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  parentPost?: InputMaybe<Scalars['ID']>;
  readCount?: InputMaybe<Scalars['Int']>;
  reportCount?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Enum_Post_Status>;
  type?: InputMaybe<Enum_Post_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  writer?: InputMaybe<Scalars['ID']>;
};

export type EditProposalInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  assessEnd?: InputMaybe<Scalars['Int']>;
  assessPeriod?: InputMaybe<EditComponentCommonPeriodInput>;
  assessStart?: InputMaybe<Scalars['Int']>;
  attachment?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commonsBudgetAddress?: InputMaybe<Scalars['String']>;
  createTx?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  doc_hash?: InputMaybe<Scalars['String']>;
  fundingAmount?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['ID']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  paidComplete?: InputMaybe<Scalars['Boolean']>;
  proposalId?: InputMaybe<Scalars['String']>;
  proposal_begin?: InputMaybe<Scalars['Int']>;
  proposal_fee?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Proposal_Status>;
  timeAlarm_notified?: InputMaybe<Scalars['Boolean']>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Enum_Proposal_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  validators?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  votePeriod?: InputMaybe<EditComponentCommonPeriodInput>;
  vote_end?: InputMaybe<Scalars['Int']>;
  vote_open?: InputMaybe<Scalars['Int']>;
  vote_start?: InputMaybe<Scalars['Int']>;
  voteraVoteAddress?: InputMaybe<Scalars['String']>;
};

export type EditPushInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
};

export type EditQuestionInput = {
  content: Array<Scalars['QuestionContentDynamicZoneInput']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  poll?: InputMaybe<Scalars['ID']>;
  sequence?: InputMaybe<Scalars['Int']>;
  survey?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Question_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditSurveyInput = {
  activity?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  scaleResults?: InputMaybe<Array<InputMaybe<EditComponentSurveyScaleResultInput>>>;
  type?: InputMaybe<Enum_Survey_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTransactionInput = {
  ballot?: InputMaybe<Scalars['ID']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  from?: InputMaybe<Scalars['String']>;
  gasPrice?: InputMaybe<Scalars['Long']>;
  gasUsed?: InputMaybe<Scalars['Long']>;
  method?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<Scalars['ID']>;
  proposal?: InputMaybe<Scalars['ID']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserFeedInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  etcNews?: InputMaybe<Scalars['Boolean']>;
  likeProposalsNews?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  myCommentsNews?: InputMaybe<Scalars['Boolean']>;
  myProposalsNews?: InputMaybe<Scalars['Boolean']>;
  newProposalsNews?: InputMaybe<Scalars['Boolean']>;
  pushes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_feed?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditValidatorInput = {
  address?: InputMaybe<Scalars['String']>;
  assessUpdate?: InputMaybe<Scalars['Int']>;
  ballotUpdate?: InputMaybe<Scalars['Int']>;
  choice?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  hasAssess?: InputMaybe<Scalars['Boolean']>;
  hasBallot?: InputMaybe<Scalars['Boolean']>;
  proposal?: InputMaybe<Scalars['ID']>;
  publicKey?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditVersionInput = {
  android?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ios?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type SignInMemberData = {
  address: Scalars['String'];
  signTime: Scalars['String'];
  signature: Scalars['String'];
};

export type SignInMemberInput = {
  data?: InputMaybe<SignInMemberData>;
};

export type SignUpMemberData = {
  address: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  pushToken?: InputMaybe<Scalars['String']>;
  signTime: Scalars['String'];
  signature: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpMemberInput = {
  data?: InputMaybe<SignUpMemberData>;
};

export type UpdateActivityInput = {
  data?: InputMaybe<EditActivityInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateActivityPayload = {
  __typename?: 'updateActivityPayload';
  activity?: Maybe<Activity>;
};

export type UpdateAgoraInput = {
  data?: InputMaybe<EditAgoraInput>;
};

export type UpdateAgoraPayload = {
  __typename?: 'updateAgoraPayload';
  agora?: Maybe<Agora>;
};

export type UpdateBallotInput = {
  data?: InputMaybe<EditBallotInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBallotPayload = {
  __typename?: 'updateBallotPayload';
  ballot?: Maybe<Ballot>;
};

export type UpdateBoardInput = {
  data?: InputMaybe<EditBoardInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBoardPayload = {
  __typename?: 'updateBoardPayload';
  board?: Maybe<Board>;
};

export type UpdateCopyrightInput = {
  data?: InputMaybe<EditCopyrightInput>;
};

export type UpdateCopyrightPayload = {
  __typename?: 'updateCopyrightPayload';
  copyright?: Maybe<Copyright>;
};

export type UpdateFeedInput = {
  data?: InputMaybe<EditFeedInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFeedPayload = {
  __typename?: 'updateFeedPayload';
  feed?: Maybe<Feeds>;
};

export type UpdateFollowInput = {
  data?: InputMaybe<EditFollowInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFollowPayload = {
  __typename?: 'updateFollowPayload';
  follow?: Maybe<Follow>;
};

export type UpdateHistoryInput = {
  data?: InputMaybe<EditHistoryInput>;
};

export type UpdateHistoryPayload = {
  __typename?: 'updateHistoryPayload';
  history?: Maybe<History>;
};

export type UpdateHomeInput = {
  data?: InputMaybe<EditHomeInput>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type UpdateInteractionInput = {
  data?: InputMaybe<EditInteractionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateInteractionPayload = {
  __typename?: 'updateInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export type UpdateMemberInput = {
  data?: InputMaybe<EditMemberInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateMemberPayload = {
  __typename?: 'updateMemberPayload';
  member?: Maybe<Member>;
};

export type UpdateMemberRoleInput = {
  data?: InputMaybe<EditMemberRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateMemberRolePayload = {
  __typename?: 'updateMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export type UpdatePollInput = {
  data?: InputMaybe<EditPollInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePollPayload = {
  __typename?: 'updatePollPayload';
  poll?: Maybe<Poll>;
};

export type UpdatePostInput = {
  data?: InputMaybe<EditPostInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type UpdateProposalInput = {
  data?: InputMaybe<EditProposalInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProposalPayload = {
  __typename?: 'updateProposalPayload';
  proposal?: Maybe<Proposal>;
};

export type UpdatePushInput = {
  data?: InputMaybe<EditPushInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePushPayload = {
  __typename?: 'updatePushPayload';
  push?: Maybe<Push>;
};

export type UpdateQuestionInput = {
  data?: InputMaybe<EditQuestionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateQuestionPayload = {
  __typename?: 'updateQuestionPayload';
  question?: Maybe<Question>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSurveyInput = {
  data?: InputMaybe<EditSurveyInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateSurveyPayload = {
  __typename?: 'updateSurveyPayload';
  survey?: Maybe<Survey>;
};

export type UpdateTransactionInput = {
  data?: InputMaybe<EditTransactionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTransactionPayload = {
  __typename?: 'updateTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type UpdateUserAlarmStatusInput = {
  data?: InputMaybe<UserAlarmStatusInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserFeedInput = {
  data?: InputMaybe<EditUserFeedInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserFeedPayload = {
  __typename?: 'updateUserFeedPayload';
  userFeed?: Maybe<UserFeed>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPushTokenInput = {
  data?: InputMaybe<UserPushTokenInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateValidatorInput = {
  data?: InputMaybe<EditValidatorInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateValidatorPayload = {
  __typename?: 'updateValidatorPayload';
  validator?: Maybe<Validator>;
};

export type UpdateVersionInput = {
  data?: InputMaybe<EditVersionInput>;
};

export type UpdateVersionPayload = {
  __typename?: 'updateVersionPayload';
  version?: Maybe<Version>;
};

export type GetActivityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetActivityQuery = { __typename?: 'Query', activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string, questions?: Array<{ __typename?: 'Question', id: string, title?: string | null, description?: string | null, type: Enum_Question_Type, sequence: number, content: Array<{ __typename?: 'ComponentActivityChoiceOptionList', id: string, item?: Array<{ __typename?: 'ComponentActivityChoiceOption', id: string, sequence?: number | null, text?: string | null } | null> | null } | { __typename?: 'ComponentActivityScaleOption', id: string, min?: number | null, max: number } | { __typename?: 'ComponentActivityTextOption' } | null> } | null> | null } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string, title?: string | null, description?: string | null, type: Enum_Question_Type, sequence: number, content: Array<{ __typename?: 'ComponentActivityChoiceOptionList', id: string, item?: Array<{ __typename?: 'ComponentActivityChoiceOption', id: string, sequence?: number | null, text?: string | null } | null> | null } | { __typename?: 'ComponentActivityScaleOption', id: string, min?: number | null, max: number } | { __typename?: 'ComponentActivityTextOption' } | null> } | null> | null } | null } | null };

export type GetMemberRolesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
}>;


export type GetMemberRolesQuery = { __typename?: 'Query', memberRolesConnection?: { __typename?: 'MemberRoleConnection', aggregate?: { __typename?: 'MemberRoleAggregator', count?: number | null } | null, values?: Array<{ __typename?: 'MemberRole', proposal?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null } | null> | null } | null };

export type CheckUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type CheckUsernameQuery = { __typename?: 'Query', checkDupUserName?: { __typename?: 'checkDupUserNamePayload', username?: string | null, duplicated?: boolean | null } | null };

export type SignInMemberMutationVariables = Exact<{
  input: SignInMemberInput;
}>;


export type SignInMemberMutation = { __typename?: 'Mutation', signInMember?: { __typename?: 'SignTypeMemberPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsUser', id: string, member?: { __typename?: 'Member', id: string, address: string, username: string } | null, user_feed?: { __typename?: 'UserFeed', id: string, locale?: string | null, myProposalsNews?: boolean | null, likeProposalsNews?: boolean | null, newProposalsNews?: boolean | null, myCommentsNews?: boolean | null, etcNews?: boolean | null } | null }, push?: { __typename?: 'Push', id: string, isActive?: boolean | null } | null, feeds?: { __typename?: 'FeedsStatus', notReadCount?: number | null } | null } | null };

export type SignUpMemberMutationVariables = Exact<{
  input: SignUpMemberInput;
}>;


export type SignUpMemberMutation = { __typename?: 'Mutation', signUpMember?: { __typename?: 'SignTypeMemberPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsUser', id: string, member?: { __typename?: 'Member', id: string, address: string, username: string } | null, user_feed?: { __typename?: 'UserFeed', id: string, locale?: string | null, myProposalsNews?: boolean | null, likeProposalsNews?: boolean | null, newProposalsNews?: boolean | null, myCommentsNews?: boolean | null, etcNews?: boolean | null } | null }, push?: { __typename?: 'Push', id: string, isActive?: boolean | null } | null } | null };

export type CreateMemberMutationVariables = Exact<{
  input?: InputMaybe<CreateMemberInput>;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember?: { __typename?: 'createMemberPayload', member?: { __typename?: 'Member', id: string } | null } | null };

export type UpdateMemberMutationVariables = Exact<{
  input?: InputMaybe<UpdateMemberInput>;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember?: { __typename?: 'updateMemberPayload', member?: { __typename?: 'Member', id: string } | null } | null };

export type DeleteMemberMutationVariables = Exact<{
  input?: InputMaybe<DeleteMemberInput>;
}>;


export type DeleteMemberMutation = { __typename?: 'Mutation', deleteMember?: { __typename?: 'deleteMemberPayload', member?: { __typename?: 'Member', id: string } | null } | null };

export type MyMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type MyMembersQuery = { __typename?: 'Query', myMembers?: Array<{ __typename?: 'Member', id: string, username: string, address: string } | null> | null };

export type IsMemberQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type IsMemberQuery = { __typename?: 'Query', isMember?: boolean | null };

export type NotificationTypeFragment = { __typename?: 'Feeds', id: string, target: string, type: Enum_Feeds_Type, content?: any | null, navigation?: any | null, isRead?: boolean | null, createdAt: any };

export type GetFeedsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
}>;


export type GetFeedsQuery = { __typename?: 'Query', listFeeds?: { __typename?: 'ListFeedsPayload', count?: number | null, notReadCount?: number | null, values?: Array<{ __typename?: 'Feeds', id: string, target: string, type: Enum_Feeds_Type, content?: any | null, navigation?: any | null, isRead?: boolean | null, createdAt: any } | null> | null } | null };

export type UpdateFeedMutationVariables = Exact<{
  input?: InputMaybe<UpdateFeedInput>;
}>;


export type UpdateFeedMutation = { __typename?: 'Mutation', updateFeed?: { __typename?: 'updateFeedPayload', feed?: { __typename?: 'Feeds', id: string, target: string, type: Enum_Feeds_Type, content?: any | null, navigation?: any | null, isRead?: boolean | null, createdAt: any } | null } | null };

export type CreatePostMutationVariables = Exact<{
  input?: InputMaybe<CreatePostInput>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'createPostPayload', post?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null } | null } | null };

export type UpdatePostMutationVariables = Exact<{
  input?: InputMaybe<UpdatePostInput>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'updatePostPayload', post?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null } | null } | null };

export type ActivityPostsQueryVariables = Exact<{
  id: Scalars['ID'];
  type: Scalars['String'];
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}>;


export type ActivityPostsQuery = { __typename?: 'Query', activityPosts?: { __typename?: 'ActivityPostsPayload', count?: number | null, values?: Array<{ __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null } | null> | null, statuses?: Array<{ __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null } | null> | null } | null };

export type PostCommentsQueryVariables = Exact<{
  id: Scalars['ID'];
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}>;


export type PostCommentsQuery = { __typename?: 'Query', postComments?: { __typename?: 'PostCommentsPayload', count?: number | null, values?: Array<{ __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null } | null> | null, statuses?: Array<{ __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null } | null> | null } | null };

export type ReadArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReadArticleMutation = { __typename?: 'Mutation', readArticle?: { __typename?: 'ReadArticlePayload', post?: { __typename?: 'Post', id: string, readCount?: number | null } | null, status?: { __typename?: 'PostStatus', id: string, isRead?: boolean | null } | null } | null };

export type ReportPostMutationVariables = Exact<{
  input?: InputMaybe<ReportPostInput>;
}>;


export type ReportPostMutation = { __typename?: 'Mutation', reportPost?: { __typename?: 'ReportPostPayload', interaction?: { __typename?: 'Interaction', id: string } | null, post?: { __typename?: 'Post', id: string, status?: Enum_Post_Status | null, likeCount?: number | null, readCount?: number | null, commentCount?: number | null, reportCount?: number | null } | null, status?: { __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null } | null } | null };

export type RestorePostMutationVariables = Exact<{
  input?: InputMaybe<ReportPostInput>;
}>;


export type RestorePostMutation = { __typename?: 'Mutation', restorePost?: { __typename?: 'ReportPostPayload', interaction?: { __typename?: 'Interaction', id: string } | null, post?: { __typename?: 'Post', id: string, status?: Enum_Post_Status | null, likeCount?: number | null, readCount?: number | null, commentCount?: number | null, reportCount?: number | null } | null, status?: { __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null } | null } | null };

export type TogglePostLikeMutationVariables = Exact<{
  input?: InputMaybe<TogglePostLikeInput>;
}>;


export type TogglePostLikeMutation = { __typename?: 'Mutation', togglePostLike?: { __typename?: 'TogglePostLikePayload', isLike?: boolean | null, post?: { __typename?: 'Post', id: string, status?: Enum_Post_Status | null, likeCount?: number | null, readCount?: number | null, commentCount?: number | null, reportCount?: number | null } | null, status?: { __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null } | null } | null };

export type SubmitAssessMutationVariables = Exact<{
  input: SubmitAssessInput;
}>;


export type SubmitAssessMutation = { __typename?: 'Mutation', submitAssess?: { __typename?: 'SubmitAssessPayload', post?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null } | null } | null };

export type SubmitBallotMutationVariables = Exact<{
  input: SubmitBallotInput;
}>;


export type SubmitBallotMutation = { __typename?: 'Mutation', submitBallot?: { __typename?: 'SubmitBallotPayload', commitment?: string | null, signature?: string | null } | null };

export type RecordBallotMutationVariables = Exact<{
  input: RecordBallotInput;
}>;


export type RecordBallotMutation = { __typename?: 'Mutation', recordBallot?: { __typename?: 'RecordBallotPayload', ballot?: { __typename?: 'Ballot', id: string } | null } | null };

export type ListMyBallotsQueryVariables = Exact<{
  proposalId: Scalars['String'];
  actor: Scalars['String'];
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}>;


export type ListMyBallotsQuery = { __typename?: 'Query', listMyBallots?: { __typename?: 'ListMyBallotsPayload', count?: number | null, values?: Array<{ __typename?: 'MyBallot', id: string, choice?: number | null, commitment?: string | null, transactionHash?: string | null, createdAt: any } | null> | null } | null };

export type CreateProposalMutationVariables = Exact<{
  input?: InputMaybe<CreateProposalInput>;
}>;


export type CreateProposalMutation = { __typename?: 'Mutation', createProposal?: { __typename?: 'createProposalPayload', proposal?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null } | null };

export type GetProposalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProposalQuery = { __typename?: 'Query', proposal?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null };

export type GetProposalByIdQueryVariables = Exact<{
  proposalId: Scalars['String'];
}>;


export type GetProposalByIdQuery = { __typename?: 'Query', proposalById?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null, proposalStatusById?: { __typename?: 'ProposalStatus', id: string, isLike?: boolean | null, isJoined?: boolean | null } | null };

export type GetProposalByActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type GetProposalByActivityQuery = { __typename?: 'Query', proposalByActivity?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null, proposalStatusByActivity?: { __typename?: 'ProposalStatus', id: string, isLike?: boolean | null, isJoined?: boolean | null } | null };

export type GetProposalsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
}>;


export type GetProposalsQuery = { __typename?: 'Query', listProposal?: { __typename?: 'ListProposalPayload', count?: number | null, values?: Array<{ __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null> | null, statuses?: Array<{ __typename?: 'ProposalStatus', id: string, isLike?: boolean | null, isJoined?: boolean | null } | null> | null } | null };

export type GetProposalFeeQueryVariables = Exact<{
  proposalId: Scalars['String'];
}>;


export type GetProposalFeeQuery = { __typename?: 'Query', proposalFee?: { __typename?: 'ProposalFeePayload', status?: Enum_Fee_Status | null, type?: Enum_Proposal_Type | null, destination?: string | null, start?: number | null, end?: number | null, startAssess?: number | null, endAssess?: number | null, amount?: string | null, docHash?: string | null, title?: string | null, signature?: string | null, feeAmount?: string | null } | null };

export type CheckProposalFeeQueryVariables = Exact<{
  proposalId: Scalars['String'];
  transactionHash: Scalars['String'];
}>;


export type CheckProposalFeeQuery = { __typename?: 'Query', checkProposalFee?: { __typename?: 'CheckProposalFeePayload', status?: Enum_Fee_Status | null, proposal?: { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null } | null } | null };

export type JoinProposalMutationVariables = Exact<{
  input: JoinProposalInput;
}>;


export type JoinProposalMutation = { __typename?: 'Mutation', joinProposal?: { __typename?: 'JoinProposalPayload', invalidValidator?: boolean | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null };

export type AssessResultQueryVariables = Exact<{
  proposalId: Scalars['String'];
  actor: Scalars['String'];
}>;


export type AssessResultQuery = { __typename?: 'Query', assessResult?: { __typename?: 'AssessResultPayload', isValidVoter?: boolean | null, isProposer?: boolean | null, needEvaluation?: boolean | null, proposalState?: Enum_Assess_Proposal_State | null, assessParticipantSize?: string | null, assessData?: Array<string | null> | null } | null };

export type VoteStatusQueryVariables = Exact<{
  proposalId: Scalars['String'];
  actor: Scalars['String'];
}>;


export type VoteStatusQuery = { __typename?: 'Query', voteStatus?: { __typename?: 'VoteStatusPayload', isValidVoter?: boolean | null, isProposer?: boolean | null, needVote?: boolean | null, voteProposalState?: Enum_Vote_Proposal_State | null, validatorSize?: string | null, voteResult?: Array<string | null> | null, destination?: string | null, countingFinishTime?: number | null, canWithdrawAt?: number | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', meEx?: { __typename?: 'UsersPermissionsMeEx', id: string, member?: { __typename?: 'Member', id: string, address: string, username: string } | null, user_feed?: { __typename?: 'UserFeed', id: string, locale?: string | null, myProposalsNews?: boolean | null, likeProposalsNews?: boolean | null, newProposalsNews?: boolean | null, myCommentsNews?: boolean | null, etcNews?: boolean | null } | null } | null, feedsStatus?: { __typename?: 'FeedsStatus', notReadCount?: number | null } | null };

export type UpdatePushTokenMutationVariables = Exact<{
  input: UpdateUserPushTokenInput;
}>;


export type UpdatePushTokenMutation = { __typename?: 'Mutation', updateUserPushToken?: { __typename?: 'updateUserFeedPayload', userFeed?: { __typename?: 'UserFeed', id: string, pushes?: Array<{ __typename?: 'Push', id: string, isActive?: boolean | null } | null> | null } | null } | null };

export type UpdateAlarmStatusMutationVariables = Exact<{
  input: UpdateUserAlarmStatusInput;
}>;


export type UpdateAlarmStatusMutation = { __typename?: 'Mutation', updateUserAlarmStatus?: { __typename?: 'updateUserFeedPayload', userFeed?: { __typename?: 'UserFeed', id: string, myProposalsNews?: boolean | null, likeProposalsNews?: boolean | null, newProposalsNews?: boolean | null, myCommentsNews?: boolean | null, etcNews?: boolean | null } | null } | null };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
}>;


export type UploadFileMutation = { __typename?: 'Mutation', upload: { __typename?: 'UploadFile', id: string } };

export type VoteraConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type VoteraConfigurationQuery = { __typename?: 'Query', version?: { __typename?: 'Version', ios?: string | null, android?: string | null } | null, agora?: { __typename?: 'Agora', proposalFundMin?: string | null, proposalFundMax?: string | null, userServiceTermUrl?: string | null, privacyTermUrl?: string | null, commonsBudgetAddress?: string | null, voteraVoteAddress?: string | null, providerUrl?: string | null, agoraScanUrl?: string | null, boaScanUrl?: string | null } | null, feePolicy?: { __typename?: 'FeePolicyPayload', fundProposalFeePermil?: string | null, systemProposalFee?: string | null, voterFee?: string | null, withdrawDelayPeriod?: number | null } | null };

export type UpdateReceiptMutationVariables = Exact<{
  input: UpdateReceiptInput;
}>;


export type UpdateReceiptMutation = { __typename?: 'Mutation', updateReceipt?: { __typename?: 'UpdateReceiptPayload', status?: number | null } | null };

export type ValidatorItemFragment = { __typename?: 'Validator', id: string, address?: string | null, publicKey?: string | null, assessUpdate?: number | null, ballotUpdate?: number | null, choice?: number | null };

export type GetSignInDomainQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSignInDomainQuery = { __typename?: 'Query', getSignInDomain?: { __typename?: 'SignTypeDomain', name?: string | null, version?: string | null, chainId?: number | null, verifyingContract?: string | null } | null };

export type GetSignUpDomainQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSignUpDomainQuery = { __typename?: 'Query', getSignUpDomain?: { __typename?: 'SignTypeDomain', name?: string | null, version?: string | null, chainId?: number | null, verifyingContract?: string | null } | null };

export type IsValidatorQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type IsValidatorQuery = { __typename?: 'Query', isValidator?: { __typename?: 'IsValidatorPayload', valid?: boolean | null, publicKey?: string | null } | null };

export type ListAssessValidatorsQueryVariables = Exact<{
  proposalId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}>;


export type ListAssessValidatorsQuery = { __typename?: 'Query', listAssessValidators?: Array<{ __typename?: 'Validator', id: string, address?: string | null, publicKey?: string | null, assessUpdate?: number | null, ballotUpdate?: number | null, choice?: number | null } | null> | null, voteCount?: { __typename?: 'VoteCountPayload', id: string, validatorCount?: number | null, assessCount?: number | null, ballotCount?: number | null } | null };

export type ListBallotValidatorsQueryVariables = Exact<{
  proposalId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}>;


export type ListBallotValidatorsQuery = { __typename?: 'Query', listBallotValidators?: Array<{ __typename?: 'Validator', id: string, address?: string | null, publicKey?: string | null, assessUpdate?: number | null, ballotUpdate?: number | null, choice?: number | null } | null> | null, voteCount?: { __typename?: 'VoteCountPayload', id: string, validatorCount?: number | null, assessCount?: number | null, ballotCount?: number | null } | null };

export type SurveyItemFragment = { __typename?: 'Survey', id: string, questions?: Array<{ __typename?: 'Question', id: string, title?: string | null, description?: string | null, type: Enum_Question_Type, sequence: number, content: Array<{ __typename?: 'ComponentActivityChoiceOptionList', id: string, item?: Array<{ __typename?: 'ComponentActivityChoiceOption', id: string, sequence?: number | null, text?: string | null } | null> | null } | { __typename?: 'ComponentActivityScaleOption', id: string, min?: number | null, max: number } | { __typename?: 'ComponentActivityTextOption' } | null> } | null> | null };

export type QuestionItemFragment = { __typename?: 'Question', id: string, title?: string | null, description?: string | null, type: Enum_Question_Type, sequence: number, content: Array<{ __typename?: 'ComponentActivityChoiceOptionList', id: string, item?: Array<{ __typename?: 'ComponentActivityChoiceOption', id: string, sequence?: number | null, text?: string | null } | null> | null } | { __typename?: 'ComponentActivityScaleOption', id: string, min?: number | null, max: number } | { __typename?: 'ComponentActivityTextOption' } | null> };

export type InteractionItemFragment = { __typename?: 'Interaction', id: string, type: Enum_Interaction_Type, action: Array<{ __typename?: 'ComponentInteractionLike', type: Enum_Componentinteractionlike_Type } | { __typename?: 'ComponentInteractionRead', count?: number | null } | { __typename?: 'ComponentInteractionReport' } | null>, post?: { __typename?: 'Post', id: string } | null, actor?: { __typename?: 'Member', id: string, username: string } | null };

export type PostItemFragment = { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, updatedAt: any, createdAt: any, likeCount?: number | null, commentCount?: number | null, readCount?: number | null, writer?: { __typename?: 'Member', id: string, username: string } | null, activity?: { __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, board?: { __typename?: 'Board', id: string } | null, proposal?: { __typename?: 'Proposal', id: string } | null } | null, parentPost?: { __typename?: 'Post', id: string, type: Enum_Post_Type, status?: Enum_Post_Status | null, likeCount?: number | null, commentCount?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null, content?: Array<{ __typename?: 'ComponentPostArticle', id: string, title?: string | null, text?: string | null } | { __typename?: 'ComponentPostCommentOnActivity', text?: string | null } | { __typename?: 'ComponentPostCommentOnPost', id: string, text?: string | null } | { __typename?: 'ComponentPostReply', text?: string | null } | { __typename?: 'ComponentPostScaleAnswer', key?: string | null, sequence?: number | null, value?: number | null } | { __typename?: 'ComponentPostSingleChoiceAnswer', key?: string | null, sequence?: number | null, single?: Array<{ __typename?: 'ComponentPostSelection', sequence?: number | null, value?: number | null } | null> | null } | null> | null };

export type NewPostStatusFragment = { __typename?: 'PostStatus', id: string, isLike?: boolean | null, isReported?: boolean | null, isRead?: boolean | null };

export type ProposalItemFragment = { __typename?: 'Proposal', id: string, proposalId?: string | null, name: string, description?: string | null, type: Enum_Proposal_Type, status: Enum_Proposal_Status, createdAt: any, memberCount: number, vote_start?: number | null, vote_end?: number | null, fundingAmount?: string | null, assessStart?: number | null, assessEnd?: number | null, voteraVoteAddress?: string | null, paidComplete?: boolean | null, createTx?: string | null, creator?: { __typename?: 'Member', id: string, username: string, address: string } | null, activities?: Array<{ __typename?: 'Activity', id: string, name: string, type: Enum_Activity_Type, status: Enum_Activity_Status, survey?: { __typename?: 'Survey', id: string } | null, poll?: { __typename?: 'Poll', id: string, questions?: Array<{ __typename?: 'Question', id: string } | null> | null } | null } | null> | null, assessPeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, votePeriod?: { __typename?: 'ComponentCommonPeriod', begin: any, end: any } | null, logo?: { __typename?: 'UploadFile', id: string, url: string, mime: string, width?: number | null, height?: number | null } | null, attachment?: Array<{ __typename?: 'UploadFile', id: string, url: string, mime: string, name: string, width?: number | null, height?: number | null } | null> | null };

export type NewProposalStatusFragment = { __typename?: 'ProposalStatus', id: string, isJoined?: boolean | null, isLike?: boolean | null };

export const NotificationTypeFragmentDoc = gql`
    fragment NotificationType on Feeds {
  id
  target
  type
  content
  navigation
  isRead
  createdAt
}
    `;
export const ValidatorItemFragmentDoc = gql`
    fragment ValidatorItem on Validator {
  id
  address
  publicKey
  assessUpdate
  ballotUpdate
  choice
}
    `;
export const QuestionItemFragmentDoc = gql`
    fragment QuestionItem on Question {
  id
  title
  description
  type
  sequence
  content {
    ... on ComponentActivityScaleOption {
      id
      min
      max
    }
    ... on ComponentActivityChoiceOptionList {
      id
      item {
        id
        sequence
        text
      }
    }
  }
}
    `;
export const SurveyItemFragmentDoc = gql`
    fragment SurveyItem on Survey {
  id
  questions {
    ...QuestionItem
  }
}
    ${QuestionItemFragmentDoc}`;
export const InteractionItemFragmentDoc = gql`
    fragment InteractionItem on Interaction {
  id
  type
  action {
    ... on ComponentInteractionLike {
      type
    }
    ... on ComponentInteractionRead {
      count
    }
  }
  post {
    id
  }
  actor {
    id
    username
  }
}
    `;
export const PostItemFragmentDoc = gql`
    fragment PostItem on Post {
  id
  type
  status
  writer {
    id
    username
  }
  activity {
    id
    name
    type
    board {
      id
    }
    proposal {
      id
    }
  }
  parentPost {
    id
    type
    status
    likeCount
    commentCount
  }
  updatedAt
  createdAt
  attachment {
    id
    url
    mime
    name
    width
    height
  }
  content {
    ... on ComponentPostCommentOnActivity {
      text
    }
    ... on ComponentPostReply {
      text
    }
    ... on ComponentPostScaleAnswer {
      key
      sequence
      value
    }
    ... on ComponentPostSingleChoiceAnswer {
      key
      sequence
      single: selection {
        sequence
        value
      }
    }
    ... on ComponentPostArticle {
      id
      title
      text
    }
    ... on ComponentPostCommentOnPost {
      id
      text
    }
  }
  likeCount
  commentCount
  readCount
}
    `;
export const NewPostStatusFragmentDoc = gql`
    fragment NewPostStatus on PostStatus {
  id
  isLike
  isReported
  isRead
}
    `;
export const ProposalItemFragmentDoc = gql`
    fragment ProposalItem on Proposal {
  id
  proposalId
  name
  description
  type
  status
  createdAt
  memberCount
  creator {
    id
    username
    address
  }
  activities {
    id
    name
    type
    status
    survey {
      id
    }
    poll {
      id
      questions {
        id
      }
    }
  }
  assessPeriod {
    begin
    end
  }
  votePeriod {
    begin
    end
  }
  vote_start
  vote_end
  fundingAmount
  logo {
    id
    url
    mime
    width
    height
  }
  attachment {
    id
    url
    mime
    name
    width
    height
  }
  assessStart
  assessEnd
  voteraVoteAddress
  paidComplete
  createTx
}
    `;
export const NewProposalStatusFragmentDoc = gql`
    fragment NewProposalStatus on ProposalStatus {
  id
  isJoined
  isLike
}
    `;
export const GetActivityDocument = gql`
    query getActivity($id: ID!) {
  activity(id: $id) {
    id
    name
    type
    status
    survey {
      ...SurveyItem
    }
    poll {
      id
      questions {
        ...QuestionItem
      }
    }
  }
}
    ${SurveyItemFragmentDoc}
${QuestionItemFragmentDoc}`;

/**
 * __useGetActivityQuery__
 *
 * To run a query within a React component, call `useGetActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetActivityQuery(baseOptions: Apollo.QueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
      }
export function useGetActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
        }
export type GetActivityQueryHookResult = ReturnType<typeof useGetActivityQuery>;
export type GetActivityLazyQueryHookResult = ReturnType<typeof useGetActivityLazyQuery>;
export type GetActivityQueryResult = Apollo.QueryResult<GetActivityQuery, GetActivityQueryVariables>;
export const GetMemberRolesDocument = gql`
    query GetMemberRoles($sort: String, $limit: Int, $start: Int, $where: JSON) {
  memberRolesConnection(sort: $sort, limit: $limit, start: $start, where: $where) {
    aggregate {
      count
    }
    values {
      proposal {
        ...ProposalItem
      }
    }
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useGetMemberRolesQuery__
 *
 * To run a query within a React component, call `useGetMemberRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberRolesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetMemberRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetMemberRolesQuery, GetMemberRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberRolesQuery, GetMemberRolesQueryVariables>(GetMemberRolesDocument, options);
      }
export function useGetMemberRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberRolesQuery, GetMemberRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberRolesQuery, GetMemberRolesQueryVariables>(GetMemberRolesDocument, options);
        }
export type GetMemberRolesQueryHookResult = ReturnType<typeof useGetMemberRolesQuery>;
export type GetMemberRolesLazyQueryHookResult = ReturnType<typeof useGetMemberRolesLazyQuery>;
export type GetMemberRolesQueryResult = Apollo.QueryResult<GetMemberRolesQuery, GetMemberRolesQueryVariables>;
export const CheckUsernameDocument = gql`
    query CheckUsername($username: String!) {
  checkDupUserName(username: $username) {
    username
    duplicated
  }
}
    `;

/**
 * __useCheckUsernameQuery__
 *
 * To run a query within a React component, call `useCheckUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCheckUsernameQuery(baseOptions: Apollo.QueryHookOptions<CheckUsernameQuery, CheckUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUsernameQuery, CheckUsernameQueryVariables>(CheckUsernameDocument, options);
      }
export function useCheckUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUsernameQuery, CheckUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUsernameQuery, CheckUsernameQueryVariables>(CheckUsernameDocument, options);
        }
export type CheckUsernameQueryHookResult = ReturnType<typeof useCheckUsernameQuery>;
export type CheckUsernameLazyQueryHookResult = ReturnType<typeof useCheckUsernameLazyQuery>;
export type CheckUsernameQueryResult = Apollo.QueryResult<CheckUsernameQuery, CheckUsernameQueryVariables>;
export const SignInMemberDocument = gql`
    mutation SignInMember($input: signInMemberInput!) {
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
    feeds {
      notReadCount
    }
  }
}
    `;
export type SignInMemberMutationFn = Apollo.MutationFunction<SignInMemberMutation, SignInMemberMutationVariables>;

/**
 * __useSignInMemberMutation__
 *
 * To run a mutation, you first call `useSignInMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMemberMutation, { data, loading, error }] = useSignInMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMemberMutation(baseOptions?: Apollo.MutationHookOptions<SignInMemberMutation, SignInMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMemberMutation, SignInMemberMutationVariables>(SignInMemberDocument, options);
      }
export type SignInMemberMutationHookResult = ReturnType<typeof useSignInMemberMutation>;
export type SignInMemberMutationResult = Apollo.MutationResult<SignInMemberMutation>;
export type SignInMemberMutationOptions = Apollo.BaseMutationOptions<SignInMemberMutation, SignInMemberMutationVariables>;
export const SignUpMemberDocument = gql`
    mutation SignUpMember($input: signUpMemberInput!) {
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
}
    `;
export type SignUpMemberMutationFn = Apollo.MutationFunction<SignUpMemberMutation, SignUpMemberMutationVariables>;

/**
 * __useSignUpMemberMutation__
 *
 * To run a mutation, you first call `useSignUpMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMemberMutation, { data, loading, error }] = useSignUpMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMemberMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMemberMutation, SignUpMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMemberMutation, SignUpMemberMutationVariables>(SignUpMemberDocument, options);
      }
export type SignUpMemberMutationHookResult = ReturnType<typeof useSignUpMemberMutation>;
export type SignUpMemberMutationResult = Apollo.MutationResult<SignUpMemberMutation>;
export type SignUpMemberMutationOptions = Apollo.BaseMutationOptions<SignUpMemberMutation, SignUpMemberMutationVariables>;
export const CreateMemberDocument = gql`
    mutation CreateMember($input: createMemberInput) {
  createMember(input: $input) {
    member {
      id
    }
  }
}
    `;
export type CreateMemberMutationFn = Apollo.MutationFunction<CreateMemberMutation, CreateMemberMutationVariables>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberMutation, CreateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(CreateMemberDocument, options);
      }
export type CreateMemberMutationHookResult = ReturnType<typeof useCreateMemberMutation>;
export type CreateMemberMutationResult = Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<CreateMemberMutation, CreateMemberMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($input: updateMemberInput) {
  updateMember(input: $input) {
    member {
      id
    }
  }
}
    `;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const DeleteMemberDocument = gql`
    mutation DeleteMember($input: deleteMemberInput) {
  deleteMember(input: $input) {
    member {
      id
    }
  }
}
    `;
export type DeleteMemberMutationFn = Apollo.MutationFunction<DeleteMemberMutation, DeleteMemberMutationVariables>;

/**
 * __useDeleteMemberMutation__
 *
 * To run a mutation, you first call `useDeleteMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberMutation, { data, loading, error }] = useDeleteMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemberMutation, DeleteMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemberMutation, DeleteMemberMutationVariables>(DeleteMemberDocument, options);
      }
export type DeleteMemberMutationHookResult = ReturnType<typeof useDeleteMemberMutation>;
export type DeleteMemberMutationResult = Apollo.MutationResult<DeleteMemberMutation>;
export type DeleteMemberMutationOptions = Apollo.BaseMutationOptions<DeleteMemberMutation, DeleteMemberMutationVariables>;
export const MyMembersDocument = gql`
    query MyMembers {
  myMembers {
    id
    username
    address
  }
}
    `;

/**
 * __useMyMembersQuery__
 *
 * To run a query within a React component, call `useMyMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyMembersQuery(baseOptions?: Apollo.QueryHookOptions<MyMembersQuery, MyMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyMembersQuery, MyMembersQueryVariables>(MyMembersDocument, options);
      }
export function useMyMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyMembersQuery, MyMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyMembersQuery, MyMembersQueryVariables>(MyMembersDocument, options);
        }
export type MyMembersQueryHookResult = ReturnType<typeof useMyMembersQuery>;
export type MyMembersLazyQueryHookResult = ReturnType<typeof useMyMembersLazyQuery>;
export type MyMembersQueryResult = Apollo.QueryResult<MyMembersQuery, MyMembersQueryVariables>;
export const IsMemberDocument = gql`
    query isMember($address: String!) {
  isMember(address: $address)
}
    `;

/**
 * __useIsMemberQuery__
 *
 * To run a query within a React component, call `useIsMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMemberQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useIsMemberQuery(baseOptions: Apollo.QueryHookOptions<IsMemberQuery, IsMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMemberQuery, IsMemberQueryVariables>(IsMemberDocument, options);
      }
export function useIsMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMemberQuery, IsMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMemberQuery, IsMemberQueryVariables>(IsMemberDocument, options);
        }
export type IsMemberQueryHookResult = ReturnType<typeof useIsMemberQuery>;
export type IsMemberLazyQueryHookResult = ReturnType<typeof useIsMemberLazyQuery>;
export type IsMemberQueryResult = Apollo.QueryResult<IsMemberQuery, IsMemberQueryVariables>;
export const GetFeedsDocument = gql`
    query getFeeds($sort: String, $limit: Int, $start: Int, $where: JSON) {
  listFeeds(sort: $sort, limit: $limit, start: $start, where: $where) {
    count
    notReadCount
    values {
      ...NotificationType
    }
  }
}
    ${NotificationTypeFragmentDoc}`;

/**
 * __useGetFeedsQuery__
 *
 * To run a query within a React component, call `useGetFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetFeedsQuery(baseOptions?: Apollo.QueryHookOptions<GetFeedsQuery, GetFeedsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedsQuery, GetFeedsQueryVariables>(GetFeedsDocument, options);
      }
export function useGetFeedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedsQuery, GetFeedsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedsQuery, GetFeedsQueryVariables>(GetFeedsDocument, options);
        }
export type GetFeedsQueryHookResult = ReturnType<typeof useGetFeedsQuery>;
export type GetFeedsLazyQueryHookResult = ReturnType<typeof useGetFeedsLazyQuery>;
export type GetFeedsQueryResult = Apollo.QueryResult<GetFeedsQuery, GetFeedsQueryVariables>;
export const UpdateFeedDocument = gql`
    mutation updateFeed($input: updateFeedInput) {
  updateFeed(input: $input) {
    feed {
      ...NotificationType
    }
  }
}
    ${NotificationTypeFragmentDoc}`;
export type UpdateFeedMutationFn = Apollo.MutationFunction<UpdateFeedMutation, UpdateFeedMutationVariables>;

/**
 * __useUpdateFeedMutation__
 *
 * To run a mutation, you first call `useUpdateFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeedMutation, { data, loading, error }] = useUpdateFeedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFeedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFeedMutation, UpdateFeedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFeedMutation, UpdateFeedMutationVariables>(UpdateFeedDocument, options);
      }
export type UpdateFeedMutationHookResult = ReturnType<typeof useUpdateFeedMutation>;
export type UpdateFeedMutationResult = Apollo.MutationResult<UpdateFeedMutation>;
export type UpdateFeedMutationOptions = Apollo.BaseMutationOptions<UpdateFeedMutation, UpdateFeedMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($input: createPostInput) {
  createPost(input: $input) {
    post {
      ...PostItem
    }
  }
}
    ${PostItemFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($input: updatePostInput) {
  updatePost(input: $input) {
    post {
      ...PostItem
    }
  }
}
    ${PostItemFragmentDoc}`;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const ActivityPostsDocument = gql`
    query activityPosts($id: ID!, $type: String!, $sort: String, $limit: Int, $start: Int) {
  activityPosts(id: $id, type: $type, sort: $sort, limit: $limit, start: $start) {
    count
    values {
      ...PostItem
    }
    statuses {
      id
      isLike
      isReported
      isRead
    }
  }
}
    ${PostItemFragmentDoc}`;

/**
 * __useActivityPostsQuery__
 *
 * To run a query within a React component, call `useActivityPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityPostsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useActivityPostsQuery(baseOptions: Apollo.QueryHookOptions<ActivityPostsQuery, ActivityPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityPostsQuery, ActivityPostsQueryVariables>(ActivityPostsDocument, options);
      }
export function useActivityPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityPostsQuery, ActivityPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityPostsQuery, ActivityPostsQueryVariables>(ActivityPostsDocument, options);
        }
export type ActivityPostsQueryHookResult = ReturnType<typeof useActivityPostsQuery>;
export type ActivityPostsLazyQueryHookResult = ReturnType<typeof useActivityPostsLazyQuery>;
export type ActivityPostsQueryResult = Apollo.QueryResult<ActivityPostsQuery, ActivityPostsQueryVariables>;
export const PostCommentsDocument = gql`
    query postComments($id: ID!, $sort: String, $limit: Int, $start: Int) {
  postComments(id: $id, sort: $sort, limit: $limit, start: $start) {
    count
    values {
      ...PostItem
    }
    statuses {
      id
      isLike
      isReported
      isRead
    }
  }
}
    ${PostItemFragmentDoc}`;

/**
 * __usePostCommentsQuery__
 *
 * To run a query within a React component, call `usePostCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function usePostCommentsQuery(baseOptions: Apollo.QueryHookOptions<PostCommentsQuery, PostCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCommentsQuery, PostCommentsQueryVariables>(PostCommentsDocument, options);
      }
export function usePostCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCommentsQuery, PostCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCommentsQuery, PostCommentsQueryVariables>(PostCommentsDocument, options);
        }
export type PostCommentsQueryHookResult = ReturnType<typeof usePostCommentsQuery>;
export type PostCommentsLazyQueryHookResult = ReturnType<typeof usePostCommentsLazyQuery>;
export type PostCommentsQueryResult = Apollo.QueryResult<PostCommentsQuery, PostCommentsQueryVariables>;
export const ReadArticleDocument = gql`
    mutation readArticle($id: ID!) {
  readArticle(id: $id) {
    post {
      id
      readCount
    }
    status {
      id
      isRead
    }
  }
}
    `;
export type ReadArticleMutationFn = Apollo.MutationFunction<ReadArticleMutation, ReadArticleMutationVariables>;

/**
 * __useReadArticleMutation__
 *
 * To run a mutation, you first call `useReadArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readArticleMutation, { data, loading, error }] = useReadArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadArticleMutation(baseOptions?: Apollo.MutationHookOptions<ReadArticleMutation, ReadArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadArticleMutation, ReadArticleMutationVariables>(ReadArticleDocument, options);
      }
export type ReadArticleMutationHookResult = ReturnType<typeof useReadArticleMutation>;
export type ReadArticleMutationResult = Apollo.MutationResult<ReadArticleMutation>;
export type ReadArticleMutationOptions = Apollo.BaseMutationOptions<ReadArticleMutation, ReadArticleMutationVariables>;
export const ReportPostDocument = gql`
    mutation reportPost($input: ReportPostInput) {
  reportPost(input: $input) {
    interaction {
      id
    }
    post {
      id
      status
      likeCount
      readCount
      commentCount
      reportCount
    }
    status {
      id
      isLike
      isReported
      isRead
    }
  }
}
    `;
export type ReportPostMutationFn = Apollo.MutationFunction<ReportPostMutation, ReportPostMutationVariables>;

/**
 * __useReportPostMutation__
 *
 * To run a mutation, you first call `useReportPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportPostMutation, { data, loading, error }] = useReportPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReportPostMutation(baseOptions?: Apollo.MutationHookOptions<ReportPostMutation, ReportPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportPostMutation, ReportPostMutationVariables>(ReportPostDocument, options);
      }
export type ReportPostMutationHookResult = ReturnType<typeof useReportPostMutation>;
export type ReportPostMutationResult = Apollo.MutationResult<ReportPostMutation>;
export type ReportPostMutationOptions = Apollo.BaseMutationOptions<ReportPostMutation, ReportPostMutationVariables>;
export const RestorePostDocument = gql`
    mutation restorePost($input: ReportPostInput) {
  restorePost(input: $input) {
    interaction {
      id
    }
    post {
      id
      status
      likeCount
      readCount
      commentCount
      reportCount
    }
    status {
      id
      isLike
      isReported
      isRead
    }
  }
}
    `;
export type RestorePostMutationFn = Apollo.MutationFunction<RestorePostMutation, RestorePostMutationVariables>;

/**
 * __useRestorePostMutation__
 *
 * To run a mutation, you first call `useRestorePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestorePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restorePostMutation, { data, loading, error }] = useRestorePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRestorePostMutation(baseOptions?: Apollo.MutationHookOptions<RestorePostMutation, RestorePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestorePostMutation, RestorePostMutationVariables>(RestorePostDocument, options);
      }
export type RestorePostMutationHookResult = ReturnType<typeof useRestorePostMutation>;
export type RestorePostMutationResult = Apollo.MutationResult<RestorePostMutation>;
export type RestorePostMutationOptions = Apollo.BaseMutationOptions<RestorePostMutation, RestorePostMutationVariables>;
export const TogglePostLikeDocument = gql`
    mutation togglePostLike($input: TogglePostLikeInput) {
  togglePostLike(input: $input) {
    isLike
    post {
      id
      status
      likeCount
      readCount
      commentCount
      reportCount
    }
    status {
      id
      isLike
      isReported
      isRead
    }
  }
}
    `;
export type TogglePostLikeMutationFn = Apollo.MutationFunction<TogglePostLikeMutation, TogglePostLikeMutationVariables>;

/**
 * __useTogglePostLikeMutation__
 *
 * To run a mutation, you first call `useTogglePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePostLikeMutation, { data, loading, error }] = useTogglePostLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTogglePostLikeMutation(baseOptions?: Apollo.MutationHookOptions<TogglePostLikeMutation, TogglePostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TogglePostLikeMutation, TogglePostLikeMutationVariables>(TogglePostLikeDocument, options);
      }
export type TogglePostLikeMutationHookResult = ReturnType<typeof useTogglePostLikeMutation>;
export type TogglePostLikeMutationResult = Apollo.MutationResult<TogglePostLikeMutation>;
export type TogglePostLikeMutationOptions = Apollo.BaseMutationOptions<TogglePostLikeMutation, TogglePostLikeMutationVariables>;
export const SubmitAssessDocument = gql`
    mutation submitAssess($input: SubmitAssessInput!) {
  submitAssess(input: $input) {
    post {
      ...PostItem
    }
  }
}
    ${PostItemFragmentDoc}`;
export type SubmitAssessMutationFn = Apollo.MutationFunction<SubmitAssessMutation, SubmitAssessMutationVariables>;

/**
 * __useSubmitAssessMutation__
 *
 * To run a mutation, you first call `useSubmitAssessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAssessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAssessMutation, { data, loading, error }] = useSubmitAssessMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitAssessMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAssessMutation, SubmitAssessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAssessMutation, SubmitAssessMutationVariables>(SubmitAssessDocument, options);
      }
export type SubmitAssessMutationHookResult = ReturnType<typeof useSubmitAssessMutation>;
export type SubmitAssessMutationResult = Apollo.MutationResult<SubmitAssessMutation>;
export type SubmitAssessMutationOptions = Apollo.BaseMutationOptions<SubmitAssessMutation, SubmitAssessMutationVariables>;
export const SubmitBallotDocument = gql`
    mutation submitBallot($input: SubmitBallotInput!) {
  submitBallot(input: $input) {
    commitment
    signature
  }
}
    `;
export type SubmitBallotMutationFn = Apollo.MutationFunction<SubmitBallotMutation, SubmitBallotMutationVariables>;

/**
 * __useSubmitBallotMutation__
 *
 * To run a mutation, you first call `useSubmitBallotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitBallotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitBallotMutation, { data, loading, error }] = useSubmitBallotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitBallotMutation(baseOptions?: Apollo.MutationHookOptions<SubmitBallotMutation, SubmitBallotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitBallotMutation, SubmitBallotMutationVariables>(SubmitBallotDocument, options);
      }
export type SubmitBallotMutationHookResult = ReturnType<typeof useSubmitBallotMutation>;
export type SubmitBallotMutationResult = Apollo.MutationResult<SubmitBallotMutation>;
export type SubmitBallotMutationOptions = Apollo.BaseMutationOptions<SubmitBallotMutation, SubmitBallotMutationVariables>;
export const RecordBallotDocument = gql`
    mutation recordBallot($input: RecordBallotInput!) {
  recordBallot(input: $input) {
    ballot {
      id
    }
  }
}
    `;
export type RecordBallotMutationFn = Apollo.MutationFunction<RecordBallotMutation, RecordBallotMutationVariables>;

/**
 * __useRecordBallotMutation__
 *
 * To run a mutation, you first call `useRecordBallotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecordBallotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recordBallotMutation, { data, loading, error }] = useRecordBallotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRecordBallotMutation(baseOptions?: Apollo.MutationHookOptions<RecordBallotMutation, RecordBallotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecordBallotMutation, RecordBallotMutationVariables>(RecordBallotDocument, options);
      }
export type RecordBallotMutationHookResult = ReturnType<typeof useRecordBallotMutation>;
export type RecordBallotMutationResult = Apollo.MutationResult<RecordBallotMutation>;
export type RecordBallotMutationOptions = Apollo.BaseMutationOptions<RecordBallotMutation, RecordBallotMutationVariables>;
export const ListMyBallotsDocument = gql`
    query listMyBallots($proposalId: String!, $actor: String!, $sort: String, $limit: Int, $start: Int) {
  listMyBallots(
    proposalId: $proposalId
    actor: $actor
    sort: $sort
    limit: $limit
    start: $start
  ) {
    count
    values {
      id
      choice
      commitment
      transactionHash
      createdAt
    }
  }
}
    `;

/**
 * __useListMyBallotsQuery__
 *
 * To run a query within a React component, call `useListMyBallotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMyBallotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMyBallotsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      actor: // value for 'actor'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useListMyBallotsQuery(baseOptions: Apollo.QueryHookOptions<ListMyBallotsQuery, ListMyBallotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMyBallotsQuery, ListMyBallotsQueryVariables>(ListMyBallotsDocument, options);
      }
export function useListMyBallotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMyBallotsQuery, ListMyBallotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMyBallotsQuery, ListMyBallotsQueryVariables>(ListMyBallotsDocument, options);
        }
export type ListMyBallotsQueryHookResult = ReturnType<typeof useListMyBallotsQuery>;
export type ListMyBallotsLazyQueryHookResult = ReturnType<typeof useListMyBallotsLazyQuery>;
export type ListMyBallotsQueryResult = Apollo.QueryResult<ListMyBallotsQuery, ListMyBallotsQueryVariables>;
export const CreateProposalDocument = gql`
    mutation CreateProposal($input: createProposalInput) {
  createProposal(input: $input) {
    proposal {
      ...ProposalItem
    }
  }
}
    ${ProposalItemFragmentDoc}`;
export type CreateProposalMutationFn = Apollo.MutationFunction<CreateProposalMutation, CreateProposalMutationVariables>;

/**
 * __useCreateProposalMutation__
 *
 * To run a mutation, you first call `useCreateProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProposalMutation, { data, loading, error }] = useCreateProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProposalMutation(baseOptions?: Apollo.MutationHookOptions<CreateProposalMutation, CreateProposalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProposalMutation, CreateProposalMutationVariables>(CreateProposalDocument, options);
      }
export type CreateProposalMutationHookResult = ReturnType<typeof useCreateProposalMutation>;
export type CreateProposalMutationResult = Apollo.MutationResult<CreateProposalMutation>;
export type CreateProposalMutationOptions = Apollo.BaseMutationOptions<CreateProposalMutation, CreateProposalMutationVariables>;
export const GetProposalDocument = gql`
    query getProposal($id: ID!) {
  proposal(id: $id) {
    ...ProposalItem
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useGetProposalQuery__
 *
 * To run a query within a React component, call `useGetProposalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProposalQuery(baseOptions: Apollo.QueryHookOptions<GetProposalQuery, GetProposalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProposalQuery, GetProposalQueryVariables>(GetProposalDocument, options);
      }
export function useGetProposalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalQuery, GetProposalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProposalQuery, GetProposalQueryVariables>(GetProposalDocument, options);
        }
export type GetProposalQueryHookResult = ReturnType<typeof useGetProposalQuery>;
export type GetProposalLazyQueryHookResult = ReturnType<typeof useGetProposalLazyQuery>;
export type GetProposalQueryResult = Apollo.QueryResult<GetProposalQuery, GetProposalQueryVariables>;
export const GetProposalByIdDocument = gql`
    query getProposalById($proposalId: String!) {
  proposalById(proposalId: $proposalId) {
    ...ProposalItem
  }
  proposalStatusById(proposalId: $proposalId) {
    id
    isLike
    isJoined
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useGetProposalByIdQuery__
 *
 * To run a query within a React component, call `useGetProposalByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalByIdQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useGetProposalByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProposalByIdQuery, GetProposalByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProposalByIdQuery, GetProposalByIdQueryVariables>(GetProposalByIdDocument, options);
      }
export function useGetProposalByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalByIdQuery, GetProposalByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProposalByIdQuery, GetProposalByIdQueryVariables>(GetProposalByIdDocument, options);
        }
export type GetProposalByIdQueryHookResult = ReturnType<typeof useGetProposalByIdQuery>;
export type GetProposalByIdLazyQueryHookResult = ReturnType<typeof useGetProposalByIdLazyQuery>;
export type GetProposalByIdQueryResult = Apollo.QueryResult<GetProposalByIdQuery, GetProposalByIdQueryVariables>;
export const GetProposalByActivityDocument = gql`
    query getProposalByActivity($activityId: String!) {
  proposalByActivity(activityId: $activityId) {
    ...ProposalItem
  }
  proposalStatusByActivity(activityId: $activityId) {
    id
    isLike
    isJoined
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useGetProposalByActivityQuery__
 *
 * To run a query within a React component, call `useGetProposalByActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalByActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalByActivityQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useGetProposalByActivityQuery(baseOptions: Apollo.QueryHookOptions<GetProposalByActivityQuery, GetProposalByActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProposalByActivityQuery, GetProposalByActivityQueryVariables>(GetProposalByActivityDocument, options);
      }
export function useGetProposalByActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalByActivityQuery, GetProposalByActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProposalByActivityQuery, GetProposalByActivityQueryVariables>(GetProposalByActivityDocument, options);
        }
export type GetProposalByActivityQueryHookResult = ReturnType<typeof useGetProposalByActivityQuery>;
export type GetProposalByActivityLazyQueryHookResult = ReturnType<typeof useGetProposalByActivityLazyQuery>;
export type GetProposalByActivityQueryResult = Apollo.QueryResult<GetProposalByActivityQuery, GetProposalByActivityQueryVariables>;
export const GetProposalsDocument = gql`
    query getProposals($sort: String, $limit: Int, $start: Int, $where: JSON) {
  listProposal(sort: $sort, limit: $limit, start: $start, where: $where) {
    count
    values {
      ...ProposalItem
    }
    statuses {
      id
      isLike
      isJoined
    }
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useGetProposalsQuery__
 *
 * To run a query within a React component, call `useGetProposalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetProposalsQuery(baseOptions?: Apollo.QueryHookOptions<GetProposalsQuery, GetProposalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProposalsQuery, GetProposalsQueryVariables>(GetProposalsDocument, options);
      }
export function useGetProposalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalsQuery, GetProposalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProposalsQuery, GetProposalsQueryVariables>(GetProposalsDocument, options);
        }
export type GetProposalsQueryHookResult = ReturnType<typeof useGetProposalsQuery>;
export type GetProposalsLazyQueryHookResult = ReturnType<typeof useGetProposalsLazyQuery>;
export type GetProposalsQueryResult = Apollo.QueryResult<GetProposalsQuery, GetProposalsQueryVariables>;
export const GetProposalFeeDocument = gql`
    query getProposalFee($proposalId: String!) {
  proposalFee(proposalId: $proposalId) {
    status
    type
    destination
    start
    end
    startAssess
    endAssess
    amount
    docHash
    title
    signature
    feeAmount
  }
}
    `;

/**
 * __useGetProposalFeeQuery__
 *
 * To run a query within a React component, call `useGetProposalFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalFeeQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useGetProposalFeeQuery(baseOptions: Apollo.QueryHookOptions<GetProposalFeeQuery, GetProposalFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProposalFeeQuery, GetProposalFeeQueryVariables>(GetProposalFeeDocument, options);
      }
export function useGetProposalFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalFeeQuery, GetProposalFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProposalFeeQuery, GetProposalFeeQueryVariables>(GetProposalFeeDocument, options);
        }
export type GetProposalFeeQueryHookResult = ReturnType<typeof useGetProposalFeeQuery>;
export type GetProposalFeeLazyQueryHookResult = ReturnType<typeof useGetProposalFeeLazyQuery>;
export type GetProposalFeeQueryResult = Apollo.QueryResult<GetProposalFeeQuery, GetProposalFeeQueryVariables>;
export const CheckProposalFeeDocument = gql`
    query checkProposalFee($proposalId: String!, $transactionHash: String!) {
  checkProposalFee(proposalId: $proposalId, transactionHash: $transactionHash) {
    proposal {
      ...ProposalItem
    }
    status
  }
}
    ${ProposalItemFragmentDoc}`;

/**
 * __useCheckProposalFeeQuery__
 *
 * To run a query within a React component, call `useCheckProposalFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckProposalFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckProposalFeeQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      transactionHash: // value for 'transactionHash'
 *   },
 * });
 */
export function useCheckProposalFeeQuery(baseOptions: Apollo.QueryHookOptions<CheckProposalFeeQuery, CheckProposalFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckProposalFeeQuery, CheckProposalFeeQueryVariables>(CheckProposalFeeDocument, options);
      }
export function useCheckProposalFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckProposalFeeQuery, CheckProposalFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckProposalFeeQuery, CheckProposalFeeQueryVariables>(CheckProposalFeeDocument, options);
        }
export type CheckProposalFeeQueryHookResult = ReturnType<typeof useCheckProposalFeeQuery>;
export type CheckProposalFeeLazyQueryHookResult = ReturnType<typeof useCheckProposalFeeLazyQuery>;
export type CheckProposalFeeQueryResult = Apollo.QueryResult<CheckProposalFeeQuery, CheckProposalFeeQueryVariables>;
export const JoinProposalDocument = gql`
    mutation joinProposal($input: JoinProposalInput!) {
  joinProposal(input: $input) {
    invalidValidator
    proposal {
      id
    }
  }
}
    `;
export type JoinProposalMutationFn = Apollo.MutationFunction<JoinProposalMutation, JoinProposalMutationVariables>;

/**
 * __useJoinProposalMutation__
 *
 * To run a mutation, you first call `useJoinProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinProposalMutation, { data, loading, error }] = useJoinProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJoinProposalMutation(baseOptions?: Apollo.MutationHookOptions<JoinProposalMutation, JoinProposalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinProposalMutation, JoinProposalMutationVariables>(JoinProposalDocument, options);
      }
export type JoinProposalMutationHookResult = ReturnType<typeof useJoinProposalMutation>;
export type JoinProposalMutationResult = Apollo.MutationResult<JoinProposalMutation>;
export type JoinProposalMutationOptions = Apollo.BaseMutationOptions<JoinProposalMutation, JoinProposalMutationVariables>;
export const AssessResultDocument = gql`
    query assessResult($proposalId: String!, $actor: String!) {
  assessResult(proposalId: $proposalId, actor: $actor) {
    isValidVoter
    isProposer
    needEvaluation
    proposalState
    assessParticipantSize
    assessData
  }
}
    `;

/**
 * __useAssessResultQuery__
 *
 * To run a query within a React component, call `useAssessResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssessResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssessResultQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      actor: // value for 'actor'
 *   },
 * });
 */
export function useAssessResultQuery(baseOptions: Apollo.QueryHookOptions<AssessResultQuery, AssessResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssessResultQuery, AssessResultQueryVariables>(AssessResultDocument, options);
      }
export function useAssessResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssessResultQuery, AssessResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssessResultQuery, AssessResultQueryVariables>(AssessResultDocument, options);
        }
export type AssessResultQueryHookResult = ReturnType<typeof useAssessResultQuery>;
export type AssessResultLazyQueryHookResult = ReturnType<typeof useAssessResultLazyQuery>;
export type AssessResultQueryResult = Apollo.QueryResult<AssessResultQuery, AssessResultQueryVariables>;
export const VoteStatusDocument = gql`
    query voteStatus($proposalId: String!, $actor: String!) {
  voteStatus(proposalId: $proposalId, actor: $actor) {
    isValidVoter
    isProposer
    needVote
    voteProposalState
    validatorSize
    voteResult
    destination
    countingFinishTime
    canWithdrawAt
  }
}
    `;

/**
 * __useVoteStatusQuery__
 *
 * To run a query within a React component, call `useVoteStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useVoteStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVoteStatusQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      actor: // value for 'actor'
 *   },
 * });
 */
export function useVoteStatusQuery(baseOptions: Apollo.QueryHookOptions<VoteStatusQuery, VoteStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VoteStatusQuery, VoteStatusQueryVariables>(VoteStatusDocument, options);
      }
export function useVoteStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VoteStatusQuery, VoteStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VoteStatusQuery, VoteStatusQueryVariables>(VoteStatusDocument, options);
        }
export type VoteStatusQueryHookResult = ReturnType<typeof useVoteStatusQuery>;
export type VoteStatusLazyQueryHookResult = ReturnType<typeof useVoteStatusLazyQuery>;
export type VoteStatusQueryResult = Apollo.QueryResult<VoteStatusQuery, VoteStatusQueryVariables>;
export const MeDocument = gql`
    query me {
  meEx {
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
  feedsStatus {
    notReadCount
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UpdatePushTokenDocument = gql`
    mutation updatePushToken($input: updateUserPushTokenInput!) {
  updateUserPushToken(input: $input) {
    userFeed {
      id
      pushes {
        id
        isActive
      }
    }
  }
}
    `;
export type UpdatePushTokenMutationFn = Apollo.MutationFunction<UpdatePushTokenMutation, UpdatePushTokenMutationVariables>;

/**
 * __useUpdatePushTokenMutation__
 *
 * To run a mutation, you first call `useUpdatePushTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePushTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePushTokenMutation, { data, loading, error }] = useUpdatePushTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePushTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePushTokenMutation, UpdatePushTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePushTokenMutation, UpdatePushTokenMutationVariables>(UpdatePushTokenDocument, options);
      }
export type UpdatePushTokenMutationHookResult = ReturnType<typeof useUpdatePushTokenMutation>;
export type UpdatePushTokenMutationResult = Apollo.MutationResult<UpdatePushTokenMutation>;
export type UpdatePushTokenMutationOptions = Apollo.BaseMutationOptions<UpdatePushTokenMutation, UpdatePushTokenMutationVariables>;
export const UpdateAlarmStatusDocument = gql`
    mutation updateAlarmStatus($input: updateUserAlarmStatusInput!) {
  updateUserAlarmStatus(input: $input) {
    userFeed {
      id
      myProposalsNews
      likeProposalsNews
      newProposalsNews
      myCommentsNews
      etcNews
    }
  }
}
    `;
export type UpdateAlarmStatusMutationFn = Apollo.MutationFunction<UpdateAlarmStatusMutation, UpdateAlarmStatusMutationVariables>;

/**
 * __useUpdateAlarmStatusMutation__
 *
 * To run a mutation, you first call `useUpdateAlarmStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlarmStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlarmStatusMutation, { data, loading, error }] = useUpdateAlarmStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAlarmStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlarmStatusMutation, UpdateAlarmStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAlarmStatusMutation, UpdateAlarmStatusMutationVariables>(UpdateAlarmStatusDocument, options);
      }
export type UpdateAlarmStatusMutationHookResult = ReturnType<typeof useUpdateAlarmStatusMutation>;
export type UpdateAlarmStatusMutationResult = Apollo.MutationResult<UpdateAlarmStatusMutation>;
export type UpdateAlarmStatusMutationOptions = Apollo.BaseMutationOptions<UpdateAlarmStatusMutation, UpdateAlarmStatusMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!, $info: FileInfoInput) {
  upload(file: $file, info: $info) {
    id
  }
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *      info: // value for 'info'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const VoteraConfigurationDocument = gql`
    query VoteraConfiguration {
  version {
    ios
    android
  }
  agora {
    proposalFundMin
    proposalFundMax
    userServiceTermUrl
    privacyTermUrl
    commonsBudgetAddress
    voteraVoteAddress
    providerUrl
    agoraScanUrl
    boaScanUrl
  }
  feePolicy {
    fundProposalFeePermil
    systemProposalFee
    voterFee
    withdrawDelayPeriod
  }
}
    `;

/**
 * __useVoteraConfigurationQuery__
 *
 * To run a query within a React component, call `useVoteraConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useVoteraConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVoteraConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useVoteraConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<VoteraConfigurationQuery, VoteraConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VoteraConfigurationQuery, VoteraConfigurationQueryVariables>(VoteraConfigurationDocument, options);
      }
export function useVoteraConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VoteraConfigurationQuery, VoteraConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VoteraConfigurationQuery, VoteraConfigurationQueryVariables>(VoteraConfigurationDocument, options);
        }
export type VoteraConfigurationQueryHookResult = ReturnType<typeof useVoteraConfigurationQuery>;
export type VoteraConfigurationLazyQueryHookResult = ReturnType<typeof useVoteraConfigurationLazyQuery>;
export type VoteraConfigurationQueryResult = Apollo.QueryResult<VoteraConfigurationQuery, VoteraConfigurationQueryVariables>;
export const UpdateReceiptDocument = gql`
    mutation UpdateReceipt($input: UpdateReceiptInput!) {
  updateReceipt(input: $input) {
    status
  }
}
    `;
export type UpdateReceiptMutationFn = Apollo.MutationFunction<UpdateReceiptMutation, UpdateReceiptMutationVariables>;

/**
 * __useUpdateReceiptMutation__
 *
 * To run a mutation, you first call `useUpdateReceiptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReceiptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReceiptMutation, { data, loading, error }] = useUpdateReceiptMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReceiptMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReceiptMutation, UpdateReceiptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReceiptMutation, UpdateReceiptMutationVariables>(UpdateReceiptDocument, options);
      }
export type UpdateReceiptMutationHookResult = ReturnType<typeof useUpdateReceiptMutation>;
export type UpdateReceiptMutationResult = Apollo.MutationResult<UpdateReceiptMutation>;
export type UpdateReceiptMutationOptions = Apollo.BaseMutationOptions<UpdateReceiptMutation, UpdateReceiptMutationVariables>;
export const GetSignInDomainDocument = gql`
    query getSignInDomain {
  getSignInDomain {
    name
    version
    chainId
    verifyingContract
  }
}
    `;

/**
 * __useGetSignInDomainQuery__
 *
 * To run a query within a React component, call `useGetSignInDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignInDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignInDomainQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSignInDomainQuery(baseOptions?: Apollo.QueryHookOptions<GetSignInDomainQuery, GetSignInDomainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSignInDomainQuery, GetSignInDomainQueryVariables>(GetSignInDomainDocument, options);
      }
export function useGetSignInDomainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignInDomainQuery, GetSignInDomainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSignInDomainQuery, GetSignInDomainQueryVariables>(GetSignInDomainDocument, options);
        }
export type GetSignInDomainQueryHookResult = ReturnType<typeof useGetSignInDomainQuery>;
export type GetSignInDomainLazyQueryHookResult = ReturnType<typeof useGetSignInDomainLazyQuery>;
export type GetSignInDomainQueryResult = Apollo.QueryResult<GetSignInDomainQuery, GetSignInDomainQueryVariables>;
export const GetSignUpDomainDocument = gql`
    query getSignUpDomain {
  getSignUpDomain {
    name
    version
    chainId
    verifyingContract
  }
}
    `;

/**
 * __useGetSignUpDomainQuery__
 *
 * To run a query within a React component, call `useGetSignUpDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignUpDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignUpDomainQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSignUpDomainQuery(baseOptions?: Apollo.QueryHookOptions<GetSignUpDomainQuery, GetSignUpDomainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSignUpDomainQuery, GetSignUpDomainQueryVariables>(GetSignUpDomainDocument, options);
      }
export function useGetSignUpDomainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignUpDomainQuery, GetSignUpDomainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSignUpDomainQuery, GetSignUpDomainQueryVariables>(GetSignUpDomainDocument, options);
        }
export type GetSignUpDomainQueryHookResult = ReturnType<typeof useGetSignUpDomainQuery>;
export type GetSignUpDomainLazyQueryHookResult = ReturnType<typeof useGetSignUpDomainLazyQuery>;
export type GetSignUpDomainQueryResult = Apollo.QueryResult<GetSignUpDomainQuery, GetSignUpDomainQueryVariables>;
export const IsValidatorDocument = gql`
    query isValidator($address: String!) {
  isValidator(address: $address) {
    valid
    publicKey
  }
}
    `;

/**
 * __useIsValidatorQuery__
 *
 * To run a query within a React component, call `useIsValidatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsValidatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsValidatorQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useIsValidatorQuery(baseOptions: Apollo.QueryHookOptions<IsValidatorQuery, IsValidatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsValidatorQuery, IsValidatorQueryVariables>(IsValidatorDocument, options);
      }
export function useIsValidatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsValidatorQuery, IsValidatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsValidatorQuery, IsValidatorQueryVariables>(IsValidatorDocument, options);
        }
export type IsValidatorQueryHookResult = ReturnType<typeof useIsValidatorQuery>;
export type IsValidatorLazyQueryHookResult = ReturnType<typeof useIsValidatorLazyQuery>;
export type IsValidatorQueryResult = Apollo.QueryResult<IsValidatorQuery, IsValidatorQueryVariables>;
export const ListAssessValidatorsDocument = gql`
    query listAssessValidators($proposalId: String!, $limit: Int, $start: Int) {
  listAssessValidators(proposalId: $proposalId, limit: $limit, start: $start) {
    ...ValidatorItem
  }
  voteCount(proposalId: $proposalId) {
    id
    validatorCount
    assessCount
    ballotCount
  }
}
    ${ValidatorItemFragmentDoc}`;

/**
 * __useListAssessValidatorsQuery__
 *
 * To run a query within a React component, call `useListAssessValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAssessValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAssessValidatorsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useListAssessValidatorsQuery(baseOptions: Apollo.QueryHookOptions<ListAssessValidatorsQuery, ListAssessValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAssessValidatorsQuery, ListAssessValidatorsQueryVariables>(ListAssessValidatorsDocument, options);
      }
export function useListAssessValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAssessValidatorsQuery, ListAssessValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAssessValidatorsQuery, ListAssessValidatorsQueryVariables>(ListAssessValidatorsDocument, options);
        }
export type ListAssessValidatorsQueryHookResult = ReturnType<typeof useListAssessValidatorsQuery>;
export type ListAssessValidatorsLazyQueryHookResult = ReturnType<typeof useListAssessValidatorsLazyQuery>;
export type ListAssessValidatorsQueryResult = Apollo.QueryResult<ListAssessValidatorsQuery, ListAssessValidatorsQueryVariables>;
export const ListBallotValidatorsDocument = gql`
    query listBallotValidators($proposalId: String!, $limit: Int, $start: Int) {
  listBallotValidators(proposalId: $proposalId, limit: $limit, start: $start) {
    ...ValidatorItem
  }
  voteCount(proposalId: $proposalId) {
    id
    validatorCount
    assessCount
    ballotCount
  }
}
    ${ValidatorItemFragmentDoc}`;

/**
 * __useListBallotValidatorsQuery__
 *
 * To run a query within a React component, call `useListBallotValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBallotValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBallotValidatorsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useListBallotValidatorsQuery(baseOptions: Apollo.QueryHookOptions<ListBallotValidatorsQuery, ListBallotValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBallotValidatorsQuery, ListBallotValidatorsQueryVariables>(ListBallotValidatorsDocument, options);
      }
export function useListBallotValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBallotValidatorsQuery, ListBallotValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBallotValidatorsQuery, ListBallotValidatorsQueryVariables>(ListBallotValidatorsDocument, options);
        }
export type ListBallotValidatorsQueryHookResult = ReturnType<typeof useListBallotValidatorsQuery>;
export type ListBallotValidatorsLazyQueryHookResult = ReturnType<typeof useListBallotValidatorsLazyQuery>;
export type ListBallotValidatorsQueryResult = Apollo.QueryResult<ListBallotValidatorsQuery, ListBallotValidatorsQueryVariables>;