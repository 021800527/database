<template>
  <div id="max_box">
    <img src="../assets/background.jpg" id="background_img">
    <div id="up" v-bind:style="{'-webkit-animation':enter?'title_move 400ms 1 forwards':'title_no_move 400ms 1'}" >千金难买我开心</div>
    <div id="left" ref="check_width" v-on:mouseenter="check_enter" @mouseleave="check_leave" v-bind:style="{'-webkit-animation':enter?'move 400ms 1 forwards':'no_move 400ms 1'}">
      <div class="logo" v-bind:class="{active:enter}">
        <div id="title" v-show="enter" v-bind:style="{'-webkit-animation':enter?'p_move 400ms 1 forwards':'no_p_move 400ms 1'}">福州大学选修课系统</div>
      </div>
    </div>
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
      enter:false,
      width:0
    }
  },
  methods:{
    check_leave:function (){
      this.enter = false
    },
    check_enter:function (){
      this.enter  = true
    },
    check_width :function (){
      this.width = this.$refs.check_width.offsetWidth
      return this.width
    }
  }
}
</script>