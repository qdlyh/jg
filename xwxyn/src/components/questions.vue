<template>
    <div>
        <div class="questions">
            <div class="questions-box">
                <div class="questions-title">填写问题</div>
                <div class="input">
                    <input type="text" v-model="title" placeholder="填写标题" maxlength="50">
                </div>
                <div class="textarea">
                    <textarea v-model="describe" cols="30" rows="10" placeholder="填写内容" maxlength="200"></textarea>
                </div>
                <div class="btn-blue" @click="sumbit()">
                    提交
                </div>
            </div>
        </div>
        <toast v-model="cancel" :time="3000" type="cancel">{{(cancelText)}}</toast>
    </div>
</template>
<script>
import { Toast } from 'vux'

export default {
    components: {
        Toast,
    },
    data() {
        return {
            title: '',
            describe: '',
            cancel: false,
            cancelText: '',
        }
    },
    methods: {
        sumbit() {
            if (this.title.length == 0 || this.describe == 0) {
                this.cancel = true;
                this.cancelText = '请填写完整的问题';
            } else {
                let formData = new FormData();
                formData.append('expertsUserId', this.$route.params.id);
                formData.append('wxUserId', this.$parent.wxUserId);
                formData.append('title', this.title);
                formData.append('describe', this.describe);
                this.$ajax({
                    method: 'post',
                    url: this.psta + '/submitAskQuestions',
                    data: formData
                })
                    .then(response => {
                        console.log(response)
                    })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.questions-box {
  .questions-title {
    font-size: 1.75rem;
    text-align: center;
    height: 5rem;
    line-height: 5rem;
  }
  .van-popup--right {
    background: #f3f3f3;
    width: 100%;
    height: 100%;
  }
  .input {
    input {
      width: 100%;
      height: 5rem;
      border: 0;
      font-size: 1.5rem;
      padding-left: 1.25rem;
      &::-webkit-input-placeholder {
        color: #9c9c9c;
        font-size: 1.5rem;
      }
    }
  }
  .textarea {
    margin-top: 1.25rem;
    textarea {
      padding: 1.25rem 0 0 1.25rem;
      font-size: 1.5rem;
      width: 100%;
      height: 22.5rem;
      border: 0;
      resize: none;
      &::-webkit-input-placeholder {
        color: #9c9c9c;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
