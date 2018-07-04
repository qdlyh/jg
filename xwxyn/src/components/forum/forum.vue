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
                            <div @click="$router.push({ name: 'forumMsg', params: { id: item.uuid } })">
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
                        <div class="questions-history" @click="$router.push({ name: 'forumArticle', params: { id: item.uuid } })">
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
            tab: [{ tab: '专家列表' }, { tab: '咨询专区' }, { tab: '我的提问' }],
            mescroll: null,
            isShow: 0,
            mescrollArr: new Array(3),
            list0: [],
            list1: [],
            list2: [],

        }
    },
    mounted() {
        this.mescrollArr[0] = this.initMescroll("mescroll0", "dataList0");
    },
    activated() {
        //this.mescrollArr[0] = this.initMescroll("mescroll0", "dataList0");
    },
    deactivated() {
        // console.log(this.initMescroll("mescroll0", "dataList0").length)
        // if (!this.list0.length) {
        //this.mescroll.destroy();
        //     console.log('1')
        // }
    },

    methods: {
        go() {
            //console.log(item.uuid)
            this.$router.push({ name: 'questions', params: { id: 0 } });
            //this.mescroll.destroy();
        },

        onItemClick(index) {
            if (this.isShow != index) {
                this.isShow = index;
                if (this.mescrollArr[index] == null) {
                    this.mescrollArr[index] = this.initMescroll("mescroll" + index, "dataList" + index);
                }
            }
        },
        initMescroll(mescrollId, clearEmptyId) {
            this.mescroll = new MeScroll(mescrollId, {
                up: {
                    auto: true,//初始化完毕,是否自动触发上拉加载的回调
                    isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    callback: this.upCallback, //上拉加载的回调
                    offset: 300,
                    noMoreSize: 3,
                    //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                    htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
                    empty: { //配置列表无任何数据的提示
                        warpId: clearEmptyId,
                        icon: "../../static/mescroll-empty.png",
                        tip: "亲,暂无相关数据哦~",
                    },
                }
            });
            return this.mescroll;
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
                        // this.mescroll.endByPage(curPageData.length, totalPage);
                        break;
                    case 1:
                        if (page.num == 1) this.list1 = [];
                        this.list1 = this.list1.concat(curPageData);
                        break;
                    case 2:
                        if (page.num == 1) this.list2 = [];
                        this.list2 = this.list2.concat(curPageData);
                        break;
                }
                this.mescrollArr[dataIndex].endByPage(curPageData.length, totalPage);
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
                type = '/getWxConsultingList?wxUserId=' + this.$parent.wxUserId + '&'
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
    watch: {
        '$route'(to, from) {
            //console.log(to)
            if (to.name == 'expertAll') {
                //console.log(to)

            }
        }
    }
}
</script>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  top: 40px;
  bottom: 0;
  height: auto;
}

.expertAll {
  .user-list {
    .user {
      display: flex;
      height: 14rem;
      margin-top: 0.625rem;
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
    margin-top: 0.625rem;
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
  margin-top: 0.625rem;
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

