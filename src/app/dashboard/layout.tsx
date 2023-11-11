import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import { useModal } from "../../../hooks/useModal";
import {
  createCampaign,
  createAccount as createAccountMutation,
  updateAccount as updateAccountMutation,
} from "../../graphql/mutations";
import { listAccounts } from "../../graphql/queries";

import Header from "../ui/dashboard/header";
import * as APITypes from "../../API";

interface AccountType {
  __typename: "Account";
  id: string;
  authId: string;
  username?: string | null;
  profilePic?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  // Add other fields as needed
}

function AccountPage() {
  const router = useRouter();
  const { isShowing, toggle } = useModal();

  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [userAccount, setUserAccount] = useState<AccountType | null>(null);

  useEffect(() => {
    const checkAndCreateAccount = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userAuthId = user.attributes.sub;

        const accountsData = (await API.graphql(
          graphqlOperation(listAccounts, {
            filter: { authId: { eq: userAuthId } },
          })
        )) as GraphQLResult<APITypes.ListAccountsQuery>;

        // Type guard to check if 'data' exists in the response
        if ("data" in accountsData && accountsData.data) {
          const existingAccount = accountsData.data?.listAccounts?.items[0];
          if (existingAccount) {
            setUserAccount(existingAccount);
          } else {
            const newAccountData = (await API.graphql(
              graphqlOperation(createAccountMutation, {
                input: { authId: userAuthId },
              })
            )) as GraphQLResult<APITypes.CreateAccountMutation>;

            if (newAccountData.data) {
              setUserAccount(newAccountData.data.createAccount as AccountType);
            }
          }
        }
      } catch (error) {
        console.error("Error checking/creating account", error);
        router.push("/");
      }
    };

    checkAndCreateAccount();
  }, [router]);

  async function addCampaign(title: string, description: string) {
    if (!userAccount) {
      console.error("No user account available");
      return;
    }

    const campaignDetails = {
      accountId: userAccount.id,
      title,
      description,
    };

    try {
      const newCampaign = (await API.graphql(
        graphqlOperation(createCampaign, { input: campaignDetails })
      )) as GraphQLResult<any>; // Type assertion here

      return newCampaign.data.createCampaign;
    } catch (error) {
      console.error("Error adding campaign: ", error);
    }
  }

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const userAuthId = userData.attributes.sub;

        const accountsData = (await API.graphql(
          graphqlOperation(listAccounts, {
            filter: {
              authId: {
                eq: userAuthId,
              },
            },
          })
        )) as GraphQLResult<APITypes.ListAccountsQuery>;

        // Check if 'data' and 'listAccounts' and 'items' are not undefined
        if (
          accountsData.data &&
          accountsData.data.listAccounts &&
          accountsData.data.listAccounts.items
        ) {
          if (
            accountsData.data &&
            accountsData.data.listAccounts &&
            accountsData.data.listAccounts.items
          ) {
            const filteredAccounts =
              accountsData.data.listAccounts.items.filter(
                (item) => item !== null
              ) as AccountType[];
            setAccounts(filteredAccounts);
          }
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  async function editAccount(
    accountId: string,
    username: string,
    profilePic: string
  ) {
    try {
      const accountDetails = {
        id: accountId,
        username: username,
        profilePic: profilePic,
      };

      const result = await API.graphql(
        graphqlOperation(updateAccountMutation, { input: accountDetails })
      );

      // Type guard to ensure result is GraphQLResult
      if ("data" in result) {
        const updatedAccountData = result as GraphQLResult<any>;

        const updatedAccounts = accounts.map((account) =>
          account.id === updatedAccountData.data.updateAccount.id
            ? updatedAccountData.data.updateAccount
            : account
        );
        setAccounts(updatedAccounts);

        return updatedAccountData.data.updateAccount;
      }
    } catch (error) {
      console.error("Error updating account: ", error);
    }
  }

  //edit form
  const [editFormData, setEditFormData] = useState({
    username: userAccount?.username || "",
    profilePic: userAccount?.profilePic || "",
  });

  // Handles form input changes
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, profilePic } = editFormData;

    if (!userAccount) {
      console.error("User account is not available");
      return;
    }

    await editAccount(userAccount.id, username, profilePic);

    // Optionally, update the local state to reflect the change immediately
    setUserAccount({ ...userAccount, username, profilePic });
  };

  return (
    <div className='space-y-6'>
      <Header />

      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Account</h1>
        <button onClick={toggle} className='btn'>
          Edit Account
        </button>
      </div>

      <h1>Account Page</h1>
      {userAccount && (
        <div>
          <pre>{JSON.stringify(userAccount, null, 2)}</pre>
        </div>
      )}
      <button
        className='btn'
        onClick={() => {
          addCampaign("123", "My Campaign");
        }}>
        Add Campaign
      </button>
      <dialog
        open={isShowing}
        className='fullscreen-modal'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'>
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='centered-content min-h-full p-4 text-center'>
            <div className='w-full relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:w-full md:max-w-lg'>
              {/* Your modal content here */}
              <div className='p-6'>
                {/* Dialog content goes here */}
                <div className='flex justify-between'>
                  <h2 className='text-lg'>Edit Account Details</h2>
                  <button onClick={toggle}>Close</button>
                </div>
                {/* Form for editing account details */}
                <form
                  onSubmit={handleEditFormSubmit}
                  className='mt-8 space-y-6'>
                  <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                      <label htmlFor='username' className='sr-only'>
                        Username
                      </label>
                      <input
                        id='username'
                        name='username'
                        type='text'
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Enter username'
                        value={editFormData.username}
                        onChange={handleEditFormChange}
                      />
                    </div>
                    <div>
                      <label htmlFor='profilePic' className='sr-only'>
                        Profile Picture URL
                      </label>
                      <input
                        id='profilePic'
                        name='profilePic'
                        type='text'
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Profile Picture URL'
                        value={editFormData.profilePic}
                        onChange={handleEditFormChange}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default withAuthenticator(AccountPage);
