<template>
    <div>
        <div class="page-top">
            <span @click="goBack">
                <img src="../../images/1561651.png" alt="">
            </span>
        </div>
        <div class="empty">
            <img src="../../images/41485156.png" alt="">
            <p>页面404,没有找到该页面</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.empty {
    img {
        display: block;
        width: 425px;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    p {
        text-align: center;
        font-family: 'pingfang sc regular';
        font-size: 28px;
        color: #D3D3D3;
    }
}
</style>


