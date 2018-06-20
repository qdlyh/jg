<template>
    <div>
        <div class="expertAll">
            <tab>
                <tab-item @on-item-click="onItemClick(index)" :selected="index==0" v-for="(item,index) in tab" :key="index">{{item.tab}}</tab-item>
            </tab>
            <div id="mescroll0" class="mescroll" v-show="isShow==0">
                <div id="dataList0" class="data-list" v-cloak>
                    <div class="user-list" v-for="(item,index) in list0" :key="item.uuid">
                        <div class="user" @click="go(item)">
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
                            <div>
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
                <div class="questions-btn" @click="$router.push('/questions')">
                    提问
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
        TabItem
    },
    data() {
        return {
            tab: [{ tab: '专家列表' }, { tab: '咨询专区' }, { tab: '我的提问' }],
            mescroll: null,
            isShow: 0,
            list0: [],
            list1: [],

        }
    },
    activated() {
        if (sessionStorage.getItem('scrollTop') != null) {
            // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        }
        this.initMescroll()
        // this.mescroll = new MeScroll("mescroll0", {
        //     up: {
        //         auto: true,//初始化完毕,是否自动触发上拉加载的回调
        //         isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
        //         callback: this.upCallback, //上拉加载的回调
        //         offset: 100,
        //         noMoreSize: 5,
        //         //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
        //         htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
        //         toTop: { //配置回到顶部按钮
        //             src: "../../static/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
        //             //offset: 1000
        //         },
        //         empty: { //配置列表无任何数据的提示
        //             warpId: "dataList0",
        //             icon: "../../static/mescroll-empty.png",
        //             tip: "亲,暂无相关数据哦~",
        //         },
        //     }
        // });
    },
    deactivated() {
        this.mescroll.destroy();
    },
    methods: {
        go(item) {
            //console.log(item.uuid)
            this.$router.push({ name: 'expertUser', params: { id: item.uuid } })
        },

        onItemClick(index) {
            this.isShow = index;
            this.initMescroll("mescroll" + index, "dataList" + index)
            //console.log(index)
            // if (index == 0) {
            //     this.$router.push('/expertAll0')
            // }
            // if (index == 1) {
            //     this.$router.push('/expertAll1')
            // }
            // if (index == 2) {
            //     this.$router.push('/expertAll2')
            // }
        },
        initMescroll(mescrollId, clearEmptyId) {
            //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
            var mescroll = new MeScroll(mescrollId, {
                //上拉加载的配置项
                up: {
                    callback: this.upCallback, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
                    noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
                    empty: {
                        warpId: clearEmptyId,
                        icon: "images/mescroll-empty.png", //图标,默认null
                        tip: "暂无相关数据~", //提示
                        btntext: "去逛逛 >", //按钮,默认""
                        btnClick: function () {//点击按钮的回调,默认null
                            alert("点击了按钮,具体逻辑自行实现");
                        }
                    },
                    // clearEmptyId: clearEmptyId, //相当于同时设置了clearId和empty.warpId; 简化写法;默认null
                    toTop: { //配置回到顶部按钮
                        src: "images/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                        //offset : 1000
                    }
                }
            });
            return mescroll;
        },

        upCallback(page) {
            let dataIndex = this.isShow;
            this.getListDataFromNet(dataIndex, page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                if (page.num == 1) this.list0 = [];
                let totalPage = this.total;
                this.list0 = this.list0.concat(curPageData);

                switch (dataIndex) {
                    case 0:
                        if (page.num == 1) this.list0 = [];
                        this.list0 = this.list0.concat(curPageData);
                        break;
                    case 1:
                        if (page.num == 1) this.list1 = [];
                        this.list1 = this.list1.concat(curPageData);
                        break;
                }

                this.mescroll.endByPage(curPageData.length, totalPage);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/getWxExpertsList?page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        console.log(response)
                        let listData = [];
                        let listPage = response.data.data;
                        this.total = response.data.total;
                        if (isShow == 0) {
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                        }

                        if (isShow == 1) {
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                        }
                        successCallback && successCallback(listData);//成功回调
                    });
            }, 500)
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
</style>

