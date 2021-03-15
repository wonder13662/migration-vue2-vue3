<template>
  <div>
    <VueApolloComponentExample v-if="toggle"/>
    <ApolloClientExample v-if="!toggle"/>
  </div>
</template>

<script>
import VueApolloComponentExample from '@/components/VueApolloComponentExample.vue';
import ApolloClientExample from '@/components/ApolloClientExample.vue';

export default {
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    VueApolloComponentExample,
    ApolloClientExample,
  },
};
</script>
