<template>
    <div>
        <div class="myAddressForm">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>编辑地址</h1>
                <i></i>
            </div>
            <div class="address-input">
                <span>
                    城市地址
                </span>
                <input placeholder="未设置">
            </div>
            <div class="address-input">
                <span>
                    收件人
                </span>
                <input placeholder="未设置" maxlength="5">
            </div>
            <div class="address-input">
                <span>
                    手机号
                </span>
                <input placeholder="未设置" type="number">
            </div>
            <div class="address-input" style="height:12.5rem">
                <textarea placeholder="填写详细地址，例如街道名称、楼层和门牌等信息" maxlength="100"></textarea>
            </div>
            <div class="check-input">
                <check-icon :value.sync="ischeck"> {{ ('设为默认地址') }}</check-icon>
            </div>
            <div class="btn-blue">
                <a href="javascript:;">保存</a>
            </div>
        </div>
    </div>
</template>
<script>
import { CheckIcon } from 'vux'
export default {
    components: {
        CheckIcon
    },
    data() {
        return {
            ischeck:false,
        }
    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
.myAddressForm {
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
  .address-input {
    padding: 0 10px;
    background: #fff;
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    margin-top: 0.625rem;
    span {
      display: inline-block;
      width: 9.375rem;
      font-size: 1.75rem;
      color: #454545;
      padding-left: 12px;
    }
    input {
      width: 70%;
      border: 0;
      height: 4.375rem;
      font-size: 1.5rem;
      color: #454545;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: left;
        padding-left: 15px;
      }
    }
    textarea {
      width: 100%;
      border: 0;
      height: 12.5rem;
      font-size: 1.5rem;
      color: #454545;
      resize: none;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: left;
        padding: 30px 0 0 15px;
      }
    }
  }
}

</style>
