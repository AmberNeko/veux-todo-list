# vuex-todo-list

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vuex Store 物件屬性
* state： 狀態
* getters： 將狀態加工
* mutations： 更改狀態(同步)
* action： 更改狀態(異步)

# 取得狀態
  在元件內 computed 使用 this.$store.state|getters.xxx
  ```
  export default {
  name: "",
  methods: {
    
  },
  computed: {
    todos() {
      return this.$store.state|getters.xxx;
    }
  }
};
  ```
  # 更改狀態
    this.$store.commit('名稱', 參數);
