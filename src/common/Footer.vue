<template>
  <div>
    <footer>
      <div class="box">
        <ul v-for="(data,index) in list" :key="index">
          <li>
            <h1>{{data.text}}</h1>
          </li>
          <li v-for="(item,index) in data.items" :key="index">
            <router-link to="/">{{item.name}}</router-link>
          </li>
        </ul>
        <div class="wx">
          <h1>关注我们</h1>
          <div class="shade">
            <span>
              <img src="../assets/二维码.png" alt="">
            </span><br/>
            <i style="display: block;text-align: center">官方微信</i>
          </div>
          <div class="shade">
            <span>
              <img src="../assets/二维码.png" alt="">
            </span><br/>
            <i style="display: block;text-align: center">官方微信</i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {          text: '关于我们',
          items: [
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://www.v2ex.com/t/444911?p=1', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' }
          ]
        },
        {          text: '如何购买',
          items: [
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' }
          ]
        },
        {          text: '售后支持',
          items: [
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' }
          ]
        },
        {          text: '快速入口',
          items: [
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' }
          ]
        },
        {          text: '资源入口',
          items: [
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' },
            { src: 'https://baidu.com', name: '公司简介' }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  background: #eaeaea;
  min-height: 300px;
  .box {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 54px;
    ul {
      float: left;
      width: 150px;
      display: inline-block;
      border-right: dashed 1px #939393;
      text-align: center;
      h1 {
        font: outline;
        font-size: 16px;
        color: #454545;
        margin-bottom: 20px;
      }
      li {
        margin-top: 8px;
        a {
          font-size: 12px;
          color: #9c9c9c;
        }
      }
    }
    .wx {
      width: 300px;
      float: right;
      h1 {
        font: outline;
        color: #454545;
        font-size: 16px;
      }
      .shade {
        float: left;
        margin-right: 24px;
        span {
          background: #fff;
          width: 110px;
          height: 110px;
          display: inline-block;
          margin: 8px auto;
          border-radius: 10px;
          img {
            width: 90px;
            height: 90px;
            margin: 10px;
          }
          i {
            margin-top: 4px;
            color: #454545;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
