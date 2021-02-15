export default {
  postRegister(apiClient, credentials) {
    return apiClient.post('/register', credentials);
  },
  postLogin(apiClient, credentials) {
    return apiClient.post('/login', credentials);
  },
  /* eslint-disable no-unused-vars */
  setAuthToken(apiClient, token) {
    /* eslint-disable no-param-reassign */
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  /* eslint-disable no-unused-vars */
  removeAuthToken(apiClient) {
    /* eslint-disable no-param-reassign */
    apiClient.defaults.headers.common.Authorization = null;
  },
};
