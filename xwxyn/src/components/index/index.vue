<template>
    <div>
        <div class="index">
            <div class="header">
                <span @click="$router.push('/article')">健康讲堂</span>
            </div>
            <!--swiper-->
            <div class="banner">
                <swiper :options="swiperOption" ref="mySwiper" v-if='banner.length>0'>
                    <swiper-slide v-for="(img,index) in banner" :key="index">
                        <img :src="img.image" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="item-img">
                    <span v-for="(item,index) in listItem" :key="index" @click="goItem(index)">
                        <img v-lazy="item.icon" alt="">
                        <p>{{item.setting}}</p>
                    </span>
                </div>
            </div>
            <div class="header margin-header">
                <span>慈善你我他</span>
            </div>
            <div class="item-1">
                <span v-for="(item,index) in item1" :key="index" @click="goItem1(index)">
                    <img v-lazy="item.image" alt="">
                    <p>{{item.setting}}</p>
                </span>
            </div>
            <div class="header margin-header">
                <span @click="$router.push('/articleList')">肠道保健</span>
            </div>
            <div class="item-2">
                <div @click="$router.push('/introduce')">
                    <img v-lazy="item2" alt="">
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
            },
            banner: [],
            listItem: [],
            item1: [],
            item2: '',
        }
    },
    mounted() {
        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxHomeHealthLectureHall',
        })
            .then(response => {
                //console.log(response)
                this.banner = response.data.data.images;
                this.listItem = response.data.data.wxs
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });

        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxHomeCharityYouAndMe',
        })
            .then(response => {
                //console.log(response)
                this.item1 = response.data.data;
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });

        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxHomeIntestinalHealth',
        })
            .then(response => {
                //console.log(response)
                this.item2 = response.data.data.image;
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        goItem(i) {
            if (i == 0) {
                this.$router.push('/expertAll')
            }
            if (i == 1) {
                this.$router.push('/userType')
            }
            if(i==2){
                this.$router.push('/articleList')
            }
        },
        goItem1(i) {
            if (i == 0) {
                this.$router.push('/userList')
            }
            if (i == 1) {
                this.$router.push('/userList')
            }
        }
    }
}
</script>
<style lang="less" scoped>
.index {
  .banner {
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
      padding: 0 1.875rem;
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
  .item-1 {
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
  .item-2 {
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

