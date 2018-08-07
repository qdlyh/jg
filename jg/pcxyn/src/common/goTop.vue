<template>
    <div>
        <div class="goTop" v-show="goTop">
            <div @click="scrollToTop(1000);" title="返回顶部">
                <i class="el-icon-arrow-up"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goTop: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.needToTop);  //监听DOM滚动事件
        });
    },
    methods: {
        scrollToTop(speed) {
            let scrollStep = -window.scrollY / (speed / 15),
                scrollInterval = setInterval(() => {
                    if (window.scrollY != 0) {
                        window.scrollBy(0, scrollStep);
                    } else {
                        clearInterval(scrollInterval);
                    }
                }, 5);
        },
        needToTop() {
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
            let viewHeight = document.documentElement.clientHeight + 100;
            if (curHeight > viewHeight) {
                this.goTop = true;
            } else {
                this.goTop = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.goTop {
  width: 50px;
  position: fixed;
  right: 10%;
  bottom: 50px;
  z-index:9999;
  height: 116px;
  div {
    margin: 8px 0 0;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    border-radius: 3px;
    cursor: pointer;
  }
}
</style>


