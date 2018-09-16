<template>
    <div id="teacher">
      <search
        placeholder="请输入学生姓名"
        position="absolute"
        top="46px"
        ref="search"></search>
      <div class="class_box">
        <group class="class_list">
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
        let vue = this
        vue.updateTitle('菲克体育');
      },
    }
</script>

<style scoped>
.class_box{padding:0 15px;}
</style>
