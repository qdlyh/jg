<template>
    <div>
        <div class="specialistUser">
            <div class="specialist-top">
                <div class="user-message">
                    <img src="../assets/logo.png" alt="">
                    <div class="user">
                        <h1>倪友尚</h1>
                        <i>志愿者</i>
                        <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                        <span class="attention">关注</span>
                    </div>
                </div>
                <div class="number">
                    <span>
                        <p>帮助</p>
                        <i>1235</i>
                    </span>
                    <span>
                        <p>关注</p>
                        <i>1235</i>
                    </span>
                </div>
            </div>
            <div class="issue">我要提问</div>
            <div class="specialist-article">
                <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                <div class="specialist-box-bottom">
                    <div>
                        <span>1586浏览</span>
                        <span>126评论</span>
                    </div>
                    <div>
                        2018-03-12 09:32
                    </div>
                </div>
            </div>
            <div class="specialist-article">
                <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                <div class="specialist-box-bottom">
                    <div>
                        <span>1586浏览</span>
                        <span>126评论</span>
                    </div>
                    <div>
                        2018-03-12 09:32
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
.specialistUser {
  .specialist-top {
    min-height: 22.5rem;
    width: 100%;
    background: #23C3FF;
    padding: 1.875rem;
    img {
      width: 9.75rem;
      height: 9.75rem;
      border-radius: 100%;
      margin-top: 4.5rem;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5),
        0px 2px 20px 3px rgba(0, 0, 0, 0.25);
    }
    .user-message {
      display: flex;
      .user {
        margin-top: 3.125rem;
        color: #fff;
        margin-left: 1.875rem;
        position: relative;
        .attention {
          position: absolute;
          right: 0;
          top: 0;
          width: 6.25rem;
          height: 3rem;
          border-radius: 15px;
          color: #fff;
          font-size: 1.5rem;
          text-align: center;
          line-height: 3rem;
          display: inline-block;
          border: 0.5px solid #fff;
        }
        h1 {
          font-size: 2rem;
        }
        i {
          margin-top: 1rem;
          font-size: 1.25rem;
        }
        p {
          margin-top: 1rem;
          font-size: 1.25rem;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
    .number {
      width: 100%;
      display: flex;
      margin-top: 2.5rem;
      span {
        width: 50%;
        display: inline-block;
        color: #fff;
        text-align: center;
        p {
          font-size: 1.5rem;
        }
        i {
          font-size: 2rem;
        }
      }
      span:nth-child(1) {
        border-right: 0.5px solid #fff;
      }
    }
  }
  .issue {
    width: 100%;
    height: 4.375rem;
    text-align: center;
    color: #454545;
    font-size: 1.75rem;
    line-height: 4.375rem;
  }
  .specialist-article {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    p {
      font-size: 1.5rem;
      color: #3c3c3c;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .specialist-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #666;
      font-size: 1.25rem;
      margin-top: 1.25rem;
      span:nth-child(1) {
        margin-right: 1.25rem;
      }
    }
  }
}
</style>

