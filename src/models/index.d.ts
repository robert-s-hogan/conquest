import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly account?: Account | null;
  readonly updatedAt?: string | null;
}

type LazyCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly account: AsyncItem<Account | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Campaign = LazyLoading extends LazyLoadingDisabled ? EagerCampaign : LazyCampaign

export declare const Campaign: (new (init: ModelInit<Campaign>) => Campaign) & {
  copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly authId: string;
  readonly username?: string | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly campaigns?: (Campaign | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly authId: string;
  readonly username?: string | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly campaigns: AsyncCollection<Campaign>;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}