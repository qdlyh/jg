<template>
    <div>
        <div class="message">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>问题详情</h1>
                <i></i>
            </div>
            <loading v-show="loading"></loading>
            <div id="mescroll" class="mescroll" :class="{'loading-none':flag==true}" v-show="!loading">
                <div class="expertArticle" v-for="(item,index) in data" :key="index">
                    <div class="article-box">
                        <h1>{{item.title}}</h1>
                        <div>
                            <i>提问者：{{item.nickName}}</i>
                            <i class="time">{{item.createDate}}</i>
                        </div>
                        <div class="article-text">{{item.describe}}</div>
                    </div>
                </div>

                <div id="dataList" class="data-list" v-cloak>
                    <div class="message-box" v-for="(item,index) in list" :key="item.uuid">
                        <div class="message-top">
                            <img v-lazy="item.image" alt="" @click="goUser(item)">
                            <span>
                                <i class="name">{{item.uuid}}</i>
                                <i class="name">{{item.nickName}}</i>
                                <i class="status" v-if="item.settingId==62">专家认证</i>
                                <p>{{item.reply}}</p>
                            </span>
                            <div @click="toggle(item)" :class="{active:item.isPraise==1}">
                                <i class="iconfont icon-dianzan"></i>
                                <i v-if="item.praiseCount>0">{{item.praiseCount}}</i>
                            </div>
                        </div>
                        <div class="message-bottom">
                            <span>{{item.createDate}}</span>
                            <div>
                                <span class="dialogue" @click="go(item)" v-if="item.replyCount>0">查看对话</span>
                                <span class="huifu" @click="replyBtn(index,item)" v-if="item.wxUserId!=$parent.wxUserId">
                                    <i v-if="item.replyCount>0">{{item.replyCount}}</i>
                                    回复
                                </span>
                                <span class="huifu" v-if="item.replyCount>0&&item.wxUserId==$parent.wxUserId">
                                    <i>{{item.replyCount}}</i>
                                    我的回复
                                </span>
                            </div>
                        </div>
                        <div class="reply" v-show="index==num">
                            <input type="text" :placeholder="'@'+placeholder" v-model.trim="replyMsg"><br/>
                            <div>
                                <span @click="cancel(index)">取消</span>
                                <span :class="{btnActive:replyMsg!=0}" class="btn" @click="comment(item)">评论</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="empty" v-show="!list.length">
                    <img src="../../../static/msg.png" alt="">
                    <p>暂时没有数据</p>
                </div>
                <p class="isHave" v-show="flag">-- 没有跟多内容 --</p>
            </div>
            <div class="msg-input-box" v-show="num==null">
                <div class="msg-input" :class="{activeBtn:msg!=0}">
                    <!-- <i class="iconfont icon-xiepinglun"></i> -->
                    <input type="text" placeholder="写评论" v-model.trim="msg">
                    <i class="iconfont icon-fasong" @click="msgBtn()"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isHave: false, //判断是否缓存
            flag: false,   //判断是否显示自定义没有更多内容
            loading: true,
            placeholder: '',
            replyMsg: '',
            msg: '',
            uuid: null,
            total: 0,
            num: null,
            mescroll: null,
            list: [],
            data: [],
            page: 1,
            size: 10,
        }
    },
    activated() {
        this.uuid = Number(this.$route.params.id);
        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxProblemInFoByUuid?uuid=' + this.uuid,
        })
            .then(response => {
                // console.log(response)
                this.data = [response.data.data];
            })
        if (this.list == this.$store.state.article) {
            this.list = this.$store.state.article;
        } else {
            if (this.list.length > 10) {
                this.isHave = true;
                //Mescroll,就算你缓存了也只会返回第一页并且默认10条数据，所以这里设置下，第一页的数量，使它能够保持上次离开时候的数据
                this.size = this.list.length;
            }
            this.mescroll = new MeScroll("mescroll", {
                down: {
                    use: false
                },
                up: {
                    auto: true,//初始化完毕,是否自动触发上拉加载的回调
                    isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    callback: this.upCallback, //上拉加载的回调
                    page: {
                        size: this.size,
                        time: 500,
                    },
                    offset: 300,
                    noMoreSize: 3,
                    htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
                    // toTop: { //配置回到顶部按钮
                    //     src: '../../static/mescroll-totop.png', //默认滚动到1000px显示,可配置offset修改   ../../static/mescroll-totop.png
                    //     //offset: 1000
                    // },
                },
            });
        }

        if (this.flag) {
            this.mescroll.lockUpScroll(true);
        }

        let dom = document.querySelector('#mescroll'); //找到滚动条主体内容
        dom.scrollTop = this.$store.state.msgTop;
    },
    deactivated() {
        this.mescroll.destroy();
    },
    watch: {
        uuid(id) {
            this.loading = true;
        },
        '$route': {
            //页面发生改变初始化数据和页数，相当于刷新了页面
            handler(to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                if (toDepth < fromDepth) {
                    this.list = [];
                    this.$store.state.article = {};
                    this.size = 10;
                    this.flag = false;
                }
            }, deep: true,
        }

    },
    methods: {
        toggle(item) {
            item.isPraise = !item.isPraise;
            let formData = new FormData();
            formData.append('questionReplyId', item.uuid);
            formData.append('wxUserId', this.$parent.wxUserId);
            if (item.isPraise == 1) {
                item.praiseCount += 1;
                this.$ajax({
                    method: 'post',
                    url: this.psta + '/submitQuestionReplyPraise',
                    data: formData,
                })
                    .then(response => {
                        //console.log(response)
                    })
            } else {
                item.praiseCount -= 1;
                this.$ajax({
                    method: 'post',
                    url: this.psta + '/submitQuestionReplyPraise',
                    data: formData,
                })
                    .then(response => {
                        //console.log(response)
                    })
            }
        },

        go(item) {
            this.$router.push({ name: 'forumReply', params: { id: item.uuid, messageId: item.uuid } });
            this.$store.state.msgTop = this.mescroll.getScrollTop();
            this.$store.state.page = this.page;
        },
        goUser(item) {
            if (item.settingId == 62) {
                this.$router.push({ name: 'expertUser', params: { id: item.wxUserId } });
                this.$store.state.msgTop = this.mescroll.getScrollTop();
                this.$store.state.page = this.page;
            } else {
                this.$router.push({ name: 'user', params: { id: item.wxUserId } });
                this.$store.state.msgTop = this.mescroll.getScrollTop();
                this.$store.state.page = this.page;
            }
        },

        replyBtn(index, item) {
            this.num = index;
            this.placeholder = item.nickName;
            this.replyMsg = '';
        },

        cancel(index) {
            this.num = null;
        },

        comment(item) {
            if (this.replyMsg.length != 0) {
                this.num = null;
                let formData = new FormData();
                formData.append('questionId', this.uuid);  //问题uuid
                formData.append('parentId', item.uuid); //回复谁的uuid
                formData.append('wxUserId', this.$parent.wxUserId); // this.$parent.wxUserId
                formData.append('reply', this.replyMsg);
                this.$ajax({
                    method: 'post',
                    data: formData,
                    url: this.psta + '/submitAskQuestionsReply',
                })
                    .then(response => {
                        //console.log(response)
                        item.replyCount += 1;
                    })
            }
        },

        //生成唯一id防止unshift评论的时候数据显示错误
        guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        //留言
        msgBtn() {
            // console.log(this.list)
            if (this.msg.length != 0) {
                //let userID = this.guid();
                let formData = new FormData();
                formData.append('questionId', this.uuid);  //这里是的文章id
                formData.append('parentId', 0);
                formData.append('wxUserId', this.$parent.wxUserId); // this.$parent.wxUserId
                formData.append('reply', this.msg);
                this.$ajax({
                    method: 'post',
                    data: formData,
                    url: this.psta + '/submitAskQuestionsReply',
                })
                    .then(response => {
                        //console.log(response)
                        if (this.list.length == this.total) {
                            let user = [response.data.data];
                            this.list.push({
                                createDate: user[0].createDate,
                                generalId: user[0].generalId,    //这里是的文章id
                                isPraise: user[0].isPraise,
                                praiseCount: user[0].praiseCount,
                                replyCount: user[0].replyCount,
                                image: user[0].image,
                                nickName: user[0].nickName,
                                reply: user[0].reply,
                                settingId: user[0].settingId,
                                uuid: user[0].uuid,
                                wxUserId: user[0].wxUserId,
                                //id: userID  //生成唯一id防止unshift评论的时候数据显示错误
                            })
                            this.total++;
                        }
                        this.msg = '';
                    })
            }
        },

        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData = [];
                let totalPage = this.total;
                if (page.num == 1) this.list = [];
                if (this.isHave) {
                    if (page.num > 1 && page.num <= this.$store.state.page) {
                        page.num = this.$store.state.page + 1;
                        this.size = 10;
                        page.size = 10;
                    }
                }
                if (this.list.length < this.total) {
                    this.list = this.list.concat(curPageData);  //更新列表数据
                }
                if (this.list.length == this.total) {
                    this.$store.state.article = this.list;
                    console.log(this.$store.state.article)
                    this.mescroll.lockUpScroll(true);
                    if (this.list.length >= 3) {
                        this.flag = true;
                    }
                }
                this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
                //console.log(this.list.length, this.total, this.list.length < this.total, 'upCallback')
               // console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length + ", this.list.length==" + this.list.length + ", totalPage" + totalPage);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            this.page = pageNum;   //记录需要缓存的当前页
            if (this.isHave) {
                //页面缓存，Mescroll只会返回第一页，所以这里从下一页起加载到上次转跳的页数，并设置初始化pageSize
                if (pageNum > 1 && pageNum <= this.$store.state.page) {
                    pageNum = this.$store.state.page + 1;
                    //pageNum = (this.total < 20) ? this.$store.state.page : this.$store.state.page + 1; //这里的1相当于pageNum
                    pageSize = 10;
                    this.size = 10;
                    //记录已缓存的当前页，-1是因为this.$store.state.page触发上拉加载加了1，所以记录缓存的时候减回去，防止第二次上拉加载的时候pageNum继续增加
                    this.page = pageNum - 1;
                }
            }
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/getWxExpertsReplyByUuid?uuid=' + this.uuid + '&wxUserId=' + this.$parent.wxUserId + '&page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        //console.log(response)
                        let listData = [];
                        let listPage = response.data.data;
                        if (!this.flag) {
                            this.total = response.data.total;
                        } else {
                            this.total = this.list.length;
                        }
                        this.loading = false;
                        for (let i = 0; i < listPage.length; i++) {
                            listData.push(listPage[i])
                        }
                        successCallback && successCallback(listData);//成功回调
                    });
            }, 500)
        }

    },
}
</script>
<style lang="less" scoped>
#mescroll /deep/ .upwarp-nodata {
  display: none;
}
.loading-none /deep/ .mescroll-upwarp {
  display: none;
}
.mescroll {
  position: fixed;
  top: 5rem;
  bottom: 6rem;
  height: auto;
}

