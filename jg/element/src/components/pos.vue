<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width=100%;">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="65px"></el-table-column>
              <el-table-column prop="price" label="金额" width="65px"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="deleteGoods(scope.row)">删除</el-button>
  
                  <el-button type="text" size="small" @click="addList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量:</small>{{totalCount}}
              <small>金额:</small>{{totalMoney}}元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteArr()">删除所有</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
  
      <!--右侧上方商品展示-->
      <el-col :span='17'>
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul v-for="goods in oftenGoods" @click="addList(goods)">
              <li>
                <span>{{goods.goodsName}}</span>
                <span class="o-price">{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
  
        <!--右侧下方商品-->
        <div class="goods-type">
  
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class='cookList' v-for="goods in type0Goods" @click="addList(goods)">
                  <li>
                    <span class="foodImg">
                      <span class="foodImg">
                        <img :src="goods.goodsImg" width="100%">
                      </span>
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList' v-for="goods in type1Goods" @click="addList(goods)">
                <li>
                  <span class="foodImg">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList' v-for="goods in type2Goods" @click="addList(goods)">
                <li>
                  <span class="foodImg">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList' v-for="goods in type3Goods" @click="addList(goods)">
                <li>
                  <span class="foodImg">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                  </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
  
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'pos',
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0,
    }
  },
  //获取高度左边高度
  //插入商品，1商品存在插入数量，2不存在插入新一行
  //删除单个商品
  //计算商品金额
  //删除所有商品
  //结账
  mounted() {
    let orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px'
  },
  methods: {
    addList(goods) {
      this.totalCount = 0;
      this.totalMoney = 0;
      let ifHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId)
        if (this.tableData[i].goodsId == goods.goodsId) {
          ifHave = true
        }
      }
      if (ifHave) {
        let arr = this.tableData.filter(add => add.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newName = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 }
        this.tableData.push(newName);
      }
      this.MoneyGoods()
    },
    //删除单个商品
    deleteGoods(goods) {
      this.tableData = this.tableData.filter(add => add.goodsId != goods.goodsId)
      this.MoneyGoods()
    },
    //计算金额
    MoneyGoods() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + (element.count * element.price)
        })
      }
    },
    //删除所有商品
    deleteArr() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //结账
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message.success('结账成功')
      } else {
        this.$message.error('请添加商品')
      }

    }


  },
  //created是钩子函数
  created() {
    //右侧上方商品
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      //.then请求成功
      .then(response => {
        //console.log(response)
        this.oftenGoods = response.data;
      })
      //.catch请求失败
      .catch(error => {
        //console.log(error);
        console.log('不能访问')
      })
    //右侧下方商品
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response => {
        //console.log(response);
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch(error => {
        //console.log(error);
        console.log('不能访问')
      })
  }
}

</script>

<style scoped>
.pos-order {
  background: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.div-btn {
  margin-top: 10px;
  text-align: center;
}

.title {
  height: 20px;
  border-bottom: 1px solid #D3DCE6;
  background-color: #F9FAFC;
  padding: 10px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #E5E9F2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}

.o-price {
  color: #58B7FF;
}

.cookList li {
  list-style: none;
  width: 17rem;
  border: 1px solid #E5E9F2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}

.goods-type {
  height: auto;
  overflow: hidden;
  border-top: 1px solid #d3dce6;
}

.totalDiv {
  background: #ffffff;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}



/* 右侧下方商品清除浮动 */

.goods-type {
  clear: both;
}

.goods-type img {
  width: 60px;
}

.cookList li span {

  display: block;
  float: left;
}

.foodImg {
  width: 25%;
}

.foodName {
  font-size: 18px;
  padding-top: 5px;
  color: brown;
  line-height: 50px;
}

.foodPrice {
  font-size: 16px;
  padding-left: 30px;
  padding-top: 5px;
  line-height: 50px;
}

/* 侧偏栏 */

</style>
