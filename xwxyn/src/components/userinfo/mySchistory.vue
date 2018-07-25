<template>
    <div>
        <div class="myScls">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1 v-if="type==4">我的收藏</h1>
                <h1 v-else>历史记录</h1>
                <i></i>
            </div>
            <loading v-show="loading"></loading>
            <div id="mescroll" class="mescroll" v-show="!loading">
                <div id="dataList" class="data-list" v-cloak>
                    <div class="article-list" v-for="(item,index) in list" :key="item.uuid">
                        <i class="delete" @click="deleteBtn(item,index)">x</i>
                        <div class="article-box" @click="go(item)">
                            <h1>{{item.title}}</h1>
                            <div class="article-img3" v-if="item.images.length>2">
                                <img v-for="(src,index) in item.images" v-lazy="src.image" v-if="index<3" alt="">
                            </div>
                            <div class="article-img2" v-if="item.images.length==2">
                                <img v-for="(src,index) in item.images" v-lazy="src.image" alt="">
                            </div>
                            <div class="article-img1" v-if="item.images.length==1">
                                <img v-for="(src,index) in item.images" v-lazy="src.image" alt="">
                            </div>
                            <div class="article-box-bottom">
                                <div class="article-msg">
                                    <span>{{item.count}}浏览</span>
                                    <span>{{item.messageCount}}评论</span>
                                </div>
                                <div v-if="type==4">
                                    {{item.modifyDate}}
                                </div>
                                <div v-else>
                                    {{item.historyDate}}
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
import { Tab, TabItem } from 'vux'
export default {
    components: {
        Tab,
        TabItem,
    },
    data() {
        return {
            loading: true,
            mescroll: null,
            type: '',
            list: [],
            size: 10,
        }
    },
    activated() {
        this.type = Number(this.$route.params.id);
        if (this.list.length >= 10) {
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
                noMoreSize: 1,
                htmlNodata: '<p class="upwarp-nodata">-- 没有更多内容 --</p>',
            },
        });
        let dom = document.querySelector('#mescroll'); //找到滚动条主体内容
        dom.scrollTop = this.$store.state.msgTop;
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
            this.$router.push({ name: 'article', params: { id: item.generalId } });
            this.$store.state.msgTop = this.mescroll.getScrollTop();
        },
        deleteBtn(item, index) {
            this.list.splice(index, 1)
            let formData = new FormData();
            formData.append('type', this.type);
            formData.append('uuid', item.uuid);
            this.$ajax({
                method: 'post',
                url: this.psta + '/delMyHistoricalRecord',
                data: formData
            })
                .then(response => {
                    if (this.list.length == 0) {
                        this.mescroll.destroy();
                    }
                    //console.log(response)
                });

        },
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
  top: 5.2rem;
  bottom: 0;
  height: auto;
}
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

//文章
.article-list {
  position: relative;
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 1.7rem;
    color: #fff;
    background: #fd0000;
    border-radius: 50%;
    text-align: center;
  }
  .article-box {
    padding: 1.25rem 1.8rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    h1 {
      padding-right: 2.5rem;
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
    .article-img3 {
      display: flex;
      width: 100%;
      overflow: hidden;
      img {
        width: 33.333%;
        height: 8.75rem;
        margin: 0 1px;
      }
    }
    .article-img2 {
      display: flex;
      width: 100%;
      overflow: hidden;
      img {
        width: 49.999%;
        height: 35%;
        margin: 0 1px;
      }
    }
    .article-img1 {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 55%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 0.625rem;
    }
  }
}
</style>

