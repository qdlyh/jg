<template>
    <div>
        <div class="userTypeRedact">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>编辑</h1>
                <i class="iconfont icon-icon" @click="submit"></i>
            </div>
            <div class="my-picture">
                <div class="top-img">
                    <div class="head">
                        <div id="cropic">
                            <div class="container" v-show="panel">
                                <img id="image" :src="url" alt="Picture">
                                <i class="iconfont icon-fanhui button" @click="panel = false" style="left: 10px;"></i>
                                <i class="iconfont icon-icon button" @click="crop"></i>
                            </div>
                            <div class="show-img">
                                <div class="show">
                                    <div class="picture" :style="'backgroundImage:url('+headerImage+')'"></div>
                                </div>
                                <input type="file" id="change" accept="image" @change="change">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(item,index) in list" :key="item.uuid">
                <div class="redact-msg-input">
                    <span>
                        昵称
                    </span>
                    <input placeholder="未设置" v-model.trim="item.nickName" maxlength="5">
                </div>
                <div class="redact-msg-input">
                    <group>
                        <x-address title="所在地区" :list="addressData" placeholder="未设置" :show.sync="showAddress"></x-address>
                    </group>
                </div>
                <div class="redact-msg-input" v-if="item.settingId==63">
                    <span>
                        企业地址
                    </span>
                    <input placeholder="未设置" v-model.trim="address" maxlength="40">
                </div>
                <div class="redact-msg-input" v-if="item.settingId==62">
                    <span>
                        职位
                    </span>
                    <input placeholder="未设置" v-model.trim="item.label" maxlength="15">
                </div>
                <div class="redact-msg-input" v-if="item.settingId==62">
                    <span>
                        就职机构
                    </span>
                    <input placeholder="未设置" v-model.trim="jigou" maxlength="20">
                </div>
                <div class="redact-msg-input" style="height:15rem">
                    <span v-if="item.settingId!=63" style="position: relative;top: -9.375rem;">
                        个人签名
                    </span>
                    <span v-if="item.settingId==63" style="position: relative;top: -8.375rem;">
                        企业简介
                    </span>
                    <textarea placeholder="请做一个简单的描述" v-model.trim="item.signature" maxlength="30"></textarea>
                </div>
            </div>
        </div>
        <toast v-model="cancel" :time="3000" type="cancel">{{(cancelText)}}</toast>
        <div class="btn-blue" @click="submit">
            提交
        </div>
    </div>
