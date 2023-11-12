import React from "react";
import Image from "next/image";
import CustomAccountUpdateForm from "./CustomAccountUpdateForm";

const AccountDialog = ({ userAccount, isShowing, toggle, editAccount }) => {
  if (!isShowing) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return (
    <dialog
      open={isShowing}
      className='fullscreen-modal'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        onClick={handleBackdropClick}></div>
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='centered-content min-h-full p-4 text-center'>
          <div className='w-full relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:w-full md:max-w-lg'>
            <div className='p-6'>
              <div className='flex justify-end' onClick={toggle}>
                X
              </div>
              <CustomAccountUpdateForm
                account={userAccount}
                onFormSubmit={async (updatedAccount) => {
                  await editAccount(
                    updatedAccount.id,
                    updatedAccount.username,
                    updatedAccount.profilePic
                  );
                  toggle();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AccountDialog;
