import { mapGetters } from 'vuex';

export default {
  authComputed: {
    ...mapGetters(['loggedIn']),
  },
};
