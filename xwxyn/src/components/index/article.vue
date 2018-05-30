<template>
    <div>
        <div class="article" v-show="ifArticle">
            <h1 @click="goArticle()">呦呦呦厉害哟</h1>
            <i class="time">2018-01-02 09:50</i>
            <div class="article-html">
                啊啊啊啊啊啊啊啊啊啊
            </div>
            <i class="browse">16515人浏览</i>
        </div>
        <transition name="fade">
            <router-view class="content" v-show="ifMessage"></router-view>
        </transition>
        <button @click="goArticle()">home</button>
        <button @click="go()">go</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ifArticle: true,
            ifMessage: false,
        }
    },
    mounted() {
        // pushHistory();
        // window.addEventListener("popstate", function (e) {
        //     //document.querySelectorAll('.message')[0].style.display = 'none'
        //     window.message = false;
        // }, false);
        // function pushHistory() {
        //     var state = {
        //         title: "title",
        //         url: "www.baidu.com"
        //     };
        //     window.history.pushState(state, "title", "www.baidu.com");
        // }
    },
    methods: {
        goArticle() {
            this.ifArticle = true;
            this.ifMessage = false;
            this.$router.push('/article');
        },
        go() {
            this.ifMessage = true;
            this.ifArticle = false;
            this.$router.push('/article/message');
        }
    },
    watch: {
        '$route'(to, from) {
            console.log(to.path)
            if (to.path == '/article') {
                this.ifArticle = true;
                this.ifMessage = false;
                //window.history.go(-1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.article {
  padding: 1.875rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #3c3c3c;
  }
  i {
    color: #9a9a9a;
    font-size: 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
