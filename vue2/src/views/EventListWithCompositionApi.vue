<template>
  <div v-if="user && user.user">
    <h1>Events for {{ user.user.name }}</h1>
    <Events :page="page" :perPage="perPage"/>
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list-with-composition-api', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
    </template>
    <template v-if="page < lastPage">
      <router-link
        :to="{ name: 'event-list-with-composition-api', query: { page: page + 1 } }"
        rel="next"
      >
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>
import {
  ref,
} from '@vue/composition-api';
import Events from '@/components/EventsWithCompositionApi.vue';
import useUserEvents from '@/composables/useUserEvents';
import { mapState } from 'vuex';

export default {
  components: {
    Events,
  },
  setup(props, context) {
    // TODO $route.query는 vue-router4(Vue3)에서는 useRoute으로 바꿔야 함.
    const page = ref(parseInt(context.root.$route.query.page, 10) || 1);
    const perPage = ref(3);
    const { lastPage } = useUserEvents(perPage, page);

    return {
      page,
      perPage,
      lastPage,
    };
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>
