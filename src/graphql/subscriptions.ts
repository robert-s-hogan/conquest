/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCampaign =
  /* GraphQL */ `subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onCreateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateCampaignSubscriptionVariables,
    APITypes.OnCreateCampaignSubscription
  >;
export const onUpdateCampaign =
  /* GraphQL */ `subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onUpdateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateCampaignSubscriptionVariables,
    APITypes.OnUpdateCampaignSubscription
  >;
export const onDeleteCampaign =
  /* GraphQL */ `subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onDeleteCampaign(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteCampaignSubscriptionVariables,
    APITypes.OnDeleteCampaignSubscription
  >;
export const onCreateAccount =
  /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateAccountSubscriptionVariables,
    APITypes.OnCreateAccountSubscription
  >;
export const onUpdateAccount =
  /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateAccountSubscriptionVariables,
    APITypes.OnUpdateAccountSubscription
  >;
export const onDeleteAccount =
  /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteAccountSubscriptionVariables,
    APITypes.OnDeleteAccountSubscription
  >;
