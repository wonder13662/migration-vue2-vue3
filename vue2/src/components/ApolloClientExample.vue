<template>
  <div class="apollo-example">
    <h1>Apollo Client Example</h1>
    <div>{{hello}}</div>
  </div>
</template>

<script>
import services from '@/services';

export default {
  name: 'ApolloClientExample',
  data() {
    return {
      subscription: null,
      hello: '',
    };
  },
  async created() {
    try {
      const result = await services.graphql.sample.fetch('Jessy');
      console.log('query / result:', result);
      this.hello = result.data.hello;
    } catch (error) {
      console.log('error:', error);
    }

    this.subscription = services.graphql.sample.counter({
      next(x) { console.log('got value ', x.data.counter.countStr); },
      error(err) { console.error(`something wrong occurred:  ${err}`); },
      complete() { console.log('done'); },
    });
  },
  beforeDestroy() {
    this.subscription.unsubscribe();
  },
};
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 8px;
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.image-input {
  margin: 20px;
}
</style>
