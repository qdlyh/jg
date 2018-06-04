<template>
    <div>
        <div class="userTypeRedact">
            <div class="user-header">
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <h1>编辑</h1>
                <i class="iconfont icon-icon"></i>
            </div>
            <div class="my-picture">
                <div class="top-img">
                    <div class="head">
                        <div id="cropic">
                            <div class="container" v-show="panel">
                                <img id="image" :src="url" alt="Picture">
                                <button @click="panel = false" type="button" id="button" style="left: 10px;">取消</button>
                                <button type="button" id="button" @click="crop">确定</button>
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
            <div class="redact-msg-input">
                <span>
                    昵称
                </span>
                <input placeholder="未设置" maxlength="5">
            </div>
            <div class="redact-msg-input" style="background:#EBEBE4;">
                <span>
                    标签
                </span>
                <input placeholder="游客" disabled="disabled">
            </div>
            <div class="redact-msg-input">
                <x-address title="选择城市" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="未设置" :show.sync="showAddress"></x-address>
            </div>
            <div class="redact-msg" @click="$router.push('/myPhone')">
                <group>
                    <cell title="绑定手机" value="未绑定" is-link></cell>
                </group>
            </div>
            <div class="redact-msg-input">
                <span>
                    绑定邮箱
                </span>
                <input placeholder="未设置">
            </div>
            <div class="redact-msg-input">
                <span>
                    企业地址
                </span>
                <input placeholder="未设置">
            </div>
            <div class="redact-msg-input">
                <span>
                    职位
                </span>
                <input placeholder="未设置">
            </div>
            <div class="redact-msg-input">
                <span>
                    就职机构
                </span>
                <input placeholder="未设置">
            </div>

            <div class="redact-msg-input" style="height:15rem">
                <span style="position: relative;top: -80px;">
                    个人签名
                </span>
                <!-- <span style="position: relative;top: -80px;">
                    企业简介
                </span> -->
                <textarea placeholder="请做一个简单的描述" maxlength="100"></textarea>
            </div>
        </div>
        <div class="btn-blue">
            提交
        </div>
    </div>
</template>
<script>
import Cropper from 'cropperjs';
import CropperCss from '../../../static/cropicrec.css';
import { Group, Cell, XAddress, ChinaAddressV4Data } from 'vux'
export default {
    components: {
        Group,
        Cell,
        XAddress
    },
    data() {
        return {
            headerImage: require('../../assets/logo.png'),
            panel: false,
            croppable: false,
            cropper: '',
            url: '',
            ifImage: false, //判断图片是否为同一张
            addressData: ChinaAddressV4Data,
            value: [],
        }
    },
    mounted() {
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
                this.popup = true;
                this.text = '请选择图片格式类型';
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
    height: 12.5rem;
    background: #3FB0FF;
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

      #cropic #button {
        position: absolute;
        right: 10px;
        top: 40px;
        width: 100px;
        height: 60px;
        font-size: 24px;
        color: #454545;
        border: none;
        border-radius: 5px;
        background: white;
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
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: right;
        padding-right: 0.625rem;
      }
    }
    input {
      width: 70%;
      border: 0;
      font-size: 1.5rem;
      color: #454545;
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
      padding: 0.625rem;
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 1.5rem;
        text-align: left;
        padding: 1.25rem 0 0 0.9375rem;
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
