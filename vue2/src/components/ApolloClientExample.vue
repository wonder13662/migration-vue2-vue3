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
      hello: '',
    };
  },
  async created() {
    try {
      // fetch 요청을 중단하는 것은 AbortController를 사용하면 가능(Experimental feature)
      // destroyed 이후에도 this 및 data의 속성 접근이 가능하다.
      const result = await services.graphql.sample.fetch('Jessy');
      this.hello = result.data.hello;
    } catch (error) {
      console.log('error:', error);
    }
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
