<template>
    <div>
        <div class="leftNav">
            <ul>
                <li v-for="(item,index) in list[0].data" :key="index">
                    <router-link to="/">{{item.name}}</router-link>
                </li>
            </ul>
            <div class="wx">
                <p>订阅微信公众号</p>
                <hr/>
                <img v-for="(item,index) in list[0].scopes" :key="index" :src="item.src" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    data: [
                        { name: '文章1文章1文章1文章1文章1文章1文章1文章1' }, { name: '文章2' },
                        { name: '文章3' }, { name: '文章4' },
                        { name: '文章5' }, { name: '文章1' },
                        { name: '文章1' }, { name: '文章1' },
                        { name: '文章1' }, { name: '文章1' },
                    ],
                    scopes: [
                        { src: require('../assets/二维码.png') }
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.leftNav {
  width: 300px;
  background: #fff;
  text-align: center;
  ul {
    li {
      &:hover {
        background: #f6f7fb;
        transition: 0.2s;
      }
      a {
        width: 240px;
        height: 45px;
        margin: 0 auto;
        display: inline-block;
        color: #454545;
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        line-height: 45px;
      }
    //   a:hover {
    //     color: #2ad0ff;
    //     transition: 0.3s;
    //   }
    }
  }
//   ul li:nth-child(even) {
//     background: #eeeeee;
//   }
  .wx {
    width: 240px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 50px;
    p {
      text-align: left;
      font-size: 14px;
      color: #212121;
    }
    hr {
      margin: 10px 0 20px 0;
      background: #e2e2e2;
      border: none;
      height: 1px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>

