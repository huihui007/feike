<template>
  <div id="Login">
    <div class="logo-top relative">
      <img class="logo" src="../assets/logo@3x.png">
    </div>
    <group class="login_input relative">
      <x-input v-model="userName" class="input" placeholder="请输入您的手机号码">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input class="weui-vcode"  placeholder="请输入验证码">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
        <x-button slot="right" type="primary" mini>获取验证码</x-button>
      </x-input>
    </group>

    <group style="padding:5px 20px;" class="login_btn relative">
      <x-button type="primary" action-type="button" @click.native="login">登录</x-button>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XInput, XButton } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton
    },
    data () {
      return {
        userName: '',
        userPass: ''
      }
    },
    methods: {
      login(){
        let vue = this;
        vue.$router.push({name: 'home', params: {}})
      }
    }
  }
</script>

<style>
  #Login{background: url("../assets/bg.png") center no-repeat;background-size: cover;height: 100%;padding: 0 20px;}
  .logo-top {text-align: center;top:20%;}
  .logo {width: 228px;height: 56px}
  .login_input{top:30%;}
  .login_btn{top:30%;}
</style>
