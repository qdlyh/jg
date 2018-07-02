<template>
    <div>
        <loading v-show="!user.length"></loading>
        <div id="mescroll" class="mescroll">
            <div class="volunteer">
                <div class="volunteer-top" v-for="(item,index) in user" :key="item.uuid">
                    <img v-lazy="item.image" alt="">
                    <span>
                        <h1>{{item.nickName}}</h1>
                        <i>{{item.label}}</i>
                        <p>{{item.signature}}</p>
                    </span>
                </div>
                <div id="dataList" class="data-list" v-cloak>
                    <div class="volunteer-article" v-for="(item,index) in list" :key="index">
                        <p>{{item.title}}</p>
                        <div class="volunteer-box-bottom">
                            <div>
                                <span>{{item.count}}浏览</span>
                                <span>{{item.messageCount}}评论</span>
                            </div>
                            <div>
                                {{item.modifyDate}}
                            </div>
                        </div>
                    </div>
                    <!-- <div class="err" v-if="!list.length">
                        <img src="../../static/mescroll-empty.png" alt="">
                        <p>还没有发布任何文章</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            uuid: '',
            mescroll: null,
            user: [],
            list: [],
        }
    },
    activated() {
        this.uuid = this.$route.params.id;
        this.mescroll = new MeScroll("mescroll", {
            up: {
                auto: true,//初始化完毕,是否自动触发上拉加载的回调
                isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                callback: this.upCallback, //上拉加载的回调
                offset: 100,
                noMoreSize: 5,
                //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
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
                this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
                //console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length + ", this.list.length==" + this.list.length);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/getWxCharityYouAndMeByUuid?uuid=' + this.uuid + '&page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        //console.log(response)
                        let listData = [];
                        this.user = [response.data.data];
                        let listPage = response.data.data.generals;
                        //console.log(response.data.data.generals)
                        this.total = response.data.total;
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
  top: 0;
  bottom: 0;
  height: auto;
}
.volunteer {
  .volunteer-top {
    display: flex;
    min-height: 20rem;
    width: 100%;
    background: #ff6c6c;
    padding: 1.875rem;
    img {
      width: 9.75rem;
      height: 9.75rem;
      border-radius: 100%;
      margin-top: 2.5rem;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5),
        0px 2px 20px 3px rgba(0, 0, 0, 0.25);
    }
    span {
      margin-top: 0.9375rem;
      color: #fff;
      margin-left: 1.875rem;
      h1 {
        font-size: 2rem;
      }
      i {
        margin-top: 1rem;
        font-size: 1.25rem;
      }
      p {
        margin-top: 1rem;
        font-size: 1.25rem;
        display: -webkit-box;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }

  .volunteer-article {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    p {
      font-size: 1.5rem;
      color: #454545;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .volunteer-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #6666;
      font-size: 1.25rem;
      margin-top: 1.25rem;
      span:nth-child(1) {
        margin-right: 1.25rem;
      }
    }
  }
}

.err{
    text-align: center;
}
</style>
