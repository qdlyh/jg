<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="content-box">
                <leftNav></leftNav>

                <div class="box">
                    <h1>健康评估</h1>
                    <span class="time">
                        <i>2017-3-3</i>&nbsp;&nbsp;
                        <i>11:10</i>
                    </span>
                    <hr/>
                    <img src="../assets/banner-申请.png" alt="">
                    <form action="">
                        <div class="check-box" v-for="(items,index) in list" :key="index">
                            <p class="text">{{items.text}}</p>
                            <!-- <hr/> -->
                            <div class="check">
                                <el-radio-group v-model="items.index" v-for="(item,index) in items.scoper" :key="index" class="choose">
                                    <el-radio :label="item.val">{{item.name}}</el-radio>
                                </el-radio-group>
                            </div>
                        </div>
                        <p class="text">有什么相对我们说的？</p>
                        <textarea name="" maxlength="200" placeholder="#请输入您的留言#"></textarea>
                    </form>
                    <div class="btn-blue" @click="total()">
                        <router-link to="">健康评估</router-link>
                    </div>
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
            list: [
                {
                    text: '1.性别',
                    num: 1,
                    scoper: [
                        { name: '男', val: 1 },
                        { name: '女', val: 0 },
                    ]
                },
                {
                    text: '1.问题2',
                    num: 2,
                    scoper: [
                        { name: '男1', val: 11 },
                        { name: '女2', val: 42 },
                    ]
                },
                {
                    text: '1.问题3',
                    num: 3,
                    scoper: [
                        { name: '男', val: 13 },
                        { name: '哈嘻嘻嘻想花小红花想花小红嘻想花小红花嘻想花小红花嘻想花小红花花哈嘻嘻嘻想花小红花想花小红嘻想花小红花嘻想花小红花嘻想花小红花花', val: 132 },
                        { name: '嘻想花小红花嘻想花小红花嘻想花小红花', val: 133 },
                        { name: '女4', val: 33 },
                    ]
                },
                {
                    text: '1.问题4',
                    num: 4,
                    scoper: [
                        { name: '男5', val: 12 },
                        { name: '女6', val: 22 },
                    ]
                },
            ],
        }
    },
    mounted() {
    },
    methods: {
        total() {
            var choose = document.querySelectorAll(".el-radio__original");
            var num = 0;
            for (var i = 0; i < choose.length; i++) {
                if (choose[i].checked) {
                    //console.log(choose[i].getAttribute("value"));
                    num += parseInt(choose[i].getAttribute("value"))
                    console.log(num)
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
/* label radio */
.el-radio {
  display: flex;
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
      form {
        margin-top: 40px;
        textarea {
          width: 100%;
          height: 200px;
          margin-top: 20px;
          font-size: 16px;
          &::placeholder {
            padding: 10px 0 0 20px;
          }
        }
        .text {
          text-align: left;
          font-size: 18px;
          color: #202020;
          font-weight: normal;
          height: 40px;
          line-height: 40px;
          padding-left: 20px;
          background: #f3f3f3;
        }
        .check-box {
          hr {
            background: #e2e2e2;
            border: none;
            height: 1px;
          }
          .check {
            width: 816px;
            margin-top: 16px;
            padding-left: 20px;
            // overflow: hidden;
            .choose {
              margin-top: 16px;
              width: 50%;
              height: 50px;
            }
          }
        }
      }
      .btn-blue {
        a {
          width: 200px;
          height: 60px;
          border-radius: 30px;
          font-size: 24px;
          line-height: 60px;
        }
      }
    }
  }
}
</style>

