<template>
    <div>
        <div class="header">
            <i class="cubeic-back" @click="$router.go(-1)"></i>
            <h1>全球码</h1>
            <i></i>
        </div>
        <div class="img">
            <img v-lazy="image" alt="" lazy='loadings'>
        </div>
        <div class="tip">
            <p>长按保存到手机本地相册</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image: '',
        }
    },
    activated() {
        this.userId = localStorage.getItem('userId');
        this.$ajax({
            method: 'post',
            url: this.psta + '/wx/queryUseTwoCode.jhtml',
            data: {
                userId: this.userId
            }
        })
            .then(response => {
                //console.log(response)
                this.image = response.data.data.source;
            });
    }
}
</script>
<style lang="stylus" scoped>
.img {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    padding-bottom: 30%;
    overflow-y: auto;

    img {
        width: 100%;
        margin-top: 15%;
    }
}

.tip {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.6);

    p {
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 50px;
    }
}

img[lazy='loadings'] {
  /* width: 100px; */
  background-position: center center !important;
  background: #ccc;
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
