<template>
    <div>
        <div class="myPhone">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>手机验证</h1>
                <i></i>
            </div>
            <div class="Phone-input">
                <span>
                    手机号:
                </span>
                <input type="number" placeholder="请输入手机号">
            </div>
            <div class="Phone-input">
                <span>
                    验证码:
                </span>
                <input type="number" placeholder="请输入验证码" style="width:40%">
                <div class="btn-blue verify-btn">
                    获取验证码
                </div>
            </div>
        </div>
        <div class="btn-blue" style="margin-top:7rem;">
            保存
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.myPhone {
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
  .Phone-input {
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
        padding-left: 0.9375rem;
      }
    }
  }
}

.verify-btn {
  width: 30%;
  height: 100%;
  font-size: 1.5rem;
  border-radius: 0;
  float: right;
  margin-top: 0;
  &:active {
    border-radius: 0;
  }
}
</style>

