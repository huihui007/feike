<template>
  <div id="Login" class="relative">
    <div class="logo-top relative">
      <img class="logo" src="../assets/logo@3x.png">
    </div>
    <div class="animate relative">
      <group class="login_input relative">
        <x-input class="input" value="请输入手机号">
          <img slot="label" style="padding-right:10px;display:block;" src="../assets/icon_phone.png" width="20" height="26">
        </x-input>
        <x-input class="input"  value="请输入验证码">
          <img slot="label" style="padding-right:10px;display:block;" src="../assets/icon_yz.png" width="20" height="26">
          <x-button slot="right" type="primary" mini class="btn_f">获取验证码</x-button>
        </x-input>
      </group>
      <group style="padding:5px 20px;" class="login_btn relative">
        <x-button type="primary" action-type="button" @click.native="login" class="btn_f">登录</x-button>
      </group>
    </div>

    <div class="absolute buttom c mB10 mL_20 w100">
      <p class="w100 textCenter"><router-link to="/init/personal/teacher" class="">教师登录</router-link></p>
      <p class="font_b textCenter w100 font_size_8">登录即代表您已详细阅读</p>
      <p class="font_b textCenter w100 font_size_8">并同意菲克体育的<router-link to="/userage" class="font_r">用户协议</router-link></p>
    </div>
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
        userName: '手机号码',
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
  .input{color: #fff;font-size: .1rem}
  .animate{top: 30%;}
  .logo-top{
    animation: top 1s linear;
  }
  .animate {
    transition:all 2s;
    -moz-transition:all 2s; /* Firefox 4 */
    -webkit-transition:all 2s; /* Safari 和 Chrome */
    -o-transition:all 2s; /* Opera */
    animation: dropdown 2s linear;
  }
  @keyframes dropdown {
    0% { opacity: 0;}
    20% { opacity: 0.2;}
    40% { opacity: 0.4;}
    60% { opacity: 0.6;}
    80% { opacity: 0.8;}
    100% {opacity: 1;}
  }
  @keyframes top {
    0% { top: 50%;opacity: 0.5;}
    50% { top: 40%;opacity: 0.7;}
    80% { top: 30%;opacity: 0.9;}
    100% { top: 20%;opacity: 1;}
  }
</style>
