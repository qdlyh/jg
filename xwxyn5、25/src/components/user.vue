<template>
    <div>
        <div class="volunteer">
            <div class="volunteer-top">
                <img src="../assets/logo.png" alt="">
                <span>
                    <h1>倪友尚</h1>
                    <i>志愿者</i>
                    <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                </span>
            </div>
            <div class="volunteer-article">
                <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                <div class="volunteer-box-bottom">
                    <div>
                        <span>1586浏览</span>
                        <span>126评论</span>
                    </div>
                    <div>
                        2018-03-12 09:32
                    </div>
                </div>
            </div>
            <div class="volunteer-article">
                <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                <div class="volunteer-box-bottom">
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
.volunteer {
  .volunteer-top {
    display: flex;
    min-height: 20rem;
    width: 100%;
    background: #ff6c6c;
    padding: 1.875rem;
    img {
      width: 9.75rem;
      height: 9.75rem;
      border-radius: 100%;
      margin-top: 2.5rem;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5),
        0px 2px 20px 3px rgba(0, 0, 0, 0.25);
    }
    span {
      margin-top:.9375rem;
      color: #fff;
      margin-left: 1.875rem;
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

  .volunteer-article {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    p {
      font-size: 1.5rem;
      color: #454545;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .volunteer-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #6666;
      font-size: 1.25rem;
      margin-top: 1.25rem;
      span:nth-child(1) {
        margin-right: 1.25rem;
      }
    }
  }
}
</style>
