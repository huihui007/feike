<template>
    <div id="testting">
      <div class="healthInfo_top hidden">
        <flexbox class="healthInfo_top_content" :gutter="0">
          <flexbox-item :span="1/2">
            <div class="healthInfo_top_l">
              <p class="healthInfo_top_txt">
                SPS <br>
                儿童运动能力<br>
                评估测试
              </p>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="healthInfo_top_r"><img src="../assets/top_img.png" alt=""></div>
          </flexbox-item>
        </flexbox>
      </div>
      <div  class="healthInfo_content relative">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl"><span class="border_s border_l_o"></span>2、体态：正面</span>
          </div>
          <div slot="content" class="card-padding hidden">
            <div class="list mT10">
             <div class="textCenter"><img src="../assets/img_1.png" alt=""></div>
             <div class="check_box">
               <checklist :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
             </div>
            </div>
          </div>
        </card>
        <div class="btn_wrap">
          <x-button type="primary" class="save_btn bg_b" @click.native="next">下一题</x-button>
        </div>
      </div>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Group } from 'vux'
  import { Checklist } from 'vux'
  import { Flexbox, FlexboxItem ,XButton} from 'vux'
    export default {
        name: "testting",
      components: {
        Flexbox,
        FlexboxItem,
        Group,
        Card,
        Checklist,
        XButton
      },
      data(){
          return {
            step:1,
            radioValue:[],
            commonList: [ '头部偏离、肩膀出现高低', '头部中立位、肩膀同高', '头部中立位、肩膀同高、手臂自然下垂' ],
          }
      },
      methods:{
        change (val, label) {
          console.log('change', val, label)
        },
        next(){
          this.step++;
        }
      }
    }
</script>

<style scoped>
  .healthInfo_top{width: 100%;height: 250px;background: url("../assets/healthInfo_top_bg.png") center 0 no-repeat;background-size: cover;-webkit-background-size:cover}
  .healthInfo_top_content{margin-top: 30px;padding: 20px;}
  .healthInfo_top_l{color: #fff;font-size:.6rem}
  .healthInfo_top_r{width: 110px;}
  .healthInfo_top_r img{width: 100%;height: 100%;}
  .healthInfo_content{top: -30px;}
  .healthInfo_content .textCenter img{width: 100%;height: 100%;}
  .btn_wrap{padding: 15px;}
</style>
