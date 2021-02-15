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
      services.user.setAuthToken(userData.token);
    },
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem('user');
      services.user.removeAuthToken();
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const response = await services.user.postRegister(credentials);
      const { data } = response;
      commit('SET_USER_DATA', data);
    },
    async login({ commit }, credentials) {
      const response = await services.user.postLogin(credentials);
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
