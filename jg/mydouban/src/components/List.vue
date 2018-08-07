<template>
    <div class="list">
        <div class="list-top-text">
            <div class="list-top-left">
                <span>
                    <router-link to="">影院热线
                    </router-link>
                </span>
                <span>
                    <router-link to="">欧美新碟榜
                    </router-link>
                </span>
            </div>
            <div class="list-top-right">
                <span>
                    <router-link to="">注册帐号
                    </router-link>
                </span>
                <span>
                    <router-link to="">登录豆瓣
                    </router-link>
                </span>
            </div>
        </div>
        <div class="list-content-box">
            <div class="list-content" v-for="(item,index) in list" :key="index">
                <router-link to="">
                    <div class="list-content-text">
                        <h3 class="list-title">{{item.title}}</h3>
                        <p class="list-text">{{item.text}}</p>
                    </div>
                    <img class="list-title-img" src="../images/2efa2c1d1c5f87d.jpg" alt="">
                    <div class="list-content-bottom">
                        <span>{{item.text2}}</span>
                        <span>{{item.text3}}</span>
                    </div>
                </router-link>
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
          title: '赖声川剧场史诗 《如梦之梦》北京保利',
          text: '话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一,话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一',
          title2: '喜剧2',
          title3: '喜剧3'
        },
        {
          title: '赖声川剧场史诗 《如梦之梦》北京保利',
          text: '话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一,话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一',
          title2: '喜剧2',
          title3: '喜剧3'
        },
        {
          title: '赖声川剧场史诗 《如梦之梦》北京保利',
          text: '话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一,话剧《如梦之梦》是21世纪初期华人剧场最受瞩目的话剧之一',
          title2: '喜剧2',
          title3: '喜剧3'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin: 10% auto;
}
.list-top-text {
  text-align: center;
  span {
    display: inline-block;
    background: #f6f6f6;
    width: 49%;
    height: 5rem;
    text-align: center;
    margin: 0.2rem;
  }
  a {
    color: #464646;
    font-size: 1.6rem;
    line-height: 5rem;
  }
  .list-top-left {
    // display: flex;
  }
  .list-top-right {
    // display: flex;
    // justify-content: flex-end;
  }
}

.list-content-box {
  .list-content {
    padding: 1rem;
    a {
      width: 100%;
      display: block;
    }
    .list-content-text {
      display: inline-block;
      width: 70%;
      overflow: hidden;
      .list-title {
        font-weight: normal;
        font-weight: 500;
        color: #464646;
        font-size: 1.7rem;
      }
      .list-text {
        color: #aaa;
        margin-top: 1rem;
        height: 13rem;
      }
    }
    .list-title-img {
      float: right;
      width: 15rem;
      height: 15rem;
    }
    .list-content-bottom {
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: 1.6rem;
    }
  }
}
</style>





