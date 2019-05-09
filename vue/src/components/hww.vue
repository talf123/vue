<template>
<div class="hello">
<div>
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
<button v-on:click='toggleLoginType'>Toggle login type</button>
</div>
<div>
<template v-if="login === 'xing ming'">
  <label>xing ming</label>
  <input placeholder="key元素 点击按钮页面恢复" key='xing ming-input'>
</template>
<template v-else>
  <label>you jian</label>
  <input placeholder="key元素 点击按钮页面恢复" key='you jian-input'>
</template>
<button v-on:click='toggle'>Toggle login type</button>
</div>
<ul>
  <li v-for='(item, index) in items' :key='item.id'>
    {{index}}-{{item.message}}
  </li>
</ul>
</div>
</template>
<script>
export default{
  name: 'hww',
  data () {
    return {
      aa: 'Username',
      bb: 'Email',
      loginType: 'username',
      login: 'xing ming',
      items: [
        {message: 'foo'},
        {message: 'bar'}
      ]
    }
  },
  methods: {
    toggleLoginType: function () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
      return this.loginType
    },
    toggle: function () {
      this.login = this.login === 'xing ming' ? 'you jian' : 'xing ming'
      return this.login
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.m1 {
  color: blue;
}
</style>
