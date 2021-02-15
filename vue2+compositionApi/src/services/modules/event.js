export default {
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
  async fetchEvent(apiClient, id) {
    let response = null;
    try {
      response = await apiClient.get(`/event/${id}`);
      if (!response || !response.data || !response.data.event) {
        throw new Error('response is not valid!');
      }
    } catch (error) {
      console.log(error);
    }

    return { event: response.data.event };
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
