<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="ma"></div>
    <button v-on:click='click'>按钮事件</button>
    <button @click='clicked'>简写按钮事件</button>
    <div>
      <h3 v-bind:class='className2'>{{counter}}</h3>
      <button v-on:click='counter += 1'>加一</button>
    </div>
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
    <span>Multiline message is:</span>
    <p>{{message}}</p>
    <br>
    <textarea v-model='message' placeholder='add multiple lines'></textarea>
    <br>
    <label>{{if1}}</label><span v-if='Math.random() > 0.5' v-bind:class='className'>{{if2}}</span>
    <span v-else v-bind:class='className2'>{{if3}}</span>
    <div>
      <input type='checkbox' id='jack' value='jack' v-model='checkedNames'>
      <label for='jack'>jack</label>
      <input type='checkbox' id='john' value='john' v-model='checkedNames'>
      <label for='john'>john</label>
      <input type='checkbox' id='mike' value='mike' v-model='checkedNames'>
      <label for='mike'>mike</label>
      <br>
      <span>Checked names: {{checkedNames}}</span>
    </div>
    <br>
  <div>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
  </div>
  <br>
  <div>
  <select v-model="selected">
    <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
  </div>
  <br>
  <div>
  <select v-model="select">
  <option v-for="option in options" :key='option.id' v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ select }}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      counter: 0,
      msg: 'Hello vue!',
      ma: '<h1> 你好 vue!</h1>',
      className: 'm1',
      className2: 'm2',
      s: 1 + 1 === 2,
      s2: false,
      msg1: 'Hello v-text 利用v-text标签替换原有内容',
      modules: [
        {ms: '第一个for遍历循环'},
        {ms: '第二个for遍历循环'},
        {ms: '第三个for遍历循环'}
      ],
      mg: 'v-model 数据双向绑定!',
      mg2: 'v-model.lazy惰性更新!',
      if1: 'v-if语句判定是否显示:',
      if2: 'v-if语句判断显示语句',
      if3: 'v-if语句判断不显示语句',
      message: ' ',
      checkedNames: [],
      picked: ' ',
      selected: ' ',
      select: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
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
.m2{
  color:crimson;
}
</style>
