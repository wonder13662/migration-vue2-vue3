<template>
  <div>
    <VueApolloComponentExample v-if="false"/>
    <ApolloClientExample v-if="true"/>
    <ApolloExample v-if="false"/>
  </div>
</template>

<script>
import VueApolloComponentExample from '@/components/VueApolloComponentExample.vue';
import ApolloClientExample from '@/components/ApolloClientExample.vue';
import ApolloExample from '@/components/ApolloExample.vue';

export default {
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    VueApolloComponentExample,
    ApolloClientExample,
    ApolloExample,
  },
};
</script>
