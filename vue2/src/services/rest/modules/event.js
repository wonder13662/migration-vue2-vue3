import restClient from '@/services/rest/axios';

export default {
  async fetchEvents(perPage = 3, page = 1) {
    let response = null;
    try {
      response = await restClient.get(`/events?_limit=${perPage}&_page=${page}`);
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
  async fetchEvent(id) {
    let response = null;
    try {
      response = await restClient.get(`/event/${id}`);
      if (!response || !response.data || !response.data.event) {
        throw new Error('response is not valid!');
      }
    } catch (error) {
      console.log(error);
    }

    return { event: response.data.event };
  },
  postEvent(event) {
    return restClient.post('/event', event);
  },
  /* eslint-disable no-unused-vars */
  ping(payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Pong: ${payload}`);
      }, 100);
    });
  },
};
