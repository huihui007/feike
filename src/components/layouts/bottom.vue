<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/init/home">
        <span slot="icon" class="home_btn tabbar_btn"></span>
        <span slot="label">检测</span>
      </tabbar-item>
      <tabbar-item link="/init/personal/course">
        <span slot="icon" class="course_btn tabbar_btn"></span>
        <span slot="label">课程</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
<style>

</style>
