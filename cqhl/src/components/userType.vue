<template>
    <div>
        <div class="content">
            <div class="my-picture">
                <div class="top-img">
                    <div class="head">
                        <div id="cropic">
                            <div class="container" v-show="panel">
                                <img id="image" :src="url" alt="Picture">
                                <i class="cubeic-back icon-fanhui button" @click="panel = false" style="left: 10px;"></i>
                                <i class="cubeic-ok button" @click="crop"></i>
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
            <div v-for="(item,index) in list" :key="index">
                <!-- 推荐码 -->
                <div class="openImg" v-show="openImg">
                    <div class="shade" @click="openImg = false"></div>
                    <div class="img">
                        <img :src="item.twoCodeUrl" alt="" style="width:100%;">
                    </div>
                </div>
                <!-- 在线客服 -->
                <div class="openImg" v-show="secopenImg">
                    <div class="shade" @click="secopenImg = false"></div>
                    <div class="img">
                        <img :src="item.customerCode" alt="" style="width:100%;">
                    </div>
                </div>

                <div class="user">
                    <div class="number">{{item.cardNo}}</div>
                    <div class="user-data">
                        <div>
                            <div class="user-name">
                                <p>昵称：{{item.userName}}</p>
                                <i class="cubeic-edit" @click="$router.push('/makeName')"></i>
                            </div>
                            <div class="user-type" @click="$router.push('/member')">
                                <img src="../assets/sadas.png" alt="" style="margin-top: -3px;">
                                <i>{{item.typeName}}</i>
                            </div>
                        </div>
                    </div>
                    <div class="user-sj">
                        <span @click="$router.push('/moneyList')">
                            <h6>余额</h6>
                            <i>￥ {{item.account}} (元)</i>
                        </span>
                        <span @click="$router.push('/integral')">
                            <h6>积分</h6>
                            <i>&nbsp;{{item.credit}}</i>
                        </span>
                        <span @click="$router.push('/openImg')">
                            <h6>全球码</h6>
                            <i>{{item.userCode}}</i>
                        </span>
                    </div>
                </div>

                <div class="user-input-box">
                    <div class="user-input">
                        <div class="user-link" style="border: none;">
                            <span>
                                <img src="../assets/333123.png" alt="">
                                <p>手机号</p>
                            </span>
                            <span>
                                <a :href="'tel:'+item.telephone" class="phone">{{item.telephone}}</a>
                                <i class="cubeic-arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div class="user-input" @click="$router.push('/userList')" v-if="item.firstCount!=null">
                        <div class="user-link">
                            <span>
                                <img src="../assets/1561561.png" alt="">
                                <p>团队总人数</p>
                            </span>
                            <span>
                                <p>{{item.firstCount}}</p>
                                <i class="cubeic-arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div class="user-input" @click="$router.push('/shareUser')">
                        <div class="user-link">
                            <span>
                                <img src="../assets/asdas.png" alt="">
                                <p>直接分享</p>
                            </span>
                            <span>
                                <p>{{item.secondCount}}</p>
                                <i class="cubeic-arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div class="user-input" @click="openImg = true">
                        <div class="user-link">
                            <span>
                                <img src="../assets/12312313.png" alt="">
                                <p>关注公众号</p>
                            </span>
                            <span>
                                <p></p>
                                <i class="cubeic-arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div class="user-input" @click="secopenImg = true">
                        <div class="user-link">
                            <span>
                                <img src="../assets/asdas121.png" alt="">
                                <p>在线客服</p>
                            </span>
                            <span>
                                <p></p>
                                <i class="cubeic-arrow"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    </div>
