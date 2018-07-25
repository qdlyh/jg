<template>
    <div>
        <div class="expertAll">
            <tab>
                <tab-item @on-item-click="onItemClick(index)" :selected="index==isShow" v-for="(item,index) in tab" :key="index">{{item.tab}}</tab-item>
            </tab>

            <div id="mescroll0" class="mescroll" v-show="isShow==0">
                <div id="dataList0" class="data-list" v-cloak>
                    <div class="user-list" v-for="(item,index) in list0" :key="item.uuid">
                        <div class="user" @click="$router.push({ name: 'expertUser', params: { id: item.uuid } })">
                            <img v-lazy="item.image" alt="">
                            <span>
                                <h1>{{item.nickName}}</h1>
                                <i>{{item.label}}</i>
                                <p>{{item.signature}}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="article-box" v-show="isShow==1">
                <div id="mescroll1" class="mescroll">
                    <div id="dataList1" class="data-list" v-cloak>
                        <div class="article-list" v-for="(item,index) in list1" :key="item.uuid">
                            <div @click="goMsg(item)">
                                <h1>{{item.title}}</h1>
                                <div class="article-box-bottom">
                                    <div>
                                        {{item.createDate}}
                                    </div>
                                    <div class="article-msg">
                                        <span>{{item.replyCount}}回答</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="questions-btn" @click="go()">
                    提问
                </div>
            </div>

            <div id="mescroll2" class="mescroll" v-show="isShow==2">
                <div id="dataList2" class="data-list" v-cloak>
                    <div v-for="(item,index) in list2" :key="item.uuid">
                        <div class="questions-history" @click="goMsg(item)">
                            <h1>{{item.title}}</h1>
                            <div class="article-box-bottom">
                                <div>
                                    {{item.createDate}}
                                </div>
                                <div class="article-msg">
                                    <span>{{item.replyCount}}回答</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
    components: {
        Tab,
        TabItem,
    },
    data() {
        return {
            tab: [{ tab: '专家列表', top: 0, i: 0 }, { tab: '咨询专区', top: 10, i: 1 }, { tab: '我的提问', top: 0, i: 2 }],
            mescroll: null,
            isShow: 0,
            mescrollArr: new Array(3),
            list0: [],
            list1: [],
            list2: [],
            size: 10,
        }
    },
    // mounted() {
    //     this.mescrollArr[0] = this.initMescroll("mescroll0", "dataList0");
    // },
    activated() {
        if (this.$store.state.listSize > 10) {
            //Mescroll,就算你缓存了也只会返回第一页并且默认10条数据，所以这里设置下，第一页的数量，使它能够保持上次离开时候的数据
            this.size = this.$store.state.listSize;
        }
        this.isShow = (this.$store.state.listId == null) ? this.$store.state.listId = Number(sessionStorage.getItem('listId')) : this.$store.state.listId;
        this.mescrollArr[this.isShow] = this.initMescroll("mescroll" + this.isShow, "dataList" + this.isShow);
        this.$nextTick(() => {
            for (let i = 0; i < this.tab.length; i++) {
                let dom = document.querySelector('#mescroll' + this.tab[i].i);
                dom.scrollTop = this.tab[i].top;
            }
        })
    },
    deactivated() {
        this.mescrollArr[this.isShow].destroy();
    },
    methods: {
        go() {
            this.$router.push({ name: 'questions', params: { id: 0 } });
            this.$store.state.itemTop = this.mescroll.getScrollTop();
        },

        goMsg(item) {
            this.$router.push({ name: 'forumMsg', params: { id: item.uuid } })
            this.$store.state.itemTop = this.mescroll.getScrollTop();
        },

        onItemClick(index) {
            if (this.isShow != index) {
                this.isShow = index;
                this.$store.commit('listId', index);
                if (this.mescrollArr[index] == null) {
                    this.mescrollArr[index] = this.initMescroll("mescroll" + index, "dataList" + index);
                }
                this.$nextTick(() => {
                    let dom = document.querySelector('#mescroll' + index);
                    dom.scrollTop = this.tab[index].top;
                });
            }
        },
        initMescroll(mescrollId, clearEmptyId) {
            this.mescroll = new MeScroll(mescrollId, {
                up: {
                    auto: true,//初始化完毕,是否自动触发上拉加载的回调
                    isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    callback: this.upCallback, //上拉加载的回调
                    onScroll: this.upScroll,
                    page: {
                        size: this.size,
                        time: 500,
                    },
                    offset: 300,
                    noMoreSize: 1,
                    //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                    htmlNodata: '<p class="upwarp-nodata">-- 没有更多内容 --</p>',
                }
            });
            return this.mescroll;
        },

        upScroll(mescroll, y, isUp) {
            if (this.isShow == 0) {
                this.tab[0].top = y;
            }
            if (this.isShow == 1) {
                this.tab[1].top = y;
            }
            if (this.isShow == 2) {
                this.tab[2].top = y;
            }
        },

        upCallback(page) {
            let dataIndex = this.isShow;
            this.getListDataFromNet(dataIndex, page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                let totalPage = this.total
                switch (dataIndex) {
                    case 0:
                        if (page.num == 1) this.list0 = [];
                        this.list0 = this.list0.concat(curPageData);
                        this.$store.state.listSize = this.list0.length;
                        // this.mescroll.endBySize(curPageData.length, totalPage);
                        break;
                    case 1:
                        if (page.num == 1) this.list1 = [];
                        this.list1 = this.list1.concat(curPageData);
                        this.$store.state.listSize = this.list1.length;
                        break;
                    case 2:
                        if (page.num == 1) this.list2 = [];
                        this.list2 = this.list2.concat(curPageData);
                        this.$store.state.listSize = this.list2.length;
                        break;
                }
                this.mescrollArr[dataIndex].endBySize(curPageData.length, totalPage);
                //console.log("dataIndex=" + dataIndex, "page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
            }, function () {
                this.mescrollArr[dataIndex].endErr();
            });
        },

        getListDataFromNet(dataIndex, pageNum, pageSize, successCallback, errorCallback) {
            let type = '';
            if (dataIndex == 0) {
                type = '/getWxExpertsList?'
            }
            if (dataIndex == 1) {
                type = '/getWxConsultingList?'
            }
            if (dataIndex == 2) {
                type = '/getWxMyQuestionsList?wxUserId=' + this.$parent.wxUserId + '&'
            }

            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + type + 'page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        //console.log(response)
                        let listData = [];
                        let listPage = response.data.data;
                        this.total = response.data.total;
                        if (dataIndex == 0) {
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                        }

                        if (dataIndex == 1) {
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                        }

                        if (dataIndex == 2) {
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                        }
                        successCallback && successCallback(listData);//成功回调
                    });
            }, 500)
        }
    },
}
</script>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  top: 45px;
  bottom: 0;
  height: auto;
}

