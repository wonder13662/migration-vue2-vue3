let nextId = 1;

export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  mutations: {
    PUSH(state, notification) {
      nextId += 1;
      state.notifications.push({
        ...notification,
        id: nextId,
      });
    },
    DELETE(state, notificationToRmove) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationToRmove.id,
      );
    },
  },
  actions: {
    add({ commit }, notification) {
      commit('PUSH', notification);
    },
    remove({ commit }, notificationToRemove) {
      commit('DELETE', notificationToRemove);
    },
  },
  getters: {

  },
};
