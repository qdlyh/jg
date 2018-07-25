<template>
  <div>
    <div class="userList">
      <!-- <div class="header">
        <span @click="headerTab(index)" :class="{ headerActive: active == index }" v-for="(item,index) in header">{{item.text}}</span>
      </div> -->
      <tab>
        <tab-item @on-item-click="onItemClick(index)" :selected="index==isShow" v-for="(item,index) in tab" :key="index">{{item.tab}}</tab-item>
      </tab>

      <div id="mescroll0" class="mescroll" v-show="isShow==0">
        <div id="dataList0" class="data-list" v-cloak>
          <div class="personnel">
            <div class="personnel-box" v-for="(item,index) in list0" :key="index">
              <div class="user-text" @click="$router.push({ name: 'user', params: { id: item.uuid } })">
                <span>
                  <img v-lazy="item.image" alt="">
                </span>
                <span class="right">
                  <h1>{{item.nickName}}</h1>
                  <p>{{item.signature}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mescroll1" class="mescroll" v-show="isShow==1">
        <div id="dataList1" class="data-list" v-cloak>
          <div class="volunteer">
            <div v-for="(item,index) in list1" :key="item.uuid">
              <div class="volunteer-box" @click="$router.push({ name: 'user', params: { id: item.uuid } })">
                <img v-lazy="item.image" alt="">
                <span>
                  <h1>{{item.nickName}}</h1>
                  <i>{{item.signature}}</i>
                  <p>2013年参加志愿</p>
                </span>
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
      tab: [{ tab: '慈善企业', top: 0, i: 0 }, { tab: '志愿者', top: 0, i: 1 }],
      isShow: 0,
      mescrollArr: new Array(2),
      list0: [],
      list1: [],
    }
  },
  // mounted() {
  //   this.mescrollArr[0] = this.initMescroll("mescroll0", "dataList0");
  // },
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
      this.$router.push({ name: 'questions', params: { id: 0 } });
      this.$store.state.itemTop = this.mescroll.getScrollTop();
    },

    onItemClick(index) {
      if (this.isShow != index) {
        this.isShow = index;
        this.$store.commit('listId', index);
        //console.log(index)
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
        type = 63
      }
      if (dataIndex == 1) {
        type = 64
      }
      setTimeout(() => {
        this.$ajax({
          method: 'get',
          url: this.psta + '/getWxCharityYouAndMe?type=' + type + '&page=' + pageNum + '&size=' + pageSize,
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
  top: 5rem;
  bottom: 0;
  height: auto;
}

// 慈善企业
.personnel {
  .personnel-box {
    background: #fff;
    margin-bottom: 2px;
    padding: 1.25rem 1.875rem;
    .user-text {
      display: flex;
      img {
        width: 9.75rem;
        height: 9.75rem;
      }
      .right {
        margin-left: 1.25rem;
        h1 {
          font-size: 1.75rem;
          color: #3c3c3c;
          font-weight: normal;
        }
        p {
          color: #454545;
          margin-top: 1.25rem;
          font-size: 1.375rem;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }

    .user-theme {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      line-height: 4rem;
      .left-theme {
        width: 80%;
        font-size: 1.5rem;
        color: #454545;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .right-time {
        width: 20%;
        text-align: right;
        font-size: 1.25rem;
        color: #9c9c9c9c;
      }
    }
  }
}

//志愿者
.volunteer {
  .volunteer-box {
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
        font-size: 1.125rem;
        color: #454545;
      }
      p {
        font-size: 1.25rem;
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
</style>