.expertAll {
  .user-list {
    .user {
      display: flex;
      height: 14rem;
      margin-bottom: 2px;
      padding: 1.25rem 1.875rem;
      background: #fff;
      img {
        width: 9.75rem;
        height: 9.75rem;
        background: #ccc;
        border-radius: 100%;
      }
      span {
        margin-left: 3.75rem;
        h1 {
          font-size: 1.75rem;
          color: #3c3c3c;
          font-weight: 600;
        }
        i {
          font-size: 1.125rem;
          color: #454545;
        }
        p {
          font-size: 1.25rem;
          color: #9c9c9c;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
}

.article-box {
  .article-list {
    margin-bottom: 2px;
    padding: 1.25rem 1.875rem;
    background: #fff;
    h1 {
      font-size: 1.5rem;
      color: #3c3c3c;
      margin-bottom: 0.625rem;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 1.875rem;
      .article-msg {
        background: #f3f3f3;
        width: 6.25rem;
        height: 2rem;
        border-radius: 10px;
        color: #454545;
        text-align: center;
        font-size: 1.25rem;
      }
    }
  }
  //提问按钮
  .questions-btn {
    color: #fff;
    position: fixed;
    bottom: 7.5rem;
    right: 20px;
    width: 6.25rem;
    height: 6.25rem;
    line-height: 6.25rem;
    text-align: center;
    border-radius: 100%;
    background: rgba(4, 142, 255, 0.5);
    font-size: 1.75rem;
  }
}

.questions-history {
  margin-bottom: 2px;
  padding: 1.25rem 1.875rem;
  background: #fff;
  h1 {
    font-size: 1.5rem;
    color: #3c3c3c;
    margin-bottom: 0.625rem;
    font-weight: normal;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .article-box-bottom {
    display: flex;
    justify-content: space-between;
    color: #4545;
    font-size: 1.25rem;
    margin-top: 1.875rem;
    .article-msg {
      background: #f3f3f3;
      width: 6.25rem;
      height: 2rem;
      border-radius: 10px;
      color: #454545;
      text-align: center;
      font-size: 1.25rem;
    }
  }
}
</style>

