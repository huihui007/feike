<template>
  <div id="Home">
    <div class="pading_15_content no_bottom">
      <div class="center relative">
        <div class="absolute chart_header">
          <!--<router-link to="/init/personal/childenInfo" class="fl">-->
            <!--<img src="../assets/user.png" class="user_childen" alt="">-->
          <!--</router-link>-->
          <div class="fl" @click="change_user('1')">
            <img src="../assets/user.png" class="user_childen" alt="">
          </div>
          <div class="fl" @click="change_user('2')">
            <img src="../assets/user2.png" class="user_childen" alt="">
          </div>
          <router-link to="/init/personal/setting" class="fr">
            <i class="icon icon_setting"></i>
          </router-link>
          <div class="num_fen fr">
            <p class="big_size">{{infos.fen}}</p>
            <p>体制分数</p>
          </div>
        </div>
        <v-chart :data="data" class="home_chart">
          <v-scale x type="timeCat" mask="MM/DD"/>
          <v-scale y :min="0" alias="体测分数" :max="100" color="#666" lineStyle="{color:'#fff}" />
          <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth" colors="#fff" />
          <v-line shape="smooth" colors="#fff"/>
        </v-chart>
      </div>
    </div>
    <tab custom-bar-width="60px" class="home_custom shadow" line-width="2" bar-active-color="#4b80ff" active-color="#000" default-color="#999">
      <tab-item v-for="n in 8" :key="n" :selected="n===1"  @on-item-click="onItemClick">08/2{{ n }}</tab-item>
    </tab>
    <div class="pading_15_content relative_30">
      <div class="card_box">
        <card>
          <div slot="header">
            <p class="title_2">体重已属超重范围</p>
          </div>
          <div slot="content" >
           <p class="color_9">
             请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
             建议增加蔬菜、水果的比例。
           </p>
          </div>
        </card>
      </div>
      <div class="card_box">
        <router-link to="/init/personal/healthInfo">
          <card>
            <div slot="header">
              <p class="title_1">运动能力<span class="color_9 mL5 tex_2">10项</span></p>
            </div>
            <div slot="content">
              <div class="fl text_box">
                <p class="color_9">
                  这里是运动能力的名词解释
                </p>
                <p class="blue_a">查看详细报告>><span class="icon icon_type1"></span></p>
              </div>
              <div class="fr img_box">
                <img src="../assets/img_nl.png" alt="">
              </div>
            </div>
          </card>
        </router-link>
      </div>
      <div class="card_box">
        <router-link to="/init/personal/healthInfo">
          <card>
            <div slot="header">
              <p class="title_1">评估情况<span class="color_9 mL5 tex_2">4项</span></p>
            </div>
            <div slot="content">
              <div class="fl text_box">
                <p class="color_9">
                  这里是评估情况的名词解释
                </p>
                <p class="blue_a">查看详细报告>></p>
              </div>
              <div class="fr img_box">
                <img src="../assets/img_pk.png" alt="">
              </div>
            </div>
          </card>
        </router-link>
      </div>
      <div class="card_box">
        <router-link to="/init/personal/bodyTok">
          <card>
            <div slot="header">
              <p class="title_1">身体成分评估<span class="color_9 mL5 tex_2">4项</span></p>
            </div>
            <div slot="content">
              <div class="fl text_box">
                <p class="color_9">
                  这里是身体成分的名词解释
                </p>
                <p class="blue_a">查看详细报告>></p>
              </div>
              <div class="fr img_box">
                <img src="../assets/img_st.png" alt="">
              </div>
            </div>
          </card>
        </router-link>
      </div>
      <div class="card_box">
        <router-link to="/init/personal/BMIFirst">
          <card>
            <div slot="header">
              <p class="title_1">肥胖分析<span class="color_9 mL5 tex_2">3项</span></p>
            </div>
            <div slot="content">
              <div class="fl text_box">
                <p class="color_9">
                  这里是肥胖分析的名词解释
                </p>
                <p class="blue_a">查看详细报告>></p>
              </div>
              <div class="fr img_box">
                <img src="../assets/img_fp.png" alt="">
              </div>
            </div>
          </card>
        </router-link>
      </div>
      <div class="card_box">
        <router-link to="/init/personal/DNA">
          <card>
            <div slot="header">
              <p class="title_1">DNA检测<span class="color_9 mL5 tex_2">60项</span></p>
            </div>
            <div slot="content">
              <div class="fl text_box">
                <p class="color_9">
                  这里是DNA检测的名词解释
                </p>
                <p class="blue_a">查看详细报告>></p>
              </div>
              <div class="fr img_box">
                <img src="../assets/img_dna.png" alt="">
              </div>
            </div>
          </card>
        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
  import { Group, Cell,  Blur,VChart, VLine, VPoint, VScale, VTooltip } from 'vux'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  import { Card } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      Blur,
      VChart,
      VPoint,
      VLine,
      VScale,
      VTooltip,
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Card
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
        infos:{
          fen:73
        },
        index01: 0
      }
    },
    created () {
    },
    methods:{
      onItemClick (index) {
        console.log('on item click:', index)
      },
      change_user(id){
        console.log(id);
        this.infos.fen = 80;
        this.data = [
          { time: '2016-08-08 00:00:00', tem: 10 },
          { time: '2016-08-09 00:35:00', tem: 54 },
          { time: '2016-08-10 01:40:00', tem: 28 },
          { time: '2016-08-11 01:40:00', tem: 28 },
          { time: '2016-08-12 01:40:00', tem: 54 },
          { time: '2016-08-13 01:40:00', tem: 100 },
          { time: '2016-08-14 01:40:00', tem: 28 },
          { time: '2016-08-15 01:40:00', tem: 48 },
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  #Home .home_chart{background: url("../assets/beijing@2x.png") center 0 no-repeat;background-size: cover; margin: 0px auto;border-radius: 5px;}
  #Home .center {
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
  #Home .chart_header{width: 100%;}
  #UserInfo .center img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
  .user_childen{height: 5.3rem;width: 5.3rem;border-radius: 50%;margin:10px;border:2px solid #fff;}
  .num_fen p.big_size{font-size: 4rem;line-height: 4rem;margin-top:5px;}
  .pading_15_content.no_bottom{margin-bottom: 0px;}
  .home_custom{z-index: 99;}
  .img_box{width: 6rem;height: 6rem;margin-top:-1.7rem}
  .text_box{width: 17rem;height: auto;}
  .img_box img{width: 100%;display: block}
  .icon_type1{background-image: url("../assets/icon_type1.png");width: 1.7rem;height: 1.7rem;margin-left: 10px;}
</style>
