<template>
    <div>
        <div class="expertList">
            <div class="article-list">
                <h1>专家专区专家专区专家专区专家专区专家专区专家专区专家专区专家专区</h1>
                <div class="article-box-bottom">
                    <div>
                        2018-03-12 09:32
                    </div>
                    <div class="article-msg">
                        <span>126回答</span>
                    </div>
                </div>
            </div>

            <div class="article-hd">
                <h1>我来回答我来回答我来回答我来回答我来回答我来回答我来回答</h1>
                <div class="article-box-bottom">
                    <div>
                        2018-03-12 09:32
                    </div>
                </div>
            </div>

            <div class="expert-article">
                <h1>专家博文专家博文</h1>
                <img src="../../assets/logo.png" alt="">
                <img src="../../assets/logo.png" alt="">
                <img src="../../assets/logo.png" alt="">
                <div class="article-box-bottom">
                    <div class="article-msg">
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
.expertList {
  .user-list {
    .user {
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
          font-size: 1.25rem;
          color: #454545;
        }
        p {
          font-size: 1.5rem;
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
  }

  .article-list,
  .article-hd {
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
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
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
  .expert-article {
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
    img {
      width: 13.75rem;
      height: 8.75rem;
      font-size: 8.75rem;
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 0.625rem;
    }
  }
}
</style>

