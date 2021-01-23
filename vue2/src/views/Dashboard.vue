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
import EventCard from '@/components/EventCard.vue';
import services from '@/services';

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
    services.event.getEvents(3, 1).then(({ data }) => {
      this.events = data.events;
      this.isLoading = false;
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>
