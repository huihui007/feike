<template>
  <div id="Home">
    <div class="center relative">
      <div class="absolute chart_header">
        <router-link to="/init/personal/childenInfo">
          <img src="../assets/user.png" class="user_childen" alt="">
        </router-link>
        <div class="num_fen">
          <p>73</p>
          <p>体制分数</p>
        </div>
        <router-link to="/init/personal/setting">
          <i class="icon ">设置图标</i>
        </router-link>
      </div>
      <v-chart :data="data">
        <v-scale x type="timeCat" mask="MM/DD" :tick-count="3" />
        <v-scale y :min="0" alias="日均温度" :tick-count="5" />
        <v-point
          :style="{stroke: '#fff',lineWidth: 1}"
          shape="smooth" />
        <v-line shape="smooth" />
      </v-chart>
    </div>
    <tab custom-bar-width="60px">
      <tab-item v-for="n in 8" :key="n" :selected="n===1"  @on-item-click="onItemClick">08/2{{ n }}</tab-item>
    </tab>
    <div v-for="info in infos" class="card_box">
      <router-link to="/init/personal/healthInfo">
        <card :header="{title: info.name}">
          <div slot="content" >
            请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
            建议增加蔬菜、水果的比例。
          </div>
        </card>
      </router-link>
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
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        data:[
          { time: '2016-08-08 00:00:00', tem: 10 },
          { time: '2016-08-08 00:10:00', tem: 22 },
          { time: '2016-08-08 00:30:00', tem: 20 },
          { time: '2016-08-09 00:35:00', tem: 26 },
          { time: '2016-08-09 01:00:00', tem: 20 },
          { time: '2016-08-09 01:20:00', tem: 26 },
          { time: '2016-08-10 01:40:00', tem: 28 },
          { time: '2016-08-10 02:00:00', tem: 20 },
          { time: '2016-08-10 02:20:00', tem: 18 }
        ],
        infos:[
          {name:'标题1'},
          {name:'标题2'}
        ],
        index01: 0
      }
    },
    created () {
      let vue = this
      vue.updateTitle('菲克体育');
    },
    methods:{
      onItemClick (index) {
        console.log('on item click:', index)
      },
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  #UserInfo .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  #UserInfo .center img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
  .user_childen{height: 60px;width: 60px;border-radius: 50%;}
</style>
