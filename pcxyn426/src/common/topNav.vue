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
                        <a href="javascript:;" @click="navBtn(items)">{{items.label}}</a>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box" v-if="items.children.length" style="width: 100%;">
                        <div class="el-div">
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper1" :key="index" @click="navBtn(item,items)">
                                    {{item.label}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper2" :key="index" @click="navBtn(item,items)">
                                    {{item.label}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item,index) in items.children[0].scoper3" :key="index" @click="navBtn(item,items)">
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
                    //type: 52,
                    children: [
                        {
                            scoper1: [
                                {
                                    label: '华夏：健康饮水',
                                    url: '/articleList',
                                    type: 66,
                                    typeUrl: 'getPcProjectService?',
                                    leftNavUrl: 'getPcProjectServiceList?',
                                }, {
                                    label: '华夏：医养结合',
                                    url: '/articleList',
                                    type: 51,
                                    typeUrl: 'getPcProjectService?',
                                    leftNavUrl: 'getPcProjectServiceList?',
                                }, {
                                    label: '华夏：肠道保健',
                                    url: '/articleList',
                                    type: 21,
                                    typeUrl: 'getPcProjectService?',
                                    leftNavUrl: 'getPcProjectServiceList?',
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
                                    type: 67,
                                    typeUrl: 'getPcProjectService?',
                                    leftNavUrl: 'getPcProjectServiceList?',
                                },
                                {
                                    label: '方案：护理照料',
                                    url: '/articleList',
                                    type: 72,
                                    typeUrl: 'getPcProjectService?',
                                    leftNavUrl: 'getPcProjectServiceList?',
                                }
                            ]
                        }
                    ],
                },
                {
                    label: '技术产品',
                    url: '/articleList',
                    //type: 8,
                    children: [
                        {
                            scoper1: [
                                {
                                    label: '技术成果',
                                    url: '/articleList',
                                    type: 53,
                                    typeUrl: 'getPcTechProducts?',
                                    leftNavUrl: 'getPcTechProductsList?',
                                }, {
                                    label: '产品发布',
                                    url: '/articleList',
                                    type: 54,
                                    typeUrl: 'getPcTechProducts?',
                                    leftNavUrl: 'getPcTechProductsList?',
                                }, {
                                    label: '产品维护',
                                    url: '/articleList',
                                    type: 55,
                                    typeUrl: 'getPcTechProducts?',
                                    leftNavUrl: 'getPcTechProductsList?',
                                }
                            ]
                        }
                    ],
                },
                {
                    label: '健康云',
                    url: '/articleList',
                    //type: 9,
                    children: [
                        {
                            scoper1: [
                                {
                                    label: '健康关怀',
                                    url: '/articleList',
                                    type: 56,
                                    typeUrl: 'getPcHealthAssessment?',
                                    leftNavUrl: 'getPcHealthAssessmentList?',
                                }, {
                                    label: '健康评估',
                                    url: '/articleList',
                                    type: 57,
                                    typeUrl: 'getPcHealthAssessment?',
                                    leftNavUrl: 'getPcHealthAssessmentList?',
                                }
                            ]
                        }
                    ],
                },
                {
                    label: '新闻资讯',
                    url: '/articleList',
                    //type: 4,
                    children: [{
                        scoper1: [
                            {
                                label: '政策法规',
                                url: '/articleList',
                                type: 5,
                                typeUrl: 'getPcNewsByUuid?',
                                leftNavUrl: 'getPcPageNews?',
                            }, {
                                label: '新闻资讯',
                                url: '/articleList',
                                type: 6,
                                typeUrl: 'getPcNewsByUuid?',
                                leftNavUrl: 'getPcPageNews?',
                            }, {
                                label: '夕阳暖专刊',
                                url: '/articleList',
                                type: 7,
                                typeUrl: 'getPcNewsByUuid?',
                                leftNavUrl: 'getPcPageNews?',
                            }
                        ]
                    }],
                },
                {
                    label: '下载中心',
                    url: '/introduce',
                    //type: 10,
                    children: [{
                        scoper1: [
                            { label: 'PC应用', url: '/introduce', type: 58 }, { label: 'APP应用', url: '/introduce', type: 59 }
                        ]
                    }],
                },
                {
                    label: '关于我们',
                    url: '/cooperation',
                    //type: 68,
                    children: [{
                        scoper1: [
                            { label: '公司简介', url: '/cooperation', type: 69 }, { label: '合作伙伴', url: '', type: 16 }
                        ]
                    }],
                }
            ],
        }
    },
    methods: {
        navBtn(data) {
            //console.log(data)
            // if (data.children != undefined) {
            //     /* 子菜单栏没有children所以用作判断父与子的赋值 */
            //     sessionStorage.setItem('navParent', data.type);  /* 展开的父ID */
            // } else {
            //     sessionStorage.setItem('navFind', data.type);  /* 展开的子ID */
            // }
            localStorage.setItem('titleId', data.type);       /* 分页请求id */
            localStorage.setItem('labelTitle', data.label);   /* 分页标题 */
            localStorage.setItem('typeUrl', data.typeUrl);  /* 不同表的article文章内容 */
            localStorage.setItem('leftNavUrl', data.leftNavUrl);/* articleList不同请求地址的，包括article左边菜单栏 */

            this.$emit('navId', data); //主动触发navId方法，'type'为向父组件传递的数据
            this.$router.push(data.url);
        },
        // btns(items) {
        //     sessionStorage.setItem('navParent', items.type);  /* 展开的父ID */
        //     localStorage.setItem('titleId', items.type);       /* 分页请求id */
        //     localStorage.setItem('labelTitle', items.label);   /* 分页标题 */
        //     //this.$router.push(items.url);
        //     console.log(items.url)
        // },
        // btn(item, items) {
        //     sessionStorage.setItem('navParent', items.type);  /* 展开的父ID */
        //     sessionStorage.setItem('navFind', item.type);  /* 展开的子ID */
        //     localStorage.setItem('titleId', item.type);/* 分页请求id */
        //     localStorage.setItem('labelTitle', item.label);   /* 分页标题 */
        //     this.$router.push(item.url)
        // },
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

