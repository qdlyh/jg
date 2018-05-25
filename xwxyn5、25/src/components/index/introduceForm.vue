<template>
    <div>
        <div class="introduceForm">
            <div class="headerMsg">
                <x-icon class="x-icon" type="ios-arrow-left" size="60" @click="$router.go(-1)"></x-icon>
                <h1>对话列表</h1>
            </div>
            <br/>
            <div class="form">
                <div class="input-box">
                    <group>
                        <popup-radio title="options" :options="list" v-model="option" @on-change="onChange" placeholder="placeholder"></popup-radio>
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
                    <group>
                        <calendar @on-change="onChange" v-model="date" :title="('安装日期')" :placeholder="('安装日期')" show-popup-header disable-past :popup-header-title="('选择安装日期')"></calendar>
                    </group>
                </div>
                <div class="input-box">
                    <span>留言</span>
                    <input type="text" name="" placeholder="想说的话">
                </div>
            </div>
            <div class="btn-blue">
                <a href="javascript:;">提交</a>
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
.introduceForm {
  .headerMsg {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    border-bottom: 0.5px solid #dbdbdb;
    position: relative;
    .x-icon {
      position: absolute;
      height: 5rem;
      line-height: 5rem;
      display: inline-block;
      margin-left: 1.25rem;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      color: #454545;
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
        height: 3.125rem;
        line-height: 3.125rem;
        margin-left: 0.9375rem;
        font-size: 1.5rem;
      }
      input {
        width: 75%;
        height: 80%;
        border: 0;
        font-size: 1.5rem;
        color: #454545;
        &::-webkit-input-placeholder {
          color: #999;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>

