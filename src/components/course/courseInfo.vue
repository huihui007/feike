<template>
    <div id="courseInfo">
      <div id="testVideo"></div>
      <div class="pading_15_content">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl title_2">跑跳基础和技巧</span>
            <span class="fr weui-media-box__desc">时长：02:30</span>
          </div>
          <div slot="content">
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd title_1">适合年龄:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">2-3岁</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd title_1">目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">文字描述文字描述文字描述文字描述文字描述</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd title_1">适合年龄:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">2-3岁</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd title_1">道&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">跳绳</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd title_1">次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">跑步 跳绳</p>
              </div>
            </div>
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl title_2"><span class="border_s border_l_b"></span>课程简介</span>
          </div>
          <div slot="content">
            <p class="color_9 line_heigth_17">
              跑跳，是儿童运动的基础，也是所有运动中的必备技
              能。Fitkid跑跳课程旨在培养儿童的正确跑跳姿势，
              有针对的提高儿童跑跳能力的运动表现
            </p>
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl title_2"><span class="border_s border_l_b"></span>课程详情</span>
          </div>
          <div slot="content">
            <p class="line_heigth_17 color_9">
              跑步，它在运动上的概述是一种步伐，双脚不会同一
              时间踫到地面，在跑步过程中，始终维持身体略微前
              倾，目视前方，肩膀放松，手臂屈肘90度，前后自然
              摆动，挺胸收腹，腰腹和腿部肌群同时协调发力，后
              蹬发力向前跑动。跑步是日常最方便的一种体育锻炼
              方式，也是有氧运动的有效方式之一。
            </p>
            <p class="line_heigth_17 color_9">
              跳跃，指两脚用力离开原地，向上或向前跳动。跳跃
              是田径运动中的跳跃项目，是运用人体自身的能力
              （或同时借助器材--撑竿），通过一定的运动形式，
              使人体腾越尽可能高的高度或跳跃尽可能远的距离。
            </p>
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl"><span class="border_s border_l_b"></span>安全注意事项</span>
          </div>
          <div slot="content">
            <p class="line_heigth_17 color_9">
              跑跳，是儿童运动的基础，也是所有运动中的必备技
              能。Fitkid跑跳课程旨在培养儿童的正确跑跳姿势，
              有针对的提高儿童跑跳能力的运动表现。
            </p>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
  import './../../assets/js/Dvideo.js'
  import { Card } from 'vux';
  import { Panel } from 'vux'
    export default {
        name: "courseInfo",
      data(){
          return {
            list: [{
              src: 'http://somedomain.somdomain/x.jpg',
              fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
              title: '标题一',
              desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              url: '/component/cell'
            }]
          }
      },
        components: {
          Card,
          Panel
        },
      mounted(){
        this.hello();
      },
      methods: {
        hello(){
          var video = new Dvideo ({
            ele: '#testVideo',
            title: '',
            nextVideoExtend: function () {
              alert('您点击了下一页')
            },
            showNext: true,
            width: '100%',
            height: '200px',
            src: 'http://oxyi0vk1f.bkt.clouddn.com/evn4.mp4',
            autoplay: false,
            setVideoDefinition: function (type, e, current) {
              if (type === '0') {
                alert('你点击了标清')
                // video.setVideoInfo('這是標清','这里填写视频的标清地址',current)
              }
              if (type === '1') {
                alert('你点击了标清')
                // video.setVideoInfo('這是標清','这里填写视频的高清地址',current)
              }
              if (type === '2') {
                alert('你点击了标清')
                // video.setVideoInfo('這是標清','这里填写视频的超清地址',current)
              }
              video.showLoading(false)

              // setTimeout(function () {
              // 	video.videoEle.currentTime = current
              // 	video.videoPlay()
              // 	video.showLoading(false)
              // }, 3000)
            },
          })
        }
      }
    }
</script>
<style scoped>
  @import './../../assets/style/Dvideo.css';
  @import './../../assets/style/style.css';
  .media_list.weui-media-box_appmsg{padding: 0px;text-align: left;min-height: 1.5rem;font-weight: 400;line-height: 1.5rem;-webkit-box-align: baseline;margin-top:10px;align-items:baseline}
  .media_list.weui-media-box_appmsg .weui-media-box__hd{text-align: left;width: 80px;height: auto;line-height: inherit;}
  .media_list .media_list{margin-top:10px;}
  .media_list .weui-media-box__desc{text-overflow: inherit;-webkit-box-orient:inherit;}
  .media_list.weui-media-box:before{border: 0px;}
</style>
