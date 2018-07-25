<!-- loading组件 -->
<template>
  <div class="loading">
    <div class="middle"></div>
  </div>
</template>

<style lang="stylus" scoped>
.loading {
  margin: auto;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  min-height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  z-index: 10;

  .middle {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 3px solid #00a4ff;
    border-bottom-color: transparent;
    vertical-align: middle;
    animation: rotate 1s linear infinite;
  }
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>