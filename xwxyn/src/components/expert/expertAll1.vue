<template>
    <div>
        <div class="article-box">
            <tab>
                <tab-item @on-item-click="onItemClick(index)" :selected="index==1" v-for="(item,index) in tab" :key="index">{{item.tab}}</tab-item>
            </tab>
            <div id="mescroll" class="mescroll">
                <div id="dataList" class="data-list" v-cloak>
                    <div class="article-list" v-for="(item,index) in list" :key="item.uuid">
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
            <div class="questions-btn" @click="$router.push({name:'questions',params:{id:0}})">
                提问
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
            mescroll: null,
            list: [],
            tab: [{ tab: '专家列表' }, { tab: '咨询专区' }, { tab: '我的提问' }],
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
        onItemClick(index) {
            console.log(index)
            if (index == 0) {
                this.$router.push('/expertAll0')
            }
            if (index == 1) {
                this.$router.push('/expertAll1')
            }
            if (index == 2) {
                this.$router.push('/expertAll2')
            }
        },

        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                if (page.num == 1) this.list = [];
                let totalPage = this.total;
                this.list = this.list.concat(curPageData);
                this.mescroll.endByPage(curPageData.length, totalPage);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'get',
                    url: this.psta + '/getWxConsultingList?page=' + pageNum + '&size=' + pageSize,
                })
                    .then(response => {
                        console.log(response)
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
  top: 40px;
  bottom: 0;
  height: auto;
}

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
</style>
