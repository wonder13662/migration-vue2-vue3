import {
  ref,
  onMounted,
  watch,
} from '@vue/composition-api';
import services from '@/services';

export default function useUserEvents(perPage, page) {
  const events = ref([]);
  const getUserEvents = async () => {
    const response = await services.event.fetchEvents(perPage.value, page.value);
    events.value = response.events;
  };

  onMounted(getUserEvents);

  watch(perPage, getUserEvents);
  watch(page, getUserEvents);

  return {
    events,
    getUserEvents,
  };
}
