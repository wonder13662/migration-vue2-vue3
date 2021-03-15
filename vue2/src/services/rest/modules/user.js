import restClient from '@/services/rest/axios';

export default {
  postRegister(credentials) {
    return restClient.post('/register', credentials);
  },
  postLogin(credentials) {
    return restClient.post('/login', credentials);
  },
  /* eslint-disable no-unused-vars */
  setAuthToken(token) {
    /* eslint-disable no-param-reassign */
    restClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  /* eslint-disable no-unused-vars */
  removeAuthToken() {
    /* eslint-disable no-param-reassign */
    restClient.defaults.headers.common.Authorization = null;
  },
};
