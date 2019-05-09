<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view name='a'></router-view>
    <router-view name='b'></router-view>
    <router-view name='c'></router-view>
    <router-view></router-view>
    <router-link to="/hi">hi页面</router-link>
    <router-link to="/hww">hww页面</router-link>
    <router-link to="/zujian">zujian页面</router-link>
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
