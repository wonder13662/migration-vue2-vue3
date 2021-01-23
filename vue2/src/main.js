import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.dispatch('user/setUser', userData);
    }

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
  },
  render: (h) => h(App),
}).$mount('#app');
