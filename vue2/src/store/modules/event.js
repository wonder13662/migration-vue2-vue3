import services from '@/services';

export default {
  namespaced: true,
  state: {
    events: [],
    eventsTotal: 0,
    event: {},
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit, dispatch }, event) {
      // TODO rootState 예제 만들기
      // TODO dispatch('moduleName/actionToCall', null, { root:true }) 예제 만들기
      return services.event.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
          const notification = {
            type: 'success',
            message: 'Your event has been created!',
          };
          dispatch('notification/add', notification, { root: true });
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: `There was a problem fetching events: ${error.message}`,
          };
          dispatch('notification/add', notification, { root: true });
          throw error;
        });
    },
    fetchEvents({ commit, dispatch }, { perPage, page }) {
      // TODO async/await 구문으로 바꾸기
      services.event.getEvents(perPage, page)
        .then((response) => {
          console.log('fetchEvents / response.data:', response.data);
          commit('SET_EVENTS', response.data);
          commit('SET_EVENT_TOTAL', response.headers['x-total-count']);
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: `There was a problem fetching events: ${error.message}`,
          };
          dispatch('notification/add', notification, { root: true });
        });
    },
    fetchEvent({ commit, getters, dispatch }, id) {
      const event = getters.getEventById(id);
      if (event) {
        commit('SET_EVENT', event);
      } else {
        // TODO async/await 구문으로 바꾸기
        services.event.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data);
          })
          .catch((error) => {
            const notification = {
              type: 'error',
              message: `There was a problem fetching event: ${error.message}`,
            };
            dispatch('notification/add', notification, { root: true });
          });
      }
    },
  },
  getters: {
    getEventById: (state) => (id) => state.events.find(((event) => event.id === id)),
  },
};
