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
    register({ commit }, credentials) {
      return services.user.postRegister(credentials).then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
    },
    login({ commit }, credentials) {
      return services.user.postLogin(credentials).then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
    },
    logout({ commit }) {
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
