<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="ma"></div>
    <button v-on:click='click'>按钮事件</button>
    <button @click='clicked'>简写按钮事件</button>
    <h3 v-bind:class='className'>{{msg}}</h3>
    <p v-show='s'>你可以看到的页面内容v-show：true</p>
    <p v-show='s2'>你不可以看到的页面内容v-show：false</p>
    <p v-text='msg1'>可以看到的内容</p>
    <ol>
      <li v-for='module in modules' :key='module.id'>{{module.ms}}</li>
    </ol>
    <input type='text' name='id1' v-model='mg' >
    <p>{{mg}}</p>
    <input type='text' name='id2' v-model.lazy='mg2'>
    <p>{{mg2}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hello vue!',
      ma: '<h1> 你好 vue!</h1>',
      className: 'm1',
      s: 1 + 1 === 2,
      s2: false,
      msg1: 'Hello v-text',
      modules: [
        {ms: '第一个for遍历循环'},
        {ms: '第二个for遍历循环'},
        {ms: '第三个for遍历循环'}
      ],
      mg: 'v-model 数据双向绑定!',
      mg2: 'v-model.lazy惰性更新!'
    }
  },
  methods: {
    click: function () {
      alert('vue按钮利用v-on写的事件!')
    },
    clicked: function () {
      alert('vue按钮利用@简写的事件!')
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
