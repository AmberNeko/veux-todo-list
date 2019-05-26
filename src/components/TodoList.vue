<template>
  <div class="todo-list">
    <section v-if="todos.length===0">
      <h1>目前沒有{{tip}}事項</h1>
    </section>
    <section class="list-area" v-else>
      <div class="list" v-for="data in todos" :key="data.id">
        <p>{{data.todo}}</p>
        <div class="inline-block verticle-bottom">
          <span class="icon" @click="edit(data.id)">
            <img src="../assets/edit-regular.svg" alt="edit">
          </span>
          <span class="icon" v-if="!data.complete" @click="complete(data.id)">
            <img src="../assets/check-circle-regular.svg" alt="check">
          </span>
          <span class="icon" v-else @click="undone(data.id)">
            <img src="../assets/uncheck-circle-regular.svg" alt="uncheck">
          </span>
          <span class="icon" @click="deleteTodo(data.id)">
            <img src="../assets/times-circle-regular.svg" alt="delete">
          </span>
        </div>
        <div v-if="data.edit">
          <textarea class="editer" v-model="data.todo" cols="30" rows="10" autofocus></textarea>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  methods: {
    edit: function(id) {
      this.$store.commit("edit", id);
    },
    complete: function(id) {
      this.$store.commit("complete", id);
    },
    undone: function(id) {
      this.$store.commit("undone", id);
    },
    deleteTodo: function(id) {
      this.$store.commit("deleteTodo", id);
    },
    cancel: function() {
      this.edit = false;
      this.editText = "";
    }
  },
  computed: {
    todos() {
      return this.$store.getters.filterTodo;
    },
    tip() {
      switch (this.$store.state.filter) {
        case "complete":
          return "完成";
        case "undone":
          return "未完成";
        default:
          return "待辦";
      }
    }
  }
};
</script>
<style scoped>
.list-area {
  width: 60%;
  margin: 10px auto 0;
  text-align: left;
}
.list {
  padding: 5px 15px;
  border-style: solid;
  border-color: rgb(201, 245, 188);
}
.list:not(:nth-child(1)) {
  border-top-width: 0px;
}
.list > p {
  width: calc(100% - 120px);
  font-size: 2rem;
  margin: 0;
  display: inline-block;
}
.icon {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: inline-block;
}
.icon > img {
  width: 100%;
}
.editer {
  width: 80%;
  margin: 5px 0 0;
  font-size: 2rem;
  resize: none;
}
@media screen and (max-width: 820px) {
  .editer {
    width: 100%;
  }
  .list-area {
    width: 90%;
  }
}
</style>
