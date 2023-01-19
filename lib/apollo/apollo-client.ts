import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  credentials: "include",
});

const cache = new InMemoryCache();

export function getApolloClient() {
  if (apolloClient) return apolloClient;
  apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([httpLink]),
    cache: cache,
  });

  return apolloClient;
}

export function useApollo() {
  const { data: session } = useSession();
  const token = session?.token ?? "";
  const store = useMemo(() => {
    const client = getApolloClient();
    if (token) {
      //if there is a session, we set the apollo link to include token
      const authMiddleware = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            authorization: token ? "Bearer " + token : null,
          },
        }));

        return forward(operation);
      });

      client.setLink(ApolloLink.from([authMiddleware, httpLink]));
    }
    return client;
  }, [token]);

  return store;
}
