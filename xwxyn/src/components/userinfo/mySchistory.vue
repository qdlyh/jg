<template>
    <div>
        <div class="myScls">

            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>我的收藏</h1>
                <i></i>
            </div>

            <div class="header">
                <span class="headerActive">历史文章</span>
                <span>历史义诊</span>
            </div>

            <div class="article-list">
                <div class="article-box">
                    <h1>单调好似东京阿斯顿就爱搜到极爱哦</h1>
                    <div class="article-img">
                        <img src="../../assets/logo.png" alt="">
                        <img src="../../assets/logo.png" alt="">
                        <img src="../../assets/logo.png" alt="">
                    </div>
                    <div class="article-box-bottom">
                        <div class="article-msg">
                            <span>1586浏览</span>
                            <span>126评论</span>
                        </div>
                        <div>
                            2018-03-12 09:32
                        </div>
                    </div>
                </div>
            </div>

            <div class="yzList">
                <div class="yz-box" v-for="(item,index) in list" :key="index">
                    <div class="yz-banner">
                        <img src="../../assets/logo.png" alt="">
                        <span>
                            {{item.text}}
                        </span>
                    </div>
                    <div class="specialist">
                        <h1>专家坐诊</h1>
                        <div class="specialist-list">
                            <span v-for="(item,index) in list[0].spore" :key="index">
                                <img src="../../assets/logo.png" alt="">
                                <i>{{item.name}}</i>
                            </span>
                        </div>
                        <div class="time">
                            <span>{{item.time}}</span>
                            <span>{{item.address}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{                text: '关爱老人，从我做起。', time: '2018-05-01', address: '广州白云区飞翔公园',
                spore: [{ name: '倪开超2' }, { name: '倪开超2' }, { name: '倪开超3' }, { name: '倪开超4' }, { name: '倪开超5' }, { name: '倪开超5', }, { name: '倪开超5', }]            },
            ],
        }
    }
}
</script>
<style lang="less" scoped>
//header标题
.user-header {
  height: 5rem;
  line-height: 5rem;
  background: #fff;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #454545;
    font-weight: 400;
    margin-left: -1.875rem;
  }
  i {
    font-size: 2rem;
    color: #0aa6ff;
  }
}

//文章
.article-list {
  .article-box {
    padding: 1.25rem 1.875rem;
    background: #fff;
    border-bottom: 1px solid #bdbdbd;
    h1 {
      font-size: 1.5rem;
      color: #3c3c3c;
      margin-bottom: 0.625rem;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .article-img {
      display: flex;
      justify-content: space-between;
      img {
        width: 10rem;
        height: 8.75rem;
        font-size: 8.75rem;
        margin: 0 5px;
      }
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 0.625rem;
    }
  }
}

//义诊
.yzList {
  .yz-box {
    margin-top: 0.625rem;
    background: #fff;
    padding: 1.25rem 1.875rem;
    .yz-banner {
      position: relative;
      height: 20rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: 0.625rem;
        border-radius: 0 0 10px 10px;
        height: 3.5rem;
        line-height: 3.5rem;
        width: 100%;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        font-size: 1.5rem;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .specialist {
      margin-top: 1.25rem;
      h1 {
        font-size: 1.5rem;
        color: #454545;
        font-weight: 500;
      }
      .specialist-list {
        margin-top: 0.625rem;
        overflow: hidden;
        overflow: auto;
        display: flex;
        &::-webkit-scrollbar {
          display: none;
        }
        span {
          text-align: center;
          margin-right: 1.25rem;
        }
        img {
          width: 6.25rem;
          height: 6.25rem;
          border-radius: 100%;
          background: #ccc;
        }
        i {
          float: left;
          width: 100%;
          font-size: 1.25rem;
          color: #454545;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .time {
        margin-top: 1.25rem;
        display: flex;
        justify-content: space-between;
        color: #9c9c9c;
        font-size: 1.25rem;
      }
    }
  }
}
</style>

