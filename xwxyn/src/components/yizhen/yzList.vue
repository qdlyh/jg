<template>
    <div>
        <div class="yzList">
            <!-- <div class="header">
                <span class="headerActive">正在进行</span>
                <span>即将开始</span>
                <span>已结束</span>
            </div> -->
            <tab>
                <tab-item @on-item-click="onItemClick(item)" :selected="item.type==55" v-for="(item,index) in tab" :key="index">{{item.name}}</tab-item>
            </tab>
            <div class="yz-box" v-for="(item,index) in list" :key="index">
                <div class="yz-banner">
                    <img src="../../assets/logo.png" alt="">
                    <span>
                        {{item.text}}
                    </span>
                </div>
                <div class="specialist">
                    <h1>专家坐诊</h1>
                    <div class="specialist-list">
                        <span v-for="(item,index) in list[0].spore" :key="index">
                            <img src="../../assets/logo.png" alt="">
                            <i>{{item.name}}</i>
                        </span>
                    </div>
                    <div class="time">
                        <span>{{item.time}}</span>
                        <span>{{item.address}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
    data() {
        return {
            mescroll: null,
            type: 55,
            list: [],
            // list: [{                text: '关爱老人，从我做起。', time: '2018-05-01', address: '广州白云区飞翔公园',
            //     spore: [{ name: '倪开超2' }, { name: '倪开超2' }, { name: '倪开超3' }, { name: '倪开超4' }, { name: '倪开超5' }, { name: '倪开超5', }, { name: '倪开超5', }]            },
            // {                text: '关爱老人，从我做起。', time: '2018-05-01', address: '广州白云区飞翔公园',
            //     spore: [{ name: '倪开超2' }, { name: '倪开超2' }, { name: '倪开超3' }, { name: '倪开超4' }, { name: '倪开超5' }, { name: '倪开超5', }, { name: '倪开超5', }]            }],
        }
    },
    mounted() {
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
    methods: {
        onItemClick(item) {
            this.type = item.type;
            this.list = [];
            this.mescroll.resetUpScroll();
        },

        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                if (page.num == 1); this.list1 = [];
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
                    url: this.psta + '/getWxFreeClinic?type=' + this.type + '&page=' + pageNum + '&size=' + pageSize,
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
.yzList {
  .yz-box {
    margin-top: 0.625rem;
    background: #fff;
    padding: 1.25rem 1.875rem;
    .yz-banner {
      position: relative;
      height: 20rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: 0.625rem;
        border-radius: 0 0 10px 10px;
        height: 3.5rem;
        line-height: 3.5rem;
        width: 100%;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        font-size: 1.5rem;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .specialist {
      margin-top: 1.25rem;
      h1 {
        font-size: 1.5rem;
        color: #454545;
        font-weight: 500;
      }
      .specialist-list {
        margin-top: 0.625rem;
        overflow: hidden;
        overflow: auto;
        display: flex;
        &::-webkit-scrollbar {
          display: none;
        }
        span {
          text-align: center;
          margin-right: 3.75rem;
        }
        img {
          width: 6.25rem;
          height: 6.25rem;
          border-radius: 100%;
        }
        i {
          float: left;
          width: 100%;
          font-size: 1.25rem;
          color: #454545;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .time {
        margin-top: 1.25rem;
        display: flex;
        justify-content: space-between;
        color: #9c9c9c;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
