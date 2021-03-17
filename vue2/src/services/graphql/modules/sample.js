import apolloClient from '@/services/graphql/apolloClient';
import HelloWorld from '@/graphql/HelloWorld.gql';
import Counter from '@/graphql/Counter.gql';

export default {
  async fetch(name = '') {
    const result = await apolloClient.query({
      query: HelloWorld,
      variables: {
        name,
      },
    });

    return result;
  },
  counter({ next, error, complete }) {
    return apolloClient.subscribe({
      query: Counter,
    }).subscribe({
      next,
      error,
      complete,
    });
  },
};
