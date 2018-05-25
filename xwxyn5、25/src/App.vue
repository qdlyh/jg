<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 47 + 'px';
    if (htmlWidth > 750) { htmlWidth = 750; htmlDom.style.fontSize = htmlWidth / 47 + 'px'; }
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
  max-width: 750px;
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
  text-align: center;
  margin: 1.875rem auto;
  a {
    display: inline-block;
    width: 100%;
    height: 4.5rem;
    line-height: 4.5rem;
    background: #3873cd;
    border-radius: 10px;
    font-size: 1.75rem;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    &:active {
      background: #0e7ad3;
    }
  }
}
//vux底部时期选择器
.vux-calendar-each-date {
  font-size: 1.75rem;
  margin-top: 0.9375rem;
}

//底部日期选择器顶部高度
.vux-popup-header {
  height: 60px !important;
  line-height: 60px !important;
}

//底部日期选择器选中样式
.vux-calendar-each-date {
  width: 45px !important;
  height: 45px !important;
  line-height: 45px !important;
}

//底部日期选择器文字
.calendar-year,
.calendar-month,
.vux-popup-header-left,
.vux-popup-header-right,
.vux-popup-header-title {
  font-size: 1.75rem;
}
//底部日期选择器顶部星期一二三...文字
.week {
  margin: 0.625rem 0;
  font-size: 1.75rem;
}

//底部选择器高度
.weui-cells,
.weui-cell {
  height: 6.25rem !important;
  line-height: 6.25rem !important;
}

//底部选择器左侧标题文字大小
.vux-label,
.weui-label {
  width: 8.5rem !important;
  font-size: 1.5rem;
  color: #454545;
}

//底部选择器文字
.vux-popup-picker-select,
.weui-cell__ft {
  text-align: left !important;
}

//底部选择器选中文字，input placeholder提示文字
.vux-popup-picker-value,
.vux-popup-picker-placeholder,
.vux-cell-value,
.vux-cell-placeholder {
  font-size: 1.5rem;
}
//底部选择器 > 箭头
.weui-cell__ft::after {
  height: 15px !important;
  width: 15px !important;
  right: 20px !important;
  margin-top: -12px !important;
}
//底部选择器
.weui-cells {
  margin-top: 0 !important;
}
</style>
