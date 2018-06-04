<template>
    <div>
        <div class="index">
            <div class="header">
                <span>健康讲堂</span>
                <span>阳光连接</span>
            </div>
            <!--swiper-->
            <div class="item-1">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(img,index) in banner" :key="index">
                        <router-link to="/">
                            <img :src="img.src" alt="">
                        </router-link>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div> -->
                </swiper>
                <div class="item-img">
                    <span @click="$router.push('/expertAll')">
                        <img src="../../assets/logo.png" alt="">
                        <p>文化篇</p>
                    </span>
                    <span @click="$router.push('/userType')">
                        <img src="../../assets/logo.png" alt="">
                        <p>文化篇</p>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <p>文化篇</p>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <p>文化篇</p>
                    </span>
                    <span>
                        <img src="../../assets/logo.png" alt="">
                        <p>文化篇</p>
                    </span>
                </div>
            </div>
            <div class="header margin-header">
                <span @click="$router.push('/userList')">健康讲堂</span>
                <span>阳光连接</span>
            </div>
            <div class="item-2">
                <span @click="$router.push('/userList')">
                    <img src="../../assets/logo.png" alt="">
                    <p>慈善家</p>
                </span>
                <span @click="$router.push('/articleList')">
                    <img src="../../assets/logo.png" alt="">
                    <p>慈善家</p>
                </span>
            </div>
            <div class="header margin-header">
                <span>健康讲堂</span>
                <span>阳光连接</span>
            </div>
            <div class="item-3">
                <div @click="$router.push('/introduce')">
                    <img src="../../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                    stopOnLastSlide: true
                },
                // 如果需要分页器
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            banner: [
                {
                    href: "http://www.baidu.com",
                    src: require("../../assets/logo.png")
                },
                {
                    href: "http://www.hao123.com",
                    src: require("../../assets/logo.png")
                },
                {
                    href: "http://www.baidu.com",
                    src: require("../../assets/logo.png")
                }
            ],
        }
    }
}
</script>
<style lang="less" scoped>
.index {
  margin: 0 auto;
  .item-1 {
    padding: 1.25rem 1.875rem;
    background: #fff;
    .swiper {
      width: 100%;
      height: 17.5rem;
      .swiper-slide {
        height: 17.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-img {
      display: flex;
      justify-content: space-between;
      margin-top: 0.625rem;
      span {
        border-radius: 0.625rem;
        display: inline-block;
        img {
          width: 6rem;
          height: 6rem;
        }
        p {
          text-align: center;
          color: #454545;
          font-size: 1.5rem;
        }
      }
      span:last-child {
        margin-right: 0;
      }
    }
  }
  .margin-header {
    margin-top: 1.25rem;
  }
  .item-2 {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 1.25rem 0.625rem;
    span {
      text-align: center;
      display: inline-block;
      border-radius: 10px;
      img {
        width: 18.125rem;
        height: 12.5rem;
      }
      p {
        font-size: 1.5rem;
        color: #454545;
      }
    }
    // span:nth-child(1) {
    //   margin: 0 0.625rem 0 1.875rem;
    // }
    // span:nth-child(2) {
    //   margin-right: 1.875rem;
    // }
  }
  .item-3 {
    background: #fff;
    padding: 1.875rem;
    div {
      height: 21.25rem;
      border-radius: 0.625rem;
      background: #f3f3f3;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

