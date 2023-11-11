// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Campaign, Account } = initSchema(schema);

export {
  Campaign,
  Account
};