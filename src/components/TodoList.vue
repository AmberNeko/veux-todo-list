<template>
  <div class="todo-list">
    <section v-if="todos.length===0">
      <h1>目前沒有{{tip}}事項</h1>
    </section>
    <section class="list-area" v-else>
      <div class="list" v-for="data in todos" :key="data.id">
        <p>{{data.todo}}</p>
        <div class="inline-block verticle-bottom">
          <span class="icon" @click="editer(data.id,data.todo)">
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
      </div>
    </section>
    <section v-if="edit" class="editer">
      <div class="bg-green">
        <textarea v-model="editText" class="editer-textarea" cols="30" rows="10" autofocus></textarea>
        <div class="editer-check">
          <span class="icon" @click="cancel">
            <img src="../assets/times-circle-regular.svg" alt="delete">
          </span>
          <span class="icon" @click="confirm">
            <img src="../assets/check-circle-regular.svg" alt="check">
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      edit: false,
      editText: "",
      editId: 0
    };
  },
  methods: {
    editer: function(id, text) {
      this.edit = true;
      this.editId = id;
      this.editText = text;
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
    },
    confirm: function() {
      this.$store.commit("confirm", { id: this.editId, text: this.editText });
      this.editText = "";
      this.edit = false;
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(219, 219, 219, 0.5);
  z-index: 99999;
}
.editer > div {
  width: 60%;
  height: 500px;
}
.editer-textarea {
  width: 60%;
  font-size: 2rem;
  resize: none;
  margin: 20px 0 0;
}
.editer-check {
  display: flex;
  justify-content: space-around;
  margin: 50px auto 0;
  width: 60%;
}
.editer .icon {
  width: 60px;
  height: 60px;
}
@media screen and (max-width: 820px) {
  .editer {
    position: fixed;
  }
  .editer > div {
    width: 350px;
    height: 350px;
  }
  .editer-textarea {
    height: 230px;
  }
  .editer-check {
    margin: 10px auto 0;
  }
  .list-area {
    width: 90%;
  }
}
</style>
