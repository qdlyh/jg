<template>
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
                        <a href="javascript:;" @click="btns(items)">{{items.label}}</a>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box" v-if="items.children.length" style="width: 100%;">
                        <div class="el-div">
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper1" :key="index" @click="btn(item,items)">
                                    {{item.label}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper2" :key="index" @click="btn(item,items)">
                                    {{item.label}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper3" :key="index" @click="btn(item,items)">
                                    {{item.label}}
                                </li>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
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
                                { label: '技术成果', url: '/articleList', uuid: 16 }, { label: '产品发布', url: '/articleList', uuid: 69 }, { label: '产品维护', url: '/articleList', uuid: 69 }
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
                                { label: '健康关怀', url: '/articleList', uuid: 56 }, { label: '健康评估', url: '/articleList', uuid: 57 }
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
                            { label: '政策法规', url: '/articleList', uuid: 5 }, { label: '新闻资讯', url: '/articleList', uuid: 6 }, { label: '夕阳暖专刊', url: '/articleList', uuid: 7 }
                        ]
                    }],
                },
                {
                    label: '下载中心',
                    url: '/introduce',
                    uuid: 10,
                    children: [{
                        scoper1: [
                            { label: 'PC应用', url: '/introduce', uuid: 58 }, { label: 'APP应用', url: '/introduce', uuid: 59 }
                        ]
                    }],
                },
                {
                    label: '关于我们',
                    url: '/cooperation',
                    uuid: 68,
                    children: [{
                        scoper1: [
                            { label: '公司简介', url: '/cooperation', uuid: 69 }, { label: '合作伙伴', url: '', uuid: 16 }
                        ]
                    }],
                }
            ],
        }
    },
    mounted() {
        // console.log(document.documentElement.clientWidth)
        // console.log(document.querySelectorAll('.el-div'))
        // document.querySelectorAll('.el-div').style.width = document.documentElement.clientWidth + 'px'
    },
    methods: {
        btns(items) {
            sessionStorage.setItem('navExpanded', items.uuid);  /* 展开的父ID */
            localStorage.setItem('titleId', items.uuid);       /* 分页请求id */
            localStorage.setItem('labelTitle', items.label);   /* 分页标题 */
            this.$router.push(items.url);
        },
        btn(item,items) {
            sessionStorage.setItem('navExpanded', items.uuid);  /* 展开的父ID */
            sessionStorage.setItem('navChecked', item.uuid);  /* 展开的子ID */
            localStorage.setItem('titleId', item.uuid);/* 分页请求id */
            localStorage.setItem('labelTitle', item.label);   /* 分页标题 */
            this.$router.push(item.url)
        },
    }
}
</script>
<style lang="scss" scoped>
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

