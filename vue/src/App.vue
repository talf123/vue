<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view name='main'/>
    <router-view name='bottom'/>
    <router-link to="/hi">hi</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
