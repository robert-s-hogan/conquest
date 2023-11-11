/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCampaign = /* GraphQL */ `mutation CreateCampaign(
  $input: CreateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  createCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCampaignMutationVariables,
  APITypes.CreateCampaignMutation
>;
export const updateCampaign = /* GraphQL */ `mutation UpdateCampaign(
  $input: UpdateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  updateCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCampaignMutationVariables,
  APITypes.UpdateCampaignMutation
>;
export const deleteCampaign = /* GraphQL */ `mutation DeleteCampaign(
  $input: DeleteCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  deleteCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCampaignMutationVariables,
  APITypes.DeleteCampaignMutation
>;
export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
