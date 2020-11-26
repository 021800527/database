<template>
  <div id="max_box">
    <img src="../assets/background.jpg" id="background_img">
    <div id="up" v-bind:style="{'-webkit-animation':enter?'title_move 400ms 1 forwards':'title_no_move 400ms 1'}" >千金难买我开心</div>
    <div id="left" ref="check_width" v-on:mouseenter="check_enter" @mouseleave="check_leave" v-bind:style="{'-webkit-animation':enter?'move 400ms 1 forwards':'no_move 400ms 1'}">
      <div class="logo" v-bind:class="{active:enter}">
        <div id="title" v-show="enter" v-bind:style="{'-webkit-animation':enter?'p_move 400ms 1 forwards':'no_p_move 400ms 1'}">福州大学选修课选课系统</div>
      </div>
      <div id="buttons">
        <div id="myClass" @mouseenter="checkButton_enter0" @mouseleave="checkButton_enter0" v-bind:style="{'background-color':buttons0?'red':'green'}">我的课表</div>
        <div id="myChoose" @mouseenter="checkButton_enter1" @mouseleave="checkButton_enter1" v-bind:style="{'background-color':buttons1?'red':'green'}">我的选课</div>
        <div id="outcome" @mouseenter="checkButton_enter2" @mouseleave="checkButton_enter2" v-bind:style="{'background-color':buttons2?'red':'green'}">选课结果</div>
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
      width:0,
      buttons0:false,
      buttons1:false,
      buttons2:false
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
    },
    checkButton_enter0:function (){
      this.buttons0 = !this.buttons0;
    },
    checkButton_enter1:function (){
      this.buttons1 = !this.buttons1;
    },
    checkButton_enter2:function (){
      this.buttons2 = !this.buttons1;
    },
  }
}
</script>