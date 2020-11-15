<template>
  <div id="background">
    <img id="background_img" src="../assets/background.jpg">
    <div id="login_view">
      <img id="main_img" src="../assets/main_img.png">
      <div id="login_img">
      <img src="../assets/login_img.png" id="login_img_img">
      <div id="login_title">登录</div>
      <input id="user" placeholder="学号" type="text">
      <input id="password" placeholder="密码" type="text">
      <input id="login" type="button" value="立即登录">
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
</template>

<script>
export default {
  name: 'login',
  methods:{
  }
}
</script>

<style>

@import url('../css/login.css');
</style>
