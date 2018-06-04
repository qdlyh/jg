<template>
    <div>
        <div class="introduceForm">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>安装申请</h1>
                <i></i>
            </div>
            <div class="form">
                <div class="input-box">
                    <group>
                        <popup-radio :title="title" :options="list" v-model="option" :placeholder="('选择产品')">
                            <p slot="popup-header" class="vux-1px-b demo3-slot">选择产品</p>
                        </popup-radio>
                    </group>
                </div>
                <div class="input-box">
                    <span>联系人</span>
                    <input type="text" name="" placeholder="姓名">
                </div>
                <div class="input-box">
                    <span>联系电话</span>
                    <input type="text" name="" placeholder="联系电话">
                </div>
                <div class="input-box">
                    <span>安装地址</span>
                    <input type="text" name="" placeholder="安装地址">
                </div>
                <div class="input-box">
                    <calendar @on-change="onChange" v-model="date" :title="('安装日期')" :placeholder="('安装日期')" show-popup-header disable-past :popup-header-title="('选择安装日期')"></calendar>
                </div>
                <div class="input-box" style="height:15rem">
                    <span style="position: relative;top: -50px;">留言</span>
                    <textarea type="text" name="" placeholder="想说的话" maxlength="100"></textarea>
                </div>
            </div>
            <div class="btn-blue">
                提交
            </div>
        </div>
    </div>
</template>
<script>
import { PopupPicker, Group, Calendar, PopupRadio } from 'vux'
export default {
    components: {
        Group,
        PopupPicker,
        Calendar,
        PopupRadio
    },
    data() {
        return {
            title: '洁肠仪',
            list: [{
                key: 1,
                value: '洁肠仪A'
            }, {
                key: 2,
                value: '洁肠仪B'
            }],
            option: '',
            //时间
            readonly: false,
            date: '',
        }
    },
    mounted() {

    },
    methods: {
        //产品
        onChange(val) {
            console.log('val change', val)
        },
        //时间
        onChange(val) {
            console.log('on change', val, this.date)
        }
    }
}
</script>
<style lang="less" scoped>
.demo3-slot {
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  font-size: 1.75rem;
  color: #454545;
}
.introduceForm {
  .user-header {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 2rem;
      text-align: center;
      color: #454545;
      font-weight: 400;
      margin-left: -1.875rem;
    }
    i {
      font-size: 2rem;
      color: #0aa6ff;
    }
  }
  .form {
    .input-box {
      height: 6.25rem;
      line-height: 6.25rem;
      margin-top: 0.625rem;
      background: #fff;
      span {
        display: inline-block;
        width: 8.125rem;
        height: 6.25rem;
        line-height: 6.25rem;
        margin-left: 0.9375rem;
        font-size: 1.5rem;
        color: #454545;
      }
      input {
        width: 75%;
        border: 0;
        font-size: 1.5rem;
        color: #454545;
        &::-webkit-input-placeholder {
          color: #999;
          font-size: 1.5rem;
        }
      }
      textarea {
        width: 75%;
        height: 8rem;
        border: 0;
        font-size: 1.5rem;
        margin-top: 0.625rem;
        resize: none;
        color: #454545;
        &::-webkit-input-placeholder {
          color: #999;
          font-size: 1.5rem;
          padding-top: 0.7rem;
        }
      }
    }
  }
}
</style>

