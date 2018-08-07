<template>
    <div>
        <div class="gotop" @click="gotop" v-show="scrollshow">
            <img src="../images/top.png">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            scrollshow: false,
        }
    },
    mounted() {
        document.getElementsByClassName("scroll-container")[0].addEventListener('scroll', this.scorll);
    },
    methods: {
        gotop() {
            document.getElementsByClassName("scroll-container")[0].scrollTop = 0;
        },
        scorll() {
            let dom = document.getElementsByClassName("scroll-container")[0];
            let scrolltop = dom.scrollTop;
            let bodyhight = document.body.clientHeight + 100;
            //console.log(scrolltop + " " + bodyhight)
            if (scrolltop > bodyhight) {
                this.scrollshow = true;
            } else {
                this.scrollshow = false;
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.gotop {
  background: #e6e4e4;
  border-radius: 50%;
  position: fixed;
  bottom: 70px;
  right: 25px;
  width: 48px;
  height: 48px;
  img {
    width: 48px;
    height: 48px;
  }
}
</style>


