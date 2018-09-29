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
      <div class="pading_15_content">
        <div  class="healthInfo_content relative">
          <card class="card_box mT10">
            <div slot="header" class="healthInfo_title hidden">
              <span class="title fl">运动能力评估 <sub>10项</sub></span>
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
                <cell title="跳跃" is-link>
                  <span class="blue_a">中水平</span>
                </cell>
                <cell title="投掷" is-link>
                  <span class="blue_a">高水平</span>
                </cell>
                <cell title="攀爬" is-link>
                  <span class="blue_a">低水平</span>
                </cell>
                <cell title="运动表现-敏捷速度" is-link>
                  <span class="blue_a">高水平</span>
                </cell>
                <cell title="运动表现-平衡稳定" is-link>
                  <span class="blue_a">低水平</span>
                </cell>
                <cell title="运动表现-协调反应" is-link>
                  <span class="blue_a">高水平</span>
                </cell>
                <cell title="运动表现-模仿能力" is-link>
                  <span class="blue_a">中水平</span>
                </cell>
              </group>
            </div>
          </card>
        </div>
        <div class="swiper_content shadow relative_30 mT10">
          <swiper height="260px" dots-position="center" dots-class="swiper_buttom">
            <swiper-item >
              <v-chart :data="data" class="qu_bg">
                <v-scale x type="timeCat" mask="MM/DD"/>
                <v-scale y :min="0" alias="体测分数" :max="100" color="#666" lineStyle="{color:'#fff}" />
                <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth" colors="#fff" />
                <v-line shape="smooth" colors="#fff"/>
              </v-chart>
            </swiper-item>
            <swiper-item >
              <v-chart :data="data1" class="qu_bg">
                <v-scale x type="timeCat" mask="MM/DD"/>
                <v-scale y :min="0" alias="体测分数" :max="100" color="#666" lineStyle="{color:'#fff}" />
                <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth" colors="#fff" />
                <v-line shape="smooth" colors="#fff"/>
              </v-chart>
            </swiper-item>
            <swiper-item>
              <v-chart :data="data2" class="qu_bg">
                <v-scale x type="timeCat" mask="MM/DD"/>
                <v-scale y :min="0" alias="体测分数" :max="100" color="#666" lineStyle="{color:'#fff}" />
                <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth" colors="#fff" />
                <v-line shape="smooth" colors="#fff"/>
              </v-chart>
            </swiper-item>
          </swiper>
        </div>
        <div class="pin_fen_box relative_30 mT10">
          <card class="card_box">
            <div slot="header" class="hidden line_heigth_17">
              <span class="fl title_2_f">大宝 体重属于正常范围</span>
              <span class="fr title_1_f">2018/08/26</span>
            </div>
            <div slot="content">
              <p class="text_13 mT20">请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
                建议增加蔬菜、水果的比例。</p>
            </div>
          </card>
        </div>
        <card class="card_box mT10 relative_30 mT10">
          <div slot="header" class="hidden">
            <span class="fl title_2"><span class="border_s border_l_b"></span>推荐视频</span>
          </div>
          <div slot="content" class="card-padding">
            <div class="list">
              <router-link to="/init/personal/courseInfo">
                <card class="top10">
                  <div slot="header" class="hidden">
                    <span class="fl title_1">飞盘游戏练习</span>
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

    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Group } from 'vux'
  import { Cell } from 'vux'
  import { Flexbox, FlexboxItem } from 'vux'
  import { Swiper } from 'vux'
  import { SwiperItem } from 'vux'
  import { VChart, VLine, VPoint, VScale, VTooltip } from 'vux'
  export default {
        name: "healthInfo",
        components: {
          Card,
          Cell,
          Group,
          Flexbox,
          FlexboxItem,
          Swiper,
          SwiperItem,
          VChart,
          VPoint,
          VLine,
          VScale,
          VTooltip,
        },
    data () {
      return {
        data:[
          { time: '2016-08-08 00:00:00', tem: 10 },
          { time: '2016-08-09 00:35:00', tem: 26 },
          { time: '2016-08-10 01:40:00', tem: 28 },
          { time: '2016-08-11 01:40:00', tem: 28 },
          { time: '2016-08-12 01:40:00', tem: 28 },
          { time: '2016-08-13 01:40:00', tem: 100 },
          { time: '2016-08-14 01:40:00', tem: 28 },
          { time: '2016-08-15 01:40:00', tem: 99 },
        ],
        data1:[
          { time: '2016-08-08 00:00:00', tem: 10 },
          { time: '2016-08-09 00:35:00', tem: 26 },
          { time: '2016-08-10 01:40:00', tem: 3 },
          { time: '2016-08-11 01:40:00', tem: 28 },
          { time: '2016-08-12 01:40:00', tem: 32 },
          { time: '2016-08-13 01:40:00', tem: 7 },
          { time: '2016-08-14 01:40:00', tem: 62 },
          { time: '2016-08-15 01:40:00', tem: 99 },
        ],
        data2:[
          { time: '2016-08-08 00:00:00', tem: 10 },
          { time: '2016-08-09 00:35:00', tem: 26 },
          { time: '2016-08-10 01:40:00', tem: 23 },
          { time: '2016-08-11 01:40:00', tem: 28 },
          { time: '2016-08-12 01:40:00', tem: 28 },
          { time: '2016-08-13 01:40:00', tem: 20 },
          { time: '2016-08-14 01:40:00', tem: 28 },
          { time: '2016-08-15 01:40:00', tem: 4 },
        ],
      }
    }
    }
</script>

<style scoped>

  .healthInfo_title{
    padding-bottom:10px;
    font-size: 1.7rem;
    color: #000;
    font-weight:500;
  }
  .healthInfo_title sub{
    font-size: 1.2rem;
    vertical-align: bottom;
  }
  .healthInfo_title .title{
    padding-left:10px;
    position: relative;
  }
  .healthInfo_title .title:before{
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    border-left: solid 2px #0F8FFF;
  }

  .healthInfo_top{width: 100%;height: 250px;background: url("../../assets/healthInfo_top_bg.png") center 0 no-repeat;background-size: cover;-webkit-background-size:cover}
  .healthInfo_content{top: -45px;}
  .healthInfo_top_content{margin-top: 30px;padding: 20px;}
  .healthInfo_top_l{color: #fff;font-size:.6rem}
  .healthInfo_top_l .healthInfo_top_title{font-size: 2.2rem;font-weight: 500;}
  .healthInfo_top_txt{font-size: 1.1rem;}
  .healthInfo_top_r{width: 110px;}
  .healthInfo_top_r img{width: 100%;height: 100%;}
  .swiper_content{margin: 0 auto}
  .qu_bg{background: url("../../assets/qu_bg_1.png")}
  .course_video{height: 190px;border:1px solid #ccc;width: 100%;}
  .course_video img{height: 100%;width: 100%;}
  .course_video .play_btn{top:50%;left: 50%;height: 40px;width: 40px;margin-top:-20px;margin-left: -20px;}
  .course_video .video_time{bottom:0;right: 0;height: 20px;line-height: 20px;padding:0px 10px;border-radius: 3px;background-color:rgba( 0,0,0,.3);color: #fff;margin:0 10px 5px 0}
</style>
