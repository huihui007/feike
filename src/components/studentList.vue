<template>
    <div id="student_list">
      <div class="student_list_top textCenter mT20 clean">大一班<span class="icon icon_add_f fr"></span></div>
      <div class="class_box">
        <div class="class_list">
          <ul class="weui-panel__bd">
            <li class="student_list textLeft weui-media-box weui-media-box_text">

                <div class="weui-media-box_appmsg">
                  <router-link to="/init/personal/changeUserInfo">
                    <div class="weui-media-box__hd">
                      <img src="../assets/user.png" alt="" class="weui-media-box__thumb">
                    </div>
                  </router-link>
                  <router-link to="/init/personal/testting" class="weui-media-box__bd">
                    <p class="title_1">
                      多多 <span class="tex_2">男 10岁</span>
                    </p>
                    <p class="blue_a">id:1234567</p>
                  </router-link>
                </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import { Group, Cell } from 'vux'
  import { Panel } from 'vux'
    export default {
        name: "studentList",
      components: {
        Group, Cell,
        Panel
      },
      data(){
          return {
            list: [{
              src: 'http://somedomain.somdomain/x.jpg',
              fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
              title: '标题一',
              desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              url: '/component/cell'
            }, {
              src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
              title: '标题二',
              desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              url: {
                path: '/component/radio',
                replace: false
              }
            }]
          }
      }
    }
</script>

<style scoped>
  #student_list{padding:0 15px;}
  .student_list_top{font-size:1.7rem;height: 40px;line-height: 40px;color: #fff;border-radius: 8px;background: url("../assets/top_img_studentLIst.png") center no-repeat;background-size: cover;}
  .weui-media-box__bd{background: url("../assets/link.png") center right no-repeat;background-size: 10px;}
  .icon_add_f{background-image: url("../assets/icon_add_f.png");top:10px;right: 20px;width: 1.7rem;height: 1.7rem;}
</style>
