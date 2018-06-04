<template>
    <div>
        <div class="volunteer">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>志愿者认证</h1>
                <i></i>
            </div>
            <div class="file">
                <h1>志愿者认证需要上传个人身份证正反面和个人简历</h1>
                <div class="file-box">
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>身份证正面相片</p>
                    </div>
                    <div class="file-div">
                        <span>
                            <i>+</i>
                            <input type="file">
                        </span>
                        <p>身份证正面相片</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="resume" :class="{active:isActive}">
                <input type="file" @change="change">
                <div>
                    <i class="iconfont icon-wenjian"></i>
                    <span>个人简历</span>
                </div>
                <div>
                    {{istext}}
                </div>
            </div>
            <div class="btn-blue" style="margin-top:50px;">提交</div>
        </div>
        <!-- <div>
            <msg :title="('资料已提交')" :description="('审核结果将会以消息形式通知您')"></msg>
            <x-button type="primary" style="width:80%;" link="/userType">返回个人中心</x-button>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
            istext: '上传'
        }
    },
    methods: {
        change(e) {
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                console.log('不是图片');
                return false
            }
            this.isActive = true;
            this.istext = '上传成功';
            let files = e.target.files || e.dataTransfer.files;
            console.log(files)
        }
    }
}
</script>
<style lang="less" scoped>
.volunteer {
  .user-header {
    height: 5rem;
    line-height: 5rem;
    background: #fff;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 2rem;
      text-align: center;
      color: #454545;
      font-weight: 400;
      margin-left: -1.875rem;
    }
    i {
      font-size: 2rem;
      color: #0aa6ff;
    }
  }
  .file {
    padding: 1.25rem 3.125rem;
    h1 {
      font-size: 1.5rem;
      color: #454545;
    }
    .file-box {
      display: flex;
      justify-content: space-between;
      margin-top: 3.125rem;
      .file-div {
        width: 12.5rem;
        height: 15rem;
        span {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          border: 1px double #ccc;
          i {
            font-size: 7.5rem;
            color: #454545;
            text-align: center;
            line-height: 15rem;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            display: inline-block;
            font-weight: 100;
            color: #9c9c9c;
          }
          input {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
        p {
          margin-top: 0.625rem;
          font-size: 1.25rem;
          color: #454545;
          text-align: center;
        }
      }
    }
  }
  .resume {
    width: 95%;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.75rem;
    color: #454545;
    border-radius: 10px;
    margin: 3.75rem auto;
    border: 1px solid #454545;
    padding: 0 1.875rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 2rem;
      margin-right: 1.875rem;
    }
    input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}

.active {
  border: 1px solid #78d034 !important;
  color: #78d034 !important;
}
</style>
