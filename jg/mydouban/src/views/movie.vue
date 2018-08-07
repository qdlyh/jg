<template>
    <div>
        <Header></Header>
        <div class="list">
            <div class="list-box" v-for="(item,index) in list" :key="index">
                <div class="list-title">
                    <span>{{item.title}}</span>
                    <i>{{item.more}}</i>
                </div>
                <div class="list-content">
                    <div class="list-movie" v-for="(item,index) in list[0].scopes" :key="index">
                        <img :src="item.src" alt="">
                        <p>{{item.movieTitle}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      list: [
        {
          title: '影院热映',
          more: '更多',
          scopes: [
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507024497.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            }
          ]
        },
        {
          title: '免费在线观影',
          more: '更多',
          scopes: [
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            }
          ]
        },
        {
          title: '新片速递',
          more: '更多',
          scopes: [
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            },
            {
              src:
                'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg',
              movieTitle: '千与千寻'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 10%;
  .list-box {
    .list-title {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 1.8rem;
      }
      i {
        color: #42bd56;
        font-size: 1.6rem;
      }
    }
    .list-content {
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      .list-movie {
        margin: 1rem 0.2rem;
        img {
          height: 15rem;
        }
        p {
          width: 10rem;
          margin-top: 0.8rem;
          font-size: 1.6rem;
          text-align: center;
        }
      }
    }
  }
}

/* 隐藏滚动条 */
.list-content::-webkit-scrollbar {
  display: none;
}
</style>

