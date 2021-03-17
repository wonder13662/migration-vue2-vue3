import {
  ApolloClient,
  split,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// https://www.apollographql.com/docs/react/data/subscriptions/#setting-up-the-transport
const wsLink = new WebSocketLink({
  uri: process.env.VUE_APP_GRAPHQL_WEBSOCKET,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(process.env.VUE_APP_AUTH_TOKEN),
    },
  },
});

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

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// https://www.apollographql.com/docs/react/api/core/ApolloClient/
const apolloClient = new ApolloClient({
  // Provide required constructor fields
  cache: new InMemoryCache(),
  link: concat(authMiddleware, splitLink),
});

export default apolloClient;
