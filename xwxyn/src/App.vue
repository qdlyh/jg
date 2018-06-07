<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 40 + 'px';
    if (htmlWidth > 750) { htmlWidth = 750; htmlDom.style.fontSize = htmlWidth / 40 + 'px'; }
    //console.log(htmlWidth)
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
i {
  font-style: normal;
}
body {
  background: #f3f3f3;
}
#app {
  margin: 0 auto;
  // max-width: 750px;
  letter-spacing: 1px;
  -webkit-overflow-scrolling: touch; //在ios上滑动不流畅样式设置处理
}
.header {
  display: flex;
  justify-content: space-between;
  background: #00cc9e;
  height: 5rem;
  line-height: 5rem;
  padding: 0 3rem;
  span {
    color: #fff;
    height: 4rem;
    font-size: 1.75rem;
  }
  .headerActive {
    border-bottom: 2px solid #fff;
  }
}

/* 按钮 */
.btn-blue {
  width: 60%;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  margin: 3.125rem auto;
  background: #3eb0ff;
  border-radius: 0.625rem;
  font-size: 1.75rem;
  color: #fff;
  &:active {
    border-radius: 0.625rem;
    background: #3e90ff;
  }
}

//申请安装页面
.input-box {
  .weui-cells,
  .weui-cell {
    height: 6.25rem !important;
    line-height: 6.25rem !important;
  }
  //底部选择器选中文字，input placeholder提示文字
  .vux-popup-picker-value,
  .vux-popup-picker-placeholder,
  .vux-cell-value,
  .vux-cell-placeholder {
    font-size: 1.5rem;
  }
  //底部选择器左侧标题文字大小
  .vux-label,
  .input-box .weui-label {
    width: 8.5rem !important;
    font-size: 1.5rem;
    color: #454545;
    margin-left: -7px;
  }

  //底部选择器文字
  .vux-popup-picker-select,
  .weui-cell__ft {
    text-align: left !important;
  }
  .vux-cell-placeholder {
    color: #999;
  }
  //底部选择器
  .weui-cells {
    margin-top: 0 !important;
  }
  //申请安装产品
  .weui-cell__ft {
    width: 100%;
  }
  //选中颜色
  .vux-cell-value {
    color: #454545 !important;
  }
}

//弹出洁肠仪高度
.weui-cell__bd {
  font-size: 1.75rem;
  height: 5rem;
  line-height: 5rem;
}
//弹出洁肠仪产品钩
.weui-icon-checked {
  &::before {
    font-size: 1.75rem !important;
  }
}

// vux框margin
.weui-cells {
  margin: 0 !important;
}
.redact-msg {
  .weui-cell__ft {
    // padding-right: 1.125rem !important;
    font-size: 1.5rem;
  }
}

//城市选择器
.redact-msg-input {
  .weui-cell {
    height: 5rem;
    line-height: 5rem;
    ::after {
      margin-top: -5px !important;
      right: 0px !important;
    }
  }
  .weui-label {
    font-size: 1.5rem;
    color: #454545;
    margin-left: -5px;
  }
  .vux-cell-placeholder {
    font-size: 1.5rem;
  }
  .vux-cell-value {
    color: #454545 !important;
    font-size: 1.5rem;
  }
}

//入驻表单
.enter-input {
  .vux-cell-box {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.5rem;
    color: #454545;
    padding-left: 1.25rem;
  }
  .weui-cell {
    padding: 0 15px 0 0 !important;
  }
  .vux-popup-picker-select {
    // text-align: left !important;
    padding: 0 0 0 1.875rem !important;
  }
  .vux-cell-value {
    color: #454545 !important;
    font-size: 1.5rem;
  }
}

//收货地址
.address-list {
  .vux-label-desc {
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 1.25rem !important;
    color: #9c9c9c;
    padding-top: 0.3125rem;
  }
}

//勾选设为默认地址
.check-input {
  margin: 1.875rem 0 3.125rem 0;
  text-align: center;
  .vux-check-icon > span {
    color: #9c9c9c !important;
    font-size: 1.5rem !important;
  }
}

//错误提示框
.weui-toast{
  padding: 10px  !important;
  min-width: 15.625rem !important;
}
</style>
