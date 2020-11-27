<template>
  <div id="max_box">
    <loading class="tip" v-bind:style="{display:LoadingFlag?'none':''}"></loading>
    <dv-loading class="tip" v-bind:style="{display:statue_success?'none':''}">登录成功</dv-loading>
    <dv-loading class="tip" v-bind:style="{display:statue_fail?'none':''}">密码错误</dv-loading>
    <dv-loading class="tip" v-bind:style="{display:statue_Network_Error?'none':''}">网络错误</dv-loading>
    <div id="background" v-bind:style="{opacity:LoadingFlag?'1':'0.6'}">
    <div class="login">
      <div class="login-wrapper">
        <div class="left-bgc">
          <el-image :src="require('../assets/firelong.jpg')" fit="cover"></el-image>
        </div>
        <div class="right-login">
          <div class="login-title">
            <span>L 0 G 1 N :</span>
          </div>
          <el-form ref="form" :model="form" label-width="40px">
            <el-form-item>
              <el-input placeholder="U5ername" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Pa55w0rd" type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="register">
            <el-link type="danger">D0 N0t HaVe aN Acc0unt ?</el-link>
          </div>
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
      form: {
        username: '',
        password: '',
      },
      name : this.name,
      psd  : this.psd,
      LoadingFlag : true,
      statue_success:true,
      statue_fail:true,
      statue_Network_Error:true
    }
  },
  methods:{
    login:function() {
      this.LoadingFlag = false
      this.$axios.post('http://fzuyhgg.top:5000/login',this.qs.stringify({
        name:this.name,
        psd :this.psd
      })).then(response=>{
        if(response.data =='login_success'){
          this.LoadingFlag = true
          this.statue_success = false
          let that = this
          setTimeout(function (){
            that.statue_success = true
          },1000)
          this.$router.push({name:'index'})
        }
        else {
          this.LoadingFlag = true
          this.statue_fail = false
          if (response.data == 'password_error') {
            this.statue_fail = false
            let that = this
            setTimeout(function () {
              that.statue_fail = true
            }, 1000)
          }
        }
      })
      .catch(error=>{
          console.log(error)
          this.LoadingFlag = true
          this.statue_Network_Error = false
          let that = this
          setTimeout(function () {
            that.statue_Network_Error = true
          }, 1000)
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

.el-button {
  width: 350px;
  background-color: #c5708b;
}

.el-input {
}

.login {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.login-wrapper {
  width: 100%;
  height: 100%;
}

.login-wrapper .left-bgc {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
}

.right-login {
  position: absolute;
  right: 15%;
  top: 20%;
}

.login-title {
  text-shadow: 5px 3px 4px;
  font-size: 35px;
  padding: 20px;
}

.register {
  text-align: center;
}
</style>
