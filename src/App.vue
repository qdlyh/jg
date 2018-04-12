<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  letter-spacing: 1px;
}
i {
  font-style: normal;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

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
    background: #00a3ee;
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    &:active {
      background: #00a6ff;
    }
  }
}
/* element设置 */
/* 树形菜单栏 */
.el-tree-node__label {
  font-size: 16px;
}
/* 左边导航栏li左边距 */
.el-tree-node__content {
  padding-left: 40px !important;
}
/* 左边导航栏li高度 */
.el-tree-node__content {
  height: 45px;
}
/* 头部导航栏三角伪类 */
.popper__arrow {
  display: none !important;
}
.el-popover {
  margin-top: 0 !important;
}
.el-dropdown-menu {
  left: 0 !important;
}
</style>
