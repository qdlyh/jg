<template>
    <div>
        <div class="money-list">
            <div class="header">
                <i class="cubeic-back" @click="$router.go(-1)"></i>
                <h1>积分明细</h1>
                <i></i>
            </div>
            <div id="mescroll" class="mescroll">
                <div id="dataList" class="data-list" v-cloak>
                    <div v-for="(item,index) in list" :key="index" class="money-box">
                        <span>
                            <h1>{{item.remark}}</h1>
                            <i>{{item.createDate}}</i>
                        </span>
                        <span class="money">{{item.credit}}</span>
                    </div>
                </div>
            </div>
            <div class="empty" v-show="empty">
                <img src="../../static/msg.png" alt="">
                <p>暂时没有数据</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            empty: false,
            userId: '',
            mescroll: null,
            total: '',
            list: [],
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId');
        this.mescroll = new MeScroll("mescroll", {
            up: {
                auto: true,//初始化完毕,是否自动触发上拉加载的回调
                isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                callback: this.upCallback, //上拉加载的回调
                offset: 300,
                noMoreSize: 3,
                //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
                htmlNodata: '<p class="upwarp-nodata">-- 没有更多内容 --</p>',
            }
        });
    },
    methods: {
        upCallback(page) {
            this.getListDataFromNet(page.num, page.size, (curPageData) => {
                //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                let totalPage = this.total
                if (page.num == 1) this.list = [];
                this.list = this.list.concat(curPageData);
                this.mescroll.endByPage(curPageData.length, totalPage);
                //console.log("dataIndex=" + dataIndex, "page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
            }, function () {
                this.mescroll.endErr();
            });
        },

        getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            setTimeout(() => {
                this.$ajax({
                    method: 'post',
                    url: this.psta + '/wx/queryUseCredits.jhtml',
                    data: {
                        userId: this.userId,
                        page: pageNum,
                        size: pageSize,
                    }
                })
                    .then(response => {
                        //console.log(response)
                        if (response.data.status == 1) {
                            let listData = [];
                            let listPage = response.data.data;
                            this.total = response.data.pageBean.rowCount;
                            for (let i = 0; i < listPage.length; i++) {
                                listData.push(listPage[i])
                            }
                            successCallback && successCallback(listData);//成功回调
                        } else {
                            this.mescroll.destroy();
                            this.empty = true;
                        }
                    });
            }, 500)
        }
    }
}
</script>
<style lang="stylus" scoped>
.mescroll {
    position: fixed;
    top: 60px;
    bottom: 0;
    height: auto;
}

.money-list {
    .money-box {
        display: flex;
        justify-content: space-between;
        height: 80px;
        margin-bottom: 2px;
        padding: 15px 15px;
        background: #fff;

        .money {
            line-height: 50px;
            color: #11AF62;
            font-size: 20px;
        }

        span {
            h1 {
                font-size: 18px;
                color: #3c3c3c;
                font-weight: 600;
            }

            i {
                font-size: 12px;
                color: #ABABAB;
            }

            p {
                font-size: 12px;
                color: #9c9c9c;
                display: -webkit-box;
                /* autoprefixer: off */
                -webkit-box-orient: vertical;
                /* autoprefixer: on */
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }
}
</style>
