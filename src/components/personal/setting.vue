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
          <img src="../../assets/img_f.png" alt="" class="user_header">
          <span class="tex_1">多多爸爸</span>
        </div>
          <div class="list mT10">
            <img src="../../assets/img_m.png" alt="" class="user_header">
            <span class="tex_1">多多妈妈</span>
            <span class="fr line_heigth color_p" @click="showConfirm"><i class="icon icon_bind_no"></i>解除绑定</span>
          </div>
          <div class="list mT10">
            <img src="../../assets/img_gf.png" alt="" class="user_header">
            <span class="tex_1">多多爷爷</span>
            <span class="fr line_heigth color_p"><i class="icon icon_bind_no"></i>解除绑定</span>
          </div>
          <div class="list mT10">
            <img src="../../assets/img_gm.png" alt="" class="user_header">
            <span class="tex_1">多多奶奶</span>
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
      <x-button type="primary" class="save_btn bg_b mT20">保    存</x-button>

      <!--弹框-->
      <confirm v-model="show"
               title="操作提示"
               @on-cancel="onCancel"
               @on-confirm="onConfirm"
               @on-show="onShow"
               @on-hide="onHide">
        <p style="text-align:center;">确定要解除绑定么？</p>
      </confirm>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Qrcode } from 'vux';
  import { XButton  } from 'vux';
  import { Confirm } from 'vux'
  export default {
        name: "setting",
        components: {
          Card,
          Qrcode,
          XButton,
          Confirm
        },
        data(){
            return{
              show :false
            }
        },
        created () {

        },
      methods:{
          showConfirm(){
            console.log(465)
            this.show=true;
          },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        },
        onCancel () {
          console.log('plugin cancel')
        },
        onConfirm () {
          console.log('plugin confirm')
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
#setting{padding: 15px;}
.icon_add{width: 12px;height: 12px;background-image: url("../../assets/icon_add.png");top:-2px;}
.icon_bind_no{width: 12px;height: 12px;background-image: url("../../assets/icon_bind_no.png");top:-2px;margin-right: 3px;}
.erweima .erweima_content{width: 160px;height: 160px;}
.erweima img{width: 160px;height: 100%;}
</style>
