import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let id = 1;
export default new Vuex.Store({
  state: {
    todos: [],
    filter: 'all'
  },
  getters: {
    filterTodo: state => {
      switch (state.filter) {
        case 'complete':
          return state.todos.filter(data => data.complete);
        case 'undone':
          return state.todos.filter(data => !data.complete);
        default:
          return state.todos;
      }
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: id++,
        todo: todo,
        edit: false,
        complete: false
      })
    },
    edit(state, id) {
      state.todos.map(data => {
        if (data.id === id) data.edit = !data.edit
      })
    },
    complete(state, id) {
      state.todos.map(data => {
        if (data.id === id) data.complete = true
      })
    },
    undone(state, id) {
      state.todos.map(data => {
        if (data.id === id) data.complete = false
      })
    },
    deleteTodo(state, id) {
      let n = state.todos.findIndex(data => data.id === id);
      state.todos.splice(n, 1);
    },
    filter(state, filter) {
      state.filter = filter;
    }
  },
  actions: {

  }
})