<template>
    <div>
        <div class="content">
            <div class="nav">
                <div class="nav-box">
                    <span class="logo">
                        <a href="javascript:;">
                            <img src="../assets/logo.png" alt="">
                        </a>
                    </span>
                    <el-col>
                        <span class="go-index">
                            <router-link to="/">首页</router-link>
                        </span>
                        <!-- v-if="items.children.length" -->
                        <el-dropdown v-for="(items,index) in nav" :key="index">
                            <span class="el-dropdown-link">
                                <a href="javascript:;" @click="topNavTitle(items)">{{items.label}}</a>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="el-box" v-if="items.children.length" style="width: 100%;">
                                <div class="el-div">
                                    <ul>
                                        <li v-for="(item,index) in items.children[0].scoper1" :key="index" @click="topNavText(item,items)">
                                            {{item.label}}
                                        </li>
                                    </ul>
                                    <ul>
                                        <li v-for="(item,index) in items.children[0].scoper2" :key="index" @click="topNavText(item,items)">
                                            {{item.label}}
                                        </li>
                                    </ul>
                                    <ul>
                                        <li v-for="(item,index) in items.children[0].scoper3" :key="index" @click="topNavText(item,items)">
                                            {{item.label}}
                                        </li>
                                    </ul>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </div>
            </div>

            <div class="content-box">
                <div class="leftNav">
                    <el-tree :data="leftNav" :props="defaultProps" @node-collapse="collapse" @node-click="handleNodeClick" id="el-nav">
                        <!-- :default-expanded-keys="[navExpanded]" :default-checked-keys="[navChecked]" show-checkbox node-key="uuid" -->
                    </el-tree>
                </div>
                <div class="article-list">
                    <h1>
                        <img src="../assets/文章.png" alt=""> {{labelText}}
                    </h1>
                    <div v-if="!list.length" class="list-err">暂时没有找到数据</div>
                    <div class="article-content" v-if="list.length">
                        <div class="article" v-for="(item,index) in list" :key="index">
                            <div class="article-box">
                                <!-- <span class="hot">[{{item.title}}]</span> -->
                                <a href="javascript:;" @click="go(item)">
                                    <div class="text">
                                        <span class="article-text">{{item.text}}</span>
                                    </div>
                                    <div class="time">
                                        <i style="padding-left:5px;">{{item.updateDate}}</i>
                                        <!-- <i>{{item.time}}</i> -->
                                    </div>
                                </a>
                                <hr/>
                            </div>
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
                // {
                //     label: '首页',
                //     url: '/',
                //     children: []
                // },
                {
                    label: '项目服务',
                    url: '/articleList',
                    uuid: 52,
                    children: [
                        {
                            scoper1: [
                                {
                                    label: '华夏：健康饮水',
                                    url: '/articleList',
                                    uuid: 66,
                                }, {
                                    label: '华夏：医养结合',
                                    url: '/articleList',
                                    uuid: 51,
                                }, {
                                    label: '华夏：肠道保健',
                                    url: '/articleList',
                                    uuid: 21,
                                },
                            ],
                            scoper2: [
                                {
                                    label: '申请：技术服务',
                                    url: '/serveForm',
                                }, {
                                    label: '申请：护理培训',
                                    url: '/nurseForm',
                                },
                            ],
                            scoper3: [
                                {
                                    label: '方案：养生养老',
                                    url: '/articleList',
                                    uuid: 67,
                                },
                                {
                                    label: '方案：护理照料',
                                    url: '/articleList',
                                    uuid: 72,
                                }
                            ]
                        }
                    ],
                },
                {
                    label: '技术产品',
                    url: '/articleList',
                    uuid: 8,
                    children: [
                        {
                            scoper1: [
                                { label: '技术成果', url: '/articleList', uuid: 16 },
                                { label: '产品发布', url: '/articleList', uuid: 69 },
                                { label: '产品维护', url: '/articleList', uuid: 69 }
                            ]
                        }
                    ],
                },
                {
                    label: '健康云',
                    url: '/articleList',
                    uuid: 9,
                    children: [
                        {
                            scoper1: [
                                { label: '健康关怀', url: '/articleList', uuid: 56 },
                                { label: '健康评估', url: '/articleList', uuid: 57 }
                            ]
                        }
                    ],
                },
                {
                    label: '新闻资讯',
                    url: '/articleList',
                    uuid: 4,
                    children: [{
                        scoper1: [
                            { label: '政策法规', url: '/articleList', uuid: 5 },
                            { label: '新闻资讯', url: '/articleList', uuid: 6 },
                            { label: '夕阳暖专刊', url: '/articleList', uuid: 7 }
                        ]
                    }],
                },
                {
                    label: '下载中心',
                    url: '/introduce',
                    uuid: 10,
                    children: [{
                        scoper1: [
                            { label: 'PC应用', url: '/introduce', uuid: 58 },
                            { label: 'APP应用', url: '/introduce', uuid: 59 }
                        ]
                    }],
                },
                {
                    label: '关于我们',
                    url: '/cooperation',
                    uuid: 68,
                    children: [{
                        scoper1: [
                            { label: '公司简介', url: '/cooperation', uuid: 69 },
                            { label: '合作伙伴', url: '', uuid: 16 }
                        ]
                    }],
                }
            ],

            leftNav: [
                {
                    label: '全部文章',
                },
                {
                    label: '公司动态',
                },
                {
                    label: '项目服务',
                    uuid: 52,
                    children: [
                        { label: '华夏：肠道保健', uuid: 21 },
                        { label: '华夏：医养结合', uuid: 51 },
                        { label: '华夏：健康饮水', uuid: 66 },
                        { label: '方案：养生养老', uuid: 67 },
                        { label: '方案：护理照料', uuid: 72 },
                    ]
                },
                {
                    label: '技术产品',
                    uuid: 8,
                    children: [{
                        label: '技术成果',
                        uuid: 53
                    }, {
                        label: '产品发布',
                        uuid: 54
                    }, {
                        label: '产品维护',
                        uuid: 55
                    }]
                },
                {
                    label: '健康云',
                    uuid: 9,
                    children: [{
                        label: '健康关怀', uuid: 56
                    }, {
                        label: '健康评估', uuid: 57
                    }]
                },
                {
                    label: '新闻资讯',
                    uuid: 4,
                    children: [{
                        label: '政策法规', uuid: 5
                    }, {
                        label: '新闻资讯', uuid: 6
                    }, {
                        label: '夕阳暖专刊', uuid: 7
                    }]
                },
                // {
                //     label: '关于我们',
                //     uuid: 68,
                //     children: [{
                //         label: '公司简介',
                //         uuid: 69
                //     }, {
                //         label: '合作伙伴',
                //         uuid: 16
                //     }]
                // }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            list: [],
            currentPage: 1,    //当前页数
            labelText: '',     //导航标题
            leftNavId: '',     //侧边导航id
            navExpanded: '',   //展开父id
            navChecked: ''     //展开子id
        };
    },
    mounted() {
        this.navExpanded = sessionStorage.getItem('navExpanded')   /* 展开左侧分栏父 */
        this.navChecked = sessionStorage.getItem('navChecked')    /* 展开左侧分栏子 */

        this.getPage();

        /* 分页标题 */
        if (localStorage.getItem('labelTitle')) {
            this.labelText = localStorage.getItem('labelTitle')
        }
    },
    methods: {
        /*  头部导航栏父栏 */
        topNavTitle(items) {
            this.navExpanded = items.uuid;   /* 展开父 */
            this.labelText = items.label;
            localStorage.setItem('labelTitle', items.label);  /* 分页文章标题 */
            localStorage.setItem('titleId', items.uuid);    /* 请求分页文章的uuid */
            this.$router.push(items.url);
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcPageNews?' + 'page=' + this.currentPage + '&size=' + 10 + '&type=' + items.uuid,
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
        /*  头部导航栏子栏 */
        topNavText(item, items) {
            this.navChecked = item.uuid;     /* 展开父 */
            this.navExpanded = items.uuid;   /* 展开子 */
            this.labelText = item.label;
            localStorage.setItem('labelTitle', item.label);   /* 分页文章标题 */
            localStorage.setItem('titleId', item.uuid);    /* 请求分页文章的uuid */
            this.$router.push(item.url);
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcPageNews?' + 'page=' + this.currentPage + '&size=' + 10 + '&type=' + item.uuid,
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

        collapse() {
            /* 修改选中节点回收时自动展开bug */
            this.navExpanded = null;
            this.navChecked = null;
        },
        /* 侧边栏 */
        handleNodeClick(data) {
            // console.log(data.label);
            this.labelText = data.label;
            localStorage.setItem('labelTitle', data.label);
            if (data.uuid != undefined) {
                localStorage.setItem('titleId', data.uuid);    /* 存储左侧导航标签id */
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
            this.leftNavId = localStorage.getItem('titleId');  /* 获取左侧导航标签id */
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcPageNews?' + 'page=' + this.currentPage + '&size=' + 10 + '&type=' + this.leftNavId,
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
      .article-content {
          min-height: 500px;
        .article {
          .article-box {
            display: flex;
            align-items: center;
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

