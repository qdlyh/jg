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
            <div class="box">
                <div class="content-text">
                    <ul>
                        <li v-for="(item,index) in nav" :key="index" :class="{active:index==num}" @click="tab(index)">{{item.text}}</li>
                    </ul>
                </div>
                <div class="content-txt">
                    <div class="txt" v-for="(item,index) in list" :key="index">
                        <i></i>
                        <h1>{{item.text}}</h1>
                        <div class="txt-content">
                            <span class="text">
                                {{item.txt}}
                            </span>
                            <span class="text-img">
                                <img :src="item.src" alt="">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0,
            nav: [{ text: '五谷轮回介绍' }, { text: '五谷轮回介绍1' }, { text: '五谷轮回介绍2' }, { text: '五谷轮回介绍3' }, { text: '五谷轮回介绍4' }],
            list: [
                { text: '五谷轮回介绍1', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈1', src: require('../assets/403401878767614614.png'), },
                { text: '五谷轮回介绍2', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈2', src: require('../assets/403401878767614614.png'), },
                { text: '五谷轮回介绍3', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈3', src: require('../assets/403401878767614614.png'), },
                { text: '五谷轮回介绍4', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈4', src: require('../assets/403401878767614614.png'), },
            ]
        }
    },
    methods: {
        tab(index) {
            this.num = index;
            // document.documentElement.scrollTop = 0;
            console.log(window.scrollY)
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
  .box {
    max-width: 1200px;
    margin: 0 auto;
    .content-text {
      border-bottom: 1px solid #c2c2c2;
      height: 64px;
      ul {
        li {
          float: left;
          font-size: 18px;
          line-height: 64px;
          margin-right: 88px;
          cursor: pointer;
        }
      }
    }
    .content-txt {
      .txt {
        margin-top: 100px;
        i {
          height: 24px;
          width: 8px;
          border-radius: 10px;
          background: #00a3ee;
          display: inline-block;
          float: left;
          margin: 5px 10px 0 0;
        }
        h1 {
          font-size: 24px;
          color: #00a3ee;
          height: 24px;
        }
      }
      .txt-content {
        margin-top: 20px;
        background: #58b4a9;
        width: 100%;
        min-height: 530px;
        padding: 50px;
        display: flex;
        justify-content: space-between;
        .text {
          width: 50%;
          color: #fff;
          text-indent: 2em;
          line-height: 30px;
        }
      }
    }
  }
}
.active {
  color: #00a3ee;
}
</style>


