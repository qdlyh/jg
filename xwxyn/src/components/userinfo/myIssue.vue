<template>
    <div>
        <div class="myIssue">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1 v-if="type==5">我的提问</h1>
                <h1 v-else>我的回答</h1>
                <i></i>
            </div>
            <loading v-show="loading"></loading>
            <div id="mescroll" class="mescroll" v-show="!loading">
                <div id="dataList" class="data-list" v-cloak>
                    <div class="article-list" v-for="(item,index) in list" :key="item.uuid">
                        <div @click="go(item)">
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
                <div class="empty" v-show="!list.length">
                    <img src="../../../static/msg.png" alt="">
                    <p>还没有任何内容</p>
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
            type: '',
            mescroll: null,
            list: [],
        }
    },
    activated() {
        this.type = Number(this.$route.params.id);
        this.mescroll = new MeScroll("mescroll", {
            up: {
                auto: true,//初始化完毕,是否自动触发上拉加载的回调
                isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                callback: this.upCallback, //上拉加载的回调
                offset: 300,
                noMoreSize: 3,
                //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
                toTop: { //配置回到顶部按钮
                    src: "../../static/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                    //offset: 1000
                },
            }
        });
    },
    deactivated() {
        this.mescroll.destroy();
    },
    watch: {
        type(id) {
            this.loading = true;
        }
    },
    methods: {
        go(item) {
            this.$router.push({ name: 'forumMsg', params: { id: item.uuid } })
        },
        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData = []; //打开本行注释,可演示列表无任何数据empty的配置
                if (page.num == 1) this.list = [];
                let totalPage = this.total;
                //更新列表数据
                this.list = this.list.concat(curPageData);
                this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/getWxPersonalCenterPageNext?wxUserId=' + this.$parent.wxUserId + '&type=' + this.type + '&page=' + pageNum + '&size=' + pageSize,
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
.myIssue {
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
}
</style>

