<template>
  <div id="BMI">
      <div class="healthInfo_top hidden">
        <flexbox class="healthInfo_top_content" :gutter="0">
          <flexbox-item :span="1/6">
            <div class="healthInfo_top_r">
              <img src="../../assets/top_DNA.png" alt="">
              <p class="w100 title_2_f textCenter">BMI</p>
              <p class="w100 title_DNA textCenter">(22.5)</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/20"></flexbox-item>
          <flexbox-item :span="2/3">
            <div class="healthInfo_top_l">
              <p class="healthInfo_top_txt">
                BMI（Body Mass Index）是国际上用于衡
                量人体胖瘦程度的标准。亚洲地区的BMI水
                平整体上低于欧洲国家，因此我们使用的是
                适合亚洲人体质的标准。
              </p>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="pading_15_content">
        <div  class="healthInfo_content relative">
          <card class="card_box mT10">
            <div slot="header" class="healthInfo_title hidden">
              <span class="title fl">运动能力评估 <sub>10项</sub></span>
            </div>
            <div slot="content">
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_wach"></i><span class="title_3">评估设备：</span>头顶书本姿态观察</p>
              </div>
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_yd"></i><span class="title_3">评估动作：</span><img class="DNA_img" src="../../assets/img_1.png" alt=""></p>
              </div>
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_bsd"></i><span class="title_3">评估月龄：</span>2-3岁</p>
              </div>
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_beed"></i><span class="title_3">低水平：</span>头部偏离、肩膀出现高低</p>
              </div>
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_good"></i><span class="title_3">标准水平：</span>头部中立位、肩膀同高</p>
              </div>
              <div class="DNA_list mT20">
                <p class="color_6"><i class="icon icon_vrey"></i><span class="title_3">高水平：</span>头部中立位、肩膀同高、手臂自然
                  下垂</p>
              </div>

            </div>
          </card>
        </div>
        <div class="relative_30 mT10">
          <card class="card_box">
            <div slot="content" class="relative">
              <ul class="fen_shu hidden c">
                <li class="fen_shu_list fl">18.5</li>
                <li class="fen_shu_list fl">24.5</li>
                <li class="fen_shu_list fl">28.5</li>
                <li class="fen_shu_list fl">35.0</li>
              </ul>
              <ul class="progress clean c textCenter">
                <li class="progress_list fl">

                </li>
                <li class="progress_list fl">
                  <i class="icon icon_jiankang absolute"></i>
                </li>
                <li class="progress_list fl"></li>
                <li class="progress_list fl"></li>
                <li class="progress_list fl"></li>
              </ul>
              <ul class="py hidden c">
                <li class="py_list fl">偏瘦</li>
                <li class="py_list fl">正常</li>
                <li class="py_list fl">偏胖</li>
                <li class="py_list fl">肥胖</li>
                <li class="py_list fl">极胖</li>
              </ul>
            </div>
          </card>
        </div>
        <card class="card_box mT10 relative_30 mT10">
          <div slot="content">
            <div class="disFix">
              <div class="fix_img_box">
                <img src="../../assets/img_bmi.png" alt="">
              </div>
              <div>
                <h4 class="title_1">BMI正常</h4>
                <p class="tex_2">目前BMI指数正常，身材指数完美，要继续
                  保持哦！</p>
              </div>
            </div>
            <div class="disFix mT20">
              <div class="fix_img_box">
                <img src="../../assets/img_miaozhao.png" alt="">
              </div>
              <div>
                <h4 class="title_1">此处有妙招</h4>
                <p class="tex_2">保持规律的生活方式，少熬夜多运动，每周
                  安排2-3次运动可以保持身体的基础代谢，
                  使身体的循环能力增强。运动后记得拉伸放
                  松哦！</p>
              </div>
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
  .healthInfo_top_r{width: 4.7rem;line-height: 1.7rem}
  .healthInfo_top_r img{width: 4.7rem;height: 100%;}
  .icon{top:-3px;margin-right: 5px;}
  .icon_wach{background-image: url("../../assets/icon_wach.png");}
  .icon_yd{background-image: url("../../assets/icon_yd.png");}
  .icon_bsd{background-image: url("../../assets/icon_bsd.png");}
  .icon_beed{background-image: url("../../assets/icon_beed.png");}
  .icon_good{background-image: url("../../assets/icon_good.png");}
  .icon_vrey{background-image: url("../../assets/icon_vrey.png");}
  .DNA_img{width: 26rem;border-radius: 8px;display: block;margin: 10px auto 0;}
  /*进度条*/
  .fen_shu{width: 80%;margin-bottom: 20px;}
  .fen_shu_list{text-align: center;font-size: 1.2rem}
  .fen_shu .fen_shu_list:nth-child(1){width: 30%;}
  .fen_shu .fen_shu_list:nth-child(2){width: 20%;}
  .fen_shu .fen_shu_list:nth-child(3){width: 25%;}
  .fen_shu .fen_shu_list:nth-child(4){width: 20%;}
  .progress{width: 90%;margin-bottom: 20px;}
  .progress_list{width: 20%;height: 9px;}
  .progress .progress_list:nth-child(1){background-color: #6DB1FF;border-radius: 4px 0 0 4px;}
  .progress .progress_list:nth-child(2){background-color: #6CDAB5}
  .progress .progress_list:nth-child(3){background-color: #FF7E3C}
  .progress .progress_list:nth-child(4){background-color: #FD9C95}
  .progress .progress_list:nth-child(5){background-color: #FF3C8B;border-radius: 0 4px 4px 0;}
  .py{width: 90%;}
  .py_list{width: 20%;text-align: center;color: #999;}
  .icon_jiankang{background-image: url("../../assets/icon_jiankang.png");top:-5px;}
  .fix_img_box img{width: 60px;height: auto;}

</style>
