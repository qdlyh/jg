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
                        <popup-picker value-text-align="left" :title="title" :data="list" v-model="values" :columns="1" @on-change="onChange" :placeholder="('选择产品')" show-name>
                        </popup-picker>
                    </group>
                </div>
                <div class="input-box">
                    <span>联系人</span>
                    <input type="text" v-model.trim="name" placeholder="姓名" maxlength="5">
                </div>
                <div class="input-box">
                    <span>联系电话</span>
                    <input type="number" v-model.trim="phone" placeholder="联系电话" oninput='if(value.length>11)value=value.slice(0,11)'>
                </div>
                <div class="input-box">
                    <span>安装地址</span>
                    <input type="text" v-model.trim="address" placeholder="安装地址" maxlength="40">
                </div>
                <div class="input-box">
                    <calendar @on-change="onTime" v-model="date" :title="('安装日期')" :placeholder="('安装日期')" show-popup-header disable-past :popup-header-title="('选择安装日期')"></calendar>
                </div>
                <div class="input-box" style="height:15rem">
                    <span style="position: relative;top: -100px;">留言</span>
                    <textarea type="text" v-model.trim="msg" placeholder="想说的话" maxlength="100"></textarea>
                </div>
            </div>
            <toast v-model="cancel" :time="3000" type="cancel">{{(cancelText)}}</toast>
            <div class="btn-blue" @click="submit">
                提交
            </div>
        </div>
    </div>
</template>
<script>
import { PopupPicker, Group, Calendar, Toast } from 'vux'
export default {
    components: {
        Group,
        PopupPicker,
        Calendar,
        Toast
    },
    data() {
        return {
            cancelText: '',
            title: '洁肠仪',
            cancel: false,
            list: [
                { name: '国有企业', value: '1', ids: 1 },
                { name: '集体企业', value: '2' },
                { name: '联营企业', value: '3' },
                { name: '三资企业', value: '4' },
                { name: '私营企业', value: '5' },
                { name: '其他企业', value: '6', ppiad: 123 }
            ],
            values: [],
            name: '',
            phone: '',
            address: '',
            date: '',
            msg: '',
        }
    },
    mounted() {

    },
    methods: {
        //产品
        onChange(val) {
            console.log(Number(val))
        },
        //时间
        onTime(val) {
            console.log(val, this.date)
        },
        submit() {
            let have = true;
            if (this.name.length == 0 || this.phone.length == 0 || this.address.length == 0 || this.values.length == 0 || this.date == '') {
                this.cancel = true;
                this.cancelText = '请填写完整的基本信息'
                return false;
            }
            if (!(/^1[345789][0-9]{9}$/.test(this.phone))) {
                this.cancel = true;
                this.cancelText = '手机号码错误'
                have = false;
                return false;
            }
            if (have) {
                this.cancel = true;
                this.cancelText = '已提交'
                let formData = new FormData();
                //formData.append('userId', this.$parent.userId);
            }
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

