<template>
    <div>
        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel()">不同意</el-button>
                <el-button type="primary" @click="ifChecked()">同意</el-button>
            </span>
        </el-dialog>

        <div class="content">
            <topNav></topNav>
            <div class="banner">
                <img src="../assets/banner-申请.png" alt="">
            </div>
            <div class="box">
                <div class="box-form">
                    <div class="form-nav">
                        <router-link to="/nurseForm">护理培训</router-link>
                        <router-link to="/serveForm" class="active-text">技术服务</router-link>
                        <h1>技术服务申请</h1>
                    </div>
                    <div class="icon">
                        <span>
                            <div class="step sign">1</div>
                            <i style="margin-left:-5px">填写个人资料</i>
                        </span>
                        <span>
                            <div class="step" :class="{ sign: isActive }">2</div>
                            <i style="margin-left:6px">确认信息 </i>
                        </span>
                        <span>
                            <div class="step" :class="{ sign: isActives }">2</div>
                            <i style="margin-left:22px">完成</i>
                        </span>
                    </div>
                    <div class="form-text">
                        <img src="../assets/18518919.png" alt="">
                        <h1>{{title}}</h1>
                    </div>
                    <hr>
                    <div v-show="stepOne" class="step-one">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
                            <el-col :span="24" class="sub-title">
                                <span>
                                    <i>*</i>申报院址
                                </span>
                                <el-select v-model="state" filterable placeholder="请选择申报院址" @change="changeValue">
                                    <el-option v-for="(item,index) in list" :key="item.value" :label="item.value" :value="item.uuid" id="inputx">
                                    </el-option>
                                </el-select>
                                <div v-show="ifHave" style="margin-left:100px;color: #f56c6c;font-size: 14px;line-height: 1;padding-top: 4px;">请选择申报院址</div>
                            </el-col>
                            </el-col>
                            <el-form-item label="产品类型" prop="genre">
                                <el-select v-model="ruleForm.genre" placeholder="请选择产品类型" style="width:380px;">
                                    <el-option :label="item.value" :value="item.uuid" v-for="(item,index) in ruleForm.genreList" :key="index">{{item.value}}</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="产品型号" prop="modelNumber">
                                <el-select v-model="ruleForm.modelNumber" placeholder="请选择产品型号" style="width:380px;">
                                    <el-option :label="item.value" :value="item.uuid" v-for="(item,index) in ruleForm.modelList" :key="index">{{item.value}}</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="服务类型" prop="serve">
                                <el-select v-model="ruleForm.serve" placeholder="维修/安装/跟换/拆卸" style="width:380px;">
                                    <el-option label="维修" value="维修"></el-option>
                                    <el-option label="安装" value="安装"></el-option>
                                    <el-option label="跟换" value="跟换"></el-option>
                                    <el-option label="拆卸" value="拆卸"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所在地区">
                                <el-cascader :options="options" v-model="selectedOptions" style="width:380px;"></el-cascader>
                            </el-form-item>
                            <el-form-item label="联系人" prop="name">
                                <el-input v-model="ruleForm.name" style="width:380px;" maxlength="5" placeholder="请输入联系人"></el-input>
                            </el-form-item>
                            <el-form-item label="联系方式" prop="phone">
                                <el-input type="phone" v-model.number="ruleForm.phone" auto-complete="off" style="width:380px;" maxlength="11" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <div @click="centerDialogVisible = true" class="checked">
                                <el-checkbox v-model="checked"></el-checkbox>
                                <span>阅读条款</span>
                            </div>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div v-show="stepTwo" class="step-two">
                        <h1>服务申请资料</h1>
                        <div class="table">
                            <p>
                                <i>产品类型</i>：{{this.stateText}}
                            </p>
                            <p>
                                <i>产品类型</i>：{{ruleForm.genreText}}
                            </p>
                            <p>
                                <i>产品型号</i>：{{ruleForm.modelText}}
                            </p>
                            <p>
                                <i>服务类型</i>：{{ruleForm.serve}}
                            </p>
                            <p>
                                <i>联系人</i>：{{ruleForm.name}}
                            </p>
                            <p>
                                <i>联系方式</i>：{{ruleForm.phone}}
                            </p>
                            <p>
                                <i>所在地区</i>：{{OptionsText}}
                            </p>
                        </div>
                        <div class="table-btn">
                            <el-button type="info" @click="info()">修改</el-button>
                            <el-button type="success" @click="success()">提交</el-button>
                        </div>
                    </div>
                    <div class="step-three" v-show="stepThree">
                        <div class="step-three-box">
                            <i class="el-icon-circle-check-outline"></i>
                            <div>
                                <p>您的信息已经提交成功</p>
                                <p>24小时内我们工作人员将会与您联系</p>
                            </div>
                        </div>
                        <div class="step-three-btn">
                            <el-button @click="resetForm('ruleForm')">返回</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            stepOne: true,
            stepTwo: false,
            stepThree: false,
            isActive: false,
            isActives: false,
            checked: false,
            centerDialogVisible: false,
            title: '产品服务资料',
            /* 院址搜索 */
            list: [],
            state: '',
            stateText: '',
            ifHave: false,
            /* 表单验证 */
            ruleForm: {
                genreList: [],
                modelList: [],
                genreText: '',
                modelText: '',
                genre: '',
                modelNumber: '',
                serve: '',
                date: '',
                phone: '',
            },
            rules: {
                genre: [
                    { required: true, message: '请选择产品类型', trigger: 'change' }
                ],
                modelNumber: [
                    { required: true, message: '请选择产品型号', trigger: 'change' }
                ],
                serve: [
                    { required: true, message: '请选择服务类型', trigger: 'change' }
                ],
                name: [
                    { required: true, message: '请输入联系人', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '手机号不能为空' }, { pattern: /^1[345789][0-9]{9}$/, message: '手机号格式错误' }
                ],
            },
            options: [],
            selectedOptions: ['北京市', '市辖区', '东城区'],
            OptionsText: ''  //步骤二把选中城市显示字符串
        };
    },
    mounted() {
        /* 申报院址 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcNursing',
        })
            .then(response => {
                //console.log(response)
                this.list = response.data.PcNursing;
                //console.log(this.list)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });

        /* 产品型号 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcProductType',
        })
            .then(response => {
                //console.log(response)
                this.ruleForm.genreList = response.data.PcProductType;
                //console.log(this.ruleForm.genreList)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });


        /* 产品编号 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcProductModel?typeId=1',
        })
            .then(response => {
                //console.log(response)
                this.ruleForm.modelList = response.data.PcProductModel;
                //console.log(this.ruleForm.modelList)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });

        /* 城市 */
        this.$ajax({
            method: 'get',
            url: this.psta + '/rest/pc/getPcRegion',
        })
            .then(response => {
                //console.log(response)
                this.options = response.data;
                //console.log(this.options)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        changeValue() {
            this.ifHave = false;
        },

        /* 条款不同意 */
        cancel() {
            this.centerDialogVisible = false;
            this.checked = false;
        },
        /* 阅读同意 */
        ifChecked() {
            this.centerDialogVisible = false;
            this.checked = true;
        },

        /* 第一步骤表单提交 */
        submitForm(formName) {
            this.stateText = document.querySelectorAll('.el-input__inner')[0].value;
            this.ruleForm.genreText = document.querySelectorAll('.el-input__inner')[1].value;
            this.ruleForm.modelText = document.querySelectorAll('.el-input__inner')[2].value;
            //console.log(this.stateText);
            this.$refs[formName].validate((valid) => {
                if (this.state) {
                    if (this.checked) {
                        if (valid) {
                            // this.selectedOptions.join('/')
                            this.isActive = true;
                            this.stepTwo = true;
                            this.stepOne = false;
                            this.title = '确认服务资料'
                            this.OptionsText = this.selectedOptions[0] + '/' + this.selectedOptions[1] + '/' + this.selectedOptions[2];
                            //alert('submit!');
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    } else {
                        this.$message({
                            message: '请同意并阅读条款',
                            type: 'warning'
                        });
                    }
                } else {
                    this.ifHave = true;
                    document.querySelectorAll('.el-input__inner')[0].style.borderColor = '#f56c6c';
                }
            });
        },
        /* 第二步骤返回修改 */
        info() {
            this.isActive = false;
            this.stepOne = true;
            this.stepTwo = false;
        },
        /* 第二步骤提交tabel表单 */
        success() {
            let formData = new FormData();
            formData.append('nsId', this.state);
            formData.append('typeId', this.ruleForm.genre);
            formData.append('devicesId', this.ruleForm.modelNumber);
            formData.append('service', this.ruleForm.serve);
            formData.append('contactPerson', this.ruleForm.name);
            formData.append('contactPhone', this.ruleForm.phone);
            formData.append('province', this.selectedOptions[0]);
            formData.append('city', this.selectedOptions[1]);
            formData.append('county', this.selectedOptions[2]);
            this.$ajax({
                method: 'post',
                url: this.psta + '/rest/pc/sendTechnicalService?',
                data: formData
            })
                .then(response => {
                    //console.log(response)
                    this.stepOne = false;
                    this.stepTwo = false;
                    this.stepThree = true;
                    this.isActives = true;
                    this.title = '完成'
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        },

        /* 第三步骤完成页面返回 */
        resetForm(formName) {
            this.stepOne = true;
            this.stepTwo = false;
            this.stepThree = false;
            this.isActive = false;
            this.isActives = false;
            this.$refs[formName].resetFields();
        },
    }
}
</script>

<style lang="scss" scoped>
/* 院址搜索框 */
.el-select {
  z-index: 999;
  width: 380px;
}
.el-form-item {
  margin-bottom: 30px;
}
.content {
  .banner {
    img {
      width: 100%;
      height: 640px;
    }
  }
  .box {
    background: #f3f3f3;
    padding: 50px;
    .box-form {
      max-width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      padding: 20px;
      min-height: 1200px;
      .form-nav {
        .active-text {
          margin: 0 20px;
          padding-bottom: 5px;
          font-size: 16px;
          font-weight: 600;
          border-bottom: 1px solid #202020;
        }
        a {
          color: #202020;
          font-size: 14px;
        }
        a:hover {
          color: #2ad0ff;
          transition: 0.3s;
        }
        h1 {
          font-size: 36px;
          color: #202020;
          font-weight: normal;
          text-align: center;
        }
      }
      .icon {
        max-width: 600px;
        display: flex;
        justify-content: space-between;
        margin: 70px auto;
        .step {
          width: 70px;
          height: 70px;
          background: #d0d0d0;
          border-radius: 50%;
          color: #fff;
          font-size: 32px;
          line-height: 70px;
          text-align: center;
          margin: 10px 0;
        }
        i {
          font-size: 14px;
        }
      }
      .form-text {
        display: flex;
        margin-bottom: 15px;
        h1 {
          font-size: 24px;
        }
        img {
          margin: 0 15px 0 10px;
        }
      }
      .step-one {
        .form {
          margin-top: 100px;
          margin-left: 20%;
          .sub-title {
            margin-bottom: 30px;
            span {
              width: 100px;
              height: 40px;
              display: inline-block;
              text-align: right;
              float: left;
              font-size: 14px;
              color: #606266;
              line-height: 40px;
              padding: 0 12px 0 0;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              i {
                color: #f56c6c;
              }
            }
          }
        }
      }
      .step-two {
        text-align: center;
        margin-top: 20px;
        h1 {
          font-weight: normal;
          font-size: 18px;
          margin: 20px 0;
        }
        .table {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          i {
            width: 80px;
            display: inline-block;
          }
          p {
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
          }
          p:nth-child(odd) {
            background: #f3f3f3;
          }
        }
        .table-btn {
          margin-top: 100px;
          > button {
            margin: 0 100px;
          }
          button {
            width: 150px;
            height: 50px;
            font-size: 18px;
          }
        }
      }
      .step-three {
        background: #44b79a;
        max-width: 800px;
        height: 250px;
        text-align: center;
        margin: 50px auto;
        .step-three-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 50px;
          i {
            font-size: 88px;
            color: #fff;
          }
          div {
            padding-left: 10px;
            display: inline-block;
            p:nth-child(1) {
              font-size: 24px;
            }
            p:nth-child(2) {
              font-size: 14px;
              color: #676767;
            }
          }
        }
        .step-three-btn {
          float: right;
          margin: 20px 50px 0 0;
          button {
            width: 150px;
            height: 50px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
.checked {
  margin: 10px 0 100px 100px;
  span {
    display: inline-block;
    padding-left: 5px;
    line-height: 19px;
    font-size: 14px;
    color: #676767;
    cursor: pointer;
  }
}
.sign {
  background: #2ad003 !important;
}

.error {
  border-color: #f56c6c !important;
}
</style>
