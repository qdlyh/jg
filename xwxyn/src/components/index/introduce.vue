<template>
  <div>
    <div class="introduce">
      <div class="header">
        <span>健康讲堂</span>
        <span>阳光连接</span>
        <span>阳光连接</span>
        <span>阳光连接</span>
      </div>
      <div class="introduce-box">
        <h1>洁肠仪</h1>
        <img src="../../assets/logo.png" alt="">
        <p>内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地</p>
      </div>
      <div class="introduce-box">
        <h1>洁肠仪</h1>
        <img src="../../assets/logo.png" alt="">
        <p>内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地</p>
      </div>
      <div class="introduce-box">
        <h1>洁肠仪</h1>
        <img src="../../assets/logo.png" alt="">
        <p>内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地</p>
      </div>
      <div class="introduce-box">
        <h1>安装</h1>
        <img src="../../assets/logo.png" alt="">
        <p>内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地内容大姐大可视对讲阿萨德还是大海搜到哈撒大声地</p>
        <div class="btn-blue" @click="$router.push('/introduceForm')">
          <a href="javascript:;">安装申请</a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.introduce {
  .introduce-box {
    margin-top: 0.625rem;
    background: #fff;
    padding: 1.875rem;
    h1 {
      font-size: 1.75rem;
      color: #3c3c3c;
      font-weight: normal;
      margin-top: 1.875rem;
    }
    img {
      margin-top: 1.25rem;
      width: 100%;
      max-height: 17.5rem;
    }
    p {
      margin-top: 1.875rem;
      color: #454545;
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
</style>