</template>
<script>
import Cropper from 'cropperjs';
import CropperCss from '../../../static/cropicrec.css';
import { Toast, Group, Cell, XAddress } from 'vux'
export default {
    components: {
        Toast,
        Group,
        Cell,
        XAddress
    },
    data() {
        return {
            list: [],
            headerImage: '',
            ifImage: false, //判断图片是否为同一张
            panel: false,
            croppable: false,
            cropper: '',
            url: '',
            addressData:[],
            showAddress: false,
            cancel: false,
            name: '',
            value: [],
            address: '',
            zhiwei: '',
            jigou: '',
            msg: '',
            cancelText: '',
        }
    },
    mounted() {
        //console.log(address)
        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxPersonalCenterInFo?wxUserId=' + 6 //this.$parent.wxUserId,
        })
            .then(response => {
                //console.log(response)
                this.list = [response.data.data];
                this.headerImage = response.data.data.image;
                //console.log(this.settingId)
            })

        this.$ajax({
            method: 'get',
            url: this.psta + '/getWxRegion'
        })
            .then(response => {
                this.addressData = response.data.data;
            })

        // console.log(as)
        //初始化这个裁剪框  
        var self = this;
        var image = document.getElementById('image');
        this.cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 1,
            background: false,
            zoomable: false,
            ready: function () {
                self.croppable = true;
            }
        });
    },
    methods: {
        getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) { // basic  
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)  
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome  
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        change(e) {
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                this.cancel = true;
                this.cancelText = '请选择图片格式类型'
                return false
            }
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.panel = true;
            this.picValue = files[0];

            this.url = this.getObjectURL(this.picValue);
            //每次替换图片要重新得到新的url  
            if (this.cropper) {
                this.cropper.replace(this.url);
            }
            this.panel = true;
            document.querySelector("#change").value = null;

        },
        crop() {
            this.panel = false;
            this.ifImage = true;
            var croppedCanvas;
            var roundedCanvas;

            if (!this.croppable) {
                return;
            }
            // Crop  
            croppedCanvas = this.cropper.getCroppedCanvas();
            //console.log(this.cropper)
            // Round  
            roundedCanvas = this.getRoundedCanvas(croppedCanvas);

            this.headerImage = roundedCanvas.toDataURL();
            // this.dataURItoBlob(this.headerImage)  //base64转换成Blob 
        },
        getRoundedCanvas(sourceCanvas) {

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;

            if (width > 150) {
                width = 150;
            }
            if (height > 150) {
                height = 150;
            }

            canvas.width = width;
            canvas.height = height;

            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = 'destination-in';
            context.beginPath();
            context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
            context.fill();

            return canvas;
        },
        doShowAddress() {
            this.showAddress = true
            setTimeout(() => {
                this.showAddress = false
            }, 2000)
        },
        submit() {
            let have = true;
            let city = document.querySelectorAll('.vux-cell-value')[0];
            // let city = document.querySelectorAll('.vux-cell-value')[0].innerText;
            console.log(city)
            if (this.name.length == 0 || city == undefined || this.address.length == 0 || this.zhiwei.length == 0 || this.jigou == '') {
                this.cancel = true;
                this.cancelText = '请填写完整的基本信息'
                return false;
            }
            // if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.email))) {
            //     this.cancel = true;
            //     this.cancelText = '邮箱格式错误'
            //     have = false;
            //     return false;
            // }
            if (have) {
                this.cancel = true;
                this.cancelText = '已提交'
                let formData = new FormData();
                //formData.append('userId', this.$parent.userId);
                // if (this.ifImage) {
                //     formData.append('file', this.headerImage);
                // }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.userTypeRedact {
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
    }
    i {
      font-size: 2rem;
      color: #0aa6ff;
    }
  }
  .my-picture {
    position: relative;
    height: 18.75rem;
    background: linear-gradient(
      to bottom,
      rgb(97, 144, 232),
      rgb(167, 191, 232)
    );
    .top-img {
      width: 100%;
      .show {
        display: inline-block;
        width: 9.375rem;
        height: 9.375rem;
        overflow: hidden;
        position: absolute;
        border-radius: 50%;
        border: 1px solid #d5d5d5;
      }

      .picture {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      #cropic {
        width: 9.375rem;
        height: 9.375rem;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }

      #cropic .button {
        position: absolute;
        right: 10px;
        top: 20px;
        font-size: 3rem;
        color: #0aa6ff;
        // background: #f3f3f3;
        // border-radius: 50%;
        // width: 50px;
        // height: 50px;
        // text-align: center;
        // line-height: 50px;
      }

      #cropic .container {
        z-index: 99;
        position: fixed;
        padding-top: 60px;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 1);
      }

      #change {
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }

  .redact-msg-input {
    background: #fff;
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    margin-top: 0.625rem;
    span {
      display: inline-block;
      width: 9.375rem;
      font-size: 1.5rem;
      color: #454545;
      padding-left: 1.25rem;
    }
    input {
      width: 70%;
      border: 0;
      font-size: 1.5rem;
      color: #454545;
      text-align: right;
      padding-right: 0.625rem;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: right;
        padding-right: 0.625rem;
      }
    }
    textarea {
      width: 75%;
      border: 0;
      height: 12.5rem;
      font-size: 1.5rem;
      color: #454545;
      resize: none;
      padding: 1.8rem 0 0 0.9375rem;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: left;
        //padding: 1.25rem 0 0 0.9375rem;
      }
    }
  }
}

.redact-msg {
  margin-top: 0.625rem;
  height: 5rem;
  background: #fff;
  .weui-cell {
    height: 5rem;
    font-size: 1.5rem;
    color: #454545;
    margin-left: -5px;
    ::after {
      margin-top: -5px !important;
      right: 0px !important;
    }
  }
}
</style>
