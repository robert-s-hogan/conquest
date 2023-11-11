// Import necessary libraries and styles
import { Amplify } from "aws-amplify";
import amplifyConfig from "../amplifyConfig";
import "@aws-amplify/ui-react/styles.css";
import "./globals.css"; // Adjust the path as necessary
import { AppProps } from "next/app";

// Configure Amplify
Amplify.configure(amplifyConfig);

// App component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Render the current page
    <Component {...pageProps} />
  );
}

export default MyApp;
