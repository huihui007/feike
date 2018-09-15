<template>
    <div id="healthInfo">
      <div class="healthInfo_top"></div>
      <div  class="healthInfo_content relative">
        <card class="card_box mT10">
          <div slot="header" class="hidden">
            <span class="fl">运动能力评估</span>
          </div>
          <div slot="content" class="card-padding hidden textCenter">
            <group>
              <cell title="体态（正面观）" is-link></cell>
              <cell title="体态（侧面观）" is-link></cell>
              <cell title="跑步" is-link></cell>
            </group>

          </div>
        </card>
      </div>
    </div>
</template>

<script>
  import { Card } from 'vux';
  import { Group } from 'vux'
  import { Cell } from 'vux'
  export default {
        name: "healthInfo",
        components: {
          Card,
          Cell,
          Group
        }
    }
</script>

<style scoped>
.healthInfo_top{width: 100%;height: 250px;background: url("../../assets/healthInfo_top_bg.png") center 0 no-repeat;background-size: cover;-webkit-background-size:cover}
.healthInfo_content{top: -30px;}
</style>
