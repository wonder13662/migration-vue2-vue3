import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client/core';

// https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-request-logic
const httpLink = new HttpLink({ uri: process.env.VUE_APP_GRAPHQL_HTTP });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(process.env.VUE_APP_AUTH_TOKEN);
  const authorization = `bearer ${token}`;

  operation.setContext({
    headers: {
      authorization,
    },
  });

  return forward(operation);
});

// https://www.apollographql.com/docs/react/api/core/ApolloClient/
const apolloClient = new ApolloClient({
  // Provide required constructor fields
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default apolloClient;
