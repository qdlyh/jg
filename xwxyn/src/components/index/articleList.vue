<template>
    <div>
        <div class="article-list">
            <tab>
                <tab-item selected>推荐</tab-item>
                <tab-item>全部</tab-item>
                <tab-item>文化</tab-item>
                <tab-item>常识</tab-item>
                <tab-item>医疗</tab-item>
                <tab-item>保健</tab-item>
                <tab-item>养生</tab-item>
            </tab>
            <div class="article-box" @click="$router.push('/article')">
                <h1>单调好似东京阿斯顿就爱搜到极爱哦</h1>
                <div class="article-img">
                    <img src="../../assets/logo.png" alt="">
                    <img src="../../assets/logo.png" alt="">
                    <img src="../../assets/logo.png" alt="">
                </div>
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
            <div class="article-box">
                <h1>单调好似东京阿斯顿就爱搜到极爱哦</h1>
                <div class="article-img">
                    <img src="../../assets/logo.png" alt="">
                    <img src="../../assets/logo.png" alt="">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="article-box-bottom">
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
import { Tab, TabItem } from 'vux'

export default {
    components: {
        Tab,
        TabItem
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.article-list {
  .article-box {
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
    .article-img {
      display: flex;
      justify-content: space-between;
      img {
        width: 10rem;
        height: 8.75rem;
        font-size: 8.75rem;
        margin: 0 5px;
      }
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
