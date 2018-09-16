<template>
    <div id="healthInfo">
      <div class="healthInfo_top hidden">
        <flexbox class="healthInfo_top_content" :gutter="0">
          <flexbox-item :span="1/2">
            <div class="healthInfo_top_l">
            <p class="healthInfo_top_title">
              运动能力
            </p>
            <p class="healthInfo_top_txt">
              更加准确地了解孩子在运动表现
              方面的能力和潜力
            </p>
          </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="healthInfo_top_r"><img src="../../assets/yundong@2x.png" alt=""></div>
          </flexbox-item>
        </flexbox>
      </div>
      <div  class="healthInfo_content relative">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">运动能力评估</span>
          </div>
          <div slot="content" class="card-padding hidden textCenter">
            <group>
              <cell title="体态（正面观）" is-link>
                <span class="blue_a">高水平</span>
              </cell>
              <cell title="体态（侧面观）" is-link>
                <span class="blue_a">高水平</span>
              </cell>
              <cell title="跑步" is-link>
                <span class="blue_a">高水平</span>
              </cell>
            </group>

          </div>
        </card>
      </div>
      <div class="swiper_content shadow rrelative_30">
        <swiper>
          <swiper-item class="qu_bg"><img src="../../assets/qu_bg_1.png" alt=""></swiper-item>
          <swiper-item class="qu_bg"><img src="../../assets/qu_bg_1.png" alt=""></swiper-item>
          <swiper-item class="qu_bg"><img src="../../assets/qu_bg_1.png" alt=""></swiper-item>
        </swiper>
      </div>
      <div class="pin_fen_box">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">转发分享</span>
            <span class="fr">时长：02:30</span>
          </div>
          <div slot="content">
            <p>请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
              建议增加蔬菜、水果的比例。</p>
          </div>
        </card>
      </div>
      <card class="card_box mT10">
        <div slot="header" class="hidden">
          <span class="fl"><span class="border_s border_l_b"></span>推荐视频</span>
        </div>
        <div slot="content" class="card-padding hidden">
          <div class="list">
            <router-link to="/init/personal/courseInfo">
              <card class="top10">
              <div slot="header" class="hidden">
                <span class="fl weight800">飞盘游戏练习</span>
              </div>
              <div slot="content" class="hidden course_box">
                <div class="course_video relative">
                  <img src="../../assets/course.png" alt="">
                  <img src="../../assets/play_btn.png" alt="" class="absolute play_btn">
                  <span class="absolute db video_time">02:30</span>
                </div>
              </div>
              <div slot="footer">
                <p>适合月龄：2-3岁</p>
                <p>目标：提高儿童跑跳与敏捷能力</p>
              </div>
            </card>
            </router-link>
          </div>
        </div>
      </card>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Group } from 'vux'
  import { Cell } from 'vux'
  import { Flexbox, FlexboxItem } from 'vux'
  import { Swiper } from 'vux'
  import { SwiperItem } from 'vux'
  export default {
        name: "healthInfo",
        components: {
          Card,
          Cell,
          Group,
          Flexbox,
          FlexboxItem,
          Swiper,
          SwiperItem
        },
    data () {
      return {

      }
    }
    }
</script>

<style scoped>
  .healthInfo_top{width: 100%;height: 250px;background: url("../../assets/healthInfo_top_bg.png") center 0 no-repeat;background-size: cover;-webkit-background-size:cover}
  .healthInfo_content{top: -30px;}
  .healthInfo_top_content{margin-top: 30px;padding: 20px;}
  .healthInfo_top_l{color: #fff;font-size:.6rem}
  .healthInfo_top_l .healthInfo_top_title{font-size: 1.4rem;font-weight: 500;}
  .healthInfo_top_r{width: 110px;}
  .healthInfo_top_r img{width: 100%;height: 100%;}
  .swiper_content{width: 90%;margin: 0 auto}
  .qu_bg img{width: 100%;height: auto;}
  .course_video{height: 190px;border:1px solid #ccc;width: 100%;}
  .course_video img{height: 100%;width: 100%;}
  .course_video .play_btn{top:50%;left: 50%;height: 40px;width: 40px;margin-top:-20px;margin-left: -20px;}
  .course_video .video_time{bottom:0;right: 0;height: 20px;line-height: 20px;padding:3px 5px;border-radius: 3px;background-color:rgba( 0,0,0,.4);color: #fff;}
</style>
