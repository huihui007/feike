<template>
    <div id="teacher" class="pading_15_content">
      <div class="teacher_top clean">
        <div class="teacher_top_l fl">
          <img src="../assets/user_3.png" class="user_img" alt="">
        </div>
        <div class="teacher_top_r fl">
          <search
            placeholder="请输入学生姓名"
            position="absolute"
            :auto-fixed="false"
            top="0"
            ref="search"></search>
        </div>
      </div>
      <div class="class_box">
        <group class="class_list mT20">
          <cell is-link link="/init/personal/studentList"><span slot="title">小一班</span></cell>
        </group>
      </div>
    </div>
</template>

<script>
  import { Search } from 'vux'
  import { Group, Cell } from 'vux'
    export default {
        name: "teacher",
      components: {
        Search,
        Group, Cell
      },
      created () {

      },
    }
</script>

<style scoped>
.teacher_top{vertical-align: middle;display: flex;align-items: center;-webkit-align-items: center;display: -webkit-flex;}
  .teacher_top_l{width: 3rem;height: 3rem;}
  .teacher_top_l img{width: 3rem;border-radius: 50%;}

</style>
