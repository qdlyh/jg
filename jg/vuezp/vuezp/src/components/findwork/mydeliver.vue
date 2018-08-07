<template>
    <div>
        <!-- <h2>{{$route.query.personalId}}</h2> -->
        <!-- <h2>{{ $route.params.id }}</h2> -->
        <!-- <h2>{{ this.$parent.userId }}</h2> -->
        <div class="myinfo" v-for="(item,index) in list" :key="index">
            <form action="">
                <div class="top-img">
                    <img v-lazy="item.headimgurl">
                </div>
                <div class="my-missage">
                    <div>
                        <span>企业名称：</span>
                        <p>{{item.name}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>企业性质：</span>
                        <p>{{item.natureTitle}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>经营范围：</span>
                        <p>{{item.sizeTitle}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>联系人
                            <i class="sign-i">：</i>
                        </span>
                        <p>{{item.linkman}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>联系电话：</span>
                        <p>{{item.linkNumber}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>企业地址：</span>
                        <p>{{item.address}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>企业描述：</span>
                        <p>{{item.cdescription}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>招聘岗位：</span>
                        <p>{{item.jobsTitle}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>工作年限：</span>
                        <p>{{item.yearsTitle}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>岗位薪资：</span>
                        <p>{{item.salaryTitle}}</p>
                    </div>
                    <hr/>
                    <div>
                        <span>岗位描述：</span>
                        <p>{{item.idescription}}</p>
                    </div>
                    <hr/>
                </div>
            </form>
        </div>
        <loading v-if="!list.length"></loading>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemId: '',
            list: []
        }
    },
    activated() {
        this.itemId = this.$route.params.id
        this.$ajax({
            method: 'get',
            url: this.psta + '/item/detail?itemId=' + this.itemId,
        })
            .then(response => {
                //console.log(response)
                this.list = response.data.object;
                //console.log(this.list)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
}
</script>
<style lang="scss" scoped>
$text: #535353;
.myinfo {
  padding: 10px;
}
.top-img {
  background: #81959c;
  height: 130px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
}
.my-missage {
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.6);
  div {
    height: 30px;
    margin-top: 10px;
  }
  span {
    color: $text;
    font-size: 16px;
    width: 150px;
    display: inline-block;
    float: left;
    width: 30%;
  }
  p {
    color: $text;
    font-size: 16px;
    display: inline-block;
    float: left;
    width: 70%;
    margin-bottom: 5px;
    display: flex;
  }
  .sign-i {
    padding-left: 10px;
  }
}
</style>

