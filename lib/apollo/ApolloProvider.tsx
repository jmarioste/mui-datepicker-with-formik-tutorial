import { ApolloProvider } from "@apollo/client";
import React from "react";
import { useApollo } from "./apollo-client";

type Props = {
  children: React.ReactNode;
};
const MyApolloProvider = ({ children }: Props) => {
  const client = useApollo();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
