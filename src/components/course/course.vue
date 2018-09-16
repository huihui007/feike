<template>
    <div id="course">
      <router-link to="/init/personal/courseInfo">
        <card class="card_box top10">
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
</template>

<script>
  import { Card } from 'vux';
    export default {
        name: "course",
        components: {
          Card
        },
      created () {
        let vue = this
        vue.updateTitle('菲克体育');
      },
    }
</script>

<style scoped>
  .course_box{border-radius: 5px;border: 1px solid #ccc;}
  .course_video{height: 190px;border:1px solid #ccc;width: 100%;}
  .course_video img{height: 100%;width: 100%;}
  .course_video .play_btn{top:50%;left: 50%;height: 40px;width: 40px;margin-top:-20px;margin-left: -20px;}
  .course_video .video_time{bottom:0;right: 0;height: 20px;line-height: 20px;padding:3px 5px;border-radius: 3px;background-color:rgba( 0,0,0,.4);color: #fff;}
</style>
