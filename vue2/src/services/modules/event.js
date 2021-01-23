export default {
  getEvents(apiClient, perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(apiClient, id) {
    return apiClient.get(`/events/${id}`);
  },
  postEvent(apiClient, event) {
    return apiClient.post('/event', event);
  },
  ping(apiClient) {
    console.log('apiClient:', apiClient);
    console.log('Pong!');
  },
};
