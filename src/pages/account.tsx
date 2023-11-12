import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Image from "next/image";

import CustomAccountUpdateForm from "../components/CustomAccountUpdateForm";

import { useModal } from "../hooks/useModal";
import {
  createCampaign,
  createAccount as createAccountMutation,
  updateAccount as updateAccountMutation,
} from "../graphql/mutations";
import { listAccounts } from "../graphql/queries";

import Header from "../components/header";
import * as APITypes from "../graphql/API";

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

  const closeModal = () => {
    if (isShowing) {
      toggle();
    }
  };

  // Function to handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is on the backdrop itself and not its children
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

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
        <div className='flex space-x-4 items-center'>
          <h1 className='text-2xl font-bold'>
            Welcome {userAccount && userAccount?.username}
          </h1>
          <button className='btn max-h-12' onClick={toggle}>
            Edit Account
          </button>
        </div>

        {userAccount && userAccount?.profilePic && (
          <Image
            width={100}
            height={100}
            // className='rounded-full'
            src={userAccount?.profilePic}
            alt='Profile picture'
          />
        )}
      </div>
      <dialog
        open={isShowing}
        className='fullscreen-modal'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          onClick={toggle} // Close modal when the backdrop is clicked
        ></div>
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div
            className='centered-content min-h-full p-4 text-center'
            onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
          >
            <div className='w-full relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:w-full md:max-w-lg'>
              <div className='p-6'>
                <div className='flex justify-end text-2xl' onClick={toggle}>
                  X
                </div>
                <CustomAccountUpdateForm
                  account={userAccount}
                  onFormSubmit={async (updatedAccount: AccountType) => {
                    await editAccount(
                      updatedAccount.id,
                      updatedAccount.username || "",
                      updatedAccount.profilePic || ""
                    );
                    setUserAccount(updatedAccount); // Update local state
                    closeModal(); // Close modal
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default withAuthenticator(AccountPage);
