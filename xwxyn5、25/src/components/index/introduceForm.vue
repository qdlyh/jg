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
                        <popup-picker :title="title" :data="list" show-name v-model="value" :columns="1" @on-change="onChange" :placeholder="('选择产品')"></popup-picker>
                    </group>
                </div>
                <div class="input-box">
                    <span>联系人</span>
                    <input type="text" name="" placeholder="联系人姓名">
                </div>
                <div class="input-box">
                    <span>联系电话</span>
                    <input type="text" name="" placeholder="联系人姓名">
                </div>
                <div class="input-box">
                    <span>安装地址</span>
                    <input type="text" name="" placeholder="联系人姓名">
                </div>
                <div class="input-box">
                    <group>
                        <calendar @calendar-each-date-item-size="36" @on-change="onChange" v-model="date" :title="('安装日期')" show-popup-header disable-past :popup-header-title="('选择安装日期')"></calendar>
                    </group>
                </div>
                <div class="input-box">
                    <span>留言</span>
                    <input type="text" name="" placeholder="联系人姓名">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { PopupPicker, Group, Calendar } from 'vux'
export default {
    components: {
        Group,
        PopupPicker,
        Calendar
    },
    data() {
        return {
            title: '洁肠仪',
            list: [{ text: '小米' }, { text: 'iPhone' }, { text: '华为' }],
            value: [],
            //时间
            readonly: false,
            date: '',
        }
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
      margin-top: 0.625rem;
      background: #fff;
      span {
        display: inline-block;
        width: 5rem;
        height: 3.125rem;
        line-height: 3.125rem;
        margin-left: 30px;
      }
      input {
        width: 80%;
        border: 0;
        border-bottom: 0.5px solid #2683f5;
      }
    }
  }
}
</style>

