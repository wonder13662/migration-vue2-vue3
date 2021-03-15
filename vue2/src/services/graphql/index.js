import apolloClient from '@/services/graphql/apolloClient';
import sample from './modules/sample';

const stoppedQueryMap = {};

export default {
  sample,
  stopQuery(queryId) {
    console.log('stopQuery');
    apolloClient.stop();
    stoppedQueryMap[`${queryId}`] = true;
  },
  hasQueryStopped(queryId) {
    return !!stoppedQueryMap[`${queryId}`];
  },
};
