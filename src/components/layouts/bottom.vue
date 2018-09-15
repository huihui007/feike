<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/init/home">
        <img slot="icon" src="static/bottom/icon_nav_button.png">
        <span slot="label">检测</span>
      </tabbar-item>
      <tabbar-item link="/init/personal/course">
        <img slot="icon" src="static/bottom/icon_nav_article.png">
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
