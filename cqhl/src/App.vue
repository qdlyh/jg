<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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

#app {
  margin: 0 auto;
  // max-width: 750px;
  letter-spacing: 1px;
  -webkit-overflow-scrolling: touch; // 在ios上滑动不流畅样式设置处理
  word-break: break-all; // 字母数字强制换行
  // mescroll
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
