import { Amplify } from "aws-amplify";
import amplifyConfig from "../src/amplifyConfig";

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(amplifyConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
