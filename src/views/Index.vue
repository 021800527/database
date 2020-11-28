<template>
  <div id="max_index_box" class="index-box">
    <div class="nav">
      <div class="nav-wrapper">
        <ul class="nav-ul">
          <li>
            <el-image class="elImage" :src="require('../assets/icons8-pokemon.png')"></el-image>
            <span class="title">课表</span>
          </li>
          <li>
            <el-image class="elImage" :src="require('../assets/pokemon.png')"></el-image>
            <span class="title">学期选课</span>
          </li>
          <li>
            <el-image class="elImage" :src="require('../assets/pokemon.png')"></el-image>
            <span class="title">我的选课</span>
          </li>
          <li>
            <el-image class="elImage" :src="require('../assets/pokemon.png')"></el-image>
            <span class="title">我的成绩</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-body">
      <div class="calenders">
        <calenders></calenders>
      </div>
    </div>
  </div>
</template>

<style>
@import "../css/Index.css";
</style>

<script>
import calenders from '../components/student/calenders.vue';

export default {
  name:'Index',
  data:function (){
    return{

    }
  },
  components: {
    calenders,
  },
  methods:{

  }
}
</script>

<style scoped>
  .title {
    font-family: "Roboto",arial,sans-serif;
    font-weight: 500;
    color: #fff;
    display: block;
    font-size: 87.5%;
    margin: 7px auto;
    opacity: 1;
    position: relative;
    text-align: center;
    word-wrap: break-word;
    color: #464646;
  }

  .index-box {
    background-image: url(../assets/pokemon_bg.jpg);
    background-size: cover;
    max-width: 2518px;
    min-height:280px;
  }

  .nav {
    background: #FFF;
    border-bottom: 2px solid #f0f0f0;
    height: 87px;
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
  }

  .nav-wrapper {
    max-width: 895px;
    margin: 0 auto;
  }

  .nav-wrapper ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-wrapper ul li {
    cursor: pointer;
    height: 87px;
    margin: 0;
    overflow: visible;
    width: 14.28571%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    justify-content: center;
    transition: all .3s;
  }

  .nav-wrapper ul li:hover {
    background-color: rgba(227,53,13, 0.9);
  }

  .nav-wrapper ul li .elImage{
    height: 33px;
    width: 33px;
  }

  .index-body {
    width: 80%;
    margin: 0 auto;
    margin-top: 88px;
    background-color: #fff;
    height: 180vh;
    border-radius: 6px;
  }

  .index-body .calenders {
    width: 80%;
    margin: 0 auto;  
  }
</style>