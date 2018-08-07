<template>
  <div>
    <!-- <h2>{{$route.query.appId}}x1</h2>
    <h2>{{$route.query.timestamp}}x2</h2>
    <h2>{{$route.query.noncestr}}x3</h2>
    <h2>{{$route.query.signature}}x4</h2> -->
    <div class="findwork">
      <form action="" id="form">
        <span>市:</span>
        <select v-model="myCity">
          <option v-for="(data,index) in cityData" :value="data.id" :key="index">
            {{data.title}}
          </option>
        </select>
        <span>区:</span>
        <select v-model="myArea">
          <option v-for="(data,index) in selection" :value="data.id" :key="index">
            {{data.title}}
          </option>
        </select>
        <span>类型:</span>
        <select v-model="search">
          <option value="" v-for="(item,index) in searchData" :key="index" :value="item.id">{{item.title}}</option>
        </select>
      </form>
      <!-- <span>值：{{myCity}}{{myArea}}{{search}}</span> -->
      <div class="ifshow" v-show="ifshow">
        <!-- <p>抱歉！该地区没有找到您需要的职位</p> -->
        <img src="../../images/21976863.png" alt="">
      </div>
      <div id="pullTo">
        <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
          <div class="work-list">
            <div class="list-box" v-for="(item,index) in list" :key="index">
              <a href="javascript:;" @click="go(item)">
                <!-- <router-link :to="{ name: 'companylist', params: { id: item.itemId }}"> -->
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
                </span>
                <!-- </router-link> -->
              </a>
            </div>
          </div>
        </pull-to>
      </div>
      <gotop></gotop>
      <loading v-show="!list.length"></loading>
    </div>
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
      ifshow: false,
      pageNow: 2,
      search: '',
      myCity: '',
      myArea: '',
      searchData: [],
      list: [],
      cityData: [
        //   {
        //     title: '城市',
        //     area: [
        //       {
        //         text: '市区'
        //       },
        //     ]
        //   },
        //   {
        //     title: '广州市',
        //     area: [
        //       {
        //         text: '市区0'
        //       },
        //       {
        //         text: '天河区'
        //       },
        //       {
        //         text: '白云区'
        //       },
        //       {
        //         text: '海珠区'
        //       }
        //     ]
        //   },
      ],
    }
  },
  activated() {
    this.$ajax({
      method: 'get',
      url: this.psta + '/base/itemInfo',
    })
      .then(response => {
        //console.log(response)
        this.cityData = response.data.object.address[0].menus;
        this.searchData = response.data.object.typess;
        this.searchData.unshift({ title: '所有', id: 0 })
        this.search = this.searchData[0].id    //类型

        if (localStorage.getItem("myCity") != null && localStorage.getItem("myArea") != null) {
          this.myCity = localStorage.getItem("myCity")
          this.myArea = localStorage.getItem("myArea")
        } else {
          this.myCity = this.cityData[0].id      //城市
          this.myArea = this.cityData[0].menus[0].id  //地区
        }
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
      localStorage.setItem("myCity", this.myCity);
      localStorage.setItem("myArea", this.myArea);
      this.$router.push({ name: 'companylist', params: { id: item.itemId } });
      sessionStorage.setItem("clientHeight", document.getElementsByClassName("scroll-container")[0].scrollTop);
    },
    getlist(loaded) {
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
        url: this.psta + '/item/list' + '?city=' + this.myCity + '&area=' + this.myArea + '&pageNow=' + this.pageNow + '&typess=' + this.search,
      })
        .then(response => {
          //console.log(response)
          let listPage = response.data.object.list;

          for (let i = 0; i < listPage.length; i++) {
            this.list.push(listPage[i])
          }

          if (listPage.length != 0) {
            this.pageNow++;
          }

          loaded("done");

        })
        .catch(error => {
          console.log(error);
          //alert('网络错误，不能访问');
        });
    },
    refresh(loaded) {
      this.list = [];
      this.pageNow = 1;
      this.getlist(loaded);
    },
    loadmore(loaded) {
      this.getlist(loaded)
    },
  },
  computed: {
    selection() {
      for (let i = 0; i < this.cityData.length; i++) {
        if (this.cityData[i].id == this.myCity) {
          /* 判断城市是否和存储城市id相等,相等返回存储城市id，否则返回第1个城市id */
          if (this.myCity == localStorage.getItem("myCity")) {
            this.myArea = localStorage.getItem("myArea")
          } else {
            this.myArea = this.cityData[i].menus[0].id
            /* 切换城市重置滚动条高度 */
            document.getElementsByClassName("scroll-container")[0].scrollTop = 0;
          }
          return this.cityData[i].menus;
        }
      }
    },
  },
  watch: {
    myArea: {
      handler(data) {
        this.pageNow = 2;  //切换初始化分页
        if (this.myArea != localStorage.getItem("myArea")) {
          /* 切换地区重置滚动条高度 */
          document.getElementsByClassName("scroll-container")[0].scrollTop = 0;
        }

        this.$ajax({
          method: 'get',
          url: this.psta + '/item/list' + '?city=' + this.myCity + '&area=' + this.myArea + '&typess=' + this.search,
        })
          .then(response => {
            //console.log(response)
            this.list = response.data.object.list;
            //console.log(this.list)
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          });
      },
      deep: true
    },
    search: {
      handler(data) {
        this.pageNow = 2;  //切换初始化分页
        this.$ajax({
          method: 'get',
          url: this.psta + '/item/list' + '?city=' + this.myCity + '&area=' + this.myArea + '&typess=' + this.search,
        })
          .then(response => {
            this.list = response.data.object.list;
            //console.log(response)
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          });
      },
      deep: true
    },
    list: {
      handler(data) {
        if (this.list.length == 0) {
          this.ifshow = true;
        } else {
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
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

.findwork {
  #form {
    background: #fff;
    height: 50px;
    line-height: 50px;
    span {
      color: $text;
      font-size: 14px;
      padding: 0 7px;
    }
    select {
      width: 20%;
      height: 30px;
      border: none;
      border: 0.5px solid #ccc;
    }
  }
  .ifshow {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    background: #fff;
    text-align: center;
    max-width: 750px;
    img {
      margin-top: 10%;
      width: 100%;
    }
  }
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
      // .sign-p {
      //   padding-left: 20px;
      // }
    }
  }
}
</style>
