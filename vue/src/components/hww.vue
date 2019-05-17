<template>
<div class="hello">
<div>
  <p>{{message}}</p>
  <button v-on:click='reverMessage'>逆转消息</button>
</div>
<div>
  <p>{{message1}}</p>
  <input v-model='message1'>
</div>
<div>
  <p>{{foo}}</p>
  <button @click="foo='修改后!'">修改</button>
  <button v-on:click="foo='初始值!'">还原</button>
</div>
<div>
<input type='text' v-model='first'>
<button @click='dom'>vue DOM </button>
<button v-on:click='dom1'>利用DOM 修改值</button>
</div>
<div>
<p v-once>这里不会变：{{msg}}</p>
<p>这里的会变：{{msg}}</p>
<button @click='change'>v-once 属性</button>
</div>
<div>
<p>这里是利用双大括号显示的内容，直接显示为文本内容：{{rawhtml}}</p>
<p>这里是利用v-html显示的内容，可以显示HTML代码：<span v-html="rawhtml"></span></p>
</div>
<div>
<template v-if="loginType === 'username'">
<label>Username:</label>
<input placeholder="输入用户名" key="username_input">
</template>
<template v-else>
<label>Email:</label>
<input placeholder="输入邮箱" key="email_input">
</template>
<button @click='toggle'>Toggle</button>
</div>
<div>
<p>{{message}}</p>
<p>{{reversedMessage}}</p>
</div>
</div>
</template>
<script>
export default{
  name: 'hww',
  data () {
    return {
      message: '你好 vue.js!',
      message1: '你好 vue.js!',
      foo: '初始值!',
      first: 'vue 连接数据',
      a: 1,
      msg: 'v-once指令，只能执行一次性的插值，以后内容更新后插值处的内容不会更新。',
      rawhtml: "<span style='color:green'>v-html 可以让页面显示html代码",
      loginType: ''
    }
  },
  methods: {
    reverMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    dom: function () {
      console.log(this.first)
    },
    dom1: function () {
      this.first = 'VUE DOM'
    },
    created: function () {
      console.log('a is: ' + this.a)
    },
    change: function () {
      this.msg = '插值的内容更新了!'
    },
    toggle: function () {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
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
.hello {
  margin: 0px auto;
  margin-top: 30%;
  text-align:center;
  overflow: auto;
  height: 470px;
}
</style>
