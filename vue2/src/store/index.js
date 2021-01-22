import Vue from 'vue';
import Vuex from 'vuex';
// import user from '@/store/modules/user';
import event from '@/store/modules/event';
import notification from '@/store/modules/notification';
import axios from 'axios'; // TODO 모듈화 필요

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // user,
    event,
    notification,
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem('user');
      axios.defaults.headers.common.Authorization = null;
    },
  },
  actions: {
    register({ commit }, credentials) {
      // TODO apiClient로 통합 필요
      return axios.post('//localhost:3000/register', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
    },
    login({ commit }, credentials) {
      // TODO apiClient로 통합 필요
      return axios.post('//localhost:3000/login', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
