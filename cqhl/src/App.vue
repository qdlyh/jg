<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view class="child-view" v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  mounted() {
    function onBridgeReady() {
      WeixinJSBridge.call('hideOptionMenu');
    }

    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  },
  watch: {
    '$route'(to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    },
  },
}
</script>

<style lang="stylus">
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

i {
  font-style: normal;
}

body {
  background: #f3f3f3;
}

input, textarea {
  outline: none;
}

#app {
  margin: 0 auto;
  // max-width: 750px;
  letter-spacing: 1px;
  -webkit-overflow-scrolling: touch; // 在ios上滑动不流畅样式设置处理
  word-break: break-all; // 字母数字强制换行
}

.header {
  height: 60px;
  line-height: 60px;
  background: #fff;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  // border-bottom: 0.5px solid #dbdbdb;
  background: #2D2D2D;

  h1 {
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    margin-left: -24px;
  }

  i {
    font-size: 24px;
    color: #fff;
  }
}

.header2 {
  height: 60px;
  line-height: 60px;
  background: #fff;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  // border-bottom: 0.5px solid #dbdbdb;
  background: #2D2D2D;

  h1 {
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: 400;
  }

  i {
    font-size: 24px;
    color: #fff;
  }
}

img[lazy='loading'] {
  /* width: 100px; */
  background-position: center center !important;
  background: #ccc;
  background-image: url('./assets/loading.jpg');
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-size: cover;
}

// msg.png
.empty {
  margin: 30px auto;
  text-align: center;
  color: #9a9a9a;
  font-size: 16px;

  img {
    width: 100%;
    height: 100%;
  }
}

// 会员权益
.member {
  table {
    width: 100% !important;
  }
}

// culbe-ul popup提示
.cube-popup-content {
  padding: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  border-radius: 40px;
}

.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
