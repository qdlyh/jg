<template>
    <div>
        <div class="message">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>留言列表</h1>
                <i></i>
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
                        <span @click="toggle(item)" :class="{active:item.dianzan==1}">
                            <i class="iconfont icon-dianzan"></i>
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
            <div class="msg-input-box" v-show="num==null">
                <div class="msg-input">
                    <i class="iconfont icon-xiepinglun"></i>
                    <input type="text" placeholder="写评论">
                    <i class="iconfont icon-fasong"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: null,
            list: [{ name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 0 }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 1 }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 0 }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 1 }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 0 }, { name: '野猪', text: '呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害呦呵厉害厉害', time: '2018-5-03', num: 88, dianzan: 1 }],
        }
    },
    methods: {
        toggle(item) {
            item.dianzan = !item.dianzan;
            if (item.dianzan == 1) {
                item.num += 1;
            } else {
                item.num -= 1;
            }
            //console.log(Number(item.dianzan))
        },
        go() {
            this.$router.push('/dialogue');
        },
        replyBtn(index) {
            //console.log(this.num, index);
            this.num = index;
        },
        cancel(index) {
            this.num = null;
        }
    },
    watch: {
        '$route'(to, from) {
            console.log(to.path)
        }
    }
}
</script>
<style lang="less" scoped>
.message {
  .user-header {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #dbdbdb;
    h1 {
      font-size: 2rem;
      text-align: center;
      color: #454545;
      font-weight: 400;
      margin-left: -1.875rem;
    }
    i {
      font-size: 2rem;
      color: #0aa6ff;
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
  .msg-input-box {
    margin-top: 6rem;
    position: relative;
    .msg-input {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-top: 1px solid #d7d7d7;
      padding: 0 3.125rem;
      height: 6.125rem;
      line-height: 6.125rem;
      background: #fff;
      position: fixed;
      bottom: 0;
      input {
        width: 80%;
        height: 70%;
        border: 0;
        color: #454545;
        font-size: 1.5rem;
        border-bottom: 0.5px solid #ccc;
        margin: 0 0.625rem;
        padding-top: 0.9375rem;
        padding-left: 0.9375rem;
        ::-ms-input-placeholder {
          padding-left: 0.9375rem;
          color: #9c9c9c;
          font-size: 1.5rem;
        }
      }
      i {
        font-size: 2.4rem;
        color: #9c9c9c;
      }
    }
  }
  .active {
    color: #ff5959;
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


