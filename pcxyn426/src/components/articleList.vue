<template>
    <div>
        <div class="content">
            <topNav @navId="change"></topNav>
            <div class="content-box">
                <div class="leftNav">
                    <el-tree :data="leftNav" :props="defaultProps" @node-collapse="collapse" @node-click="handleNodeClick" id="el-nav">
                        <!-- :default-expanded-keys="[navParent]" :default-checked-keys="[navFind]" node-key="type" -->
                    </el-tree>
                </div>
                <div class="article-list">
                    <h1>
                        <img src="../assets/文章.png" alt=""> {{labelText}}
                    </h1>
                    <div class="article-content">
                        <!-- <div v-show="!list.length" class="list-err">暂时没有找到相关数据！</div> -->
                            <div class="article" v-for="(item,index) in list" :key="index">
                                <div class="article-box">
                                    <!-- <span class="hot">[{{item.title}}]</span> -->
                                    <a href="javascript:;" @click="go(item)">
                                        <div class="text">
                                            <span class="article-text">{{item.title}}</span>
                                        </div>
                                        <div class="time">
                                            <i style="padding-left:5px;">{{item.modifyDate}}</i>
                                            <!-- <i>{{item.time}}</i> -->
                                        </div>
                                    </a>
                                </div>
                            </div>
                        
                    </div>
                    <div class="block page" v-if="list.length">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="dataTotal">
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
            leftNav: [
                // {
                //     label: '全部文章',
                // },
                // {
                //     label: '公司动态',
                // },
                {
                    label: '项目服务',
                    //type: 52,
                    children: [{
                        label: '华夏：肠道保健',
                        type: 21,
                        typeUrl: 'getPcProjectService?',
                        leftNavUrl: 'getPcProjectServiceList?',
                    }, {
                        label: '华夏：医养结合',
                        type: 51,
                        typeUrl: 'getPcProjectService?',
                        leftNavUrl: 'getPcProjectServiceList?',
                    }, {
                        label: '华夏：健康饮水',
                        type: 66,
                        typeUrl: 'getPcProjectService?',
                        leftNavUrl: 'getPcProjectServiceList?',
                    }, {
                        label: '方案：养生养老',
                        type: 67,
                        typeUrl: 'getPcProjectService?',
                        leftNavUrl: 'getPcProjectServiceList?',
                    }, {
                        label: '方案：护理照料',
                        type: 72,
                        typeUrl: 'getPcProjectService?',
                        leftNavUrl: 'getPcProjectServiceList?',
                    },
                    ]
                },
                {
                    label: '技术产品',
                    //type: 8,
                    children: [{
                        label: '技术成果',
                        type: 53,
                        typeUrl: 'getPcTechProducts?',
                        leftNavUrl: 'getPcTechProductsList?',
                    }, {
                        label: '产品发布',
                        type: 54,
                        typeUrl: 'getPcTechProducts?',
                        leftNavUrl: 'getPcTechProductsList?',
                    }, {
                        label: '产品维护',
                        type: 55,
                        typeUrl: 'getPcTechProducts?',
                        leftNavUrl: 'getPcTechProductsList?',
                    }]
                },
                {
                    label: '健康云',
                    //type: 9,
                    children: [{
                        label: '健康关怀',
                        type: 56,
                        typeUrl: 'getPcHealthAssessment?',
                        leftNavUrl: 'getPcHealthAssessmentList?',
                    }, {
                        label: '健康评估',
                        type: 57,
                        typeUrl: 'getPcHealthAssessment?',
                        leftNavUrl: 'getPcHealthAssessmentList?',
                    }]
                },
                {
                    label: '新闻资讯',
                    //type: 4,
                    children: [{
                        label: '政策法规',
                        type: 5,
                        typeUrl: 'getPcNewsByUuid?',
                        leftNavUrl: 'getPcPageNews?',
                    }, {
                        label: '新闻资讯',
                        type: 6,
                        typeUrl: 'getPcNewsByUuid?',
                        leftNavUrl: 'getPcPageNews?',
                    }, {
                        label: '夕阳暖专刊',
                        type: 7,
                        typeUrl: 'getPcNewsByUuid?',
                        leftNavUrl: 'getPcPageNews?',
                    }]
                },
                // {
                //     label: '关于我们',
                //     type: 68,
                //     children: [{
                //         label: '公司简介',
                //         type: 69
                //     }, {
                //         label: '合作伙伴',
                //         type: 16
                //     }]
                // }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            loading: false,
            list: [],
            dataTotal: null,//'分页总页数'
            leftNavUrl: '',//'不同表的地址'
            //Leftflag: '',
            currentPage: 1,    //当前页数
            labelText: '',     //导航标题
            leftNavId: '',     //侧边导航id
            navParent: '',   //展开父id
            navFind: ''     //展开子id
        };
    },
    mounted() {

        this.navParent = sessionStorage.getItem('navParent')   /* 展开左侧分栏父 */
        this.navFind = sessionStorage.getItem('navFind')    /* 展开左侧分栏子 */
        this.labelText = localStorage.getItem('labelTitle')  /* 分页文章标题 */
        this.leftNavUrl = localStorage.getItem('leftNavUrl')    /* 因为需要手动点击才触发，而刷新页面就不点击了，所以存起来根据数字请求数据 */
        this.getPage();
    },
    methods: {
        /*  头部导航栏 */
        change(data) {
            //console.log(data)
            if (data.type != undefined) {
                this.labelText = data.label;
            }
            this.leftNavUrl = data.leftNavUrl;
            /* 子菜单栏没有children所以用作判断父与子的赋值 */
            // if (data.children != undefined) {
            //     this.navParent = data.type;  /* 展开的父ID */
            // } else {
            //     this.navFind = data.type;  /* 展开的子ID */
            // }
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/' + data.leftNavUrl + 'page=' + this.currentPage + '&size=' + 10 + '&websiteId=' + data.type,
            })
                .then(response => {
                    //console.log(response)
                    this.list = response.data.Pc;
                    this.dataTotal = response.data.Total;
                    //console.log(this.list)
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        },

        collapse() {
            /* 修改选中节点回收时自动展开bug */
            this.navParent = '';
            this.navFind = '';
        },
        /* 侧边栏 */
        handleNodeClick(data) {
            // console.log(data);           
            localStorage.setItem('labelTitle', data.label);   /* 左侧菜单栏标题 */
            localStorage.setItem('typeUrl', data.typeUrl); /* 左侧菜单栏请求变化地址,用于文章页面article根据请求内容变化地址 */
            localStorage.setItem('leftNavUrl', data.leftNavUrl) /*左侧菜单栏请求变化地址,用于文章页面article根据请求左边菜单栏内容变化地址  */
            this.leftNavUrl = data.leftNavUrl;                 /* 根据左侧菜单不同表变化请求地址 */                 /* 左侧菜单栏标题 */
            if (data.type != undefined) {
                this.labelText = data.label;
                localStorage.setItem('titleId', data.type);    /* 存储左侧导航标签id */
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
            //console.log(this.leftNavUrl)
            this.leftNavId = localStorage.getItem('titleId');  /* 获取左侧导航标签id */
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/' + this.leftNavUrl + 'page=' + this.currentPage + '&size=' + 10 + '&websiteId=' + this.leftNavId,
            })
                .then(response => {
                    console.log(response)
                    this.list = response.data.Pc;
                    this.dataTotal = response.data.Total;
                    //console.log(this.list);
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        },
        go(item) {
            //console.log(item)
            localStorage.setItem('articleId', item.uuid);   /* 存储分页内容标签id */
            //localStorage.setItem('parentId', item.parentId);   /* 存储分页内容标签id */
            localStorage.setItem('parentId_websiteId', item.websiteId);  //根据左侧导航标签id用作请求文章内容
            if (this.leftNavUrl == 'getPcHealthAssessmentList?') {
                this.$router.push('/survey');
            } else {
                this.$router.push('/article');
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.el-tree {
  margin-top: 10px;
}
.list-err {
  height: 500px;
  padding-top: 200px;
  font-size: 24px;
  color: #ccc;
  text-align: center;
}
.content {
  background: #f3f3f3;
  .content-box {
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    .leftNav {
      min-width: 300px;
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
      .article-content {
        min-height: 500px;
        .article {
          .article-box {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            .hot {
              font-size: 14px;
              color: #367ccc;
              margin-right: 14px;
              padding-top: 14px;
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

/* 头部导航 */
.nav {
  height: 80px;
  background: #fff;
  .nav-box {
    min-width: 1200px;
    overflow: hidden;
    .logo {
      min-width: 376px;
      float: left;
      padding: 0 13% 0 15%;
      line-height: 80px;
      img {
        width: 60px;
        height: 60px;
        vertical-align: middle;
      }
    }
  }
}
[class*='el-col-'] {
  float: none;
}
.el-box {
  background: #f3f3f3;
}
.go-index {
  a {
    color: #676767;
    &:hover {
      background: transparent;
      color: #0374bf;
      transition: 0.3s;
    }
  }
}
.el-div {
  display: flex;
  padding-left: 25%;
  ul {
    padding: 10px;
    display: block;
    .active-one {
      font-size: 18px;
      color: #0374bb;
      margin-bottom: 20px;
    }
    li {
      margin-right: 50px;
      color: #676767;
      font-size: 14px;
      cursor: pointer;
      height: 50px;
      &:hover {
        background: transparent;
        color: #0374bf;
        transition: 0.3s;
      }
    }
    li:first-child {
      margin-top: 6px;
    }
  }
}
.el-dropdown {
  margin-left: 30px;
  line-height: 80px;
  font-size: 16px;
  span {
    padding: 0 5px;
    &:hover {
      color: #0374bf;
      transition: 0.3s;
    }
  }
  a {
    color: #454545;
    &:hover {
      color: #0374bf;
      transition: 0.3s;
    }
  }
}

.el-icon-arrow-down {
  display: none;
}
.popper__arrow {
  display: none !important;
}
.el-popper[x-placement^='bottom'] {
  margin-top: 0px;
}
</style>