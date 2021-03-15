import axios from 'axios';

// 인증 에러일 경우, localStorage에 저장된 Auth token을 삭제한다. Auth token을 탈취해서 악용하는 경우를 막기위한 조치.
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      this.$store.dispatch('user/logout');
    }
    return Promise.reject(error);
  },
);

const client = axios.create({
  baseURL: process.env.VUE_APP_AUTH_HTTP,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default client;
