<template>
  <div id="max_box">
    <div id="left" v-on:mouseenter="check_enter" @mouseleave="check_leave" v-bind:style="{'-webkit-animation':enter?'move 1s 1 forwards':'no_move 1s 1'}"></div>
  </div>
</template>

<style>
@import "../css/Index.css";
</style>

<script>
export default {
  name:'Index',
  data:function (){
    return{
      enter:false
    }
  },
  methods:{
    check_leave:function (){
      this.enter = false
    },
    check_enter:function (){
      this.enter  = true
    }
  }
  }
</script>