.expertArticle {
  background: #fff;
  margin-bottom: 1.25rem;
  .article-box {
    padding: 1.875rem;
    div {
      display: flex;
      justify-content: space-between;
      margin: 1.875rem 0;
      i {
        color: #3c3c3c;
        font-size: 1.5rem;
      }
      .time {
        color: #9a9a9a;
        font-size: 1.25rem;
      }
    }
    h1 {
      font-size: 2rem;
      font-weight: 400;
      color: #3c3c3c;
    }
    .article-text {
      font-size: 1.7rem;
      color: #3c3c3c;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}

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
      position: relative;
      img {
        border-radius: 100%;
        width: 6.25rem;
        height: 6.25rem;
      }
      span {
        margin-left: 0.625rem;
        .name {
          font-weight: 600;
          font-size: 1.75rem;
          color: #3c3c3c;
        }
        .status {
          position: relative;
          top: -3px;
          display: inline-block;
          min-width: 5rem;
          height: 1.5rem;
          line-height: 1.5rem;
          padding: 1px;
          text-align: center;
          font-size: 1rem;
          border-radius: 10px;
          border: 1px solid #f5f100;
          // background: #f5f100;
          color: #f5f100;
        }
        p {
          margin-top: 0.9375rem;
          font-size: 1.5rem;
          color: #454545;
        }
      }
      div {
        position: absolute;
        right: 0.9375rem;
        color: #9c9c99;
        z-index: 99999;
        i {
          font-size: 1.75rem;
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
        .huifu {
          background: #f3f3f3;
          color: #3c3c3c;
          border-radius: 10px;
          font-size: 1.25rem;
          padding: 0.625rem;
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
          background: #80c2ff;
          color: #fff;
          margin-left: 1.875rem;
        }
      }
    }
  }
  .msg-input-box {
    .msg-input {
      display: flex;
      justify-content: space-between;
      position: fixed;
      width: 100%;
      border-top: 1px solid #d7d7d7;
      padding: 0 3.125rem;
      height: 6.125rem;
      line-height: 6.125rem;
      background: #fff;
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
    .activeBtn {
      input {
        border-bottom: 2px solid #007acc;
      }
      i {
        color: #007acc;
      }
    }
  }
}

.btnActive {
  background: #007acc !important;
}
.active {
  color: #ff5959 !important;
}
</style>


