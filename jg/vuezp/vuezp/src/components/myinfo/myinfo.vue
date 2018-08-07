<template>
  <div>
    <!-- <h2>{{ this.$parent.userId }}</h2> -->
    <div class="myinfo">
      <form action="">
        <div class="top-img">
          <div class="head">
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
        <div class="my-missage">
          <div>
            <span>姓名：</span>
            <input type="text" maxlength="10" v-model.trim="name">
          </div>
          <div>
            <span>性别：</span>
            <select v-model="selectSex">
              <option v-for="(item,index) in list.sex" :value="item.id">{{item.title}}</option>
            </select>
          </div>
          <div>
            <span>年龄：</span>
            <input type="number" v-model.trim="ages" oninput='if(value.length>2)value=value.slice(0,2)'>
          </div>
          <div>
            <span>联系：</span>
            <input type="number" v-model.trim="phone" oninput='if(value.length>11)value=value.slice(0,11)'>
          </div>
          <div>
            <span>工龄：</span>
            <select v-model="selectYears">
              <option v-for="(item,index) in list.years" :value="item.id">{{item.title}}</option>
            </select>
          </div>
          <div>
            <span>职称：</span>
            <input type="text" v-model.trim="position" maxlength="15">
          </div>
          <div>
            <span>资格：</span>
            <select v-model="selectQualification">
              <option value="" v-for="(item,index) in list.qualification" :value="item.id">{{item.title}}</option>
            </select>
          </div>
          <div>
            <span class="sign">描述：</span>
            <span class="describe-box">
              <textarea name="text" v-model.trim="describe" cols="30" rows="10" maxlength="100"></textarea>
              <i class="countText">{{countText}}/100</i>
            </span>
          </div>
          <div class="btn-blue" @click="submit()" v-if="message==''">
            <router-link to="">立即认证</router-link>
          </div>
          <div class="btn-blue" @click="mysubmit()" v-else>
            <router-link to="">保存</router-link>
          </div>
        </div>
      </form>
    </div>
    <Dialog :popup="popup" :text="text"></Dialog>
  </div>
