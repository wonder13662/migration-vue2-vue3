import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';

// Create apollo client
// https://vue-cli-plugin-apollo.netlify.app/guide/configuration.html#createapolloclient-options
const { apolloClient } = createApolloClient({
  httpEndpoint: process.env.VUE_APP_GRAPHQL_HTTP,
  tokenName: process.env.AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
});

export default apolloClient;
