<template>
    <div>
        <div class="myScls">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1 v-if="type==4">我的收藏</h1>
                <h1 v-else>历史记录</h1>
                <i></i>
            </div>
            <div id="mescroll" class="mescroll">
                <div id="dataList" class="data-list" v-cloak>
                    <div class="article-list" v-for="(item,index) in list" :key="item.uuid">
                        <i class="delete" @click="deleteBtn(item,index)">x</i>
                        <div class="article-box">
                            <h1>{{item.title}}</h1>
                            <div class="article-img" v-if="item.images.length">
                                <img v-for="(src,index) in item.images" v-lazy="src.image" v-if="index<3" alt="">
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
            mescroll: null,
            type: '',
            list: [],
        }
    },
    activated() {
        this.type = this.$route.params.id;
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
    methods: {
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
                    console.log(response)
                });

        },
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
                    url: this.psta + '/getWxPersonalCenterPageNext?wxUserId=' + this.$parent.wxUserId + '&type=' + this.type + '&page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        //console.log(response)
                        let listData = [];
                        let listPage = response.data.data;
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
  top: 5.3rem;
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
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.5rem;
    color: #fff;
    background: #fd0000;
    border-radius: 50%;
    text-align: center;
  }
  .article-box {
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
    .article-img {
      display: flex;
      width: 100%;
      height: 8.75rem;
      overflow: hidden;
      img {
        width: 30%;
        height: 100%;
        margin: 0 5px;
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

