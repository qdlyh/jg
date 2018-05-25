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
  margin: 30px auto;
  a {
    display: inline-block;
    line-height: 45px;
    width: 100%;
    height: 45px;
    background: #3873cd;
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    &:active {
      background: #0e7ad3;
    }
  }
}


.weui-cells{
    margin-top: 0 !important;
}
</style>
