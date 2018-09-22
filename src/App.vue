<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <loading v-model="isLoading"></loading>
      <transition>
        <router-view></router-view>
      </transition>
    </view-box>
  </div>
</template>

<script>
  import {Loading} from 'vux'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    },
    mounted(){
      this.windowHeight();
    },
    methods: {
      windowHeight(){
        //var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
        //var bodyHeight = document.getElementById("app"); //寻找ID为content的对象
        //bodyHeight.style.height = (h) + "px"; //你想要自适应高度的对象
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fff;
  }
  .weui-tab__panel{padding-bottom: 0px;}
  #Login .weui-cells{background-color: transparent;}
  #Login .weui-label{color: #fff;}
  #Login .weui-cells:before{border: 0}
  #Login .weui-cells:after{position: absolute;left: 0;right: 0;height: 1px;border-bottom: 1px solid #D9D9D9;color: #D9D9D9;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);left: 15px;}
</style>
