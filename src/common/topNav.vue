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
                        <a href="javascript:;">{{items.label}}</a>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <li v-for="(item,index) in items.children" :key="index" @click="btn(item)">{{item.label}}</li>
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
                //     children: []
                // },
                {
                    label: '项目服务',
                    children: [
                        {
                            label: '华夏：健康饮水', num: 1,
                        }, {
                            label: '华夏：医养结合', num: 2
                        }, {
                            label: '华夏：健康饮水', num: 3
                        },
                        {
                            label: '申请：技术服务', num: 4,
                        }, {
                            label: '申请：护理培训', num: 5
                        }, {
                            label: '方案：养生养老', num: 6
                        },
                        {
                            label: '方案：护理照料', num: 7
                        }
                    ],
                },
                {
                    label: '技术产品',
                    children: [
                        { label: '技术成果' }, { label: '产品发布' }, { label: '产品维护' }
                    ],
                },
                {
                    label: '健康云',
                    children: [
                        { label: '健康关怀' }, { label: '健康评估' }
                    ],
                },
                {
                    label: '新闻资讯',
                    children: [{
                        label: '政策法规', num: 5,
                    }, {
                        label: '新闻资讯', num: 6
                    }, {
                        label: '夕阳暖专刊', num: 7
                    }],
                },
                {
                    label: '下载中心',
                    children: [
                        { label: 'PC应用', num: 8, }, { label: 'APP应用', num: 9, }
                    ],
                },
                {
                    label: '关于我们',
                    children: [
                        { label: '公司简介' }, { label1: '合作伙伴' }
                    ],
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
        btn(item) {
            console.log(item)
        },
        go() {
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcPageNews?' + 'page=' + 10 + '&size=' + 1 + '&type=' + this.labelText,
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        }
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
  width: 100vw;
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
  margin-top: 1px;
}
</style>

