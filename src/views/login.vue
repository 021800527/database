<template>
  <div id="background">
    <img id="background_img" src="../assets/background.jpg">
    <div id="login_view">
      <img id="main_img" src="../assets/main_img.png">
      <div id="login_img">
      <img src="../assets/login_img.png">
      <div id="login_title">登录</div>
      <input id="user" placeholder="学号" type="text">
      <input id="password" placeholder="密码" type="text">
      <input id="login" type="button" value="立即登录">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
@import url('../css/login.css');
</style>
