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
import { mapState, createNamespacedHelpers } from 'vuex';
import Events from '@/components/Events.vue';

const { mapActions: mapEventActions } = createNamespacedHelpers('event');

export default {
  components: {
    Events,
  },
  data() {
    return {
      perPage: 3,
      page: parseInt(this.$route.query.page, 10) || 1,
    };
  },
  computed: {
    lastPage() {
      return Math.ceil(this.event.eventsTotal / this.perPage);
    },
    ...mapState(['event', 'user']),
  },
  methods: {
    ...mapEventActions(['fetchEvents']),
  },
  created() {
    this.fetchEvents({
      perPage: this.perPage,
      page: this.page,
    });
  },
};
</script>
