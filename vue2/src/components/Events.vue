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
    filteredEvents() { // 3 - TODO 구현 필요
      return [];
    },
    eventsMatchingSearchQuery() { // 2 - TODO 구현 필요
      return [];
    },
    events() {
      return this.event.events; // TODO Vuex의 데이터가 업데이트되었을 때 가져오는 방법은?
    },
    ...mapState(['event']),
  },
};
</script>
