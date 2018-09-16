<template>
    <div id="student_list">
      <div class="student_list_top textCenter">大一班</div>
      <div class="class_box">
        <div class="class_list">
          <ul class="weui-panel__bd">
            <li class="student_list textLeft weui-media-box weui-media-box_text">
              <router-link to="/init/personal/testting">
                <div class="weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                    <img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff" alt="" class="weui-media-box__thumb">
                  </div>
                  <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">
                      多多 <span>男</span><span>10岁</span>
                    </h4>
                    <p class="weui-media-box__desc">id:1234567</p>
                  </div>
                </div>
              </router-link>
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
  .student_list_top{height: 40px;line-height: 40px;color: #fff;font-size: 1rem;background-color: #0F8FFF;border-radius: 8px;}
  .weui-media-box__bd{background: url("../assets/link.png") center right no-repeat;}
</style>
