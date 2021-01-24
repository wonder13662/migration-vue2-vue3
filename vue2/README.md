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


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
