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
      this.fun(document, window);
      this.windowHeight()
    },
    methods: {
      fun :function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
            //可以根据实际需要修改
            docEl.style.fontSize = 20 * (clientWidth / 750) + 'px';
          };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
      },
      windowHeight(){
        var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
        var bodyHeight = document.getElementById("app"); //寻找ID为content的对象
        bodyHeight.style.height = (h) + "px"; //你想要自适应高度的对象
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
