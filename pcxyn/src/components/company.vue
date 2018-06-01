<template>
    <div>
        <div class="content">
            <topNav></topNav>
            <div class="box" v-for="(item,index) in list" :key="index">
                <h1>{{item.title}}</h1>
                <p v-html="item.content" style="max-width:1200px;"></p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
        }
    },
    mounted() {
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcCompanyProfile',
        })
            .then(response => {
                //console.log(response)
                this.list = [response.data.PcCompanyProfile];
                console.log(this.list)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
}
</script>
<style lang="scss" scoped>
.content {
  background: #f3f3f3;
  .box {
    min-width: 1200px;
    background: #fff;
    padding: 30px;
    margin: 0 auto;
    h1 {
      text-align: center;
      font-size: 24px;
      color: #202020;
      font: outline;
      margin: 10px 0 30px 0;
    }
    p {
      font-size: 16px;
      color: #454545;
      margin-top: 40px;
      line-height: 30px;
      margin: 0 auto;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>

