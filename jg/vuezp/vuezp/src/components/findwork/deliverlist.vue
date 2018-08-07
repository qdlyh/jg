<template>
  <div>
    <div class="ifshow" v-if="ifshow">
      <img src="../../images/80852461.png" alt="">
    </div>
    <loading v-show="!list.length"></loading>
    <div id="pullTo">
      <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
        <div class="findwork">
          <div class="work-list">
            <div class="list-box" v-for="(item,index) in list" :key="index">
              <a href="javascript:;" @click="go(item)">
                <!-- <router-link :to="{ name: 'mydeliver', params: { id: item.itemId }}"> -->
                <span class="left">
                  <img v-lazy="item.headimgurl" alt="">
                </span>
                <span class="right">
                  <h3>{{item.name}}</h3>
                  <p class="sign-p">{{item.natureTitle}}&nbsp;|&nbsp;{{item.sizeTitle}}&nbsp;|&nbsp;{{item.scope}}</p>
                  <i>{{item.jobsTitle}}&nbsp;&nbsp;&nbsp;月薪：{{item.salaryTitle}}</i>
                  <p class="describe">{{item.cdescription}}</p>
                  <p>{{item.address}}</p>
                  <!-- <p>{{item.typessTitle}}</p> -->
                  <p class="time">投递时间：{{item.createdDate}}</p>
                </span>
                <!-- </router-link> -->
              </a>
            </div>
          </div>
        </div>
      </pull-to>
    </div>
    <gotop></gotop>
  </div>
</template>
<script>
import gotop from "../../common/gotop";
import PullTo from "vue-pull-to";
export default {
  components: {
    PullTo,
    gotop
  },
  data() {
    return {
      pageNow: 2,
      ifshow: false,
      list: []
    }
  },
  activated() {
    // console.log(this.ifshow)
    this.$ajax.interceptors.request.use((config) => {
      //在请求发送之前做一些事
      //console.log(config)
      this.ifshow = false;
      return config;
    }, function (error) {
      //当出现请求错误是做一些事
      //alert('出错了!')
      return Promise.reject(error);
    });
    this.$ajax({
      method: 'get',
      url: this.psta + '/item/myGive?userId=' + this.$parent.userId,
    })
      .then(response => {
        //console.log(response)
        this.list = response.data.object;
        // console.log(response.data.object)
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });

    if (sessionStorage.getItem("clientHeight") != null) {
      document.getElementsByClassName("scroll-container")[0].scrollTop = parseInt(sessionStorage.getItem("clientHeight"))
    }
  },
  methods: {
    go(item) {
      this.$router.push({ name: 'mydeliver', params: { id: item.itemId } });
      sessionStorage.setItem("clientHeight", document.getElementsByClassName("scroll-container")[0].scrollTop);
    },
    getList(loaded) {
      this.$ajax.interceptors.request.use((config) => {
        //在请求发送之前做一些事
        //console.log(config)
        this.ifshow = false;
        return config;
      }, function (error) {
        //当出现请求错误是做一些事
        //alert('出错了!')
        return Promise.reject(error);
      });
      this.$ajax({
        method: 'get',
        url: this.psta + '/item/myGive' + '?userId=' + this.$parent.userId + '&pageNow=' + this.pageNow,
      })
        .then(response => {
          //console.log(response)
          let listPage = response.data.object;
          for (let i = 0; i < listPage.length; i++) {
            this.list.push(listPage[i])
          }
          if (listPage.length != 0) {
            this.pageNow++;
          }
          loaded('done');
        })
        .catch(error => {
          console.log(error);
          //alert('网络错误，不能访问');
        });
    },
    refresh(loaded) {
      this.list = [];
      this.pageNow = 1;
      this.getList(loaded);
    },
    loadmore(loaded) {
      this.getList(loaded);
    },
  },
  watch: {
    list: {
      handler(data) {
        if (this.list.length == 0) {
          // console.log(this.list)
          this.ifshow = true;
        } else {
          // console.log(this.list.length)
          this.ifshow = false;
        }
      },
      deep: true
    },
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;

#pullTo {
  max-width: 750px;
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
}
.ifshow {
  max-width: 750px;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fff;
  z-index: 9999;
  text-align: center;
  img {
    margin-top: 10%;
    width: 100%;
  }
}
.findwork {
  .work-list {
    padding: 10px;
    div:first-child {
      margin-top: 0px;
    }
    .list-box {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
      margin-top: 10px;
      a {
        display: flex;
        justify-content: space-between;
      }
      h3 {
        font-weight: normal;
        font-size: 16px;
        color: $text;
        margin-top: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      p {
        color: $text;
        font-size: 12px;
        margin: 3px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      i {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 14px;
        color: #928a75;
      }
      .left {
        display: flex;
        align-items: center;
        padding: 10px;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .describe {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .time {
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        color: #928a75;
        font-size: 12px;
      }
    }
  }
}
</style>


