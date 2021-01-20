import axios from 'axios';

// TODO 환경변수를 외부에서 받아서 사용하는 형태로 바꾸기

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
