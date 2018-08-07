<!-- loading组件 -->
<template>
    <div class="loading">
        <span class="left"></span>
        <span class="middle"></span>
        <span class="right"></span>
    </div>
</template>

<style lang="scss" scoped>
$yellow: #ffd300;
$blue: #5b7492;
$gray: #acb9c8;
.loading {
  position: fixed;
  top: 25%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 25%;
  height: 40px;
  z-index: 999;
  // margin: 25% auto 0;
  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background: $blue;
    transform: translate(-50%, 0);
  }
  .left {
    background: $yellow;
    animation: lMove 2.5s ease infinite;
  }
  .middle {
    left: 50%;
    animation: mMove 2.5s ease infinite;
  }
  .right {
    left: 100%;
    background: $gray;
    animation: rMove 2.5s ease infinite;
  }
}
@keyframes lMove {
  0% {
    left: 0;
  }
  25% {
    left: 50%;
    background: $yellow;
  }
  50% {
    left: 100%;
    background: $blue;
  }
  75% {
    left: 50%;
    background: $gray;
  }
  100% {
    left: 0;
  }
}
@keyframes mMove {
  0% {
  }
  25% {
    background: $blue;
  }
  50% {
    background: $yellow;
  }
  75% {
    background: $blue;
  }
  100% {
  }
}
@keyframes rMove {
  0% {
    left: 100%;
  }
  25% {
    left: 50%;
  }
  50% {
    left: 0;
    background: $gray;
  }
  75% {
    left: 50%;
    background: $yellow;
  }
  100% {
    left: 100%;
  }
}
</style>