<template>
    <div>
        <div class="leftNav">
            <ul>
                <li v-for="(item,index) in leftNav" :key="index">
                    <a href="javascript:;" @click="go(item)">{{item.title}}</a>
                </li>
            </ul>
            <div class="wx">
                <p>订阅微信公众号</p>
                <hr/>
                <img src="../assets/二维码.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            leftNav: [],
        }
    },
    mounted() {
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcHealthAssessmentList',
        })
            .then(response => {
                //console.log(response)
                this.leftNav = response.data.PcHealthAssessmentList;
                console.log(this.leftNav)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        go(item) {
            sessionStorage.setItem('typeId', item.typeId)
            this.$ajax({
                method: 'get',
                url: this.psta + '/rest/pc/getPcHealthAssessment?' + 'typeId=' + item.typeId + '&uuid=' + item.uuid,
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        }
    },
}
</script>
<style lang="scss" scoped>
.leftNav {
  width: 300px;
  background: #fff;
  text-align: center;
  ul {
    li {
      &:hover {
        background: #f6f7fb;
        transition: 0.2s;
      }
      a {
        width: 240px;
        height: 45px;
        margin: 0 auto;
        display: inline-block;
        color: #454545;
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        line-height: 45px;
      }
      //   a:hover {
      //     color: #2ad0ff;
      //     transition: 0.3s;
      //   }
    }
  }
  //   ul li:nth-child(even) {
  //     background: #eeeeee;
  //   }
  .wx {
    width: 240px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 50px;
    p {
      text-align: left;
      font-size: 14px;
      color: #212121;
    }
    hr {
      margin: 10px 0 20px 0;
      background: #e2e2e2;
      border: none;
      height: 1px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>

