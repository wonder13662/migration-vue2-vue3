<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import useUserEvents from '@/composables/useUserEvents';
import useEventTitleSearch from '@/composables/useEventTitleSearch';
import {
  toRefs,
} from '@vue/composition-api';

export default {
  components: {
    EventCard,
  },
  props: {
    perPage: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { perPage, page } = toRefs(props);
    const { events } = useUserEvents(perPage, page);
    const { searchQuery, eventMatchingSearchQuery } = useEventTitleSearch(events);

    return {
      events: eventMatchingSearchQuery,
      searchQuery,
    };
  },
  data() {
    return {
      filters: {}, // 3
    };
  },
  computed: {
    filteredEvents() { // 3
      return [];
    },
  },
  methods: {
    updateFilters() { // 3

    },
  },
};
</script>
