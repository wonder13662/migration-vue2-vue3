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
  onMounted,
} from '@vue/composition-api';
import Events from '@/components/EventsWithCompositionApi.vue';
import useUserEvents from '@/composables/useUserEvents';
import { mapState } from 'vuex';

export default {
  components: {
    Events,
  },
  // props를 선언하고 받을 parameter를 정의해야 setup에서 참조할 수 있습니다.
  props: {
    query: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const page = ref(props.query.page);
    const perPage = ref(3);
    const { lastPage, getUserEvents } = useUserEvents(perPage, page);

    onMounted(getUserEvents);

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
