import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
// import plugins from './plugins';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  // ...plugins,
  created() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.dispatch('user/setUser', userData);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
