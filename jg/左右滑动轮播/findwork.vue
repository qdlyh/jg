<template>
  <div>
    <div class="findwork">
      <form action="" id="form">
        <span>市:</span>
        <select v-model="selected">
          <option v-for="(data,index) in cityData" :key="index">
            {{data.title}}
          </option>
        </select>
        <span>区:</span>
        <select v-model="myArea">
          <option v-for="(data,index) in selection" :key="index">
            {{data.text}}
          </option>
        </select>
        <span>类型:</span>
        <select name="" v-model="search">
          <option value="" v-for="(item,index) in searchData" :key="index" :value="item.title">{{item.title}}</option>
        </select>
      </form>
      <span>值：{{selected}}{{myArea}}{{search}}</span>
      <div id="pullTo">
        <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
          <div class="work-list">
            <div class="list-box" v-for="(item,index) in listData" :key="index">
              <router-link to="/mydeliver">
                <span class="left">
                  <img v-lazy="item.src" alt="">
                </span>
                <span class="right">
                  <h3>{{item.title}}</h3>
                  <p class="sign-p">{{item.itemp}}</p>
                  <i>{{item.itemq}}&nbsp;&nbsp;&nbsp;月薪：{{item.itemw}}元</i>
                  <p class="describe">{{item.iteme}}</p>
                  <p>{{item.itemr}}</p>
                  <p style="display: none;">{{item.jz}}</p>
                </span>
              </router-link>
            </div>
          </div>
        </pull-to>
      </div>
      <gotop></gotop>
    </div>
  </div>
</template>
<script>
import gotop from "../../common/gotop";
import PullTo from "vue-pull-to";
export default {
  components: {
    PullTo,
    gotop
  },
  data() {
    return {
      myArea:'',
      search: '所有',
      searchData: [{ title: '所有' }, { title: '全职' }, { title: '兼职' }],
      selected: '城市',
      cityData: [
        {
          title: '城市',
          area: [
            {
              text: '市区'
            },
          ]
        },
        {
          title: '广州市',
          area: [
            {
              text: '市区0'
            },
            {
              text: '天河区'
            },
            {
              text: '白云区'
            },
            {
              text: '海珠区'
            }
          ]
        },
        {
          title: '广州市1',
          area: [
            {
              text: '市区1'
            },
            {
              text: '天河区1'
            },
            {
              text: '白云区1'
            },
            {
              text: '海珠区1'
            }
          ]
        },
        {
          title: '广州市2',
          area: [
            {
              text: '市区2'
            },
            {
              text: '天河区2'
            },
            {
              text: '白云区2'
            },
            {
              text: '海珠区2'
            }
          ]
        }
      ],
      list: [
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '全职'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司1',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '全职'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司2',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '全职'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司全职a',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '兼职'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司b',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '兼职'
        },
      ],
      // list: [
      //   {
      //     src: require('../../images/logo.png'),
      //     title: '嘻嘻哈哈有限公司兼职',
      //     itemp: '合资|100-150|房地产',
      //     itemq: '助理会计',
      //     itemw: '3000-4500',
      //     iteme:
      //       '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
      //     itemr: '广东省广州市白云区鸣泉居',
      //     address: [
      //       {
      //         jz: '城市：佛山市,顺德区：天河,全职'
      //       }
      //     ]
      //   },
      //   {
      //     src: require('../../images/logo.png'),
      //     title: '嘻嘻哈哈有限公司全职',
      //     itemp: '合资|100-150|房地产',
      //     itemq: '助理会计',
      //     itemw: '3000-4500',
      //     iteme:
      //       '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
      //     itemr: '广东省广州市白云区鸣泉居',
      //     address: [
      //       {
      //         jz: '城市：佛山市,顺德区：天河,兼职'
      //       }
      //     ]
      //   }
      // ]
    }
  },
  methods: {
    refresh(loaded) {
      setTimeout(() => {
        //this.dataList.reverse();
        loaded('done');
      }, 2000);
    },
    loadmore(loaded) {
      setTimeout(() => {
        //this.dataList = this.dataList.concat(this.dataList);
        loaded('done');
      }, 2000);
    },
  },
  computed: {
    selection() {
      for (let i = 0; i < this.cityData.length; i++) {
        if (this.cityData[i].title == this.selected) {
          this.myArea = this.cityData[i].area[0].text;
          return this.cityData[i].area;
        }
        this.myArea = this.cityData[i].area[0].text;
      }
    },
    listData() {
      if (this.searchData[0].title == this.search) {
        return this.list;
      }
      var search = this.search
      //console.log(search)
      var all = [];
      if (search) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].jz.toLowerCase().indexOf(search) != -1) {
            //console.log(this.list[i])
            all.push(this.list[i]);
          }
        }
        return all;
      }
      return this.list;
    }
    // listData() {
    //   var search = this.search
    //   if (search) {
    //     return this.list.filter(function(product) {
    //       console.log(product.jz)
    //       return product.jz.toLowerCase().indexOf(search) > -1
    //     })
    //   }
    //   return this.list
    // }
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;

#pullTo {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

.findwork {
  #form {
    background: #fff;
    height: 50px;
    line-height: 50px;
    span {
      color: $text;
      font-size: 14px;
      padding: 0 7px;
    }
    select {
      width: 20%;
      height: 30px;
      border: none;
      border: 0.5px solid #ccc;
    }
  }
  .work-list {
    padding: 10px;
    div:first-child {
      margin-top: 0px;
    }
    .list-box {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
      margin-top: 10px;
      a {
        display: flex;
        justify-content: space-between;
      }
      h3 {
        font-weight: normal;
        font-size: 16px;
        color: $text;
        margin-top: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      p {
        color: $text;
        font-size: 12px;
        margin: 3px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      i {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 14px;
        color: #928a75;
      }
      .left {
        display: flex;
        align-items: center;
        padding: 10px;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .describe {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding-left: 20px;
      }
      .sign-p {
        padding-left: 20px;
      }
    }
  }
}
</style>


