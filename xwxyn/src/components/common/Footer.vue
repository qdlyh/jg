<template>
    <div>
        <div class="footer">
            <ul class="footer-tab">
                <li @click="homepage">
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </li>
                <li @click="flashsale">
                    <i class="iconfont icon-yiliaojiankang"></i>
                    <p>义诊</p>
                </li>
                <li @click="classify" class="tab-active">
                    <div></div>
                    <i class="iconfont icon-yimai"></i>
                    <p>爱心谷</p>
                </li>
                <li @click="my">
                    <i class="iconfont icon-zhuanjia"></i>
                    <p>专家天地</p>
                </li>
                <li @click="my">
                    <i class="iconfont icon-gerenzhongxin-xuanzhongxin"></i>
                    <p>个人中心</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        homepage() {
            //this.$router.push({ path: "/" });
        },
        flashsale() {
            // this.$router.push({ path: "/flashsale" });
        },
        classify() {
            //this.$router.push({ path: "/classify" });
        },
        my() { }
    }
};
</script>

<style lang="less" scoped>
.footer {
  margin-top: 6.25rem;
  position: relative;
  .footer-tab {
    width: 100%;
    border-top: 1px solid #d7d7d7;
    height: 6.125rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    li {
      margin: 0.625rem 0;
      display: inline-block;
      text-align: center;
      width: 20%;
      margin-left: -2.6px;
      i {
        font-size: 2.125rem;
        color: #454545;
      }
      p {
        font-size: 1rem;
        color: #454545;
      }
    }
    // li:nth-child(1) {
    //   margin-left: 2rem;
    //   margin-right:5.8rem;
    //   //   margin-right: 2rem;
    // }
    // li:last-child {
    //   margin-right: 0rem;
    // }
  }
}
// .tab-active {
//   div {
//     position: absolute;
//     background: #f3f3f3;
//     top: -25px;
//     width: 70px;
//     height: 25px;
//     border-radius: 60px 60px 0 0; /* 左上、右上、右下、左下 */
//     border-top: 0.5px solid #ccc;
//   }
//   img {
//     border-radius: 100%;
//   }
// }
</style>