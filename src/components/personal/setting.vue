<template>
    <div id="setting">
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl">我的宝宝</span>
          <span class="fr">
            <router-link to="/init/personal/bindChilden">
            <i class="icon "></i>
              添加宝宝
          </router-link>

          </span>
        </div>
        <div slot="content" class="card-padding hidden">
          <img src="../../assets/user.png" alt="" class="user_header">
          <span class="">多多</span>
          <span class="">男</span>
          <span class="">3岁</span>
        </div>
      </card>
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl">绑定用户</span>
        </div>
        <div slot="content" class="card-padding hidden">
          <div class="list mT10">
            <img src="../../assets/user.png" alt="" class="user_header">
            <span class="">多多爸爸</span>
          </div>
          <div class="list mT10">
            <img src="../../assets/user.png" alt="" class="user_header">
            <span class="">多多爸爸</span>
            <span class="fr line_heigth">解除绑定</span>
          </div>
          <div class="list mT10">
            <img src="../../assets/user.png" alt="" class="user_header">
            <span class="">多多爸爸</span>
            <span class="fr line_heigth">解除绑定</span>
          </div>
          <div class="list mT10">
            <img src="../../assets/user.png" alt="" class="user_header">
            <span class="">多多爸爸</span>
            <span class="fr line_heigth">解除绑定</span>
          </div>
        </div>
      </card>
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl">转发分享</span>
        </div>
        <div slot="content" class="card-padding hidden textCenter">
          <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
          <p>扫描或长按二维码</p>
            <p>即可分享数据分析界面</p>
        </div>
      </card>
      <x-button type="primary" class="save_btn">保    存</x-button>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Qrcode } from 'vux';
  import { XButton  } from 'vux';
  export default {
        name: "setting",
        components: {
          Card,
          Qrcode,
          XButton
        }
    }
</script>

<style scoped>
#setting{padding: 15px;}
</style>
