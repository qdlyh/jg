<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="content-box">
                <div class="leftNav">
                    <router-link to="/">全部文章</router-link>
                    <router-link to="/">公司动态</router-link>
                    <el-tree :data="nav" :props="defaultProps" @node-click="handleNodeClick" id="el-nav"></el-tree>
                </div>
                <div class="article-list">
                    <h1>
                        <img src="../assets/文章.png" alt=""> 新闻资讯
                    </h1>
                    <div class="article" v-for="(item,index) in list" :key="index">
                        <div class="article-box">
                            <router-link to="/">
                                <div class="text">
                                    <span class="hot">[{{item.hot}}]</span>
                                    <span class="article-text">{{item.txt}}</span>
                                </div>
                                <div class="time">
                                    <i style="padding-left:5px;">{{item.date}}</i>
                                    <i>{{item.time}}</i>
                                </div>
                            </router-link>
                            <hr/>
                        </div>
                    </div>
                    <div class="block page">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="list.length">
                        </el-pagination>
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
            nav: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                    }]
                },
                {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                    }, {
                        label: '二级 2-2',
                    }]
                },
                {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                    }, {
                        label: '二级 3-2',
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            list: [
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
                { text: '新闻资讯', hot: '最热新闻', txt: '唉大家阿斯顿哈睡得好爱仕达哈斯', date: '2017-3-3', time: '11:10' },
            ],
            currentPage: 1
        };
    },
    mounted() {
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
    .leftNav {
      width: 300px;
      background: #fff;
      a {
        display: block;
        height: 45px;
        padding-left: 50px;
        color: #454545;
        font-size: 16px;
        line-height: 45px;
      }
      a:hover {
        background: #F6F7FB;
        transition: 0.2s;
      }
      #el-nav {
        color: #454545;
      }
    }
    .article-list {
      min-width: 876px;
      margin-left: 24px;
      background: #fff;
      padding: 30px;
      h1 {
        font-size: 32px;
        color: #454545;
        font: outline;
        font-weight: normal;
        margin-bottom: 20px;
        img {
          width: 55px;
          height: 55px;
          margin-right: 20px;
          vertical-align: middle;
        }
      }
      .article {
        a {
          display: inline-block;
          height: 80px;
          .text {
            padding: 24px 16px 0 16px;
            .hot {
              font-size: 16px;
              color: #367ccc;
              margin-right: 24px;
              padding-top: 24px;
            }
            .article-text {
              color: #454545;
              font-size: 16px;
              padding-top: 24px;
              &:hover {
                color: #2ad0ff;
                transition: 0.3s;
              }
            }
          }
          .time {
            font-size: 14px;
            color: #9c9c9c;
            padding: 10px 0 0 10px;
          }
          hr {
            background: #ccc;
            border: none;
            height: 1px;
          }
        }
      }
    }
  }
}
.page {
  text-align: center;
  margin: 50px 0;
}
</style>

