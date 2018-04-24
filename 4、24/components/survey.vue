<template>
  <div>
    <!-- input动态标签：label的for需要和input的id一致,input的type绑定需要的类型单选or多选等,name每一题的选项都需要一样，和其他大题不能一样 -->
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

        <div class="box">
          <div v-for="(data,index) in titleData" :key="index">
            <h1>{{data.title}}</h1>
            <span class="time">
              <i>{{data.modifyDate}}</i>
              <!-- <i v-for="(item,index) in titleData[0].labels[0]">标签：{{item.text}}</i> -->
            </span>
            <hr/>
            <img v-lazy="data.image" alt="">
            <!-- 健康调查问卷 -->
            <form action="" v-if="data.uuid==1">
              <div class="check-box" v-for="(items,index) in list" :key="index">
                <p class="text">{{items.sort}}.{{items.problem}}</p>
                <div class="choose-box">
                  <label v-for="(item,index) in items.values" :key="index" :for="'male'+item.uuid">
                    <span class="choose-span">
                      <!-- 单选框 -->
                      <input @click="radioBtn(items)" v-if="item.healthValue=='radio'" :type="item.healthValue" :name="'male'+items.sort" :value="item.score" :id="'male'+item.uuid" class="choose">
                      <!-- 多选框 -->
                      <input @click="checkboxBtn(items)" v-if="item.healthValue=='checkbox'" :type="item.healthValue" :name="'male'+items.sort" :value="item.score" :id="'male'+item.uuid" class="choose">
                      <i v-if="item.healthValue=='radio'" class="radioInput"></i>
                      <i v-if="item.healthValue=='checkbox'" class="checkBoxInput"></i>
                      {{item.healthKey}}
                    </span>
                    <textarea name="" @blur="textareaBtn(items)" maxlength="200" placeholder="#请输入您想对我说的话#" v-if="item.healthValue=='textarea'" class="textarea"></textarea>
                  </label>
                </div>
              </div>
              <div class="btn-blue" @click="total()">
                <router-link to="">提交</router-link>
              </div>
            </form>
            <!-- 健康调查文章 -->
            <div v-if="data.uuid==2" style="max-width:800px;">
              <p v-html="data.content"></p>
            </div>
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
      textareaText: '',
      leftNav: [],
      list: [],
      titleData: [],
      uuid: null,
      websiteId: null,
      listCount: '',
      // list: [
      //   {
      //     problem: "你的性别是？",
      //     sort: 1,
      //     required: true,
      //     values: [
      //       {
      //         healthKey: "男",
      //         healthValue: "radio",
      //         score: 10,
      //         uuid: 1
      //       },
      //       {
      //         healthKey: "女",
      //         healthValue: "radio",
      //         score: 10,
      //         uuid: 2
      //       }
      //     ]
      //   },
      //   {
      //     problem: "你爱吃的食物是？",
      //     sort: 2,
      //     required: true,
      //     values: [
      //       {
      //         healthKey: "水果",
      //         healthValue: "checkbox",
      //         score: 9,
      //         uuid: 3
      //       },
      //       {
      //         healthKey: "牛肉",
      //         healthValue: "checkbox",
      //         score: 8,
      //         uuid: 4
      //       },
      //       {
      //         healthKey: "猪肉",
      //         healthValue: "checkbox",
      //         score: 8,
      //         uuid: 5
      //       },
      //       {
      //         healthKey: "白菜",
      //         healthValue: "checkbox",
      //         score: 10,
      //         uuid: 6
      //       }
      //     ]
      //   },
      //   {
      //     problem: "你爱吃的食物是？",
      //     sort: 3,
      //     required: true,
      //     values: [
      //       {
      //         healthKey: "水果",
      //         healthValue: "checkbox",
      //         score: 9,
      //         uuid: 7
      //       },
      //       {
      //         healthKey: "牛肉",
      //         healthValue: "checkbox",
      //         score: 8,
      //         uuid: 8
      //       },
      //       {
      //         healthKey: "猪肉",
      //         healthValue: "checkbox",
      //         score: 8,
      //         uuid: 9
      //       },
      //       {
      //         healthKey: "白菜",
      //         healthValue: "checkbox",
      //         score: 10,
      //         uuid: 10
      //       }
      //     ]
      //   },
      //   {
      //     problem: "你平常做什么运动？",
      //     sort: 4,
      //     required: true,
      //     values: [
      //       {
      //         healthKey: "打球",
      //         healthValue: "radio",
      //         score: 7,
      //         uuid: 11
      //       }
      //     ]
      //   },
      //   {
      //     problem: "你吃饭了吗？",
      //     sort: 5,
      //     required: true,
      //     values: [
      //       {
      //         healthValue: "textarea",
      //         uuid: 12
      //       }
      //     ],
      //   },
      //   {
      //     problem: "你吃饭了吗？",
      //     sort: 6,
      //     required: true,
      //     values: [
      //       {
      //         healthValue: "textarea",
      //         uuid: 13
      //       }
      //     ],
      //   },
      // ],
    }
  },
  mounted() {
    this.uuid = localStorage.getItem('uuid');
    this.websiteId = localStorage.getItem('websiteId');
    /* 左侧菜单栏 */
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHealthAssessmentList',
    })
      .then(response => {
        //console.log(response)
        this.leftNav = response.data.PcHealthAssessmentList;
        //console.log(this.leftNav)
      })
      .catch(error => {
        console.log(error);
      });

    /* 主页内容 */
    this.$ajax({
      method: 'get',
      url: this.psta + '/rest/pc/getPcHealthAssessment?' + 'uuid=' + this.uuid + '&websiteId=' + this.websiteId,
    })
      .then(response => {
        //console.log(response)
        this.list = response.data.PcHealthAssessment[0].columns;
        this.titleData = [response.data.PcHealthAssessment[0]];
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].values[0].healthValue != "textarea") {
            this.list[i].required = true;
            console.log(this.list[i])
          }
        }
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });
  },
  methods: {
    textareaBtn(items) {
      let label = document.querySelectorAll(".check-box")[items.sort - 1]  //根据题目number找到父元素document从0开始所以减去1
      let textarea = label.querySelectorAll(".textarea");         //找到label子元素多选框
      for (let i = 0; i < textarea.length; i++) {
        this.textareaText = textarea[i].value;
        console.log(this.textareaText)
      }
      if (this.textareaText != '') {
        //选中数量count大于1,request就变成false
        items.required = false;
      }
      console.log(items.required)
    },
    /* 单选框 */
    radioBtn(items) {
      console.log(this.list)
      items.required = false;
    },
    /* 多选框 */
    checkboxBtn(items) {
      let count = 0;
      let label = document.querySelectorAll(".check-box")[items.sort - 1]  //根据题目number找到父元素document从0开始所以减去1
      let choose = label.querySelectorAll("input[type=checkbox]");         //找到label子元素多选框
      //console.log(label)
      for (var i = 0; i < choose.length; i++) {
        if (choose[i].checked) {
          //选中数量count大于1request就变成false
          count++;
        } else {
          //没选中就为true
          items.required = true;
        }
      }
      if (count >= 1) {
        //选中数量count大于1,request就变成false
        items.required = false;
      }
      console.log(items.required)
    },
    go(item) {
      localStorage.setItem('uuid', item.uuid)
      localStorage.setItem('websiteId', item.websiteId)
      this.$ajax({
        method: 'get',
        url: this.psta + '/rest/pc/getPcHealthAssessment?' + 'uuid=' + item.uuid + '&websiteId=' + item.websiteId,
      })
        .then(response => {
          //console.log(response)
          this.list = response.data.PcHealthAssessment[0].columns;
          this.titleData = [response.data.PcHealthAssessment[0]];
        })
        .catch(error => {
          console.log(error);
          //alert('网络错误，不能访问');
        });
    },
    total() {
      let choose = document.querySelectorAll(".choose");
      let textarea = document.querySelectorAll(".textarea");
      let num = 0;    //分数总和
      //let count = 0;  //input选中数量
      let text = '';
      let ifHave = this.list.every(({ required }) => !required);  //数组every方法汇总required布尔值是否都为false
      //textarea文本框值
      for (var i = 0; i < choose.length; i++) {
        if (choose[i].checked) {
          //count++;
          //console.log(choose[i].getAttribute("value"));
          num += parseInt(choose[i].getAttribute("value"))
          //console.log(count)
          //console.log(num)
        }
        //text文本框值
        // if (choose[i].type == 'text') {
        //   console.log(choose[i].value);
        // }
      }
      if (ifHave) {
        let formData = new FormData();
        formData.append('uuid', this.uuid);
        formData.append('score', num);
        formData.append('text', this.textareaText);
        this.$ajax({
          method: 'post',
          url: this.psta + '/rest/pc/sendHealthScore',
          data: formData
        })
          .then(response => {
            // console.log(response)
            //console.log('恭喜')
            this.$alert(response.data, '测试结果', {
              confirmButtonText: '确定',
            });
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          });
      } else {
        alert('不能为空')
        console.log(this.list)
      }
    },
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
        margin: 40px 0;
      }
      form {
        .check-box {
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
          .choose-box {
            padding: 10px;
            label {
              display: inline-block;
              width: 50%;
              .choose-span {
                line-height: 40px;
                display: inline-block;
                padding-left: 20px;
              }
              textarea {
                width: 750px;
                height: 200px;
                font-size: 16px;
                &::placeholder {
                  padding: 10px 0 0 20px;
                }
              }
            }
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

input[type='text'] {
  height: 20px;
}

/* 单选美化 */
.choose-span {
  cursor: pointer;
  input[type='radio'] {
    display: none;
  }
  .radioInput {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 10px;
    vertical-align: middle;
    line-height: 1;
  }
  input[type='radio']:checked + .radioInput {
    background-color: #00a1e9;
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 10px;
    vertical-align: middle;
    line-height: 1;
    &::after {
      background-color: #fff;
      border-radius: 100%;
      content: '';
      display: inline-block;
      height: 6px;
      margin-left: 3px;
      margin-bottom: 4px;
      width: 6px;
    }
  }
  .demo--checkbox.radioInput,
  input[type='radio']:checked + .demo--checkbox.radioInput:after {
    border-radius: 0;
  }
  input[type='radio']:checked + .radioInput {
    border: 2px solid #00a1e9;
  }
}

/* 多选美化 */
.choose-span {
  position: relative;
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + .checkBoxInput {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    margin-right: 10px;
    vertical-align: middle;
    &::after {
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      content: ' ';
      top: 0px;
      left: 4px;
      position: absolute;
      width: 4px;
      height: 9px;
      transform: rotate(45deg) scale(0);
      transition: transform 0.2s;
    }
  }

  input[type='checkbox']:checked + .checkBoxInput {
    background-color: #00a1e9;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    &::after {
      content: ' ';
      border-color: #fff;
      transform: rotate(45deg) scale(1);
    }
  }
}
</style>

