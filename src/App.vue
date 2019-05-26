<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Todo List App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  font-size: 1.5rem;
  padding: 2px 5px;
}
button {
  font-size: 1rem;
  padding: 7px 20px;
  border-radius: 5px;
}
.bg-green {
  background-color: #41b883;
}
.bg-blue {
  background-color: aqua;
}
.inline-block {
  display: inline-block;
}
.verticle-bottom {
  vertical-align: bottom;
}
</style>
