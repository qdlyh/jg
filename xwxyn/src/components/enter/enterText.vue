<template>
    <div>
        <div class="enterText">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>入驻</h1>
                <i></i>
            </div>
            <div class="enter-title">
                <h1>简介：</h1>
                <p>介绍入驻内容...</p>
            </div>
            <div class="enter-flow">
                <h1>入驻流程：</h1>
                <div class="flow-title">
                    <div>
                        <img src="../../assets/logo.png" alt="">
                        <p>1.填表申请</p>
                    </div>
                    <div>
                        <img src="../../assets/logo.png" alt="">
                        <p>2.提交资料</p>
                    </div>
                    <div>
                        <img src="../../assets/logo.png" alt="">
                        <p>3.资料审核</p>
                    </div>
                    <div>
                        <img src="../../assets/logo.png" alt="">
                        <p>4.认证通过</p>
                    </div>
                </div>
            </div>
            <div class="accessory">
                <h1>附件资料：</h1>
                <p>1、提供企业注册登记证复印件加盖公章</p>
                <p>2、法人(授权人)身份证复印件</p>
                <p>3、产品生产准可证及相关质量检测报告</p>
                <p>4、签署质量保证书</p>
            </div>
        </div>
        <div class="btn-blue" @click="$router.push('/enterForm')">
            申请入驻
        </div>
        <br/>
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
.enterText {
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
  .enter-title {
    padding: 1.25rem;
    width: 100%;
    min-height: 200px;
    background: #fff;
    margin-top: 0.625rem;
    h1 {
      font-size: 1.5rem;
      color: #454545;
    }
    p {
      margin-top: 1.25rem;
      font-size: 1.25rem;
      color: #454545;
      margin: 1.25rem 0 0 2.5rem;
    }
  }
  .enter-flow {
    width: 100%;
    height: 15.625rem;
    padding: 1.25rem;
    background: #fff;
    margin-top: 0.625rem;
    h1 {
      font-size: 1.5rem;
      color: #454545;
    }
    .flow-title {
      text-align: center;
      width: 90%;
      display: flex;
      justify-content: space-between;
      margin: 1.25rem 0 0 1.875rem;
      div {
        img {
          border-radius: 50%;
          width: 6.25rem;
          height: 6.25rem;
        }
        p {
          font-size: 1.25rem;
          color: #454545;
        }
      }
    }
  }
  .accessory {
    padding: 1.25rem;
    background: #fff;
    margin-top: 0.625rem;
    h1 {
      font-size: 1.5rem;
      color: #454545;
    }
    p {
      font-size: 1.25rem;
      color: #454545;
      margin: 1.25rem 0 0 2.5rem;
    }
  }
}
</style>
