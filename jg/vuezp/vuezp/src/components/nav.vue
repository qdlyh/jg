<template>
    <div class="nav">
        <!-- <h2>{{ this.$parent.userId }}</h2> -->
        <div class="top-img">
            <img :src="headerImage">
        </div>
        <div class="my-nav">
            <div class="nav-box">
                <router-link to="/myinfo" class="nav-list">
                    <div>
                        <span class="left"><img src="../images/12312355.png" alt=""></span>
                        <span class="text">我的简历</span>
                        <span class="right"><img src="../images/141241.png" alt=""></span>
                    </div>
                </router-link>
                <router-link to="/deliverlist" class="nav-list">
                    <div>
                        <span class="left"><img src="../images/123123.png" alt=""></span>
                        <span class="text">我的投递</span>
                        <span class="right"><img src="../images/141241.png" alt=""></span>
                    </div>
                </router-link>
                <br/> <br/>
                <router-link to="/findwork" class="nav-list">
                    <div>
                        <span class="left"><img src="../images/15616516.png" alt=""></span>
                        <span class="text">找工作</span>
                        <span class="right"><img src="../images/141241.png" alt=""></span>
                    </div>
                </router-link>
                <router-link to="/invoice" class="nav-list">
                    <div>
                        <span class="left"><img src="../images/124124124.png" alt=""></span>
                        <span class="text">发票助手</span>
                        <span class="right"><img src="../images/141241.png" alt=""></span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headerImage: require('../images/my.png')
        }
    },
    created() {
        if (localStorage.getItem("headerImage") != null) {
            this.headerImage = localStorage.getItem("headerImage")
        }
    },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 10px;
}
.top-img {
  background: #cccccc;
  height: 130px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
}
.my-nav {
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.6);
  .nav-box {
    margin: 30px 0 60px 0;
    .nav-list {
      display: block;
      height: 60px;
      background: #fff;
      margin-top: 10px;
      line-height: 60px;
      div {
        img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
        }
        .left {
          float: left;
          padding-left: 20px;
        }
        .text {
          padding-left: 20px;
          font-size: 18px;
          color: #454545;
          line-height: 65px;
        }
        .right {
          float: right;
          padding-right: 20px;
          img {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}
</style>
