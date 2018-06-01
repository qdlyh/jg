<template>
    <div>
        <div class="userType">
            <div class="my-type">
                <div class="show-text" v-show="isText">
                    <div class="shade" @click="isText=false"></div>
                    <div class="my-text">的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢
                    </div>
                </div>
                <div class="type-color" :class="{active1:type}">
                    <p class="redact" @click="$router.push('/userTypeForm')">编辑</p>
                    <div class="user-msg">
                        <div>
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <p>娃哈哈</p>
                        <i>会员</i>
                    </div>
                </div>
                <div class="typeBtn-box">
                    <div class="typeBtn active2">
                        <a href="javascript:;">我是专家</a>
                    </div>
                    <div class="typeBtn active3">
                        <a href="javascript:;">我是志愿者</a>
                    </div>
                    <div class="typeBtn active4">
                        <a href="javascript:;">我是企业家</a>
                    </div>
                </div>
                <!-- <div class="text-type" @click="isText=true">
                    <p class="text">的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢的撒欢地搜的撒欢
                    </p>
                </div> -->
            </div>
            <div class="userType-link-box">
                <div class="userType-link">
                    <group>
                        <cell title="钱包" value="10" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="购物车" value="10" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="订单" value="10" is-link></cell>
                    </group>
                </div>
                <div class="userType-link" @click="$router.push('/myAddress')">
                    <group>
                        <cell title="收货地址" value="10" is-link></cell>
                    </group>
                </div>
            </div>

            <!-- 企业 -->
            <!-- <div class="userType-link-box">
                <div class="userType-link">
                    <group>
                        <cell title="钱包" value="10" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="入驻" is-link></cell>
                    </group>
                </div>
            </div> -->

            <div class="userType-link-box">
                <div class="userType-link" @click="$router.push('/myAttention')">
                    <group>
                        <cell title="我的关注" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="我的博文" is-link></cell>
                    </group>
                </div>
                <div class="userType-link" @click="$router.push('/mySchistory')">
                    <group>
                        <cell title="我的收藏" is-link></cell>
                    </group>
                </div>
                <div class="userType-link" @click="$router.push('/myIssue')">
                    <group>
                        <cell title="我的提问" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="我的回答" is-link></cell>
                    </group>
                </div>
            </div>

            <div class="userType-link-box">
                <div class="userType-link" @click="$router.push('/myMessage')">
                    <group>
                        <cell title="消息通知" value="10" is-link></cell>
                    </group>
                </div>
                <div class="userType-link">
                    <group>
                        <cell title="历史记录" is-link></cell>
                    </group>
                </div>
            </div>
            <br/> <br/>
        </div>
    </div>
</template>
<script>
import { Group, Cell, } from 'vux'
export default {
    components: {
        Group,
        Cell,
    },
    data() {
        return {
            type: true,
            isText: false,
        }
    }
}
</script>
<style lang="less" scoped>
.active1 {
  //游客
  background: #00cc9e;
}
.active2 {
  //专家
  background: #23c3ff;
}
.active3 {
  //志愿者
  background: #ff6b6d;
}
.active4 {
  //企业
  background: #ffa34c;
}

.userType {
  .my-type {
    width: 100%;
    height: 18.75rem;
    .type-color {
      height: 10rem;
      .redact {
        float: right;
        color: #fff;
        font-size: 1.75rem;
        margin: 1.875rem;
      }
      .user-msg {
        padding: 4.6875rem 0 0 1.875rem;
        display: flex;
        p {
          margin-top: 1.5rem;
          font-size: 2rem;
          color: #fff;
        }
        i {
          margin: 5.5rem 0 0 -6rem;
          font-size: 1.5rem;
          color: #9c9c9c;
        }
        img {
          width: 7.8125rem;
          height: 7.8125rem;
          border-radius: 100%;
          margin-right: 1.25rem;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5),
            0px 2px 20px 3px rgba(0, 0, 0, 0.25);
        }
      }
    }
    .typeBtn-box {
      height: 8.75rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2.5rem;
      background: #fff;
      /* 按钮 */
      .typeBtn {
        text-align: center;
        margin: 1.25rem auto;
        width: 9.375rem;
        height: 3.125rem;
        line-height: 3.125rem;
        border-radius: 10px;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          font-size: 1.5rem;
          color: #fff;
          text-overflow: ellipsis;
          border: none;
          outline: none;
        }
      }
    }
    .text-type {
      height: 8.75rem;
      background: #fff;
      padding: 3.6rem 1.25rem;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
      .text {
        font-size: 1.5rem;
        color: #9c9c9c;
      }
    }
  }

  /* vux框 */
  .userType-link-box {
    margin-top: 1.875rem;
    .userType-link {
      margin-top: 0.625rem;
      height: 5rem;
      background: #fff;
      .weui-cell {
        height: 5rem;
        font-size: 1.75rem;
        color: #454545;
        ::after {
          right: 0px !important;
        }
      }
    }
  }
}

.show-text {
  .shade {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
  .my-text {
    padding: 1.25rem;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: auto;
    z-index: 999;
    transform: translate(-50%, -50%);
    width: 80%;
    min-height: 30%;
    border-radius: 10px;
    color: #454545;
    background: #fff;
    font-size: 1.75rem;
    color: #454545;
  }
}
</style>
