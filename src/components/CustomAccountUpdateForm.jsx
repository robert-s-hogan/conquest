import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Account } from "../models";
import { DataStore } from "aws-amplify";
import Image from "next/image";

export default function CustomAccountUpdateForm(props) {
  const {
    account: accountModelProp,
    onSuccess,
    onError,
    onSubmit,
    ...rest
  } = props;

  const initialValues = {
    authId: "",
    username: "",
    profilePic: "",
    createdAt: "",
  };

  const [authId, setAuthId] = React.useState(initialValues.authId);
  const [username, setUsername] = React.useState(initialValues.username);
  const [profilePic, setProfilePic] = React.useState(initialValues.profilePic);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});

  const resetStateValues = () => {
    const cleanValues = accountModelProp
      ? { ...initialValues, ...accountModelProp }
      : initialValues;
    setAuthId(cleanValues.authId);
    setUsername(cleanValues.username);
    setProfilePic(cleanValues.profilePic);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };

  React.useEffect(() => {
    resetStateValues();
  }, [accountModelProp]);

  const handleInputChange = (e, fieldSetter) => {
    const { value } = e.target;
    fieldSetter(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the fields that you want to update
    let modelFields = { username, profilePic };

    if (onSubmit) {
      modelFields = onSubmit(modelFields);
    }

    try {
      console.log("Fetching account with ID:", accountModelProp.id);
      const currentAccount = await DataStore.query(
        Account,
        accountModelProp.id
      );

      if (!currentAccount) {
        console.error("Account not found with ID:", accountModelProp.id);
        throw new Error("Account not found");
      }

      console.log("Current Account:", currentAccount);

      // Update the account with new values
      await DataStore.save(
        Account.copyOf(currentAccount, (updated) => {
          Object.assign(updated, modelFields);
        })
      );

      if (onSuccess) {
        onSuccess(modelFields);
      }
    } catch (err) {
      console.error("Error saving data:", err);
      if (onError) {
        onError(modelFields, err.message);
      }
    }
  };

  // Placeholder image URL
  const placeholderImageUrl = "https://via.placeholder.com/150";

  // URL validation function
  const isValidUrl = (urlString) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!urlPattern.test(urlString);
  };

  return (
    <Grid
      as='form'
      rowGap='15px'
      columnGap='15px'
      padding='20px'
      onSubmit={handleSubmit}
      {...rest}>
      <div className='block mx-auto'>
        <Image
          src={isValidUrl(profilePic) ? profilePic : placeholderImageUrl}
          alt='Profile Picture'
          width={350}
          height={350}
        />
      </div>
      <TextField
        label='Username'
        value={username}
        onChange={(e) => handleInputChange(e, setUsername)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
      />
      <TextField
        label='Profile Pic'
        value={profilePic}
        onChange={(e) => handleInputChange(e, setProfilePic)}
        errorMessage={!isValidUrl(profilePic) && "Please enter a valid URL"}
        hasError={!isValidUrl(profilePic)}
      />

      <Flex justifyContent='space-between'>
        <Button className='btn' type='submit'>
          Submit
        </Button>
      </Flex>
    </Grid>
  );
}
