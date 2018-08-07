<template>
  <div>
    <div class="menu">
      <div @click="toggle()" class="icon-btn">
        <img src="../../images/631561651.png" alt="">
      </div>
      <div class="letfNav" :class="{open,block}" v-for="(msg , index) in menuMsg" :key="index">
        <ul>
          <div class="Message-box">
            <div class="menu-img">
              <img v-if="msg.picture!==null" :src="'/vcard-manage-web/image/'+msg.picture">
              <img v-else src="../../images/logo.png">
            </div>
            <div class="menuMsg">
              <span>{{msg.name}}</span>
              <div v-if="msg.sex==1"><img src="../../images/1165165.png" alt=""></div>
              <div v-else><img src="../../images/1651651.png" alt=""></div>
              <p class="occupation">{{msg.department}}</p>
            </div>
            <!--          <div class="menuMsg-number" @click="toggle()"> 
                                    <div>
                                      <p>收藏量</p>
                                      <p>{{msg.number}}</p>
                                    </div>
                                    <div class="line"></div>
                                    <div>
                                      <p>名片量</p>
                                      <p>{{msg.numbers}}</p>
                                    </div>
                                  </div> -->
          </div>
          <div class="menNav" @click="toggle()">
            <router-link to="/myCard">我的名片</router-link>
            <router-link to="/cardBox">名片夹</router-link>
          </div>
        </ul>
        <div class="cover" @click="toggle()"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { WechatPlugin } from 'vux'
export default {
  data() {
    return {
      menuMsg: [],
      open: false,
      block: false,
    }
  },
  mounted() {
    this.$http({
      method: 'get',
      url: '/vcard-manage-web/con/move',
      params: {
        openId: this.$parent.$parent.wxOpenId
      }
    })
      .then(response => {
        //console.log(response);
        //console.log(response.data);
        //console.log('菜单栏成功');
        this.menuMsg = response.data
      })
      .catch(error => {
        console.log(error);
        console.log('网络错误，不能访问');
      })
  },
  methods: {
    toggle() {
      if (!this.open) {
        this.block = true;
        setTimeout(() => {
          this.open = true;
          console.log(this.$wechat)
        }, 0);
      } else {
        this.open = false;
        setTimeout(() => {
          this.block = false;
        }, 300)
      }
    },
  }

}
</script>


<style lang="scss" scoped>
.icon-btn {
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Message-box {
  background: #34363c;
  margin-bottom: 36px;
  height: 320px;
}

.menu-img {
  text-align: center;
  padding-top: 36px;
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%; // position: relative;
    // /* background: #fff; */
    // &::after {
    //   width: 160px;
    //   height: 160px;
    //   border-radius: 50%;
    //   content: url('../../images/logo2.png');
    //   display: block;
    //   position: absolute; //图片加载失败显示默认图
    //   top: 0;
    //   left: 0;
    //   background-color: #fff;
    // }
  }
}

.menuMsg {
  margin-bottom: 24px;
  position: relative;
  span {
    display: inline-block;
    width: 100px;
    height: 48px;
    color: #fefefe;
    font-size: 24px;
    line-height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  div {
    position: absolute;
    top: 11px;
    right:110px;
  }
  .occupation {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    color: #fff;
  }
}

.menuMsg-number {
  width: 360px;
  height: 72px;
  div {
    width: 179.5px; //float: left;
    display: inline-block;
    color: #c6c6c6;
    cursor: pointer;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      padding-bottom: 12px;
    }
  }
  .line {
    height: 38px;
    width: 1px;
    background: #fff;
    margin-top: 16px;
  }
}

.letfNav {
  position: fixed;
  z-index: 9999;
  display: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    position: fixed;
    z-index: 9999;
    margin-top: 88px;
    float: left;
    width: 360px;
    height: 100%;
    overflow: auto;
    /* background: rgba(91, 116, 146, 0.75); */
    background: #2b2e35;
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }
  .menNav {
    a {
      width: 360px;
      display: inline-block;
      height: 84px;
      font-size: 28px;
      color: #fff;
      line-height: 84px;
      text-align: left;
      padding-left: 100px;
      &:active {
        background: #34363d;
      }
    }
  }
  .cover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9998;
    display: none;
    /* background: rgba(172, 185, 201, 0.40); */
    background: #000;
    transition: opacity 0.3s ease;
  }
  &.open {
    display: block;
    ul {
      transform: translate(0);
    }
    .cover {
      opacity: 0.6;
      display: block;
    }
  }
  &.block {
    display: block;
  }
}
</style>
