<template>
    <div>
        <div class="myMessage">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>我的消息</h1>
                <i></i>
            </div>
            <div class="article-list">
                <div>
                    <img src="../../assets/logo.png" alt="">
                    <h1>咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区</h1>
                    <div class="article-box-bottom">
                        <div>
                            2018-03-12 09:32
                        </div>
                    </div>
                </div>
            </div>
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
.myMessage {
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

  .article-list {
    margin-top: 0.625rem;
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    h1 {
      font-size: 1.5rem;
      color: #3c3c3c;
      margin-bottom: 0.625rem;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    img{
        max-width: 750px;
        max-height: 100px;
        overflow: hidden;
    }
    .questions-btn {
      color: #fff;
      position: fixed;
      bottom: 7.5rem;
      right: 20px;
      width: 6.25rem;
      height: 6.25rem;
      line-height: 6.25rem;
      text-align: center;
      border-radius: 100%;
      background: rgba(4, 142, 255, 0.5);
      font-size: 1.75rem;
    }
    .article-box-bottom {
      display: flex;
      justify-content: flex-end;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 1.875rem;
      .article-msg {
        background: #f3f3f3;
        width: 6.25rem;
        height: 2rem;
        border-radius: 10px;
        color: #454545;
        text-align: center;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
