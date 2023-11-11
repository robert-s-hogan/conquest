import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useModal } from "../hooks/useModal";
import {
  createCampaign,
  createAccount as createAccountMutation,
  updateAccount as updateAccountMutation,
} from "../src/graphql/mutations";
import { listAccounts } from "../src/graphql/queries";

import Header from "../ui/layout/header";
import Campaigns from "../ui/layout/campaigns";

function Account() {
  const router = useRouter();
  const { isShowing, toggle } = useModal();

  const [userAccount, setUserAccount] = useState(null);

  useEffect(() => {
    const checkAndCreateAccount = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userAuthId = user.attributes.sub;

        const accountsData = await API.graphql(
          graphqlOperation(listAccounts, {
            filter: { authId: { eq: userAuthId } },
          })
        );

        const existingAccount = accountsData.data.listAccounts.items[0];
        if (existingAccount) {
          setUserAccount(existingAccount);
        } else {
          const newAccountData = await API.graphql(
            graphqlOperation(createAccountMutation, {
              input: { authId: userAuthId },
            })
          );
          setUserAccount(newAccountData.data.createAccount);
        }
      } catch (error) {
        console.error("Error checking/creating account", error);
        router.push("/");
      }
    };

    checkAndCreateAccount();
  }, [router]);

  async function addCampaign(title, description) {
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
      const newCampaign = await API.graphql(
        graphqlOperation(createCampaign, { input: campaignDetails })
      );
      return newCampaign.data.createCampaign;
    } catch (error) {
      console.error("Error adding campaign: ", error);
    }
  }

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const userAuthId = userData.attributes.sub; // Using 'sub' as the user's unique identifier

        // Use the 'listAccounts' query with a filter for the 'authId'
        const accountsData = await API.graphql(
          graphqlOperation(listAccounts, {
            filter: {
              authId: {
                eq: userAuthId, // This filters the accounts to the one(s) that match the authenticated user's ID
              },
            },
          })
        );

        // Assuming we have items array in the response as per the GraphQL schema
        if (accountsData.data.listAccounts.items.length > 0) {
          // Set the fetched accounts to the state
          setAccounts(accountsData.data.listAccounts.items);
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  async function editAccount(accountId, username, profilePic) {
    try {
      const accountDetails = {
        id: accountId,
        username: username,
        profilePic: profilePic,
      };

      const updatedAccountData = await API.graphql(
        graphqlOperation(updateAccountMutation, { input: accountDetails })
      );

      console.log(updatedAccountData);
      setUserAccount(updatedAccountData.data.updateAccount);

      return updatedAccountData.data.updateAccount;
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
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handles the form submission for editing account details
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    const { username, profilePic } = editFormData;

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
      <Campaigns />
      <button
        className='btn'
        onClick={() => {
          addCampaign("123", "My Campaign", "This is my campaign");
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

export default withAuthenticator(Account);
