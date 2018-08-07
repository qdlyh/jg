<template>
  <div>
    <div class="home">
      <div class="home-box">
        <div class="top">
        </div>
        <div class="middle" v-html="content">
        </div>
      </div>
      <div class="login-box" v-show="isLogin">
        <div class="shad" @click="isLogin=false"></div>
        <div class="login" :style="{transform:'translate3d(0,' + move+'%' +',0)'}">
          <div class="login-top">
            <!-- <div><img src="../assets/logo.png" alt=""></div> -->
            <div class="login-top-middle"><img src="../assets/5.png" alt="" v-show="isShow"><img v-show="!isShow" src="../assets/6.png" alt=""></div>
            <i @click="isShow=true" v-show="!isShow">登录</i>
            <i @click="isShow=false" v-show="isShow">注册</i>
          </div>
          <div class="login-content">
            <div class="login-middle">
              <div class="input-text">
                <span><img src="../assets/333123.png" alt=""></span>
                <input type="number" v-model.trim="phone" placeholder="请输入手机号码" oninput='if(value.length>11)value=value.slice(0,11)'>
              </div>
              <div class="input-text" style="margin-top:10%;" v-show="isShow">
                <span><img src="../assets/213123.png" alt=""></span>
                <input type="password" v-model.trim="password" placeholder="请输入密码">
              </div>
              <div class="input-text" style="margin-top:10%;" v-show="!isShow">
                <span><img src="../assets/213123.png" alt=""></span>
                <input type="text" v-model.trim="code" placeholder="请输入验证码" style="width: 60%;">
                <div class="yz-btn" @click="getCode('myPopup2')" v-show="showCode">
                  获取验证码
                </div>
                <div class="yz-btn verify-btn" v-show="!showCode">
                  {{count}} s
                </div>
              </div>
              <div class="check" v-show="!isShow">
                <Checkbox v-model="checked">
                  <span :class="{active:checked}">同游吧终身会员({{money}}元)</span>
                </Checkbox>
              </div>
              <div class="login-btn" @click="go('myPopup2')" v-show="isShow" style="margin-top:26%">登录</div>
              <div class="login-btn" @click="go('myPopup2')" v-show="!isShow">立即注册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn" @click="btn()" v-if="flag">个人中心</div>
    <div v-else>
      <div class="btn" @click="loginBtn()" v-if="isHave==1">登录</div>
      <div class="btn" @click="loginBtn()" v-else>注册</div>
    </div>
    <Popup type="my-popup" :mask="false" position="center" ref="myPopup2">{{isText}}</Popup>
  </div>

</template>

