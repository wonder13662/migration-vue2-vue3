export default {
  getEvents(apiClient, perPage = 3, page = 1) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  async fetchEvents(apiClient, perPage = 3, page = 1) {
    let response = null;
    try {
      response = await apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
      if (!response || !response.data) {
        throw new Error('response is not valid!');
      }
    } catch (error) {
      console.log(error);
    }

    const {
      data: {
        events,
        totalCount,
      },
    } = response;

    return { events, totalCount };
  },
  getEvent(apiClient, id) {
    return apiClient.get(`/events/${id}`);
  },
  postEvent(apiClient, event) {
    return apiClient.post('/event', event);
  },
  /* eslint-disable no-unused-vars */
  ping(apiClient, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Pong: ${payload}`);
      }, 100);
    });
  },
};
