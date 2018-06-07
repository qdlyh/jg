<!-- <img id="result" src=""></img> multiple="multiple"-->
<template>
    <div>
        <div class="volunteer">
            <input type="file" id="file-img" @change="onChange" hidden>
            <input type="file" id="file-camera" accept="image/*" capture="camera" @change="onChange" hidden>
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
                            <div class="show-img" v-for="(item,index) in Image" :key="index">
                                <img :src="item.src" alt="">
                                <div class="icon" @click="deleteBtn(index)">X</div>
                            </div>
                            <i @click="showBtn(0)">+</i>
                        </span>
                        <p>身份证正面相片</p>
                    </div>
                    <div class="file-div">
                        <span>
                            <div class="show-img" v-for="(item,index) in Images" :key="index">
                                <img :src="item.src" alt="">
                                <div class="icon" @click="deleteBtns(index)">X</div>
                            </div>
                            <i @click="showBtn(1)">+</i>
                        </span>
                        <p>身份证反面相片</p>
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
            <toast v-model="cancel" type="cancel">{{(cancelText)}}</toast>
            <div class="btn-blue" id="clickMe" style="margin-top:50px;" @click="submit">提交</div>
        </div>
        <!-- <div>
            <msg :title="('资料已提交')" :description="('审核结果将会以消息形式通知您')"></msg>
            <x-button type="primary" style="width:80%;" link="/userType">返回个人中心</x-button>
        </div> -->
        <actionsheet v-model="show1" v-if="!Image.length||!Images.length" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
    </div>
</template>
<script>
import { Actionsheet, Toast } from 'vux'

export default {
    components: {
        Actionsheet,
        Toast
    },
    data() {
        return {
            num: null,
            Image: [],
            Images: [],
            show1: false,
            menus1: {
                menu1: '拍照',
                menu2: '从相册中选择'
            },
            cancel: false,
            isActive: false,
            istext: '上传',
            cancelText: ''
        }
    },
    mounted() {
        // function ProcessFile(e) {
        //     var file = document.querySelector("#file-img").files[0];
        //     var reader = new FileReader();
        //     reader.onload = function (event) {
        //         var txt = event.target.result;
        //         var img = document.createElement("img");
        //         img.src = txt;//将图片base64字符串赋值给img的src
        //         this.Image = img.src;
        //         document.querySelector("#result").appendChild(img);
        //         // console.log(txt)
        //     };
        //     reader.readAsDataURL(file);
        // }
        // document.querySelector("#file-img").onchange = ProcessFile
    },
    updated() {
        // var $file = document.querySelector("#file-img");

        // function readFile() {
        //     var $fileImg = document.querySelector('#result')
        //     var imagSize = document.querySelector("#file-img").files[0].size
        //     var file = this.files[0];
        //     if (!/image\/\w+/.test(file.type)) {
        //         //alert("请选择图片类型");
        //         return false;
        //     }
        //     if (imagSize > 1024 * 1024 * 3) {
        //         alert('图片不能大于3M');
        //         return true;
        //     }
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = function (e) {
        //         $fileImg.src = this.result;
        //     }
        // }
        // $file.onchange = readFile;

    },
    methods: {
        click(key) {
            //console.log(key)
            let image = document.querySelector("#file-img");
            let camera = document.querySelector("#file-camera");
            if (key == 'menu1') {
                camera.click();
            }
            if (key == 'menu2') {
                image.click();
            }
        },
        showBtn(i) {
            this.show1 = true;
            this.num = i
        },
        change(e) {
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                return false
            }
            this.isActive = true;
            this.istext = '上传成功';
            let files = e.target.files || e.dataTransfer.files;
        },
        imgs() {
            let file = document.querySelector("#file-img").files[0] || document.querySelector("#file-camera").files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                if (this.Image.length < 1) {
                    if (this.num == 0) {
                        this.Image.push({ src: event.target.result });
                        console.log(this.Image)
                    }
                }
                if (this.Images.length < 1) {
                    if (this.num == 1) {
                        this.Images.push({ src: event.target.result })
                    }
                }

            };
        },
        onChange(e) {
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                return false
            }
            // let files = e.target.files || e.dataTransfer.files;
            this.imgs()
        },

        deleteBtn(index) {
            this.Image.splice(index, 1);
            document.querySelector("#file-img").value = null;
            //console.log(document.querySelector("#file-img").value)
        },
        deleteBtns(index) {
            this.Images.splice(index, 1);
            document.querySelector("#file-img").value = null;
        },
        submit() {
            this.cancel = true;
            this.cancelText = '请上传完整信息'
        }
    },
    watch: {
        // show1: {
        //     handler(obj) {
        //         console.log(obj)
        //         for (let i = 0; i < this.Image.length; i++) {
        //             console.log(this.Image[i])
        //             if (this.Image[i].isImg == false) {
        //                 this.show1 = true;
        //             } else {
        //                 this.show1 = false;
        //             }
        //         }

        //     }, deep: true
        // }
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
          overflow: hidden;
          .show-img {
            img {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              //   z-index: 99;
            }
            .icon {
              position: absolute;
              right: 5px;
              top: 5px;
              color: #fff;
              background: #fd0000;
              width: 2rem;
              height: 2rem;
              text-align: center;
              line-height: 2rem;
              border-radius: 10px;
              font-size: 1.5rem;
            }
          }
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
.file-input {
  //display: none;
}
.active {
  border: 1px solid #78d034 !important;
  color: #78d034 !important;
}
</style>
