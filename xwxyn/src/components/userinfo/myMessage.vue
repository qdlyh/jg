<template>
    <div>
        <div class="myMessage">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>我的消息</h1>
                <i></i>
            </div>
            <loading v-show="loading"></loading>
            <div id="mescroll" class="mescroll" v-show="!loading">
                <div id="dataList" class="data-list" v-cloak>
                    <div class="article-list" v-for="(item,index) in list" :key="item.uuid">
                        <div>
                            <!-- <div style="text-align: center">
                                <img v-lazy="item.image" alt="">
                            </div> -->
                            <h1>{{item.title}}</h1>
                            <p>{{item.message}}</p>
                            <div class="article-box-bottom">
                                <div>
                                    {{item.createDate}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="empty" v-show="!list.length">
                    <img src="../../../static/msg.png" alt="">
                    <p>暂时没有数据</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            mescroll: null,
            list: [],
        }
    },
    activated() {
        this.mescroll = new MeScroll("mescroll", {
            down: {
                use: false
            },
            up: {
                auto: true,//初始化完毕,是否自动触发上拉加载的回调
                isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                callback: this.upCallback, //上拉加载的回调
                offset: 300,
                noMoreSize: 1,
                //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                htmlNodata: '<p class="upwarp-nodata">-- 没有更多内容 --</p>',
            }
        });
    },
    deactivated() {
        this.mescroll.destroy();
    },
    methods: {
        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                if (page.num == 1) this.list = [];
                let totalPage = this.total;
                //更新列表数据
                this.list = this.list.concat(curPageData);
                this.mescroll.endBySize(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
                //console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length + ", this.list.length==" + this.list.length);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/findAlerts?wxUserId=' + this.$parent.wxUserId + '&page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        //console.log(response)
                        let listData = [];
                        let listPage = response.data.data;
                        this.total = response.data.total;
                        this.loading = false;
                        for (let i = 0; i < listPage.length; i++) {
                            listData.push(listPage[i])
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
  top: 5.3rem;
  bottom: 0;
  height: auto;
}
.myMessage {
  .user-header {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
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

  .article-list {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
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
    p {
      font-size: 1.3rem;
    }
    img {
      max-width: 750px;
      max-height: 100px;
      overflow: hidden;
    }
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
    .article-box-bottom {
      display: flex;
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
}
</style>
