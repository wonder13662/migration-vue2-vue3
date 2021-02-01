<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
  computed: {
    filteredEvents() { // 3
      return [];
    },
    eventsMatchingSearchQuery() { // 2
      return [];
    },
    events() {
      return this.event.events;
    },
    ...mapState(['event']),
  },
  watch: {
    perPage: 'getUserEvents', // 1
    page: 'getUserEvents', // 1
  },
};
</script>
