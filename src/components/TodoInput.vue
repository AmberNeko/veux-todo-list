<template>
  <div class="todo-input">
    <input type="text" v-model.trim="todo" @keyup.enter="add">
    <button class="bg-green add-btn" @click="add">Add</button>
  </div>
</template>
<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    add: function() {
      let { todo } = this;
      if (!todo.trim()) return;
      this.$store.commit("addTodo", todo);
      this.todo = "";
    }
  }
};
</script>
<style scoped>
.add-btn {
  margin: 0 0 0 5px;
  vertical-align: bottom;
}
</style>
