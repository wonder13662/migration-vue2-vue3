import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import RegisterUser from '@/views/RegisterUser.vue';
import LoginUser from '@/views/LoginUser.vue';
import EventCreate from '@/views/EventCreate.vue';
import EventList from '@/views/EventList.vue';
import EventShow from '@/views/EventShow.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/register',
      component: RegisterUser,
    },
    {
      path: '/login',
      component: LoginUser,
    },
    {
      path: '/event-list',
      component: EventList,
      props: (route) => {
        const { page } = route.query;

        return {
          query: {
            page: page ? parseInt(page, 10) : 1,
          },
        };
      },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/event-create',
      component: EventCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/event/:id',
      component: EventShow,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/');
  }
  next();
});

export default router;
