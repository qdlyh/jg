<template>
    <div>
        <div class="enterForm">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>入驻申请表</h1>
                <i></i>
            </div>
            <div class="enter-input">
                <span>
                    企业名称
                </span>
                <input placeholder="未设置" maxlength="20">
            </div>
            <div class="enter-input">
                <group>
                    <popup-picker value-text-align="left" title="企业性质" :data="list" v-model="values" :columns="1" @on-change="onChange" :placeholder="('未选择')" show-name></popup-picker>
                </group>
            </div>
            <div class="enter-input">
                <span>
                    经营范围
                </span>
                <input placeholder="例：服务行业" maxlength="20">
            </div>
            <div class="enter-input">
                <span>
                    企业地址
                </span>
                <input placeholder="填写地址" maxlength="40">
            </div>
            <div class="btn-blue" @click="$router.push('/uploadFile')">
                下一步
            </div>
        </div>
    </div>
</template>
<script>
import { Group, Cell, PopupPicker } from 'vux'
export default {
    components: {
        Group,
        Cell,
        PopupPicker
    },
    data() {
        return {
            list: [{ name: '国有企业', value: '1', ids: 1 }, { name: '集体企业', value: '2' }, { name: '联营企业', value: '3' }, { name: '三资企业', value: '4' }, { name: '私营企业', value: '5' }, { name: '其他企业', value: '6', ppiad: 123 }],
            values: [],
        }
    },
    mounted() {

    },
    methods: {
        onChange(val) {
            console.log(this.values)
            console.log(val)
        },
    }
}
</script>
<style lang="less" scoped>
.enterForm {
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
  .enter-input {
    background: #fff;
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    margin-top: 0.625rem;
    span {
      display: inline-block;
      width: 9.375rem;
      font-size: 1.5rem;
      color: #454545;
      padding-left: 1.25rem;
    }
    input {
      width: 70%;
      border: 0;
      font-size: 1.5rem;
      color: #454545;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: left;
      }
    }
  }
}
</style>
