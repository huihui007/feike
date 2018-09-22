<template>
    <div id="courseInfo">
      <div id="testVideo"></div>
      <div class="pading_15_content">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">转发分享</span>
            <span class="fr">时长：02:30</span>
          </div>
          <div slot="content">
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">适合年龄:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">2-3岁</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">文字描述文字描述文字描述文字描述文字描述</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">适合年龄:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">2-3岁</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">道&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">跳绳</p>
              </div>
            </div>
            <div class="media_list weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数:</div>
              <div class="weui-media-box__bd">
                <p class="weui-media-box__desc">跑步</p>
                <p class="weui-media-box__desc">跳绳</p>
              </div>
            </div>
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">课程简介</span>
          </div>
          <div slot="content">
            请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
            建议增加蔬菜、水果的比例。
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">课程简介</span>
          </div>
          <div slot="content">
            请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
            建议增加蔬菜、水果的比例。
          </div>
        </card>
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">课程简介</span>
          </div>
          <div slot="content">
            请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
            建议增加蔬菜、水果的比例。
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
  .media_list.weui-media-box_appmsg{padding: 0px;text-align: left;min-height: 1.5rem;font-weight: 400;line-height: 1.5rem;}
  .media_list.weui-media-box_appmsg .weui-media-box__hd{text-align: left;width: 80px;height: auto;line-height: inherit;}
  .media_list .media_list{margin-top:10px;}
  .media_list .weui-media-box__desc{text-overflow: inherit;-webkit-box-orient:inherit;}
  .media_list.weui-media-box:before{border: 0px;}
</style>
