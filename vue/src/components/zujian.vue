<template>
<div class="hello">
<!-- <div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div> -->
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
