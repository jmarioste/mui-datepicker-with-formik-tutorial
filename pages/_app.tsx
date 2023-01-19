import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "urql";
import { client } from "lib/urql/client";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
