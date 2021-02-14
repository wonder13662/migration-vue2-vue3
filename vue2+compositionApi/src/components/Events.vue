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
    // TODO 코드 구현 필요
    perPage: 'getUserEvents', // 1
    // TODO 코드 구현 필요
    page: 'getUserEvents', // 1
  },
};
</script>
