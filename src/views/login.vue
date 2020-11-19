<template>
  <div id="max_box">
    <loading id="loading" v-bind:style="{display:LoadingFlag?'none':''}"></loading>
    <div id="background">
      <img id="background_img" src="../assets/background.jpg">
      <div id="login_view">
        <img id="main_img" src="../assets/main_img.png">
        <div id="login_img">
        <img src="../assets/login_img.png" id="login_img_img">
        <div id="login_title" >登录</div>
        <input id="user" placeholder="学号" type="text" v-model="name">
        <input id="password" placeholder="密码" type="text" v-model="psd">
        <input id="login" type="button" value="立即登录" @click="login">
        <div id="no_count">没有账号？立即注册</div>
        <div id="other_count">使用第三方登录</div>
        <div id="other_counts">
          <img src="../assets/webo.png" id="weibo_img">
          <img src="../assets/wechat.png" id="wechat_img">
          <img src="../assets/qq.png" id="qq_img">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "@/components/loading";
export default {
  name: 'login',
  components:{loading},
  data:function (){
    return{
      name : '',
      psd  : '',
      LoadingFlag : true
    }
  },
  methods:{
    login:function() {
      this.LoadingFlag = false
      let that = this
      setTimeout(function (){
        that.LoadingFlag = true
      },3000)
      this.$axios.post('http://localhost:5000/login',this.qs.stringify({
        name:this.name,
        psd :this.psd
      })).then(response=>{
        console.log(response.data)
      })
    },
    // 设置拦截器
    loading:function () {
      this.$axios.interceptors.request.use(
          //  发送前做点什么
          function (config){
            return config
          }
      )
    }
  },
  mounted() {
    this.loading()
  }
}
</script>
<style>
@import url('../css/login.css');
</style>
