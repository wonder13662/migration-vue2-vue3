<template>
  <div v-if="user && user.user">
    <h1>Events for {{ user.user.name }}</h1>
    <Events :page="page" :perPage="perPage"/>
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
    </template>
    <template v-if="page < lastPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>
import Events from '@/components/EventsWithCompositionApi.vue';
import { mapState } from 'vuex';

export default {
  name: 'EventList',
  components: {
    Events,
  },
  data() {
    return {
      perPage: 3,
    };
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page, 10) || 1;
    },
    lastPage() {
      return Math.ceil(this.event.eventsTotal / this.perPage);
    },
    ...mapState(['event', 'user']),
  },
};
</script>
