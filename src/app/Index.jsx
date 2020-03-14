import React from "react";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./styles/main.css";

import Routes from "./Routes";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_GRAPHQL_ENDPOINT
  }),
  cache: new InMemoryCache()
});

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
