<template>
  <div>
    <div class="content">
      <topNav></topNav>
      <div class="banner">
        <img v-for="(item,index) in banner" v-lazy="item.image" alt="">
      </div>
      <div class="box-top" v-for="(item,index) in boxTop" :key="index">
        <h1>{{item.text}}</h1>
        <i class="active"></i>
        <div class="middle" v-for="(item,index) in boxTop[0].childList">
          <span>{{item.text}}</span>
          <p>{{item.content}}</p>
        </div>
      </div>
      <div class="box-middle" v-for="(item,index) in boxMiddle">
        <div class="box-middle-content">
          <h1 v-for="(item,index) in boxMiddle[0].childList[0]">{{item.text}}</h1>
          <i class="active"></i>
          <p class="text">{{item.content}}</p>
          <div class="box-middle-box">
            <ul>
              <li v-for="(item,index) in boxMiddle[0].childList"><img v-lazy="item.image" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box-bottom" v-for="(item,index) in boxBottom">
        <h1>{{item.text}}</h1>
        <i class="active"></i>
        <p v-for="(item,index) in boxBottom[0].childList" v-if="index<2">{{item.text}}</p>
        <div class="box-bottom-box">
          <div class="item">
            <ul>
              <li v-for="(item,index) in boxBottom[0].childList" v-if="index>1"><img v-lazy="item.image" alt=""></li>
            </ul>
          </div>
          <div class="btn-blue">
            <router-link to="">申请合作</router-link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      banner: [],
      boxTop: [],
      boxMiddle: [],
      boxBottom: [],
    }
  },
  mounted() {
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcPartners',
    })
      .then(response => {
        //console.log(response)
        this.banner = [response.data.PcPartners[1].childList[0]];
        this.boxTop = [response.data.PcPartners[1].childList[1]];
        this.boxMiddle = [response.data.PcPartners[1].childList[2]];
        this.boxBottom = [response.data.PcPartners[1].childList[3]];
        // console.log(this.boxBottom);
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });
  }
}
</script>
<style lang="scss" scoped>
.content {
  .banner {
    img {
      height: 640px;
      width: 100%;
    }
  }
  .box-top {
    max-width: 800px;
    margin: 100px auto;
    h1 {
      font-size: 36px;
      font: outline;
      text-align: center;
      font-weight: normal;
      color: #202020;
    }
    .middle {
      text-align: center;
      margin-top: 40px;
      font-size: 24px;
      color: #454545;
      div {
        display: inline-block;
      }
      p {
        margin-top: 30px;
        text-indent: 2em;
        font-size: 16px;
        color: #454545;
        line-height: 35px;
      }
    }
  }
  .box-middle {
    background: #f3f3f3;
    padding: 5px;
    .box-middle-content {
      max-width: 1200px;
      margin: 100px auto;
      h1 {
        font-size: 36px;
        font: outline;
        text-align: center;
        font-weight: normal;
        color: #202020;
      }
      .text {
        text-indent: 2em;
        font-size: 16px;
        color: #454545;
        line-height: 35px;
        text-align: center;
        margin-top: 20px;
      }
      .box-middle-box {
        overflow: hidden;
        ul {
          margin-top: 30px;
          li {
            float: left;
            margin-top: 30px;
            img {
              width: 580px;
            }
          }
        }
        ul li:nth-child(odd) {
          margin-right: 40px;
        }
      }
    }
  }
  .box-bottom {
    max-width: 1200px;
    margin: 100px auto;
    h1,
    p {
      font-size: 36px;
      text-align: center;
      font-weight: normal;
      color: #202020;
    }
    p {
      font-size: 18px;
      color: #454545;
    }
    i {
      margin-bottom: 50px;
    }
    .text {
      text-indent: 2em;
      font-size: 16px;
      color: #454545;
      line-height: 35px;
      text-align: center;
      margin-top: 12px;
    }
    .box-bottom-box {
      .btn-blue {
        margin-top: 60px;
        a {
          width: 200px;
          height: 60px;
          border-radius: 30px;
          font-size: 24px;
          line-height: 60px;
        }
      }
      .item {
        overflow: hidden;
        margin-top: 80px;
        ul {
          li {
            float: left;
            img {
              width: 240px;
              height: 240px;
            }
          }
        }
        ul li:nth-child(2) {
          margin: 0 240px;
        }
      }
    }
  }
}
.active {
  width: 120px;
  height: 5px;
  background: #00a3ee;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}
</style>

