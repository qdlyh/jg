<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="content-box">
                <leftNav></leftNav>
                <div class="box" v-for="(item,index) in list" :key="index">
                    <h1>{{item.text}}</h1>
                    <span class="time">
                        <i>{{item.date}}</i>&nbsp;&nbsp;
                        <i>{{item.time}}</i>
                    </span>
                    <hr/>
                    <img :src="item.src" alt="">
                    <p>{{item.txt}}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import leftNav from '../common/leftNav'
export default {
    components: {
        leftNav
    },
    data() {
        return {
            list: [{ text: '文章标题啊啊啊啊', date: '2017-1-01', time: '11:10', src: require('../assets/500441656.png'), txt: '大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是大神的哈苏等哈说对话速度哈岁的哈岁的哈是的话时代是' }]
        }
    },
}
</script>
<style lang="scss" scoped>
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
      .time {
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

