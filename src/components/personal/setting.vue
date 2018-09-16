<template>
    <div id="setting">
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl"><span class="border_s border_l_b"></span>我的宝宝</span>
          <span class="fr">
            <router-link to="/init/personal/bindChilden" class="blue_a db">
            <i class="icon icon_add"></i>
              添加宝宝
          </router-link>

          </span>
        </div>
        <div slot="content" class="card-padding hidden">
          <img src="../../assets/user.png" alt="" class="user_header">
          <span class="tex_1">多多</span>
          <span class="tex_2">男</span>
          <span class="tex_2">3岁</span>
        </div>
      </card>
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl"><span class="border_s border_l_o"></span>绑定用户</span>
        </div>
        <div slot="content" class="card-padding hidden">
        <div class="list mT10">
          <img src="../../assets/user.png" alt="" class="user_header">
          <span class="tex_1">多多爸爸</span>
        </div>
        <div class="list mT10">
          <img src="../../assets/user.png" alt="" class="user_header">
          <span class="tex_1">多多爸爸</span>
          <span class="fr line_heigth color_p"><i class="icon icon_bind_no"></i>解除绑定</span>
        </div>
      </div>
      </card>
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl"><span class="border_s border_l_p"></span>转发分享</span>
        </div>
        <div slot="content" class="erweima hidden textCenter">
          <div class="erweima_content c">
            <img src="../../assets/img_erwima.png" alt="">
            <!--<qrcode value="../../assets/img_erwima.png" type="img"></qrcode>-->
          </div>

          <p>扫描或长按二维码</p>
            <p>即可分享数据分析界面</p>
        </div>
      </card>
      <x-button type="primary" class="save_btn bg_b">保    存</x-button>
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
        },
    created () {
      let vue = this
      vue.updateTitle('菲克体育');
    },
    }
</script>

<style scoped>
#setting{padding: 15px;}
.icon_add{width: 12px;height: 12px;background-image: url("../../assets/icon_add.png");top:-2px;}
.icon_bind_no{width: 12px;height: 12px;background-image: url("../../assets/icon_bind_no.png");top:-2px;margin-right: 3px;}
.erweima .erweima_content{width: 160px;height: 160px;}
.erweima img{width: 160px;height: 100%;}
</style>
