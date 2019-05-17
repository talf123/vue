<template>
<div class="hello">
<!-- <router-view name="top"><router-view>
<router-view name="center"><router-view> -->
<router-view><router-view>
<h1>{{sv}}</h1>
</div>
</template>
<script>
export default{
  name: 'hww',
  data () {
    return {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width:1200px;
  }
</style>
