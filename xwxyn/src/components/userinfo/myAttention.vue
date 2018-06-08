<template>
    <div>
        <div class="myAttention">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>我的关注</h1>
                <i></i>
            </div>
            <div class="attention">
                <div class="user-list">
                    <div class="attention-btn">关注</div>
                    <div class="attention-box" @click="$router.push('/user')">
                        <img src="../../assets/logo.png" alt="">
                        <span>
                            <h1>倪友尚</h1>
                            <i>志愿者</i>
                            <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                        </span>
                    </div>
                </div>
                <div class="user-list">
                    <div class="attention-btn">关注</div>
                    <div class="attention-box" @click="$router.push('/user')">
                        <img src="../../assets/logo.png" alt="">
                        <span>
                            <h1>倪友尚</h1>
                            <i>志愿者</i>
                            <p>2013年参加志愿2013年参加志愿工作2013年参加志</p>
                        </span>
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
.myAttention {
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
  .attention {
    .user-list {
      position: relative;
      .attention-box {
        display: flex;
        height: 14rem;
        margin-top: 0.625rem;
        padding: 1.25rem 1.875rem;
        background: #fff;
        img {
          width: 9.75rem;
          height: 9.75rem;
          background: #ccc;
          border-radius: 100%;
        }
        span {
          margin-left: 3.75rem;
          h1 {
            font-size: 1.75rem;
            color: #3c3c3c;
            font-weight: 600;
          }
          i {
            font-size: 1.125rem;
            color: #454545;
          }
          p {
            font-size: 1.25rem;
            color: #9c9c9c;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
      //关注按钮
      .attention-btn {
        min-width: 6rem;
        height: 2.8125rem;
        text-align: center;
        font-size: 1.5rem;
        color: #fff;
        padding: 5px;
        background: #ff6c6c;
        border-radius: 0.3125rem;
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }
  }
}
</style>

