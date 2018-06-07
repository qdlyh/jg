<template>
    <div>
        <div class="uploadFile">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>资料上传</h1>
                <i></i>
            </div>
            <div class="file">
                <div class="file-box">
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>提供企业注册登记证复印件盖章证</p>
                    </div>
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>提供企业注册登记证复印件盖章证</p>
                    </div>
                </div>
                <div class="file-box" style="margin-top:6.25rem;">
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>提供企业注册登记证复印件盖章证</p>
                    </div>
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>提供企业注册登记证复印件盖章证</p>
                    </div>
                </div>
            </div>
            <div class="btn-blue" style="margin-top:70px;" @click="submit">提交</div>
            <br/>
        </div>
        <!-- <div>
            <msg :title="('资料已提交')" :description="('审核结果将会以消息形式通知您')"></msg>
            <x-button type="primary" style="width:80%;" link="/userType">返回个人中心</x-button>
        </div> -->
    </div>
</template>
<script>
import { Msg, Divider, XButton } from 'vux'

export default {
    components: {
        Msg,
        XButton
    },
    data() {
        return {

        }
    },
    methods: {
        submit(){
            //alert('1')
        }
    }
}
</script>
<style lang="less" scoped>
.uploadFile {
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
  .file {
    padding: 3.125rem;
    .file-box {
      display: flex;
      justify-content: space-between;
      .file-div {
        width: 12.5rem;
        height: 15rem;
        span {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          border: 1px double #ccc;
          i {
            font-size: 7.5rem;
            color: #454545;
            text-align: center;
            line-height: 15rem;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            display: inline-block;
            font-weight: 100;
            color: #9c9c9c;
          }
          input {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
        p {
          margin-top: 0.625rem;
          font-size: 1.25rem;
          color: #454545;
          text-align: center;
        }
      }
    }
  }
}
</style>
