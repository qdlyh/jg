<template>
    <div>
        <div class="yzArticle">
            <div class="yzArticle-box">
                <h1>文章标题文章标题</h1>
                <div class="time">
                    <span>2018-05-06</span>
                    <span>广州白云区</span>
                </div>
                <div class="v-html">

                </div>
            </div>
            <div class="specialist">
                <h1>专家坐诊</h1>
                <div class="specialist-list">
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人李啊</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <i>李人人</i>
                    </span>

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
.yzArticle {
  background: #fff;
  .yzArticle-box {
    padding: 1.875rem;
    .specialist {
      margin-top: 1.25rem;
      h1 {
        font-size: 1.5rem;
        color: #454545;
        font-weight: 500;
      }
    }
    .time {
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      color: #9c9c9c;
      font-size: 1.25rem;
    }
  }
  .specialist {
    position: relative;
    bottom: 0;
    height: 9.375rem;
    background: #f3f3f3;
    border-top: 0.5px solid #dedede;
    h1 {
      font-size: 1.2rem;
      color: #454545;
      width: 0px;
      float: left;
      margin: 0 1.875rem;
      margin-top: 1.25rem;
    }
    .specialist-list {
      margin-top: 0.625rem;
      overflow: hidden;
      overflow: auto;
      display: flex;
      &::-webkit-scrollbar {
        display: none;
      }
      span {
        text-align: center;
        margin-right: 1.875rem;
      }
      img {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 100%;
      }
      i {
        float: left;
        width: 100%;
        font-size: 1.25rem;
        color: #454545;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>

