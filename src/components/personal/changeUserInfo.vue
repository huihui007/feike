<template>
    <div id="changeUserInfo" class="pading_15_content">
      <card class="card_box mT10">
        <div slot="content" class="card-padding hidden">
          <group>
            <cell title="上传学生照片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </cell>
            <x-input title="姓名" text-align="right" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
            <popup-picker title="性别" :data="list1" v-model="sex" @on-change="onChange" placeholder="性别"></popup-picker>
            <datetime title="生日" v-model="date" placeholder="请输入姓名"></datetime>
          </group>
        </div>
      </card>
      <x-button type="primary" class="save_btn bg_b mT20 relative">确认修改</x-button>
    </div>
</template>

<script>
  import { Group } from 'vux'
  import { Cell } from 'vux'
  import { Card } from 'vux';
  import { XInput } from 'vux'
  import { PopupPicker } from 'vux'
  import { Datetime } from 'vux'
  import { XButton  } from 'vux';
    export default {
      name: "changeUserInfo",
      components:{
        Card,
        Group,
        Cell,
        XInput,
        PopupPicker,
        Datetime,
        XButton
      },
      data() {
        return {
          date:'',
          sex:['男'],
          list1: [['男', '女']],
          dialogImageUrl: '',
          dialogVisible: false
        };
      },
      methods: {
        onChange (val) {
          console.log('val change', val)
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
    }
</script>

<style scoped>
.save_btn{bottom: -20rem;}
</style>
