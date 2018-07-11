<template>
  <div>
    <div class="home">
      <div class="top">
        <img src="../assets/01.png" alt="">
      </div>
      <div class="middle">
        <img src="../assets/1.png" alt="">
        <img src="../assets/2.png" alt="">
        <img src="../assets/3.png" alt="">
        <img src="../assets/4.png" alt="">
      </div>
      <div class="bottom">
        <img src="../assets/02.png" alt="">
        <div class="btn">
          <Button :inline="true">注册</Button>
        </div>
      </div>
      <div class="login">
        <div class="top">
          <img src="../assets/logo.png" alt="">
          <img src="../assets/5.png" alt="">
          <i>注册</i>
        </div>
        <div class="middle">

        </div>
        <div class="bottom">

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Button } from 'cube-ui'
export default {
  components: {
    Button
  },
  data() {
    return {
      toastTxt: 'cube toast content'
    }
  },
  methods: {
    showToast() {
      this.$createToast({
        txt: this.toastTxt
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .top {
    position: relative;
    top: 0;
    left: 0;
  }

  .middle {
    width: 100%;
  }

  .bottom {
    position: relative;
    text-align: center;

    .btn {
      margin: auto;
      position: absolute;
      top: 65%;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .btn >>>button {
      background: #FFD966;
      color: #454545;
      min-width: 120px;
      margin: 0 auto;
      font-size: 20px;
    }
  }
}
</style>
