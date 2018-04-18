<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="content-box">
                <div class="leftNav">
                    <ul>
                        <li>健康评估</li>
                        <li v-for="(item,index) in leftNav" :key="index">
                            <a href="javascript:;" @click="go(item)">{{item.title}}</a>
                        </li>
                    </ul>
                    <div class="wx">
                        <p>订阅微信公众号</p>
                        <hr/>
                        <img src="../assets/二维码.png">
                    </div>
                </div>
                <div class="box" v-for="(item,index) in list" :key="index">
                    <h1>{{item.title}}</h1>
                    <span class="date">
                        <i>{{item.updateDate}}</i>
                        <!--&nbsp;&nbsp;
                        <i>{{item.date}}</i> -->
                    </span>
                    <hr/>
                    <img v-lazy="item.image" alt="">
                    <p v-html="item.content" style="max-width:800px;"></p>
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
            leftNav: [],
            articleId: null,
            navNum: null,
            // list: [{ text: '文章标题啊啊啊啊', date: '2017-1-01', date: '11:10', src: require('../assets/500441656.png'), txt: '大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是' }]
        }
    },
    mounted() {
        this.navNum = localStorage.getItem('titleId'); //获取articleList页面的左侧导航标签id
        this.articleId = localStorage.getItem('articleId');  //获取article左侧导航标签id
        /* 左侧菜单栏 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcPageNews?page=1&size=10&' + 'type=' + this.navNum,
        })
            .then(response => {
                //console.log(response)
                this.leftNav = response.data.PcPageNews;
                //console.log(this.leftNav)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
        
        /* 主页内容 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcNewsByUuid?' + 'uuid=' + this.articleId,
        })
            .then(response => {
                //console.log(response)
                this.list = [response.data.PcNews];
                //console.log(this.list)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        go(item) {
            localStorage.setItem('articleId', item.uuid);  //存储左侧导航标签id
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcNewsByUuid?' + 'uuid=' + item.uuid,
            })
                .then(response => {
                    //console.log(response)
                    this.list = [response.data.PcNews];
                    console.log(this.list)
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        }
    }
}
</script>
<style lang="scss" scoped>
.leftNav {
  width: 300px;
  background: #fff;
  text-align: center;
  ul {
    li:first-child {
      background: #fff !important;
      height: 65px;
      line-height: 65px;
    }
    li {
      &:hover {
        background: #f6f7fb;
        transition: 0.2s;
      }
      a {
        width: 240px;
        height: 45px;
        margin: 0 auto;
        display: inline-block;
        color: #454545;
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        line-height: 45px;
      }
    }
  }
  .wx {
    width: 240px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 50px;
    p {
      text-align: left;
      font-size: 14px;
      color: #212121;
    }
    hr {
      margin: 10px 0 20px 0;
      background: #e2e2e2;
      border: none;
      height: 1px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}

.content {
  background: #f3f3f3;
  .content-box {
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    .box {
      min-width: 876px;
      background: #fff;
      margin-left: 24px;
      padding: 30px;
      h1 {
        text-align: center;
        font-size: 24px;
        color: #202020;
        font: outline;
        margin: 10px 0 30px 0;
      }
      .date {
        color: #9c9c9c;
        font-size: 14px;
      }
      hr {
        margin-top: 12px;
        background: #e2e2e2;
        border: none;
        height: 1px;
      }
      img {
        width: 816px;
        height: 435px;
        margin-top: 40px;
      }
      p {
        text-indent: 2em;
        font-size: 16px;
        color: #454545;
        margin-top: 40px;
        line-height: 30px;
      }
    }
  }
}
</style>

