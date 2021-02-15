import {
  ref,
  computed,
} from '@vue/composition-api';

export default function useEventTitleSearch(events) {
  const searchQuery = ref('');
  const filter = (event) => event.title.toLowerCase().includes(searchQuery.value);
  const eventMatchingSearchQuery = computed(() => {
    if (events.value && events.value.length > 0) {
      return events.value.filter(filter);
    }
    return [];
  });

  return {
    searchQuery,
    eventMatchingSearchQuery,
  };
}
