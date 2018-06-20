<template>
    <div>
        <div class="article-list">
            <tab>
                <tab-item @on-item-click="onItemClick(item)" :selected="item.typeNum==1" v-for="(item,index) in tab" :key="index">{{item.name}}</tab-item>
            </tab>
            <div id="pullTo">
                <div id="mescroll" class="mescroll">
                    <div id="dataList" class="data-list" v-cloak>
                        <div class="article-box" v-for="(item,index) in list" :key="index" @click="go(item)">
                            <h1>{{item.title}}</h1>
                            <div class="article-img">
                                <img v-for="src in item.images" v-lazy="src.image" alt="">
                            </div>
                            <div class="article-box-bottom">
                                <div class="article-msg">
                                    <span>{{item.count}}浏览</span>
                                    <span>{{item.messageCount}}评论</span>
                                </div>
                                <div>
                                    {{item.modifyDate}}
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
            tab: [{ name: '推荐', typeNum: 1 }, { name: '全部', typeNum: 0 }, { name: '文化', typeNum: 50 }, { name: '常识', typeNum: 51 }, { name: '医疗', typeNum: 52 }, { name: '保健', typeNum: 53 }, { name: '养生', typeNum: 54 }],
            mescroll: null,
            list: [],
            listType: [],
            total: '',
            type: 1,
            page: 1,
            scrollTop: 0,
        }
    },
    activated() {
        if (sessionStorage.getItem('scrollTop') != null) {
            // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        }


        this.mescroll = new MeScroll("mescroll", {
            up: {
                auto: true,//初始化完毕,是否自动触发上拉加载的回调
                isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                callback: this.upCallback, //上拉加载的回调
                offset: 100,
                noMoreSize: 5,
                //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                htmlNodata: '<p class="upwarp-nodata">-- 没有跟多内容 --</p>',
                toTop: { //配置回到顶部按钮
                    src: "../../static/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                    //offset: 1000
                },
                empty: { //配置列表无任何数据的提示
                    warpId: "dataList",
                    icon: "../../static/mescroll-empty.png",
                    tip: "亲,暂无相关数据哦~",
                },
            }
        });
    },
    deactivated() {
        this.mescroll.destroy();
    },
    methods: {
        go(item) {
            this.$router.push({ name: 'article', params: { id: item.uuid } });
            sessionStorage.setItem('scrollTop', this.mescroll.getScrollTop())
            // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // //scrollTop = 800
            // console.log(scrollTop.scrollHeight)
        },
        onItemClick(item) {
            this.type = item.typeNum;
            this.list = [];
            this.mescroll.resetUpScroll();
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
                    url: this.psta + '/getWxHealthLectureHall?type=' + this.type + '&page=' + pageNum + '&size=' + 10,
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
#pullTo {
  position: absolute;
  width: 100%;
  top: 44px;
  bottom: 0px;
  overflow: hidden;
}
.article-list {
  .article-box {
    padding: 0.9375rem 1.875rem;
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
      img {
        width: 10rem;
        height: 8.75rem;
        font-size: 8.75rem;
        margin: 0 5px;
      }
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #454545;
      font-size: 1.25rem;
      margin-top: 1.25rem;
    }
  }
}
</style>
