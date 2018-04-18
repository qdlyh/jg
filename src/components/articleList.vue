<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <!-- <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%">
                <span class="article-text">{{list}}</span>
            </el-table> -->
            <div class="content-box">
                <div class="leftNav">
                    <el-tree :data="nav" :props="defaultProps" @node-click="handleNodeClick" id="el-nav"></el-tree>
                </div>
                <div class="article-list">
                    <h1>
                        <img src="../assets/文章.png" alt=""> {{labelText}}
                    </h1>
                    <div class="article" v-for="(item,index) in list" :key="index">
                        <div class="article-box">
                            <span class="hot">[{{item.hot}}]</span>
                            <a href="javascript:;" @click="go(item)">
                                <div class="text">
                                    <span class="article-text">{{item.title}}</span>
                                </div>
                                <div class="time">
                                    <i style="padding-left:5px;">{{item.updateDate}}</i>
                                    <!-- <i>{{item.time}}</i> -->
                                </div>
                            </a>
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
                    label: '全部文章',
                },
                {
                    label: '公司动态',
                },
                {
                    label: '项目服务',
                    children: [
                        { label: '老年委：肠道保健' },
                        { label: '老年委：医养结合' },
                        { label: '老年委：健康饮水' },
                        { label: '方案：养生养老' },
                        { label: '方案：护理照料' },
                    ]
                },
                {
                    label: '新闻资讯',
                    children: [{
                        label: '政策法规', titleId: 5
                    }, {
                        label: '新闻资讯', titleId: 6
                    }, {
                        label: '夕阳暖专刊', titleId: 7
                    }]
                },
                {
                    label: '健康云',
                    children: [{
                        label: '健康关怀',
                    }, {
                        label: '健康评估',
                    }]
                },
                {
                    label: '技术产品',
                    children: [{
                        label: '技术成果',
                    }, {
                        label: '产品发布',
                    }, {
                        label: '产品维护',
                    }]
                },
                {
                    label: '关于我们',
                    children: [{
                        label: '公司简介',
                    }, {
                        label: '合作伙伴',
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            list: [],
            currentPage: 1,
            labelText: '',
            navNum: '',
        };
    },
    mounted() {
        this.getPage();
    },
    methods: {
        /* 侧边栏 */
        handleNodeClick(data) {
            //console.log(data.label);
            this.labelText = data.label;
            if (data.titleId != undefined) {
                localStorage.setItem('titleId', data.titleId);    /* 存储左侧导航标签id */
                this.currentPage = 1;
                this.getPage();
            }
        },
        /* 每页多少条 */
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.getPage();
        },
        /* 分页数据 */
        getPage() {
            this.navNum = localStorage.getItem('titleId');  /* 获取左侧导航标签id */
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcPageNews?' + 'page=' + this.currentPage + '&size=' + 10 + '&type=' + this.navNum,
            })
                .then(response => {
                    //console.log(response)
                    this.list = response.data.PcPageNews;
                    //console.log(this.list)
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        },
        go(item) {
            localStorage.setItem('articleId', item.uuid);   /* 存储分页内容标签id */
            this.$router.push('/article')
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
        background: #f6f7fb;
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
        font-size: 24px;
        color: #454545;
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
        .article-box {
          display: flex;
          align-items: center;
          .hot {
            font-size: 16px;
            color: #367ccc;
            margin-right: 24px;
            padding-top: 24px;
          }
          a {
            display: inline-block;
            height: 80px;
            .text {
              padding: 24px 16px 0 16px;
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
}
.page {
  text-align: center;
  margin: 50px 0;
}
</style>

