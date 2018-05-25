<template>
    <div>
        <div class="message" v-show="ifMessage">
            <div class="headerMsg">
                <x-icon class="x-icon" type="ios-arrow-left" size="30" @click="$router.push('/article')"></x-icon>
                <h1>评论</h1>
            </div>
            <div class="message-box" v-for="(item,index) in list" :key="index">
                <div class="message-top">
                    <img src="../assets/logo.png" alt="">
                    <span>
                        <i>{{item.name}}</i>
                        <p>{{item.text}}</p>
                    </span>
                </div>
                <div class="message-bottom">
                    <span>{{item.time}}</span>
                    <div>
                        <span class="dialogue" @click="go()">查看对话</span>
                        <span class="dialogue" @click="replyBtn(index)">回复</span>
                        <span>
                            <i class="iconfont icon-shouye"></i>
                            <i>{{item.num}}</i>
                        </span>
                    </div>
                </div>
                <div class="reply" v-show="index==num">
                    <input type="text" placeholder="回复"><br/>
                    <div>
                        <span @click="cancel(index)">取消</span>
                        <span class="btn">评论</span>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <router-view class="content" v-show="ifDialogue"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ifMessage: true,
            ifDialogue: false,
            num: null,
            list: [{ name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: '88', }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: '88', }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: '88', }],
        }
    },
    methods: {
        go() {
            this.ifMessage = false;
            this.ifDialogue = true;
            this.$router.push('/article/message/dialogue');
        },
        replyBtn(index) {
            //console.log(this.num, index);
            this.num = index;
        },
        cancel(index) {
            document.querySelectorAll('.reply')[index].style.display = 'none'
        }
    },
    watch: {
        '$route'(to, from) {
            console.log(to.path)
            if (to.path == '/article/message') {
                this.ifMessage = true;
                this.ifDialogue = false;
                // window.history.go(-1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.message {
  .headerMsg {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    border-bottom: 0.5px solid #dbdbdb;
    .x-icon {
      float: left;
      height: 5rem;
      line-height: 5rem;
      display: inline-block;
      margin-left: 1.25rem;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      color: #454545;
    }
  }
  .message-box {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 0.5px solid #dbdbdb;
    .message-top {
      display: flex;
      img {
        border-radius: 100%;
        width: 6.25rem;
        height: 6.25rem;
      }
      span {
        margin-left: 0.625rem;
        i {
          font-weight: 600;
          font-size: 1.75rem;
          color: #3c3c3c;
        }
        p {
          margin-top: 0.9375rem;
          font-size: 1.5rem;
          color: #454545;
        }
      }
    }
    .message-bottom {
      margin-top: 1.5625rem;
      display: flex;
      justify-content: space-between;
      color: #9c9c99;
      font-size: 1.5rem;
      div {
        .dialogue {
          margin-right: 3.125rem;
        }
        i {
          font-size: 1.75rem;
        }
      }
    }
    .reply {
      margin-top: 1.25rem;
      //   display: none;
      input {
        width: 100%;
        height: 4.375rem;
        border: 0;
        font-size: 1.75rem;
        padding-left: 0.9375rem;
        color: #454545;
        border: 1px solid #007acc;
        &::-webkit-input-placeholder {
          color: #9c9c99;
          font-size: 1.5rem;
        }
      }
      div {
        margin-top: 1.25rem;
        display: flex;
        justify-content: flex-end;
        span {
          color: #9c9c99;
          font-size: 1.75rem;
          line-height: 3.75rem;
        }
        .btn {
          display: inline-block;
          width: 6.25rem;
          height: 3.75rem;
          border-radius: 5px;
          line-height: 3.75rem;
          text-align: center;
          background: #007acc;
          color: #fff;
          margin-left: 1.875rem;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


