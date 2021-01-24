<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      events: [], // 1
      filters: {}, // 3
      searchQuery: '' // 2
    };
  },
  computed: {
    filteredEvents () { // 3
      return [];
    },
    eventsMatchingSearchQuery () { // 2
      return [];
    },
  },
  watch: {
    user: 'getUserEvents', // 1
  },
  methods: {
    getUserEvents () { // 1
      // using `this.user` to fetch user events
    },
    updateFilters () { // 3

    }
  },
  mounted () {
    this.getUserEvents(); // 1
  }
}
</script>
