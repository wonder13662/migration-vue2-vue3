import {
  ref,
  watch,
} from '@vue/composition-api';
import services from '@/services';

const event = ref({});

export default function useUserEvent(id) {
  const getUserEvent = async () => {
    const response = await services.event.fetchEvent(id.value);
    event.value = response.event;
  };

  watch(id, getUserEvent);

  return {
    event,
    getUserEvent,
  };
}
