<template>
  <div>
    <div class="expertList">
      <tab>
        <tab-item @on-item-click="onItemClick(index)" :selected="index==isShow" v-for="(item,index) in tab" :key="index">{{item.tab}}</tab-item>
      </tab>
      <div id="mescroll0" class="mescroll" v-show="isShow==0">
        <div id="dataList0" class="data-list" v-cloak>
          <div class="article-list" v-for="(item,index) in list0" :key="item.uuid">
            <div @click="goMsg(item)">
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

      <div id="mescroll1" class="mescroll" v-show="isShow==1">
        <div id="dataList1" class="data-list" v-cloak>
          <div v-for="(item,index) in list1" :key="item.uuid">
            <div class="article-hd" @click="goMsg(item)">
              <h1>{{item.title}}</h1>
              <div class="article-box-bottom">
                <div>
                  {{item.createDate}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mescroll2" class="mescroll" v-show="isShow==2">
        <div id="dataList2" class="data-list" v-cloak>
          <div class="expert-article" v-for="(item,index) in list2" :key="item.uuid">
            <div @click="$router.push({ name: 'article', params: { id: item.uuid } })">
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
      tab: [{ tab: '咨询专区', top: 0, i: 0 }, { tab: '我来回答', top: 0, i: 1 }, { tab: '专家博文', top: 0, i: 2 }],
      isShow: 0,
      mescrollArr: new Array(3),
      list0: [],
      list1: [],
      list2: [],
    }
  },
  activated() {
    if (this.$store.state.listSize > 10) {
      //Mescroll,就算你缓存了也只会返回第一页并且默认10条数据，所以这里设置下，第一页的数量，使它能够保持上次离开时候的数据
      this.size = this.$store.state.listSize;
    }
    this.isShow = (this.$store.state.listId == null) ? this.$store.state.listId = Number(sessionStorage.getItem('listId')) : this.$store.state.listId;
    this.mescrollArr[this.isShow] = this.initMescroll("mescroll" + this.isShow, "dataList" + this.isShow);
    this.$nextTick(() => {
      for (let i = 0; i < this.tab.length; i++) {
        let dom = document.querySelector('#mescroll' + this.tab[i].i);
        dom.scrollTop = this.tab[i].top;
      }
    })
  },
  deactivated() {
    this.mescrollArr[this.isShow].destroy();
  },

  methods: {
    go() {
      //console.log(item.uuid)
      this.$router.push({ name: 'questions', params: { id: 0 } });
      this.$store.state.itemTop = this.mescroll.getScrollTop();
    },

    goMsg(item) {
      this.$router.push({ name: 'forumMsg', params: { id: item.uuid } });
      this.$store.state.itemTop = this.mescroll.getScrollTop();
    },

    onItemClick(index) {
      if (this.isShow != index) {
        this.isShow = index;
        this.$store.commit('listId', index);
        if (this.mescrollArr[index] == null) {
          this.mescrollArr[index] = this.initMescroll("mescroll" + index, "dataList" + index);
        }
        this.$nextTick(() => {
          let dom = document.querySelector('#mescroll' + index);
          dom.scrollTop = this.tab[index].top;
        });
      }
    },
    initMescroll(mescrollId, clearEmptyId) {
      this.mescroll = new MeScroll(mescrollId, {
        up: {
          auto: true,//初始化完毕,是否自动触发上拉加载的回调
          isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          callback: this.upCallback, //上拉加载的回调
          onScroll: this.upScroll,
          page: {
            size: this.size,
            time: 500,
          },
          offset: 300,
          noMoreSize: 1,
          //htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p>',
          htmlNodata: '<p class="upwarp-nodata">-- 没有更多内容 --</p>',
        }
      });
      return this.mescroll;
    },

    upScroll(mescroll, y, isUp) {
      if (this.isShow == 0) {
        this.tab[0].top = y;
      }
      if (this.isShow == 1) {
        this.tab[1].top = y;
      }
      if (this.isShow == 2) {
        this.tab[2].top = y;
      }
    },

    upCallback(page) {
      let dataIndex = this.isShow;
      this.getListDataFromNet(dataIndex, page.num, page.size, (curPageData) => {
        //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
        let totalPage = this.total
        switch (dataIndex) {
          case 0:
            if (page.num == 1) this.list0 = [];
            this.list0 = this.list0.concat(curPageData);
            this.$store.state.listSize = this.list0.length;
            // this.mescroll.endBySize(curPageData.length, totalPage);
            break;
          case 1:
            if (page.num == 1) this.list1 = [];
            this.list1 = this.list1.concat(curPageData);
            this.$store.state.listSize = this.list1.length;
            break;
          case 2:
            if (page.num == 1) this.list2 = [];
            this.list2 = this.list2.concat(curPageData);
            this.$store.state.listSize = this.list2.length;
            break;
        }
        this.mescrollArr[dataIndex].endBySize(curPageData.length, totalPage);
        //console.log("dataIndex=" + dataIndex, "page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
      }, function () {
        this.mescrollArr[dataIndex].endErr();
      });
    },

    getListDataFromNet(dataIndex, pageNum, pageSize, successCallback, errorCallback) {
      let type = '';
      if (dataIndex == 0) {
        type = '/getWxConsultingList?'
      }
      if (dataIndex == 1) {
        type = '/getWxLetMeAnswerList?wxUserId=' + this.$parent.wxUserId + '&'

      }
      if (dataIndex == 2) {
        type = '/getWxExpertsPostList?'
      }

      setTimeout(() => {
        this.$ajax({
          method: 'get',
          url: this.psta + type + 'page=' + pageNum + '&size=' + pageSize,
        })
          .then(response => {
            //console.log(response)
            let listData = [];
            let listPage = response.data.data;
            this.total = response.data.total;
            if (dataIndex == 0) {
              for (let i = 0; i < listPage.length; i++) {
                listData.push(listPage[i])
              }
            }

            if (dataIndex == 1) {
              for (let i = 0; i < listPage.length; i++) {
                listData.push(listPage[i])
              }
            }

            if (dataIndex == 2) {
              for (let i = 0; i < listPage.length; i++) {
                listData.push(listPage[i])
              }
            }
            successCallback && successCallback(listData);//成功回调
          });
      }, 500)
    }
  },
}
</script>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  top: 45px;
  bottom: 0;
  height: auto;
}
.expertList {
  .user-list {
    .user {
      display: flex;
      height: 14rem;
      margin-bottom: 2px;
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
          font-size: 1.25rem;
          color: #454545;
        }
        p {
          font-size: 1.5rem;
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

  .article-list,
  .article-hd {
    margin-bottom: 2px;
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
  .expert-article {
    margin-bottom: 2px;
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

