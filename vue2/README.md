# vue2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Lints and fixes files
```
yarn lint
```

### API Endpoint
- Axios

### 환경변수
- TODO

### Vue2의 한계
- 컴포넌트가 커지면서 가독성이 떨어진다.(Less readability as components grows.)
   - 큰 컴포넌트는 유지보수하고 읽기가 어렵다.(Large components can become hard to read & maintain.)
- 코드 재사용 패턴에 단점이 있다.(Code reuse patterns have drawbacks.)
   - 컴포넌트 간의 코드 공유가 어렵다.(No perfect way to reuse logic between components.)
      - Vue2에서는 Mixin으로 기능 공유가 가능하지만 단점이 많음
         - Conflict prone
         - Unclear relationships
         - Not easily reusable
- 타입스크립트 지원에 제한이 있다.(Limited Typescript Support.)

### @vue/composition-api
[Github Repository](https://github.com/vuejs/composition-api)
[Docs](https://v3.vuejs.org/guide/composition-api-introduction.html)
[Video - Why the composition API?](https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api/)
- 이 Composition API 문법은 추가할 수 있습니다.(This Composition API Syntax is Additive)
- 기존 Vue2의 Component 문법은 유효합니다.(All previous Component syntax valid)
- 이 개선된 API는 사용할 수도 있고, 그렇지 않을 수도 있습니다.(This is a more advanced optional syntax)
[제약사항 - Limitation](https://github.com/vuejs/composition-api#limitations)
[Vue3 - Composition-api-introduction](https://v3.vuejs.org/guide/composition-api-introduction.html)
#### 주의사항
```
context.root.$store로 접근 가능.
하지만 context.root는 vue3에서 제공되지 않음
```

### Sample of Composition-api
- Events.vue와 EventsWithCompositionApi.vue를 비교해보시면 됩니다. 이 파일은 [Vue3 Compositional API 문서](https://v3.vuejs.org/guide/composition-api-introduction.htm)를 기준으로 작성되었습니다.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Conventions
### Vuex
#### 모듈화된 store 객체들의 action 호출 방법
##### Bad
```js
export default {
   // ...
   mounted() {
      this.$store.dispatch('event/fetchEvents', {
         perPage: this.perPage,
         page: this.page,
      });
   },
   // ...
}
```
##### Good
```js
import { createNamespacedHelpers } from 'vuex';
const { mapActions: mapEventActions } = createNamespacedHelpers('event');

export default {
   // ...
   mounted() {
      this.fetchEvents({
         perPage: this.perPage,
         page: this.page,
      });
   },
   methods: {
      ...mapEventActions(['fetchEvents']),
   },
   // ...
}
```
### Vue Lifecycle
#### $refs 참조는 mounted() 또는 setup에서는 onMounted()
- mounted() 안에서 참조하는 것을 권장
- created()는 $refs 참조를 하려고 할 경우는 `this.$nextTick()`을 사용해야 함

##### Bad
```html
<template>
   <input type="text" ref="myInput">
</template>

<script>
import Vue from 'vue';

export default {
  created() {
    Vue.nextTick(() => {
      this.$refs.myInput.focus();
    });
  },
};
</script>
```
##### Good
```html
<template>
   <input type="text" ref="myInput">
</template>

<script>
export default {
  mounted() {
   this.$refs.myInput.focus();
  },
};
</script>
```
