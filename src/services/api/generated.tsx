import {gql} from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any
  /** The built-in `Decimal` scalar type. */
  Decimal: any
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  TimeSpan: any
  Uuid: any
}

export type AcceptGameInvitationInput = {
  gameId: Scalars['Uuid']
}

export type AgendaInput = {
  communityIds?: Maybe<Array<Scalars['Uuid']>>
  courseIds?: Maybe<Array<Scalars['Uuid']>>
  month: Scalars['Int']
  year: Scalars['Int']
}

export type CancelGameInput = {
  gameId: Scalars['Uuid']
}

export type CancelGameInvitationInput = {
  gameId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type CancelGameTeeTimeInput = {
  gameId: Scalars['Uuid']
}

export type ChangeGameHostInput = {
  gameId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type Chat = {
  __typename?: 'Chat'
  token: Scalars['String']
}

export enum CommunicationMethod {
  Email = 'EMAIL',
  Pushnotifications = 'PUSHNOTIFICATIONS'
}

export type Community = {
  __typename?: 'Community'
  admins?: Maybe<Array<Maybe<Player>>>
  id: Scalars['Uuid']
  initials?: Maybe<Scalars['String']>
  isMember: Scalars['Boolean']
  memberCount: Scalars['Long']
  members?: Maybe<PaginatedResultsOfCommunityMember>
  name: Scalars['String']
  postCount: Scalars['Int']
  posts?: Maybe<PaginatedResultsOfPostOfCommunity>
  profileImageRef?: Maybe<ImageRef>
}

export type CommunityMembersArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type CommunityPostsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type CommunityMember = {
  __typename?: 'CommunityMember'
  id: Scalars['Uuid']
  isAdmin: Scalars['Boolean']
  joinedOn: Scalars['DateTime']
  player?: Maybe<Player>
}

export type CommunityPostCommentReactionFeedEntry = IFeedEntry & {
  __typename?: 'CommunityPostCommentReactionFeedEntry'
  comment?: Maybe<PostCommentOfCommunity>
  community?: Maybe<Community>
  id: Scalars['Uuid']
  player?: Maybe<Player>
  timestamp: Scalars['DateTime']
}

export type CommunityPostFeedEntry = IFeedEntry & {
  __typename?: 'CommunityPostFeedEntry'
  community?: Maybe<Community>
  id: Scalars['Uuid']
  post?: Maybe<PostOfCommunity>
  timestamp: Scalars['DateTime']
}

export type CommunityPostReactionFeedEntry = IFeedEntry & {
  __typename?: 'CommunityPostReactionFeedEntry'
  community?: Maybe<Community>
  id: Scalars['Uuid']
  player?: Maybe<Player>
  post?: Maybe<PostOfCommunity>
  timestamp: Scalars['DateTime']
}

export type ConfirmGamePlayerInput = {
  gameId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type ConfirmGameTeeTimeInput = {
  gameId: Scalars['Uuid']
}

export type Coordinates = {
  __typename?: 'Coordinates'
  lat: Scalars['Decimal']
  lon: Scalars['Decimal']
}

export type CoordinatesInput = {
  lat: Scalars['Decimal']
  lon: Scalars['Decimal']
}

export type Course = {
  __typename?: 'Course'
  description: Scalars['String']
  emailAddress: Scalars['String']
  id: Scalars['Uuid']
  name: Scalars['String']
  physicalAddress: PhysicalAddress
  reactions?: Maybe<Array<Maybe<Reaction>>>
  telephoneNumber: TelephoneNumber
  timezone?: Maybe<Timezone>
}

export type CreateCommunityCommentReactionInput = {
  commentId: Scalars['Uuid']
  communityId: Scalars['Uuid']
  reactionType: ReactionType
}

export type CreateCommunityInput = {
  name: Scalars['String']
}

export type CreateCommunityPostCommentInput = {
  body?: Maybe<Scalars['String']>
  communityId: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
  postId: Scalars['Uuid']
}

export type CreateCommunityPostCommentReplyInput = {
  body?: Maybe<Scalars['String']>
  commentId: Scalars['Uuid']
  communityId: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
}

export type CreateCommunityPostInput = {
  body?: Maybe<Scalars['String']>
  communityId: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
}

export type CreateCommunityPostReactionInput = {
  communityId: Scalars['Uuid']
  postId: Scalars['Uuid']
  reactionType: ReactionType
}

export type CreateCourseInput = {
  description: Scalars['String']
  emailAddress: Scalars['String']
  name: Scalars['String']
  physicalAddress: PhysicalAddressInput
  telephoneNumber: TelephoneNumberInput
  timezoneId: Scalars['String']
}

export type CreateCourseReactionInput = {
  courseId: Scalars['Uuid']
  reactionType: ReactionType
}

export type CreateGameInput = {
  automaticallyConfirmTeeTime?: Maybe<Scalars['Boolean']>
  communityIds: Array<Scalars['Uuid']>
  courseId: Scalars['Uuid']
  gameType: GameType
  holes: Holes
  isHostPlaying?: Maybe<Scalars['Boolean']>
  numberOfPlayers: Scalars['Int']
  teeTime: DateTimeInfoInput
}

export type CreateGameInvitationInput = {
  gameId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type CreateGameReactionInput = {
  gameId: Scalars['Uuid']
  reactionType: ReactionType
}

export type CreatePlayerCommentReactionInput = {
  commentId: Scalars['Uuid']
  playerId: Scalars['Uuid']
  reactionType: ReactionType
}

export type CreatePlayerPostCommentInput = {
  body?: Maybe<Scalars['String']>
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
  playerId: Scalars['Uuid']
  postId: Scalars['Uuid']
}

export type CreatePlayerPostCommentReplyInput = {
  body?: Maybe<Scalars['String']>
  commentId: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
  playerId: Scalars['Uuid']
}

export type CreatePlayerPostInput = {
  body?: Maybe<Scalars['String']>
  imageRefs?: Maybe<Array<Maybe<ImageRefInput>>>
}

export type CreatePlayerPostReactionInput = {
  playerId: Scalars['Uuid']
  postId: Scalars['Uuid']
  reactionType: ReactionType
}

export type DateRangeInput = {
  from?: Maybe<Scalars['DateTime']>
  to?: Maybe<Scalars['DateTime']>
}

export type DateTimeInfoInput = {
  day: Scalars['Int']
  hour: Scalars['Int']
  minute: Scalars['Int']
  month: Scalars['Int']
  year: Scalars['Int']
}

export type DeclineGameInvitationInput = {
  gameId: Scalars['Uuid']
}

export type DeclineGamePlayerInput = {
  gameId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type DiscardPlayerGameInput = {
  gameId: Scalars['Uuid']
}

export type FollowPlayerInput = {
  playerId: Scalars['Uuid']
}

export type Game = {
  __typename?: 'Game'
  communities?: Maybe<Array<Maybe<Community>>>
  course?: Maybe<Course>
  gameType: GameType
  holes: Holes
  host?: Maybe<Player>
  id: Scalars['Uuid']
  invitations?: Maybe<Array<Maybe<GameInvitation>>>
  isCancelled: Scalars['Boolean']
  isHost: Scalars['Boolean']
  isPlaying: Scalars['Boolean']
  myStatus?: Maybe<GamePlayerStatus>
  numberOfPlayers: Scalars['Int']
  playerCount: Scalars['Int']
  players?: Maybe<Array<Maybe<GamePlayer>>>
  reactions?: Maybe<Array<Maybe<Reaction>>>
  teeTime: TeeTime
}

export type GameFeedEntry = IFeedEntry & {
  __typename?: 'GameFeedEntry'
  game?: Maybe<Game>
  id: Scalars['Uuid']
  player?: Maybe<Player>
  timestamp: Scalars['DateTime']
}

export type GameInvitation = {
  __typename?: 'GameInvitation'
  createdOn: Scalars['DateTime']
  player?: Maybe<Player>
}

export type GamePlayer = {
  __typename?: 'GamePlayer'
  id: Scalars['Uuid']
  isHost: Scalars['Boolean']
  joinedOn: Scalars['DateTime']
  player?: Maybe<Player>
  status: GamePlayerStatus
}

export enum GamePlayerStatus {
  Confirmed = 'CONFIRMED',
  Declined = 'DECLINED',
  Pendingconfirmation = 'PENDINGCONFIRMATION',
  Standby = 'STANDBY'
}

export enum GameType {
  Competitivesingle = 'COMPETITIVESINGLE',
  Competitiveteam = 'COMPETITIVETEAM',
  Moneygame = 'MONEYGAME',
  Social = 'SOCIAL',
  Tournament = 'TOURNAMENT'
}

export type GamesSearchInput = {
  communityIds?: Maybe<Array<Scalars['Uuid']>>
  courseIds?: Maybe<Array<Scalars['Uuid']>>
  isAscending?: Maybe<Scalars['Boolean']>
  teeTime?: Maybe<DateRangeInput>
  term?: Maybe<Scalars['String']>
}

export enum Holes {
  Eighteenholes = 'EIGHTEENHOLES',
  Nineholes = 'NINEHOLES'
}

export type IFeedEntry = {
  id: Scalars['Uuid']
  timestamp: Scalars['DateTime']
}

export type ImageRef = {
  __typename?: 'ImageRef'
  height: Scalars['Int']
  ref?: Maybe<Scalars['String']>
  width: Scalars['Int']
}

export type ImageRefInput = {
  filename?: Maybe<Scalars['String']>
  height: Scalars['Int']
  width: Scalars['Int']
}

export type JoinCommunityInput = {
  communityId: Scalars['Uuid']
}

export type JoinGameInput = {
  gameId: Scalars['Uuid']
}

export type LeaveCommunityInput = {
  communityId: Scalars['Uuid']
}

export type LeaveGameInput = {
  gameId: Scalars['Uuid']
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptGameInvitation?: Maybe<Player>
  cancelGame?: Maybe<Game>
  cancelGameInvitation?: Maybe<Game>
  cancelGameTeeTime?: Maybe<Game>
  changeGameHost?: Maybe<Game>
  confirmGamePlayer?: Maybe<Game>
  confirmGameTeeTime?: Maybe<Game>
  createCommunity?: Maybe<Community>
  createCommunityCommentReaction?: Maybe<PostCommentOfCommunity>
  createCommunityPost?: Maybe<PostOfCommunity>
  createCommunityPostComment?: Maybe<PostOfCommunity>
  createCommunityPostCommentReply?: Maybe<PostCommentOfCommunity>
  createCommunityPostReaction?: Maybe<PostOfCommunity>
  createCourse?: Maybe<Course>
  createCourseReaction?: Maybe<Course>
  createGame?: Maybe<Game>
  createGameInvitation?: Maybe<Game>
  createGameReaction?: Maybe<Game>
  createPlayerCommentReaction?: Maybe<PostCommentOfPlayer>
  createPlayerPost?: Maybe<PostOfPlayer>
  createPlayerPostComment?: Maybe<PostOfPlayer>
  createPlayerPostCommentReply?: Maybe<PostCommentOfPlayer>
  createPlayerPostReaction?: Maybe<PostOfPlayer>
  declineGameInvitation?: Maybe<Player>
  declineGamePlayer?: Maybe<Game>
  discardPlayerGame?: Maybe<Player>
  followPlayer?: Maybe<Player>
  joinCommunity?: Maybe<Player>
  joinGame?: Maybe<Game>
  leaveCommunity?: Maybe<Player>
  leaveGame?: Maybe<Game>
  registerPlayer?: Maybe<Player>
  registerPlayerFcmToken?: Maybe<Player>
  removeCourseReaction?: Maybe<Course>
  removeGameReaction?: Maybe<Game>
  reportAbuse?: Maybe<Player>
  setCommunityAdmins?: Maybe<Community>
  setCommunityProfileImageRef?: Maybe<Community>
  setNotificationPreferences?: Maybe<Player>
  setPlayerProfileImageRef?: Maybe<Player>
  unfollowPlayer?: Maybe<Player>
  updateCommunity?: Maybe<Community>
  updateCourse?: Maybe<Course>
  updateGame?: Maybe<Game>
  updatePlayer?: Maybe<Player>
  updatePlayerCoursePreferences?: Maybe<Player>
  updatePlayerGamePreferences?: Maybe<Player>
  updatePlayerHandicap?: Maybe<Player>
  updatePlayerPreferences?: Maybe<Player>
}

export type MutationAcceptGameInvitationArgs = {
  input?: Maybe<AcceptGameInvitationInput>
}

export type MutationCancelGameArgs = {
  input?: Maybe<CancelGameInput>
}

export type MutationCancelGameInvitationArgs = {
  input?: Maybe<CancelGameInvitationInput>
}

export type MutationCancelGameTeeTimeArgs = {
  input?: Maybe<CancelGameTeeTimeInput>
}

export type MutationChangeGameHostArgs = {
  input?: Maybe<ChangeGameHostInput>
}

export type MutationConfirmGamePlayerArgs = {
  input?: Maybe<ConfirmGamePlayerInput>
}

export type MutationConfirmGameTeeTimeArgs = {
  input?: Maybe<ConfirmGameTeeTimeInput>
}

export type MutationCreateCommunityArgs = {
  input?: Maybe<CreateCommunityInput>
}

export type MutationCreateCommunityCommentReactionArgs = {
  input?: Maybe<CreateCommunityCommentReactionInput>
}

export type MutationCreateCommunityPostArgs = {
  input?: Maybe<CreateCommunityPostInput>
}

export type MutationCreateCommunityPostCommentArgs = {
  input?: Maybe<CreateCommunityPostCommentInput>
}

export type MutationCreateCommunityPostCommentReplyArgs = {
  input?: Maybe<CreateCommunityPostCommentReplyInput>
}

export type MutationCreateCommunityPostReactionArgs = {
  input?: Maybe<CreateCommunityPostReactionInput>
}

export type MutationCreateCourseArgs = {
  input?: Maybe<CreateCourseInput>
}

export type MutationCreateCourseReactionArgs = {
  input?: Maybe<CreateCourseReactionInput>
}

export type MutationCreateGameArgs = {
  input?: Maybe<CreateGameInput>
}

export type MutationCreateGameInvitationArgs = {
  input?: Maybe<CreateGameInvitationInput>
}

export type MutationCreateGameReactionArgs = {
  input?: Maybe<CreateGameReactionInput>
}

export type MutationCreatePlayerCommentReactionArgs = {
  input?: Maybe<CreatePlayerCommentReactionInput>
}

export type MutationCreatePlayerPostArgs = {
  input?: Maybe<CreatePlayerPostInput>
}

export type MutationCreatePlayerPostCommentArgs = {
  input?: Maybe<CreatePlayerPostCommentInput>
}

export type MutationCreatePlayerPostCommentReplyArgs = {
  input?: Maybe<CreatePlayerPostCommentReplyInput>
}

export type MutationCreatePlayerPostReactionArgs = {
  input?: Maybe<CreatePlayerPostReactionInput>
}

export type MutationDeclineGameInvitationArgs = {
  input?: Maybe<DeclineGameInvitationInput>
}

export type MutationDeclineGamePlayerArgs = {
  input?: Maybe<DeclineGamePlayerInput>
}

export type MutationDiscardPlayerGameArgs = {
  input?: Maybe<DiscardPlayerGameInput>
}

export type MutationFollowPlayerArgs = {
  input?: Maybe<FollowPlayerInput>
}

export type MutationJoinCommunityArgs = {
  input?: Maybe<JoinCommunityInput>
}

export type MutationJoinGameArgs = {
  input?: Maybe<JoinGameInput>
}

export type MutationLeaveCommunityArgs = {
  input?: Maybe<LeaveCommunityInput>
}

export type MutationLeaveGameArgs = {
  input?: Maybe<LeaveGameInput>
}

export type MutationRegisterPlayerArgs = {
  input?: Maybe<RegisterPlayerInput>
}

export type MutationRegisterPlayerFcmTokenArgs = {
  input?: Maybe<RegisterPlayerFcmTokenInput>
}

export type MutationRemoveCourseReactionArgs = {
  input?: Maybe<RemoveReactionInput>
}

export type MutationRemoveGameReactionArgs = {
  input?: Maybe<RemoveReactionInput>
}

export type MutationReportAbuseArgs = {
  input?: Maybe<ReportAbuseInput>
}

export type MutationSetCommunityAdminsArgs = {
  input?: Maybe<SetCommunityAdminsInput>
}

export type MutationSetCommunityProfileImageRefArgs = {
  input?: Maybe<SetCommunityProfileImageRefInput>
}

export type MutationSetNotificationPreferencesArgs = {
  input?: Maybe<SetNotificationPreferencesInput>
}

export type MutationSetPlayerProfileImageRefArgs = {
  input?: Maybe<ImageRefInput>
}

export type MutationUnfollowPlayerArgs = {
  input?: Maybe<UnfollowPlayerInput>
}

export type MutationUpdateCommunityArgs = {
  input?: Maybe<UpdateCommunityInput>
}

export type MutationUpdateCourseArgs = {
  input?: Maybe<UpdateCourseInput>
}

export type MutationUpdateGameArgs = {
  input?: Maybe<UpdateGameInput>
}

export type MutationUpdatePlayerArgs = {
  input?: Maybe<UpdatePlayerInput>
}

export type MutationUpdatePlayerCoursePreferencesArgs = {
  input?: Maybe<UpdatePlayerCoursePreferencesInput>
}

export type MutationUpdatePlayerGamePreferencesArgs = {
  input?: Maybe<UpdatePlayerGamePreferencesInput>
}

export type MutationUpdatePlayerHandicapArgs = {
  input?: Maybe<UpdatePlayerHandicapInput>
}

export type MutationUpdatePlayerPreferencesArgs = {
  input?: Maybe<UpdatePlayerPreferencesInput>
}

export type NotificationPreference = {
  __typename?: 'NotificationPreference'
  communicationMethods: Array<CommunicationMethod>
  eventType: Scalars['String']
}

export type NotificationPreferenceInput = {
  communicationMethods: Array<CommunicationMethod>
  eventType: Scalars['String']
}

export type PaginatedResultsOfCommunity = {
  __typename?: 'PaginatedResultsOfCommunity'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<Community>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfCommunityMember = {
  __typename?: 'PaginatedResultsOfCommunityMember'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<CommunityMember>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfCourse = {
  __typename?: 'PaginatedResultsOfCourse'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<Course>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfGame = {
  __typename?: 'PaginatedResultsOfGame'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<Game>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfIFeedEntry = {
  __typename?: 'PaginatedResultsOfIFeedEntry'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<IFeedEntry>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfPlayer = {
  __typename?: 'PaginatedResultsOfPlayer'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<Player>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfPostCommentOfCommunity = {
  __typename?: 'PaginatedResultsOfPostCommentOfCommunity'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<PostCommentOfCommunity>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfPostCommentOfPlayer = {
  __typename?: 'PaginatedResultsOfPostCommentOfPlayer'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<PostCommentOfPlayer>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfPostOfCommunity = {
  __typename?: 'PaginatedResultsOfPostOfCommunity'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<PostOfCommunity>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfPostOfPlayer = {
  __typename?: 'PaginatedResultsOfPostOfPlayer'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<PostOfPlayer>
  total?: Maybe<Scalars['Long']>
}

export type PaginatedResultsOfReactionDetail = {
  __typename?: 'PaginatedResultsOfReactionDetail'
  continuationToken?: Maybe<Scalars['String']>
  data: Array<ReactionDetail>
  total?: Maybe<Scalars['Long']>
}

export enum Permission {
  Createcommunity = 'CREATECOMMUNITY',
  Creategame = 'CREATEGAME',
  Createpost = 'CREATEPOST',
  Createpostcomment = 'CREATEPOSTCOMMENT',
  Upsertcourse = 'UPSERTCOURSE'
}

export type PhysicalAddress = {
  __typename?: 'PhysicalAddress'
  city: Scalars['String']
  coordinates: Coordinates
  countryCode: Scalars['String']
  postCode: Scalars['String']
  province: Scalars['String']
  street: Scalars['String']
  streetNumber: Scalars['String']
  suburb: Scalars['String']
}

export type PhysicalAddressInput = {
  city: Scalars['String']
  coordinates: CoordinatesInput
  countryCode: Scalars['String']
  postCode: Scalars['String']
  province: Scalars['String']
  street: Scalars['String']
  streetNumber: Scalars['String']
  suburb: Scalars['String']
}

export type Player = {
  __typename?: 'Player'
  communities?: Maybe<Array<Maybe<Community>>>
  countryCode?: Maybe<Scalars['String']>
  followers?: Maybe<PaginatedResultsOfPlayer>
  followersCount: Scalars['Int']
  following?: Maybe<PaginatedResultsOfPlayer>
  followingCount: Scalars['Int']
  gameInvitations?: Maybe<Array<Maybe<PlayerGameInvitation>>>
  games?: Maybe<PaginatedResultsOfGame>
  handicap: Scalars['Int']
  id: Scalars['Uuid']
  initials?: Maybe<Scalars['String']>
  isFollower: Scalars['Boolean']
  isFollowing: Scalars['Boolean']
  isRegistered: Scalars['Boolean']
  isSelf: Scalars['Boolean']
  name?: Maybe<Scalars['String']>
  notificationPreferences?: Maybe<Array<Maybe<NotificationPreference>>>
  permissions?: Maybe<Array<Permission>>
  playerTypes: Array<PlayerType>
  postCount: Scalars['Int']
  posts?: Maybe<PaginatedResultsOfPostOfPlayer>
  preferredCourses?: Maybe<Array<Maybe<Course>>>
  preferredGameTypes: Array<GameType>
  preferredPlayerTypes: Array<PlayerType>
  profileImageRef?: Maybe<ImageRef>
}

export type PlayerFollowersArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PlayerFollowingArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PlayerGamesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  input?: Maybe<GamesSearchInput>
  limit?: Scalars['Int']
}

export type PlayerPostsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PlayerGameInvitation = {
  __typename?: 'PlayerGameInvitation'
  createdBy?: Maybe<Player>
  createdOn: Scalars['DateTime']
  game?: Maybe<Game>
}

export type PlayerPostCommentReactionFeedEntry = IFeedEntry & {
  __typename?: 'PlayerPostCommentReactionFeedEntry'
  comment?: Maybe<PostCommentOfPlayer>
  id: Scalars['Uuid']
  player?: Maybe<Player>
  timestamp: Scalars['DateTime']
}

export type PlayerPostFeedEntry = IFeedEntry & {
  __typename?: 'PlayerPostFeedEntry'
  id: Scalars['Uuid']
  player?: Maybe<Player>
  post?: Maybe<PostOfPlayer>
  timestamp: Scalars['DateTime']
}

export type PlayerPostReactionFeedEntry = IFeedEntry & {
  __typename?: 'PlayerPostReactionFeedEntry'
  id: Scalars['Uuid']
  player?: Maybe<Player>
  post?: Maybe<PostOfPlayer>
  timestamp: Scalars['DateTime']
}

export enum PlayerType {
  Beginner = 'BEGINNER',
  Matchplay = 'MATCHPLAY',
  Relaxed = 'RELAXED',
  Social = 'SOCIAL'
}

export type PlayersSearchInput = {
  term?: Maybe<Scalars['String']>
}

export type PostCommentOfCommunity = {
  __typename?: 'PostCommentOfCommunity'
  author?: Maybe<Player>
  body?: Maybe<Scalars['String']>
  id: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRef>>>
  partitionKey?: Maybe<Scalars['String']>
  reactionDetails?: Maybe<PaginatedResultsOfReactionDetail>
  reactions?: Maybe<Array<Maybe<Reaction>>>
  replies?: Maybe<PaginatedResultsOfPostCommentOfCommunity>
  replyCount: Scalars['Int']
  timestamp: Scalars['DateTime']
}

export type PostCommentOfCommunityReactionDetailsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostCommentOfCommunityRepliesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostCommentOfPlayer = {
  __typename?: 'PostCommentOfPlayer'
  author?: Maybe<Player>
  body?: Maybe<Scalars['String']>
  id: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRef>>>
  partitionKey?: Maybe<Scalars['String']>
  reactionDetails?: Maybe<PaginatedResultsOfReactionDetail>
  reactions?: Maybe<Array<Maybe<Reaction>>>
  replies?: Maybe<PaginatedResultsOfPostCommentOfPlayer>
  replyCount: Scalars['Int']
  timestamp: Scalars['DateTime']
}

export type PostCommentOfPlayerReactionDetailsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostCommentOfPlayerRepliesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostOfCommunity = {
  __typename?: 'PostOfCommunity'
  author?: Maybe<Community>
  body?: Maybe<Scalars['String']>
  commentCount: Scalars['Int']
  comments?: Maybe<PaginatedResultsOfPostCommentOfCommunity>
  id: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRef>>>
  partitionKey?: Maybe<Scalars['String']>
  reactionDetails?: Maybe<PaginatedResultsOfReactionDetail>
  reactions?: Maybe<Array<Maybe<Reaction>>>
  timestamp: Scalars['DateTime']
}

export type PostOfCommunityCommentsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostOfCommunityReactionDetailsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostOfPlayer = {
  __typename?: 'PostOfPlayer'
  author?: Maybe<Player>
  body?: Maybe<Scalars['String']>
  commentCount: Scalars['Int']
  comments?: Maybe<PaginatedResultsOfPostCommentOfPlayer>
  id: Scalars['Uuid']
  imageRefs?: Maybe<Array<Maybe<ImageRef>>>
  partitionKey?: Maybe<Scalars['String']>
  reactionDetails?: Maybe<PaginatedResultsOfReactionDetail>
  reactions?: Maybe<Array<Maybe<Reaction>>>
  timestamp: Scalars['DateTime']
}

export type PostOfPlayerCommentsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type PostOfPlayerReactionDetailsArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  agenda?: Maybe<Array<Maybe<Game>>>
  chat?: Maybe<Chat>
  communities?: Maybe<PaginatedResultsOfCommunity>
  community?: Maybe<Community>
  communityPost?: Maybe<PostOfCommunity>
  communityPostComment?: Maybe<PostCommentOfCommunity>
  course?: Maybe<Course>
  courses?: Maybe<PaginatedResultsOfCourse>
  feed?: Maybe<PaginatedResultsOfIFeedEntry>
  game?: Maybe<Game>
  games?: Maybe<PaginatedResultsOfGame>
  player?: Maybe<Player>
  playerPost?: Maybe<PostOfPlayer>
  playerPostComment?: Maybe<PostCommentOfPlayer>
  players?: Maybe<PaginatedResultsOfPlayer>
}

export type QueryAgendaArgs = {
  input?: Maybe<AgendaInput>
}

export type QueryChatArgs = {
  platform?: Maybe<Scalars['String']>
}

export type QueryCommunitiesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
  term?: Maybe<Scalars['String']>
}

export type QueryCommunityArgs = {
  communityId: Scalars['Uuid']
}

export type QueryCommunityPostArgs = {
  communityId: Scalars['Uuid']
  postId: Scalars['Uuid']
}

export type QueryCommunityPostCommentArgs = {
  commentId: Scalars['Uuid']
  communityId: Scalars['Uuid']
}

export type QueryCourseArgs = {
  courseId: Scalars['Uuid']
}

export type QueryCoursesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
  term?: Maybe<Scalars['String']>
}

export type QueryFeedArgs = {
  continuationToken?: Maybe<Scalars['String']>
  limit?: Scalars['Int']
}

export type QueryGameArgs = {
  gameId: Scalars['Uuid']
}

export type QueryGamesArgs = {
  continuationToken?: Maybe<Scalars['String']>
  input?: Maybe<GamesSearchInput>
  limit?: Scalars['Int']
}

export type QueryPlayerArgs = {
  id?: Maybe<Scalars['Uuid']>
}

export type QueryPlayerPostArgs = {
  playerId: Scalars['Uuid']
  postId: Scalars['Uuid']
}

export type QueryPlayerPostCommentArgs = {
  commentId: Scalars['Uuid']
  playerId: Scalars['Uuid']
}

export type QueryPlayersArgs = {
  continuationToken?: Maybe<Scalars['String']>
  input?: Maybe<PlayersSearchInput>
  limit?: Scalars['Int']
}

export type Reaction = {
  __typename?: 'Reaction'
  count: Scalars['Int']
  partitionKey?: Maybe<Scalars['String']>
  reactionType: ReactionType
}

export type ReactionDetail = {
  __typename?: 'ReactionDetail'
  id?: Maybe<Scalars['String']>
  player?: Maybe<Player>
  reactionType: ReactionType
  timestamp: Scalars['DateTime']
}

export enum ReactionType {
  Angry = 'ANGRY',
  Happy = 'HAPPY',
  Like = 'LIKE',
  Love = 'LOVE',
  Sad = 'SAD',
  Surprised = 'SURPRISED'
}

export type RegisterPlayerFcmTokenInput = {
  token: Scalars['String']
}

export type RegisterPlayerInput = {
  countryCode: Scalars['String']
  handicap: Scalars['Int']
  name: Scalars['String']
  playerTypes: Array<PlayerType>
  preferredCourseIds: Array<Scalars['Uuid']>
  preferredGameTypes: Array<GameType>
  preferredPlayerTypes: Array<PlayerType>
}

export type RemoveReactionInput = {
  id: Scalars['Uuid']
  reactionType: ReactionType
}

export type ReportAbuseInput = {
  description: Scalars['String']
  playerId: Scalars['Uuid']
}

export type SetCommunityAdminsInput = {
  communityId: Scalars['Uuid']
  playerIds: Array<Scalars['Uuid']>
}

export type SetCommunityProfileImageRefInput = {
  communityId: Scalars['Uuid']
  filename?: Maybe<Scalars['String']>
  height: Scalars['Int']
  width: Scalars['Int']
}

export type SetNotificationPreferencesInput = {
  options: Array<NotificationPreferenceInput>
}

export type TeeTime = {
  __typename?: 'TeeTime'
  dateAndTime: Scalars['DateTime']
  isConfirmed: Scalars['Boolean']
}

export type TelephoneNumber = {
  __typename?: 'TelephoneNumber'
  dialingCode: Scalars['String']
  number: Scalars['String']
}

export type TelephoneNumberInput = {
  dialingCode: Scalars['String']
  number: Scalars['String']
}

export type Timezone = {
  __typename?: 'Timezone'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  utcOffset: Scalars['TimeSpan']
  utcOffsetInMinutes: Scalars['Float']
}

export type UnfollowPlayerInput = {
  playerId: Scalars['Uuid']
}

export type UpdateCommunityInput = {
  communityId: Scalars['Uuid']
  name: Scalars['String']
}

export type UpdateCourseInput = {
  courseId: Scalars['Uuid']
  description: Scalars['String']
  emailAddress: Scalars['String']
  name: Scalars['String']
  physicalAddress: PhysicalAddressInput
  telephoneNumber: TelephoneNumberInput
  timezoneId: Scalars['String']
}

export type UpdateGameInput = {
  communityIds: Array<Scalars['Uuid']>
  courseId: Scalars['Uuid']
  gameId: Scalars['Uuid']
  gameType: GameType
  holes: Holes
  numberOfPlayers: Scalars['Int']
  teeTime: Scalars['DateTime']
}

export type UpdatePlayerCoursePreferencesInput = {
  preferredCourseIds: Array<Scalars['Uuid']>
}

export type UpdatePlayerGamePreferencesInput = {
  preferredGameTypes: Array<GameType>
  preferredPlayerTypes: Array<PlayerType>
}

export type UpdatePlayerHandicapInput = {
  handicap: Scalars['Int']
}

export type UpdatePlayerInput = {
  countryCode: Scalars['String']
  name: Scalars['String']
  playerTypes: Array<PlayerType>
  preferredCourseIds: Array<Scalars['Uuid']>
  preferredGameTypes: Array<GameType>
  preferredPlayerTypes: Array<PlayerType>
}

export type UpdatePlayerPreferencesInput = {
  countryCode: Scalars['String']
  name: Scalars['String']
  playerTypes: Array<PlayerType>
}
