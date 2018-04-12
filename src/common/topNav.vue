<template>
    <div class="nav">
        <!-- <ul class="box">
            <li class="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
                <li class="nav-list">
                    <ul>
                        <li v-for="(item,index) in nav0.list0" :key="index">
                            <router-link to="/">{{item.name}}</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in nav0.list1" :key="index">
                            <router-link to="/">{{item.name}}</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in nav0.list2" :key="index">
                            <router-link to="/">{{item.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/">首页</router-link>
            </li>
        </ul> -->
        <div class="nav-box">
            <span class="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="">
                </router-link>
            </span>
            <el-col>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                            </ul>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-box">
                        <div class="el-div">
                            <ul>
                                <router-link to="/">
                                    <el-dropdown-item class="active-one">黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
                                <router-link to="/">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                </router-link>
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
            nav0: {
                list0: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }],
                list1: [{ 'link': '/', 'name': '首页首页2' }, { 'link': '/', 'name': '首页2' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }],
                list2: [{ 'link': '/', 'name': '首页首页3' }, { 'link': '/', 'name': '首页3' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            }
            // nav: [
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页133' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }],
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页31' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }]
            //     },
            //     {                    name: '首页',
            //         list: [{ 'link': '/', 'name': '首页首页1' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }, { 'link': '/', 'name': '首页' }],
            //     },
            // ],
        }
    },
    mounted() {
        // console.log(document.documentElement.clientWidth)
        // console.log(document.querySelectorAll('.el-div'))
        // document.querySelectorAll('.el-div').style.width = document.documentElement.clientWidth + 'px'
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
  // .box {
  //   //max-width: 1200px;
  //   margin: 0 auto;
  //   position: relative;
  //   li {
  //     float: left;
  //     margin-left: 64px;
  //     line-height: 80px;
  //     a {
  //       color: #000;
  //     }
  //   }
  // }
  // .nav-list {
  //   width: 100%;
  //   background: #f3f3f3;
  //   position: absolute;
  //   top: 80px;
  //   padding-left: 25%;
  //   margin-left: 0px !important;
  //   display: flex;
  //   display: none;
  //   ul {
  //     :first-child a {
  //       color: #0374bf;
  //       margin: 32px 0 44px 0;
  //     }
  //     li {
  //       margin-right: 80px;
  //       float: none !important;
  //       height: 60px;
  //       a {
  //         color: #676767;
  //       }
  //     }
  //   }
  // }
}
[class*='el-col-'] {
  float: none;
}
.el-box {
  background: #f3f3f3;
}
.el-div {
  display: flex;
  width: 100vw;
  padding-left: 25%;
  ul {
    padding: 10px;
    .active-one {
      font-size: 18px;
      color: #0374bb;
      margin-bottom: 20px;
    }
    li {
      width: 200px;
      color: #676767;
      font-size: 14px;
      &:hover {
        background: transparent;
      }
    }
    li:first-child {
      margin-top: 6px;
    }
  }
}
.el-dropdown {
  margin-left: 30px;
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  color: #454545;
  cursor: pointer;
  span {
    padding: 5px;
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

