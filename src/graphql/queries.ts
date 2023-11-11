/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCampaign = /* GraphQL */ `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    id
    title
    description
    accountID
    createdAt
    account {
      id
      authId
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignQueryVariables,
  APITypes.GetCampaignQuery
>;
export const listCampaigns = /* GraphQL */ `query ListCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignsQueryVariables,
  APITypes.ListCampaignsQuery
>;
export const syncCampaigns = /* GraphQL */ `query SyncCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCampaigns(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      description
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCampaignsQueryVariables,
  APITypes.SyncCampaignsQuery
>;
export const campaignsByAccountIDAndCreatedAt =
  /* GraphQL */ `query CampaignsByAccountIDAndCreatedAt(
  $accountID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  campaignsByAccountIDAndCreatedAt(
    accountID: $accountID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.CampaignsByAccountIDAndCreatedAtQueryVariables,
    APITypes.CampaignsByAccountIDAndCreatedAtQuery
  >;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    id
    authId
    username
    profilePic
    createdAt
    campaigns {
      nextToken
      startedAt
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authId
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const syncAccounts = /* GraphQL */ `query SyncAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAccounts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      authId
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAccountsQueryVariables,
  APITypes.SyncAccountsQuery
>;
