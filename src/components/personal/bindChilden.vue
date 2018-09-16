<template>
  <div id="childen_info">
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div id="childen_info_conternt" class="shadow">
      <group>
        <cell>
          <span slot="title">宝宝的头像</span>
          <span slot="value"><img class="user_header_r" src="../../assets/user.png" alt=""></span>
        </cell>
        <cell>
          <span slot="title">宝宝的姓名</span>
          <span slot="value">多多</span>
        </cell>
        <cell>
          <span slot="title">宝宝的性别</span>
          <span slot="value">男</span>
        </cell>
        <cell>
          <span slot="title">宝宝的生日</span>
          <span slot="value">2016.06.09</span>
        </cell>
        <cell>
          <span slot="title">宝宝所在的地区</span>
          <span slot="value">北京市 朝阳区</span>
        </cell>
        <cell>
          <span slot="title">宝宝所在的幼儿园</span>
          <span slot="value">北京市玛利娅蒙特梭利</span>
        </cell>
      </group>
    </div>
    <x-button type="primary" class="save_btn bg_b mT20">确认绑定</x-button>
  </div>
</template>

<script>
  import { Search } from 'vux'
  import { Group, Cell } from 'vux'
  import { XButton  } from 'vux';
  export default {
    name: "childenInfo",
    components: {
      Search,
      Group,
      Cell,
      XButton
    },
    methods: {
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: '请输入宝宝的唯一ID',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
    data () {
      return {
        results: [],
        value: '请输入宝宝的唯一ID'
      }
    }
  }
</script>

<style scoped>
  #childen_info{padding: 0 15px 15px 15px;}
#childen_info_conternt{border-radius: 5px;}
</style>