<script>
import wx from 'weixin-js-sdk'
import { Button, Checkbox, Popup } from 'cube-ui'
export default {
  components: {
    Button,
    Checkbox,
    Popup,
  },
  data() {
    return {
      openId: null,
      parentId: null,
      flag: false,  //用于直接登录
      money: '',
      loadings: false,
      count: 0,
      move: 110,
      isHave: 0,
      showCode: true,
      isShow: true,
      isLogin: false,
      checked: false,
      phone: '',
      code: '',
      isText: '',
      password: '',
      content: '',//'中间部位内容'
    }
  },
  created() {
    this.openId = this.$route.query.openId;
    this.parentId = this.$route.query.parentId;
    if (this.openId != undefined) localStorage.setItem("openId", this.openId);
    if (this.openId == undefined) this.openId = localStorage.getItem("openId");
  },
  mounted() {
    this.$ajax({
      method: 'post',
      url: this.psta + '/wx/queryProject.jhtml',
    })
      .then(response => {
        //console.log(response)
        this.content = response.data.data.content;

      });

    //显示登录或者注册
    this.$ajax({
      method: 'post',
      url: this.psta + '/wx/queryUserStatus.jhtml',
      data: {
        openId: this.openId
      }
    })
      .then(response => {
        //console.log(response)
        this.money = response.data.message;
        this.isHave = response.data.status;
        if (response.data.status == 1) {
          localStorage.setItem('userId', response.data.data.userId);
          this.flag = true;
        }
      });
    //console.log(this.move)
  },

  watch: {
    isShow(data) {
      this.showCode = true;
      clearInterval(this.timer);
      this.timer = null;
      this.phone = '';
      this.code = '';
    },
    isLogin(data) {
      if (data) {
        this.move = 0;
      } else {
        this.move = 110;
      }
    }
  },
  methods: {
    btn() {
      this.$router.push('/userType')
    },
    loginBtn() {
      this.isLogin = true;
      if (this.isHave == 1) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },

    getCode(refId) {
      const tips = this.$refs[refId]
      setTimeout(() => {
        tips.hide()
      }, 1500)

      if (!(/^1[345789][0-9]{9}$/.test(this.phone))) {
        tips.show()
        this.isText = '请输入正确的手机号码'
      } else {
        if (!this.timer) {
          this.count = 60;
          this.showCode = false;
          this.timer = setInterval(() => {
            if (this.count > 0) {
              this.count--;
            } else {
              this.showCode = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)

          this.$ajax({
            method: 'post',
            url: this.psta + '/wx/queryPhoneCode.jhtml',
            data: {
              telephone: this.phone
            }
          })
            .then(response => {
              //console.log(response)
              tips.show();
              this.isText = response.data.message;
            });
        }
      }
    },

    go(refId) {
      let isHave = true;
      const component = this.$refs[refId]
      setTimeout(() => {
        component.hide()
      }, 1500)

      if (!(/^1[345789][0-9]{9}$/.test(this.phone))) {
        isHave = false;
        component.show()
        this.isText = '请输入正确的手机号码'
      } else {
        if (!this.isShow) {
          //!this.isShow为注册验证
          if (this.code.length == 0) {
            isHave = false;
            component.show()
            this.isText = '请填写验证码'
          }
          if (!this.checked) {
            isHave = false;
            component.show()
            this.isText = "是否支付" + this.money + "元工本费？"
          }
        } else {
          if (this.password.length == 0) {
            isHave = false;
            component.show()
            this.isText = '请填写登录密码'
          }
        }
      }

      if (isHave) {
        if (!this.isShow) {
          if (this.checked) {
            this.$ajax({
              method: 'post',
              url: this.psta + '/wx/register.jhtml',
              data: {
                telephone: this.phone,
                phoneCode: this.code,
                openId: this.openId,
                parentId: this.parentId
              }
            })
              .then(response => {
                //console.log(response)
                // this.loadings = false;
                // console.log(this.loadings)
                if (response.data.status == 1) {
                  let vm = this;
                  function onBridgeReady(appId, timeStamp, nonceStr, packagePrePay, signType, paySign) {
                    WeixinJSBridge.invoke(
                      'getBrandWCPayRequest', {
                        "appId": appId,
                        "timeStamp": timeStamp,
                        "nonceStr": nonceStr,
                        "package": packagePrePay,
                        "signType": signType,
                        "paySign": paySign
                      },
                      function (res) {
                        if (res.err_msg == "get_brand_wcpay_request:ok") {
                          localStorage.setItem('userId', response.data.message)
                          alert("支付成功!");
                          vm.$router.push('/userType');
                          // forwardMyOrder();
                        } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                          alert("支付取消!");
                          // forwardMyOrder();
                        } else {
                          // $("#pay").removeClass("disabled");
                        }
                      }
                    );
                  }
                  onBridgeReady(response.data.data.appId, response.data.data.timeStamp, response.data.data.nonceStr, response.data.data.packagePrePay, response.data.data.signType, response.data.data.paySign);
                  component.show();
                  this.isText = response.data.message;
                } else {
                  //this.loadings = false;
                  component.show();
                  this.isText = response.data.message;
                }
              });
          }
        } else {
          this.$ajax({
            method: 'post',
            url: this.psta + '/wx/login.jhtml',
            data: {
              telephone: this.phone,
              password: this.password,
              openId: this.openId
            }
          })
            .then(response => {
              //this.loadings = false;
              if (response.data.status == 1) {
                localStorage.setItem('userId', response.data.data.userId)
                this.$router.push('/userType')
              } else {
                component.show();
                this.isText = response.data.message;
              }
            });
        }
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
$height = 60px;

.home {
  // position fixed;
  height: 100%;
  width: 100%;
  background: #fff;

  .home-box {
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }

    .top {
      height: 270px;
      background-image: url('../static/01.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .middle {
      width: 100%;
      font-size: 18px;

      img {
        width: 100%;
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
      z-index: 98;
    }

    // .show-login {
    // transform: translate3d(0, 0, 0);
    // }
    .login {
      padding: 20px;
      position: fixed;
      left: 0;
      bottom: 0;
      background: #fff;
      z-index: 99;
      width: 100%;
      height: 65%;
      -webkit-transition: transform 0.35s;
      transition: transform 0.35s;

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
          z-index: -1;

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
  position: fixed;
  top: 90%;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;

  &:active {
    background: #F0D966;
  }
}

.yz-btn {
  position: relative;
  right: -10px;
  width: 150px;
  border-radius: 0 40px 40px 0;
  line-height: $height;
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
  margin: 5% 0 10%;
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

.check >>> .cube-checkbox-wrap {
  padding: 0;
  margin: 10px 0;
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
