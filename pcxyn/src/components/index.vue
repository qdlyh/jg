<template>
  <div>
    <div class="content">
      <topNav></topNav>
      <div class="banner">
        <div class="block" style="height:640px">
          <el-carousel trigger="click" height="640px">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
              <img v-lazy="item.image" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="content-box">
        <div class="box-top">
          <span v-for="(item,index) in dataTop" :key="index" @click="topBtn(item)">
            <img v-lazy="item.image" alt="">
            <div>
              <i>{{item.title}}</i>
            </div>
          </span>
        </div>
        <div class="box-middle">
          <div class="box-middle-text" v-for="(items,index) in tabData" :key="index">

            <h1>{{items.title}}</h1>

            <ul v-for="(items,index) in tabData[0].childList">
              <li :class="{active:index == num}" @click="num = index">{{items.website}}</li>
            </ul>
            <a href="javascript:;" style="color:#fff">查看更多&nbsp;></a>
            <!-- <a href="javascript:;" @click="tabGo()">查看更多&nbsp;></a> -->

            <div class="box-middle-content" v-for="(item, index) in items.childList" v-show="index==num">
              <a href="javascript:;" v-for="(tab,index) in item.childList" :key="index" @click="tabBtn(tab,item)">
                <span>
                  <img v-lazy="tab.image" alt="">
                  <p>{{tab.title}}</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="content-bottom-box">
          <div class="content-bottom-top" v-for="(item,index) in bottomBox" :key="index">
            <div class="bottom-top-text">
              <h1>{{item.website}}</h1>
            </div>
            <a href="javascript:;" class="more-img" @click="bottomBoxGo(item,index)">
              <img v-lazy="item.image" alt="">
            </a>
          </div>
        </div>

        <div class="content-bottom-img">
          <router-link to="/" v-for="(item,index) in bottomImg" :key="index">
            <img v-lazy="item.image" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      banner: [],
      dataTop: [],
      tabData: [],
      bottomBox: [],
      bottomImg: [],
    }
  },
  mounted() {
    /* 轮播图 */
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHomeImage',
    })
      .then(response => {
        //console.log(response)
        this.banner = response.data.PcHomeImage[0].childList[0].childList;
        this.bottomImg = response.data.PcHomeImage[0].childList[1].childList;
        // console.log(this.bottomImg)
      })
      .catch(error => {
        //console.log(error);
        //alert('网络错误，不能访问');
      });

    /* 项目展示*/
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHomeProject',
    })
      .then(response => {
        //console.log(response)
        this.dataTop = response.data.PcHomeProject;
        //console.log(this.dataTop)
      })
      .catch(error => {
        //console.log(error);
        //alert('网络错误，不能访问');
      });

    /* tab新闻分类和底部内容*/
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHomeOther',
    })
      .then(response => {
        //console.log(response)
        this.tabData = response.data.PcHomeNews;
        let bottomBox1 = response.data.PcHomeTech;
        let bottomBox2 = response.data.PcHomeHealth;
        let bottomBox3 = response.data.PcHomeDownload;
        this.bottomBox.push(bottomBox1, bottomBox2, bottomBox3)
        //console.log(this.bottomBox)
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });
  },
  methods: {
    topBtn(item) {
      //console.log(item)
      localStorage.setItem('typeUrl', 'getPcProjectService?'); //根据文章传过来的请求内容地址
      localStorage.setItem('leftNavUrl', 'getPcProjectServiceList?');   //根据文章传过来的请求左侧菜单栏地址
      localStorage.setItem('articleId', item.uuid);             /* 转跳分页请求文章内容uuid */
      localStorage.setItem('titleId', item.websiteId)  /* 转跳分页请求文章左侧菜单栏*/
      localStorage.setItem('parentId_websiteId', item.websiteId);  /* 存储分页内容标签id主页内容 */
      localStorage.setItem('labelTitle', item.website);  /* 转跳分页标题 */
      this.$router.push('/article');
    },
    tabBtn(tab, item) {
      localStorage.setItem('typeUrl', 'getPcNewsInfo?'); //根据文章传过来的请求内容地址
      localStorage.setItem('leftNavUrl', 'getPcNewsInfoList?');   //根据文章传过来的请求左侧菜单栏地址
      localStorage.setItem('labelTitle', item.website);    /*article 侧边栏文章列表标题 */
      localStorage.setItem('articleId', tab.uuid);   /*article 侧边栏文章列表请求id */
      localStorage.setItem('titleId', item.websiteId);   /* 存储分页内容标签id左侧菜单 */
      localStorage.setItem('parentId_websiteId', item.websiteId);  /* 存储分页内容标签id主页内容 */
      this.$router.push('/article');
      //console.log(tab)
      //console.log(item)
    },
    /* 新闻查看全部转跳 */
    // tabGo() {
    //   localStorage.setItem('typeUrl', 'getPcNewsInfo?'); //根据文章传过来的请求内容地址
    //   localStorage.setItem('leftNavUrl', 'getPcNewsInfoList?');   //根据文章传过来的请求左侧菜单栏地址
    //   localStorage.setItem('labelTitle', '新闻资讯');
    //   localStorage.setItem('titleId', 6);       /* 请求tab新闻所有内容的uuid为4 */
    //   this.$router.push('/articleList')
    // },
    bottomBoxGo(item, index) {
      //console.log(item)
      if (index == 0) {
        /* 产品技术 */
        localStorage.setItem('typeUrl', 'getPcTechProducts?'); //根据文章传过来的请求内容地址
        localStorage.setItem('leftNavUrl', 'getPcTechProductsList?');   //根据文章传过来的请求左侧菜单栏地址
        // localStorage.setItem('titleId', 53);              /* 转跳分页请求文章id */
        localStorage.setItem('articleId', item.uuid);             /* 转跳分页请求文章内容uuid */
        localStorage.setItem('titleId', item.websiteId)  /* 转跳分页请求文章左侧菜单栏*/
        localStorage.setItem('parentId_websiteId', item.websiteId)  /* 转跳分页请求文章内容websiteId */
        localStorage.setItem('labelTitle', item.website);  /* 转跳分页标题 */
        this.$router.push('/article');
      }
      if (index == 1) {
        /* 健康云 */
        localStorage.setItem('typeUrl', 'getPcHealthAssessment?'); //根据文章传过来的请求内容地址
        localStorage.setItem('leftNavUrl', 'getPcHealthAssessmentList?');   //根据文章传过来的请求左侧菜单栏地址
        localStorage.setItem('articleId', item.uuid);             /* 转跳分页请求文章内容uuid */
        localStorage.setItem('parentId_websiteId', item.websiteId)  /* 转跳分页请求文章内容websiteId */
        //console.log(item)
        localStorage.setItem('labelTitle', item.website);  /* 转跳分页标题 */
        this.$router.push('/survey');
      }
      if (index == 2) {
        /* 下载中心*/
        this.$router.push('/introduce')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.content {
  min-width: 1200px;
  .banner {
    min-width: 1200px;
    height: 640px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-box {
    max-width: 1200px;
    margin: 0 auto;
    .box-top {
      width: 580px;
      height: 230px;
      margin-top: 32px;
      min-width: 1200px;
      overflow: hidden;
      /* 显示隐藏div层 */
      :hover div {
        transform: translate3d(0, 0, 0);
      }
      span {
        display: inline-block;
        position: relative;
        cursor: pointer;
        &:first-child {
          margin-right: 28px;
        }
        /* 隐藏div层 */
        div {
          position: absolute;
          bottom: 0px;
          left: 0px;
          background: rgba(44, 44, 44, 0.6);
          width: 586px;
          height: 64px;
          color: #3c4a50;
          transition: transform 0.35s;
          transform: translate3d(0, 100%, 0);
          i {
            color: #fff;
            padding-left: 44px;
            line-height: 64px;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
        img {
          height: 230px;
          width: 586px;
        }
      }
    }
    .box-middle {
      margin-top: 60px;
      .box-middle-text {
        h1 {
          float: left;
          font-weight: normal;
          font-size: 24px;
          margin-right: 52px;
        }
        ul {
          li {
            float: left;
            display: inline-block;
            height: 32px;
            color: #454545;
            padding: 0 10px;
            text-align: center;
            margin-right: 20px;
            line-height: 32px;
            cursor: pointer;
          }
        }
        a {
          display: flex;
          justify-content: flex-end;
          color: #676767;
          font-size: 14px;
          line-height: 32px;
        }
      }
      .box-middle-content {
        margin-top: 32px;
        display: flex;
        a {
          color: #454545;
          margin-right: 28px;
          display: inline-block;
          width: 280px;
          height: 180px;
          background: #000;
          overflow: hidden;
        }
        span {
          display: inline-block;
          width: 280px;
          height: 180px;
          position: relative;
          &:hover p {
            opacity: 1;
          }
          &:hover img {
            transform: scale(1.1);
            opacity: 0.7;
            transition: all 0.5s ease;
          }
          img {
            width: 280px;
            height: 180px;
          }
          p {
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.35s;
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }
  }
  .content-bottom {
    background: #f3f3f3;
    margin-top: 88px;
    .content-bottom-box {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      .content-bottom-top {
        margin-top: 60px;
        width: 380px;
        margin-right: 30px;
        .bottom-top-text {
          display: flex;
          justify-content: space-between;
          h1 {
            width: 200px;
            height: 35px;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-weight: normal;
            font-size: 24px;
            color: #454545;
            margin-bottom: 20px;
          }
        }
        .more-img {
          display: inline-block;
          height: 380px;
          height: 208px;
          overflow: hidden;
          background: #000;
          &:hover img {
            transform: scale(1.1);
            transition: all 0.5s ease;
            opacity: 0.7;
          }
          img {
            width: 380px;
            height: 208px;
          }
        }
      }
    }
    .content-bottom-img {
      margin-top: 80px;
      width: 100%;
      height: 380px;
      min-width: 1200px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.active {
  background: #5b8dcf;
  border-radius: 10px;
  color: #fff !important;
}
</style>
