<template>
    <div>
        <div class="userTypeRedact">
            <div class="user-header">
                <i class="iconfont icon-fanhui	"></i>
                <h1>编辑</h1>
                <i class="iconfont icon-icon"></i>
            </div>
            <div class="my-picture">
                <group>
                    <cell title="钱包" value="10" is-link></cell>
                </group>
                <div id="cropic">
                    <div class="container" v-show="panel">
                        <img id="image" :src="url" alt="Picture">
                        <button @click="panel = false" type="button" id="button" style="left: 10px;">取消</button>
                        <button type="button" id="button" @click="crop">确定</button>
                    </div>
                    <div>
                        <div class="show">
                            <div class="picture" :style="'backgroundImage:url('+headerImage+')'"></div>
                        </div>
                        <input type="file" id="change" accept="image" @change="change">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cropper from 'cropperjs';
import CropperCss from '../../static/cropicrec.css';
import { Group, Cell, } from 'vux'
export default {
    components: {
        Group,
        Cell,
    },
    data() {
        return {
            headerImage: require('../assets/logo.png'),
            panel: false,
            // croppable: false,
            url: '',
        }
    },
    mounted() {
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
.my-picture{
    position: relative;
}
</style>
