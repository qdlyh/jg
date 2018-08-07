<template>
    <div>
        <div class="header2">
            <i class="cubeic-back" @click="$router.go(-1)"></i>
            <h1>更改名字</h1>
            <i style="color:#7AD237;font-size:18px" @click="sumbit('myPopup2')">保存</i>
        </div>
        <div class="make-name">
            <input type="text" v-model.trim="name" maxlength="5">
            <i>好名字可以让你的朋友更容易记住你。</i>
        </div>
        <Popup type="my-popup" :mask="false" position="center" ref="myPopup2">请填写名字</Popup>
    </div>
</template>
<script>
import { Popup } from 'cube-ui'
export default {
    components: {
        Popup,
    },
    data() {
        return {
            userId: '',
            name: '',
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId');
    },
    methods: {
        sumbit(refId) {
            const component = this.$refs[refId]
            setTimeout(() => {
                component.hide()
            }, 1500)
            let isHave = true;
            if (this.name.length == 0) {
                isHave = false;
                component.show()
            }
            if (isHave) {
                let toast = this.$createToast({
                    type: 'loading',
                    mask: true,
                    time: 0,
                    txt: this.toastTxt,
                })
                this.$ajax.interceptors.request.use((config) => {
                    //在请求发送之前做一些事
                    toast.show()
                    return config;
                }, function (error) {
                    //当出现请求错误是做一些事
                    alert('网络发生异常')
                    return Promise.reject(error);
                });
                this.$ajax({
                    method: 'post',
                    url: this.psta + '/wx/updateUserName.jhtml',
                    data: {
                        userId: this.userId,
                        username: this.name
                    }
                })
                    .then(response => {
                        console.log(response)
                        setTimeout(() => {
                            toast.hide()
                        }, 0)
                        this.$router.push('/userType')

                    })
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.make-name {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 20px 10px;

    input {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #7AD237;
        // border: none;
        font-size: 16px;
        color: #454545;
    }

    i {
        margin-top: 20px;
        color: #666;
        font-size: 14px;
    }
}
</style>
