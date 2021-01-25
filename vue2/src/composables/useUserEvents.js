import {
  ref,
  onMounted,
  watch,
} from '@vue/composition-api';
import services from '@/services';

export default function useUserEvents(perPage, page) {
  const events = ref([]);
  const totalCount = ref(0);
  const lastPage = ref(0);
  const getUserEvents = async () => {
    const response = await services.event.fetchEvents(perPage.value, page.value);
    events.value = response.events;
    totalCount.value = response.totalCount;
    lastPage.value = Math.ceil(totalCount.value / perPage.value);
  };

  onMounted(getUserEvents);

  watch(perPage, getUserEvents);
  watch(page, getUserEvents);

  return {
    events,
    lastPage,
    getUserEvents,
  };
}
