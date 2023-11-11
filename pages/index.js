import Head from "next/head";
import Image from "next/image";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import Header from "../ui/layout/header";

function Home() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

  return (
    <div>
      <Header />
    </div>
  );
}

export default withAuthenticator(Home);
