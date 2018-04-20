<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="banner" v-for="(item,index) in banner" :key="index">
                <img v-lazy="item.image" alt="">
                <div class="btn-blue">
                    <router-link to="">PC端下载</router-link>
                </div>
            </div>
            <div class="box">
                <div class="content-text">
                    <ul>
                        <li v-for="(item,index) in nav" :key="index">
                            <a href="javascript:;" @click="goAnchor('#anchor-'+index,index)" :class="{active:index==num}">{{item.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="content-txt">
                    <div class="txt" v-for="(item,index) in list" :key="index" :id="'anchor-'+index">
                        <i></i>
                        <h1>{{item.title}}</h1>
                        <div class="txt-content">
                            <div class="text-box">
                                <!-- <h2 style="padding: 0px 0 20px 0;">{{item.title}}</h2> -->
                                <span class="text">
                                    {{item.text}}
                                </span>
                                <h2>{{item.title2}}</h2>
                                <span class="text2">
                                    {{item.txt2}}
                                </span>
                            </div>
                            <span class="text-img">
                                <img :src="item.image" alt="">
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
            banner: [],
            nav: [],
            nav: [{ text: '五谷轮回简介' }, { text: '特色功能' }, { text: '版本更新' }, { text: '实用功能' }, { text: '相关产品' }],
            list: [],
            // list: [
            //     { text: '五谷轮回介绍1', txt: '到静安到静安到静安到静安到静安到静安到静安到静安到静安到静安到静安到静安到静安', src: require('../assets/403401878767614614.png'), },
            //     { text: '五谷轮回介绍2', title: '独立系统', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈2', title2: '独立系统', txt2: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈2', src: require('../assets/403401878767614614.png'), },
            //     { text: '五谷轮回介绍3', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈3', src: require('../assets/403401878767614614.png'), },
            //     { text: '五谷轮回介绍4', txt: '到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈到静安寺哦对哈水的哈4', src: require('../assets/403401878767614614.png'), },
            // ]
        }
    },
    mounted() {
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcDownloadCenter?type=pc',
        })
            .then(response => {
                //console.log(response)
                this.banner = [response.data.PcDownload[0]];
                this.list = response.data.PcDownload;
                //var box = box.slice(response.data.PcDownload[1]);
                this.list.shift(); //删除下标为0的数组
                // console.log(box)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        goAnchor(selector,index) {
            this.num = index;
            console.log(index)
            var anchor = this.$el.querySelector(selector)
            document.documentElement.scrollTop = anchor.offsetTop
        },
    }
}
</script>
<style lang="scss" scoped>
.content {
  .banner {
    width: 100%;
    height: 640px;
    position: relative;
    img {
      width: 100%;
      height: 640px;
    }
    .btn-blue {
      position: absolute;
      bottom: 20%;
      right: 2%;
      a {
        width: 200px;
        height: 60px;
        border-radius: 30px;
        font-size: 24px;
        line-height: 60px;
      }
    }
  }
  .box {
    max-width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .content-text {
      border-bottom: 1px solid #c2c2c2;
      height: 65px;
      margin-top: 10px;
      ul {
        li,a {
          float: left;
          font-size: 18px;
          line-height: 64px;
          margin-right: 70px;
          cursor: pointer;
        }
        a{
            color: #464646;
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
        .text-box {
          display: flex;
          flex-direction: column;
          h2 {
            padding-top: 50px;
            color: #fff;
            font-weight: normal;
            font-size: 18px;
          }
          .text,
          .text2 {
            width: 80%;
            color: #fff;
            text-indent: 2em;
            line-height: 30px;
          }
          .text2 {
            padding-top: 20px;
          }
        }
      }
    }
  }
}
.active {
  color: #00a3ee !important;
}
</style>


