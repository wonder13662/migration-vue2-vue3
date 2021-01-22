<template>
  <div id="app">
    <!-- <NavBar/> -->
    <AppNav />
    <NotificationContainer/>
    <router-view class="page" :key="$route.fullPath"/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';
// import NavBar from '@/components/NavBar.vue';
import NotificationContainer from '@/components/NotificationContainer.vue';

export default {
  name: 'App',
  components: {
    AppNav,
    // NavBar,
    NotificationContainer,
  },
};
</script>

<style lang="scss">
@import './assets/styles/global.scss';
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
