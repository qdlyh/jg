<template>
  <div>
    <div class="home">
      <div class="home-box">
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
          <div class="btn" @click="isLogin=true">注册</div>
        </div>
      </div>
      <div class="login-box" v-show="!isLogin">
        <div class="shad" @click="isLogin=false"></div>
        <div class="login">
          <div class="login-top">
            <!-- <div><img src="../assets/logo.png" alt=""></div> -->
            <div class="login-top-middle"><img src="../assets/5.png" alt="" v-show="isShow"><img v-show="!isShow" src="../assets/6.png" alt=""></div>
            <i @click="isShow=false" v-show="isShow">登录</i>
            <i @click="isShow=true" v-show="!isShow">注册</i>
          </div>
          <div class="login-content">
            <div class="login-middle">
              <div class="input-text">
                <span><img src="../assets/333123.png" alt=""></span>
                <input type="number" placeholder="请输入手机号码" oninput='if(value.length>11)value=value.slice(0,11)'>
              </div>
              <div class="input-text" style="margin-top:10%;">
                <span><img src="../assets/213123.png" alt=""></span>
                <input type="text" placeholder="请输入验证码" style="width: 60%;">
                <div class="yz-btn">
                  获取验证码
                </div>
              </div>
              <div class="check" v-show="isShow">
                <Checkbox v-model="checked">
                  <span :class="{active:checked}">支付10元工本费完成注册</span>
                </Checkbox>
              </div>

              <div class="login-btn" @click="go()">{{btnText}}</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { Button, Checkbox } from 'cube-ui'
export default {
  components: {
    Button,
    Checkbox
  },
  data() {
    return {
      isShow: true,
      isLogin: false,
      checked: false,
      btnText: '登录',
      toastTxt: 'cube toast content'
    }
  },
  watch: {
    isShow(data) {
      if (data) {
        this.btnText = '登录';
      } else {
        this.btnText = '立即注册';
      }
    },
  },
  methods: {
    go() { 
      //alert('1')
      this.$router.push('/userType')
    },
    showToast() {
      this.$createToast({
        txt: this.toastTxt
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
$height = 60px;

.home {
  width: 100%;
  background: #fff;

  .home-box {
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
      overflow: hidden;

      .btn {
        margin: auto;
        position: absolute;
        top: 65%;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
  }

  .login-box {
    .shad {
      position: fixed;
      background: rgba(0.5, 0.5, 0.5, 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .login {
      padding: 20px;
      position: fixed;
      left: 0;
      bottom: 0;
      background: #fff;
      z-index: 999;

      .login-top {
        display: flex;

        .login-top-middle {
          width: 150px;
          margin: auto;
          position: absolute;
          top: -12px;
          left: 0;
          bottom: 0;
          right: 0;

          img {
            width: 100%;
          }
        }

        i {
          position: absolute;
          right: 20px;
          top: 5px;
          font-size: 18px;
          color: #454545;
          padding: 10px 5px;
          transition: 0.3s;
          border-radius: 50%;

          &:active {
            background: #A8ACB0;
          }
        }
      }

      .login-content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10%;

        .login-middle {
          width: 90%;

          // transition: transform 0.35s;
          // transform: translate3d(0, 100%, 0);
          .input-text {
            width: 100%;
            height: $height;
            border: 1px solid #f1f1f1;
            display: flex;
            padding: 0 10px;
            border-radius: 40px;

            span {
              width: 100px;
              line-height: 50px;
              border: none;
              text-align: center;

              img {
                vertical-align: middle;
              }
            }

            input {
              width: 100%;
              line-height: 50px;
              border: none;
              border-radius: 25px;
              font-size: 16px;
              color: #454545;

              &:placeholder {
                color: #c9c9c9;
              }
            }
          }
        }
      }
    }
  }
}

.btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: #FFD966;
  color: #454545;
  min-width: 120px;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 5px;

  &:active {
    background: #F0D966;
  }
}

.yz-btn {
  position: relative;
  right: -10px;
  width: 150px;
  height: $height;
  border-radius: 0 40px 40px 0;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  // background: #FE3D2D;
  background: linear-gradient(to left, #FE3D2D, #FC5937);

  &:active {
    background: #E63D2D;
  }
}

.login-btn {
  margin: 20% 0 10%;
  width: 100%;
  height: $height;
  line-height: $height;
  color: #fff;
  border-radius: 40px;
  font-size: 20px;
  text-align: center;
  background: linear-gradient(to bottom, #FE3D2D, #FC5937);

  &:active {
    background: #E63D2D;
  }
}

.check >>> .cube-checkbox-ui {
  line-height: inherit;
}

.check >>> .cube-checkbox_checked .cube-checkbox-ui i {
  color: #0A7E15;
}

.check span {
  font-size: 14px;
  color: #FE3229;

  .active {
    transition: 0.3s;
    color: #0A7E15;
  }
}
</style>
