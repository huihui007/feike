<template>
    <div id="DNA">
      <div v-show="!has_data">
        <div class="healthInfo_top hidden">
          <flexbox class="healthInfo_top_content" :gutter="20">
            <flexbox-item :span="3/6">
              <div class="healthInfo_top_l">
                <p class="title_DNA">DNA检测</p>
                <p class="healthInfo_top_txt">
                  更加准确地了解孩子在运动表现
                  方面的能力和潜力
                </p>
              </div>
            </flexbox-item>
            <flexbox-item :span="3/6">
              <div class="healthInfo_top_r">
                <img src="../../assets/top_img_DNA.png" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="pading_15_content">
          <div  class="healthInfo_content relative">
            <card class="card_box mT10">
              <div slot="header" class="healthInfo_title hidden">
                <span class="title fl">DNA检测 <sub>12项</sub></span>
              </div>
              <div slot="content" class="card-padding hidden">
                <group>
                  <cell title="静息代谢" is-link>
                    <span class="blue_a">YES</span>
                  </cell>
                  <cell title="食物热效应" is-link>
                    <span class="blue_a">YES</span>
                  </cell>
                  <cell title="运动消耗" is-link>
                    <span class="color_fc">NO</span>
                  </cell>
                  <cell title="受伤保护" is-link>
                    <span class="color_fc">无</span>
                  </cell>
                  <cell title="腰间盘保护能力" is-link>
                    <span class="blue_a">有</span>
                  </cell>
                  <cell title="耐力" is-link>
                    <span class="blue_a">强</span>
                  </cell>
                  <cell title="爆发力" is-link>
                    <span class="color_fc">弱</span>
                  </cell>
                  <cell title="前交叉韧带断裂风险" is-link>
                    <span class="color_fc">高</span>
                  </cell>
                  <cell title="身体恢复能力" is-link>
                    <span class="blue_a">强</span>
                  </cell>
                  <cell title="体重水平" is-link>
                    <span class="blue_a">高</span>
                  </cell>
                  <cell title="燃脂能力" is-link>
                    <span class="color_fc">低</span>
                  </cell>
                  <cell title="饱和脂肪酸对肥胖的影响" is-link>
                    <span class="blue_a">高</span>
                  </cell>
                </group>
              </div>
            </card>
          </div>
          <div class="pin_fen_box relative_30 mT10">
            <card class="card_box">
              <div slot="header" class="hidden line_heigth_17">
                <span class="fl title_2_f">燃脂能力与运动消耗偏弱</span>
              </div>
              <div slot="content">
                <p class="text_13 mT20">请注意膳食均衡，在控制热量的前提下减少脂肪的摄入量，
                  建议增加蔬菜、水果的比例。</p>
              </div>
            </card>
          </div>
          <card class="card_box mT10 relative_30 mT10">
            <div slot="header" class="hidden">
              <span class="fl title_2"><span class="border_s border_l_b"></span>推荐课程</span>
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
      <div class="no_data" v-show="has_data">
        <div class="no_dna_data"></div>
        <p class="textCenter w100">您的宝贝还未进行dna基因检测，</p>
        <p class="textCenter w100">快点带着宝宝去检测吧，</p>
        <p class="textCenter w100">菲克在这里等你哦！</p>
      </div>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Group } from 'vux'
  import { Cell } from 'vux'
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "DNA",
    components: {
      Card,
      Cell,
      Group,
      Flexbox,
      FlexboxItem,
    },
    data () {
      return {
        has_data:false,
      }
    }
  }
</script>

<style scoped>
  .healthInfo_title{
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
  .relative_30{top:-45px;}
  .healthInfo_top{width: 100%;height: 250px;background: url("../../assets/healthInfo_top_bg.png") center 0 no-repeat;background-size: cover;-webkit-background-size:cover}
  .healthInfo_content{top: -45px;}
  .healthInfo_top_content{margin-top: 30px;padding:20px;}
  .healthInfo_top_l{color: #fff;font-size:.6rem}
  .healthInfo_top_txt{font-size: 1.3rem;}
  .healthInfo_top_r{width: 9rem;height: 9rem;}
  .healthInfo_top_r img{width: 9rem;height: 100%;}
  .pin_fen_box{margin-top:10px;}
  .fix_img_box img{width: 60px;height: auto;}
  .course_video{height: 190px;border:1px solid #ccc;width: 100%;}
  .course_video img{height: 100%;width: 100%;}
  .course_video .play_btn{top:50%;left: 50%;height: 40px;width: 40px;margin-top:-20px;margin-left: -20px;}
  .course_video .video_time{bottom:0;right: 0;height: 20px;line-height: 20px;padding:0px 10px;border-radius: 3px;background-color:rgba( 0,0,0,.3);color: #fff;margin:0 10px 5px 0}

  .no_dna_data{width: 14rem;height: 14rem;margin: 12rem auto 10px;background: url("../../assets/bg_no_dna_data.png") center no-repeat;background-size: cover;}
  .no_data p{color: #ababab;font-size: 1.7rem;}
</style>
