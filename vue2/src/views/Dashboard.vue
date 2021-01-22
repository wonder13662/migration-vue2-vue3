 <template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading events
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import EventCard from '@/components/EventCard.vue';
// TODO Pagination 기능을 이곳으로 옮겨야 함
export default {
  components: { EventCard },
  data() {
    return {
      isLoading: true,
      events: [],
    };
  },
  created() {
    // TODO eventService로 바꿀 것!
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
      this.events = data.events.events;
      this.isLoading = false;
    });
  },
};
</script>
