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
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
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
/* 头部导航高外边距 */
.el-popover {
  margin-top: 0 !important;
}
/* 头部导航 */
.el-dropdown-menu {
  left: 0 !important;
}

/* input选中radio颜色 */
.el-radio__input.is-checked .el-radio__inner {
  border-color: #16b3ac;
  background: #16b3ac;
}
/* input选中radio字体颜色 */
.el-radio__input.is-checked + .el-radio__label {
  color: #606266;
}
/* input文字超出换行 */
.el-radio {
  white-space: inherit;
  line-height: 20px;
}
/* input外边距高 */
.el-radio__inner {
  margin-top: 3px;
}

/* 表单输入错误提示文字 */
.el-form-item__error{
    font-size: 14px;
}
/* 分页每页显示多少条 */
.el-pagination__sizes{
    display: none !important;
}
</style>