</template>
<script>
import Cropper from 'cropperjs';
import CropperCss from '../../css/cropicrec.css';
export default {
  data() {
    return {
      name: '',
      userId: '',
      ages: '',
      phone: '',
      position: '',
      describe: '',
      selectSex: '',
      selectYears: '',
      selectQualification: '',
      popup: false,
      text: '',
      headerImage: require('../../images/my.png'),
      ifImage: false, //判断图片是否为同一张
      picValue: '',
      cropper: '',
      croppable: false,
      panel: false,
      url: '',
      message: [],
      list: [],
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
    /* 初次注册界面 */
    this.$ajax({
      method: 'get',
      url: this.psta + '/base/pinfo',
    })
      .then(response => {
        //console.log(response)
        this.list = response.data.object;
        //console.log(this.list)
        if (this.message.length == 0) {
          this.selectSex = this.list.sex[0].id;
          this.selectYears = this.list.years[0].id;
          this.selectQualification = this.list.qualification[0].id;
        }
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });

    /* 已注册用户信息 */
    this.$ajax({
      method: 'get',
      url: this.psta + '/user/per?userId=' + this.$parent.userId,
    })
      .then(response => {
        //console.log(response)
        this.message = response.data.object;
        //console.log(this.message)
        this.selectSex = this.message.sex;
        this.headerImage = this.message.headimgurl;
        this.name = this.message.name;
        this.sex = this.message.sex;
        this.ages = this.message.ages
        this.phone = this.message.telephone;
        this.selectYears = this.message.years;
        this.position = this.message.title;
        this.selectQualification = this.message.qualification;
        this.describe = this.message.description;
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
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
    /* base64转换成Blob */
    // dataURItoBlob(dataURI) {
    //   var byteString = atob(dataURI.split(',')[1]);
    //   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //   var ab = new ArrayBuffer(byteString.length);
    //   var ia = new Uint8Array(ab);
    //   for (var i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }
    //   console.log(new Blob([ab], { type: mimeString }))
    //   return new Blob([ab], { type: mimeString });
    // },
    /* 认证按钮 */
    submit() {
      let have = true;
      if (this.name.length == 0 || this.ages.length == 0 || this.phone.length == 0 || this.position.length == 0 || this.describe.length == 0) {
        // console.log(this.name)
        //alert('基本信息不能为空')
        have = false;
        this.popup = true;
        this.text = '请填写完整的个人信息';
        return false;
      }
      if (!(/^1[345789][0-9]{9}$/.test(this.phone))) {
        //console.log('手机号错误');
        have = false;
        this.popup = true;
        this.text = '手机号码错误';
        return false;
      }
      if (have) {
        let formData = new FormData();
        formData.append('userId', this.$parent.userId);
        formData.append('file', this.headerImage);
        formData.append('name', this.name);
        formData.append('sex', this.selectSex);
        formData.append('ages', this.ages);
        formData.append('telephone', this.phone);
        formData.append('years', this.selectYears);
        formData.append('title', this.position);
        formData.append('qualification', this.selectQualification);
        formData.append('description', this.describe);
        this.$ajax.interceptors.request.use((config) => {
          //在请求发送之前做一些事
          //console.log(config)
          this.popup = true;
          this.text = '正在保存...';
          return config;
        }, function (error) {
          //当出现请求错误是做一些事
          //alert('出错了!')
          return Promise.reject(error);
        });
        this.$ajax({
          method: 'post',
          url: this.psta + '/user/pregister',
          data: formData
        })
          .then(response => {
            //console.log(response)
            localStorage.setItem("headerImage", this.headerImage)
            this.$router.push({ path: '/nav' })
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          })
      }
    },

    /* 保存按钮 */
    mysubmit() {
      let have = true;
      if (this.name.length == 0 || this.ages.length == 0 || this.phone.length == 0 || this.position.length == 0 || this.describe.length == 0) {
        // console.log(this.name)
        //alert('基本信息不能为空')
        have = false;
        this.popup = true;
        this.text = '请填写完整的个人信息';
        return false;
      }
      if (!(/^1[3-9][0-9]{9}$/.test(this.phone))) {
        //console.log('手机号错误');
        have = false;
        this.popup = true;
        this.text = '手机号码错误';
        return false;
      }
      if (have) {
        let formData = new FormData();
        formData.append('userId', this.$parent.userId);
        if (this.ifImage) {
          formData.append('file', this.headerImage);
        }
        formData.append('name', this.name);
        formData.append('sex', this.selectSex);
        formData.append('ages', this.ages);
        formData.append('telephone', this.phone);
        formData.append('years', this.selectYears);
        formData.append('title', this.position);
        formData.append('qualification', this.selectQualification);
        formData.append('description', this.describe);
        this.$ajax.interceptors.request.use((config) => {
          //在请求发送之前做一些事
          //console.log(config)
          this.popup = true;
          this.text = '正在保存...';
          return config;
        }, function (error) {
          //当出现请求错误是做一些事
          //alert('出错了!')
          return Promise.reject(error);
        });
        this.$ajax({
          method: 'post',
          url: this.psta + '/user/pperfect',
          data: formData
        })
          .then(response => {
            //console.log(response);
            localStorage.setItem("headerImage", this.headerImage)
            this.$router.push({ path: '/nav' })
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          })
      }
    },
  },
  computed: {
    countText() {
      if (this.describe.length != 0) {
        return this.describe.length;
      }
      return 0;
    }
  },
  watch: {
    popup: {
      handler(obj) {
        //console.log(obj);
        if (this.popup) {
          setTimeout(() => {
            this.popup = false;
          }, 1000)
        }
      },
      deep: true
    },
  }
}
</script>
<style lang="scss" scoped>
//@extend
$text: #535353;
input,
select {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
.myinfo {
  padding: 10px;
}
.top-img {
  background: #a4a391;
  height: 130px;
  border-radius: 10px 10px 0 0;
  position: relative;
}

.my-missage {
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.6);
  input {
    border-radius: 5px;
    outline: none;
    border: 0.5px solid #ccc;
    height: 20px;
    width: 80%;
    color: $text;
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
    height: 40px;
  }
  textarea {
    @extend input;
    height: 70px;
    resize: none;
  }
  select {
    @extend input;
    height: 40px;
    width: 80%;
    padding: 0 0 0 10px;
  }
  span {
    color: $text;
    font-size: 16px;
  }
  .sign {
    position: relative;
    top: -55px;
  }
  .describe-box {
    position: relative;
    .countText {
      position: absolute;
      right: 0;
      bottom: -20px;
      color: #a4a391;
      font-size: 14px;
    }
  }
}
</style>

