import services from '@/services';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      services.rest.user.setAuthToken(userData.token);
    },
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem('user');
      services.rest.user.removeAuthToken();
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const response = await services.rest.user.postRegister(credentials);
      const { data } = response;
      commit('SET_USER_DATA', data);
    },
    async login({ commit }, credentials) {
      const response = await services.rest.user.postLogin(credentials);
      const { data } = response;
      commit('SET_USER_DATA', data);
    },
    async logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    setUser({ commit }, userData) {
      commit('SET_USER_DATA', userData);
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
};
