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
      return services.rest.event.postEvent(event)
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
    async fetchEvents({ commit, dispatch }, { perPage, page }) {
      try {
        const response = await services.rest.event.fetchEvents(perPage, page);
        const { events, totalCount } = response;

        commit('SET_EVENTS', events);
        commit('SET_EVENT_TOTAL', totalCount);
      } catch (error) {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events: ${error.message}`,
        };
        dispatch('notification/add', notification, { root: true });
      }
    },
    async fetchEvent({ commit, dispatch }, id) {
      try {
        const response = await services.rest.event.fetchEvent(id);
        const { event } = response;
        commit('SET_EVENT', event);
      } catch (error) {
        const notification = {
          type: 'error',
          message: `There was a problem fetching event: ${error.message}`,
        };
        dispatch('notification/add', notification, { root: true });
      }
    },
  },
  getters: {
    getEventById: (state) => (id) => state.events.find(((event) => event.id === id)),
  },
};