</template>
<script>
import Cropper from 'cropperjs';
import CropperCss from '../../static/cropicrec.css';
export default {
    data() {
        return {
            openImg: false,
            secopenImg: false,
            headerImage: '',
            ifImage: false, //判断图片是否为同一张
            panel: false,
            croppable: false,
            cropper: '',
            url: '',
            userId: '',
            total: '',
            list: [],
        }
    },
    activated() {
        window.scrollTo(0, 0);
        this.userId = localStorage.getItem('userId');
        this.$ajax({
            method: 'post',
            url: this.psta + '/wx/queryUser.jhtml',
            data: {
                userId: this.userId
            }
        })
            .then(response => {
                //console.log(response)
                this.list = [response.data.data];
                this.headerImage = response.data.data.source
            });

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
    beforeRouteLeave(to, from, next) {
        if (this.openImg || this.panel || this.secopenImg) {
            this.openImg = false;
            this.panel = false;
            this.secopenImg = false;
            window.scrollTo(0, 0);
            next(false);
        } else {
            next();
        }
    },
    methods: {
        gotowxh() {
            window.location.href = 'https://mp.weixin.qq.com/s/dcUgZ6emRPz9YFthiFFBLw'
        },
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
            //console.log(this.headerImage)
            this.$ajax({
                method: 'post',
                url: this.psta + '/wx/updateUserSource.jhtml',
                data: {
                    userId: this.userId,
                    source: this.headerImage
                }
            })
                .then(response => {
                    //console.log(response)
                })
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

<style lang="stylus" scoped>
.content {
    .my-picture {
        .top-img {
            width: 100%;

            .show {
                display: inline-block;
                width: 100px;
                height: 100px;
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
                width: 100px;
                height: 100px;
                display: inline-block;
                position: absolute;
                left: 0;
                top: 40px;
                right: 0;
                margin: auto;
                z-index: 1;
            }

            #cropic .button {
                position: absolute;
                right: 10px;
                top: 20px;
                font-size: 28px;
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

    .openImg {
        .img {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
            z-index: 999;
        }

        .shade {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 998;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
    }

    .user {
        height: 350px;
        position: relative;
        background-image: url('../static/bj.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 10px;

        .number {
            position: absolute;
            top: 20px;
            left: 20px;
            color: #fff;
            font-size: 16px;
        }

        .user-data {
            display: flex;
            justify-content: center;
            padding-top: 130px;
            height: 250px;
            background-image: url('../static/065.jpg');
            border-radius: 5px;

            .user-name {
                position: relative;

                p {
                    color: #fff;
                    font-size: 18px;
                    margin: 20px 0;
                }

                i {
                    position: absolute;
                    right: -30px;
                    top: -5px;
                    color: #FDBD78;
                    font-size: 24px;
                }
            }

            .user-type {
                min-width: 120px;
                height: 40px;
                padding: 0 10px;
                color: #FF7437;
                font-size: 16px;
                text-align: center;
                border: 1px solid #ff7437;
                border-radius: 40px;

                i {
                    line-height: 40px;
                }

                img {
                    vertical-align: middle;
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .user-sj {
            width: 100%;
            display: flex;
            margin-top: 20px;

            span {
                width: 50%;
                display: inline-block;
                color: #454545;
                text-align: center;

                h6 {
                    font-size: 16px;
                    font-weight: 600;
                }

                i {
                    font-size: 14px;
                }
            }
        }
    }

    .user-input-box {
        // 第一个子元素
        .user-input:nth-child(1) {
            margin: 20px 0;
        }

        // 最后一个子元素上的第一个元素
        .user-input:nth-last-child(1) .user-link:nth-child(1) {
            border: none;
        }

        .user-input {
            width: 100%;
            background: #fff;
            height: 60px;
            line-height: 50px;
            padding: 0 10px;

            .user-link {
                height: 60px;
                border-bottom: 0.5px solid #DDDDDD;
                display: flex;
                justify-content: space-between;
                padding: 0 10px;

                .phone {
                    color: #00A4FF;
                    font-size: 18px;
                    margin: 20px 0;
                }

                span {
                    img {
                        vertical-align: middle;
                        padding-top: 10px;
                    }

                    p {
                        display: inline-block;
                        font-size: 16px;
                        color: #454545;
                    }

                    i {
                        color: #c8c8cd;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>
