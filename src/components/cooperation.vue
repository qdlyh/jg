<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="banner">
                <div class="block">
                    <el-carousel trigger="click" height="640px">
                        <el-carousel-item v-for="item in 1" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="box-top">
                <h1>阿斯巴</h1>
                <i class="active"></i>
                <div class="middle">
                    <span>xx</span>
                    <div>|
                        <span style="margin:0 15px;">xx</span>|</div>
                    <span>xx</span>
                </div>
                <p>啥答案死大所大所大大啊实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年飞士大夫啥答案死大所大所大大啊实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年飞士大啥答案死大所大所大大啊实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年飞士大啥答案死大所大所大大啊实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年飞士大啥答案死大所大所大大啊实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年飞士大</p>
            </div>
            <div class="box-middle">
                <div class="box-middle-content">
                    <h1>阿斯巴</h1>
                    <i class="active"></i>
                    <p class="text">实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年</p>
                    <div class="box-middle-box">
                        <ul>
                            <li><img src="../assets/服务型.png" alt=""></li>
                            <li><img src="../assets/服务型.png" alt=""></li>
                            <li><img src="../assets/服务型.png" alt=""></li>
                            <li><img src="../assets/服务型.png" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box-bottom">
                <h1>阿斯巴</h1>
                <i class="active"></i>
                <h2>系一嘻嘻嘻嘻嘻</h2>
                <p class="text">实打实大撒大声地阿萨德阿萨德阿萨德发的房价的飞机十多年</p>
                <div class="box-bottom-box">
                    <div class="item">
                        <ul>
                            <li><img src="../assets/专家01.png" alt=""></li>
                            <li><img src="../assets/专家01.png" alt=""></li>
                            <li><img src="../assets/专家01.png" alt=""></li>
                        </ul>
                    </div>
                    <div class="btn-blue">
                        <router-link to="">保存</router-link>
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
    p {
      text-indent: 2em;
      font-size: 16px;
      color: #454545;
      line-height: 35px;
    }
    .middle {
      text-align: center;
      margin: 40px 0 30px 0;
      font-size: 24px;
      color: #454545;
      div {
        display: inline-block;
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
    h2 {
      font-size: 36px;
      font: outline;
      text-align: center;
      font-weight: normal;
      color: #202020;
    }
    h2 {
      font-size: 24px;
      color: #454545;
      margin-top: 50px;
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

