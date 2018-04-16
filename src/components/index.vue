<template>
  <div>
    <div class="content">
      <topNav></topNav>
      <div class="banner">
        <div class="block">
          <el-carousel trigger="click" height="640px">
            <el-carousel-item v-for="(item,index) in banner" :key="item">
              <img :src="item.image" alt="" style="width:100%;heigh:640px;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="content-box">
        <div class="box-top">
          <span v-for="(item,index) in dataTop" :key="index">
            <img :src="item.image" alt="">
            <div>
              <i>{{item.text}}</i>
            </div>
          </span>
        </div>
        <div class="box-middle">
          <div class="box-middle-text">
            <h1>新闻资讯</h1>
            <ul v-for="(item,index) in tabData" :key="index">
              <li :class="{active:index == num}" @click="tab(index)">{{item.text}}</li>
            </ul>
            <router-link to="/">查看更多&nbsp;></router-link>
          </div>
          <div class="box-middle-content" v-for="(items, index) in tabList" :key="index" v-show="index===num">
            <router-link to="/" v-for="(item,index) in items" :key="index">
              <span>
                <img :src="item.image" alt="">
                <p>{{item.text}}</p>
              </span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="content-bottom-box">
          <div class="content-bottom-top" v-for="(item,index) in listBox" :key="index">
            <div class="bottom-top-text">
              <h1>{{item.text}}</h1>
              <router-link to="/" class="more">
                <span>查看更多&nbsp;></span>
              </router-link>
            </div>
            <router-link to="/" class="more-img">
              <img :src="item.image" alt="">
            </router-link>
          </div>
        </div>
        <div class="content-bottom-img">
          <router-link to="/" v-for="(item,index) in bottomImg" :key="index">
            <img :src="item.image" alt="">
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
      tabList: [],
      // tabs: [{ text: '政策法规' }, { text: '新闻资讯' }, { text: '夕阳暖计划' }],
      listBox: [],
      bottomImg: [],
    }
  },
  mounted() {
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHome',
    })
      .then(response => {
        //console.log(response)
        this.banner = response.data.PcHome[0].childList[0].childList;
        this.dataTop = response.data.PcHome[0].childList[1].childList;
        this.tabData = response.data.PcHome[0].childList[2].childList;
        let list0 = response.data.PcHome[0].childList[3];
        let list1 = response.data.PcHome[0].childList[4];
        let list2 = response.data.PcHome[0].childList[5];
        this.bottomImg = response.data.PcHome[0].childList[6];
        /* 把tabData下的数组push到tabList方便做按钮切换 */
        for (let i = 0; i < this.tabData.length; i++) {
          this.tabList.push(this.tabData[i].childList)
          //console.log(this.tabList)
        }
        /*不想做三次重复循环,所以干脆push到同一个数组  */
        this.listBox.push(list0, list1, list2);
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });
  },
  methods: {
    tab(index) {
      this.num = index;
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
  .bannert {
    img {
      width: 100%;
    }
  }
  .content-box {
    max-width: 1200px;
    margin: 0 auto;
    .box-top {
      margin-top: 32px;
      min-width: 1200px;
      overflow: hidden;
      span {
        height: 230px;
        width: 580px;
        display: inline-block;
        position: relative;
        &:first-child {
          margin-right: 28px;
        }
        div {
          position: absolute;
          bottom: 0px;
          left: 0px;
          background: rgba(44, 44, 44, 0.5);
          width: 586px;
          height: 64px;
          i {
            color: #fff;
            padding-left: 44px;
            line-height: 64px;
          }
        }
        img {
          height: 230px;
          width: 586px;
        }
      }
    }
    .box-middle {
      margin-top: 54px;
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
          overflow: hidden;
        }
        span {
          img {
            width: 280px;
            height: 180px;
          }
          img:hover {
            transform: scale(1.1);
            transition: all 0.5s ease;
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
          .more {
            color: #646464;
            line-height: 32px;
          }
          h1 {
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
          img {
            width: 380px;
            height: 208px;
          }
          img:hover {
            transform: scale(1.1);
            transition: all 0.5s ease;
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
