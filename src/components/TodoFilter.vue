<template>
  <section class="todo-filter">
    <button :class="bgColor[0]?'bg-blue':'bg-green'" @click="filter('all',0)">All</button>
    <button :class="bgColor[1]?'bg-blue':'bg-green'" @click="filter('complete',1)">Complete</button>
    <button :class="bgColor[2]?'bg-blue':'bg-green'" @click="filter('undone',2)">Undone</button>
  </section>
</template>
<script>
export default {
  name: "TodoFilter",
  data() {
    return {
      bgColor: [true, false, false]
    };
  },
  methods: {
    filter: function(filter, n) {
      let newBgColor = [false, false, false];
      newBgColor[n] = true;
      this.bgColor = newBgColor;
      this.$store.commit("filter", filter);
    }
  }
};
</script>
<style scoped>
.todo-filter {
  margin: 10px 0 0;
}
.todo-filter > button {
  margin: 0 5px;
}
</style>
