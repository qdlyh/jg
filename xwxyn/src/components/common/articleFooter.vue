<template>
    <div>
        <div class="articleFooter">
            <div class="footer">
                <div>
                    <i class="num">123浏览</i>
                </div>
                <div class="message-box">
                    <span class="message">
                        <i class="iconfont icon-liuyan" @click="$router.push('/message')"></i>
                        <span>123</span>
                    </span>
                    <i class="iconfont icon-shoucang" :class="{ active: isActive==1}" @click="toggle()"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: 0,
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
            console.log(Number(this.isActive))
        },
    },
    // watch: {
    //     isActive: {
    //         handler(obj) {
    //             console.log(Number(obj))
    //         },
    //         deet: true
    //     }
    // }
}
</script>
<style lang="less" scoped>
.articleFooter {
  margin-top: 6.25rem;
  position: relative;
  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #d7d7d7;
    padding: 0 3.125rem;
    height: 6.125rem;
    line-height: 6.125rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    .num {
      background: #f3f3f3;
      min-width: 6.25rem;
      min-height: 3rem;
      line-height: 3rem;
      border-radius: 10px;
      padding: 0.3125rem 1.25rem;
      color: #454545;
      display: inline-block;
      font-size: 1.3rem;
      text-align: center;
    }
    .message-box {
      i {
        font-size: 3.4375rem;
      }
      .message {
        margin-right: 1.875rem;
        span {
          position: relative;
          top: -25px;
          left: -10px;
          color: #fff;
          background: #e01414;
          min-width: 1.875rem;
          min-height: 0.5rem;
          line-height: 0.5rem;
          display: inline-block;
          text-align: center;
          padding: 0.625rem;
          border-radius: 10px;
        }
      }
    }
  }
  .active {
    color: #ff9d46;
  }
}
</style>
