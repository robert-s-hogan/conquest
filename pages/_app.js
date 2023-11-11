import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports"; // make sure the path to aws-exports is correct

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
