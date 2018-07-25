<template>
    <div>
        <div class="header">
            <i class="cubeic-back" @click="$router.go(-1)"></i>
            <h1>会员权益</h1>
            <i></i>
        </div>
        <div class="member">
            <div v-for="(item,index) in list" :key="index">
                <div v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
        }
    },
    activated() {
        window.scrollTo(0, 0);
        this.userId = localStorage.getItem('userId');
        this.$ajax({
            method: 'post',
            url: this.psta + '/wx/queryMemberLevel.jhtml',
            data: {
                userId: this.userId
            }
        })
            .then(response => {
                this.list = [response.data.data];
                //console.log(response)
            });
    }
}

</script>
<style lang="stylus" scoped>
.member {
    padding: 17px 10px;
    font-size: 18px;
}

.member >>> table {
    width: 100% !important;
}

.member >>> img {
    max-width: 100%;
    display: inline-block;
}

img {
    max-width: 100%;
    display: inline-block;
}
</style>
