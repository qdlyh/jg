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
                        <router-link to="/">护理培训</router-link>
                        <router-link to="/" class="active-text">技术服务</router-link>
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
                    <el-select v-model="value8" filterable placeholder="请选择">
                        <el-option v-for="item in list" :key="item.uuid" :label="item.value" :value="item.uuid">
                        </el-option>
                    </el-select>
                    <p @click="btn()">12</p>
                    <div v-show="stepOne" class="step-one">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
                            <el-col :span="24" class="sub-title">
                                <span>
                                    <i>*</i>申报院址
                                </span>
                                <el-autocomplete class="inline-input" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入院址" @select="handleSelect" @blur="Blur" @focus="Focus" @change="ifChan" style="width:380px;">
                                </el-autocomplete>
                                <div v-show="ifHave" style="margin-left:100px;color: #f56c6c;font-size: 14px;line-height: 1;padding-top: 4px;">{{ifText}}</div>
                            </el-col>
                            <el-form-item label="产品类型" prop="genre">
                                <el-select v-model="ruleForm.genre" placeholder="请选择产品类型" style="width:380px;">
                                    <el-option label="马桶" value="马桶"></el-option>
                                    <el-option label="洗面仪" value="洗面仪"></el-option>
                                    <el-option label="其他" value="其他"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="产品型号" prop="modelNumber">
                                <el-select v-model="ruleForm.modelNumber" placeholder="请选择产品型号" style="width:380px;">
                                    <el-option label="马桶" value="马桶"></el-option>
                                    <el-option label="洗面仪" value="洗面仪"></el-option>
                                    <el-option label="其他" value="其他"></el-option>
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
                            <el-form-item label="联系人" prop="name">
                                <el-input v-model="ruleForm.name" style="width:380px;" maxlength="5" placeholder="请输入联系人"></el-input>
                            </el-form-item>
                            <el-form-item label="联系方式" prop="phone">
                                <el-input type="phone" v-model.number="ruleForm.phone" auto-complete="off" style="width:380px;" maxlength="11" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="所在地区">
                            <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
                        </el-form-item> -->
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
                                <i>产品类型</i>：{{this.resultsTitle}}
                            </p>
                            <p>
                                <i>产品类型</i>：{{ruleForm.genre}}
                            </p>
                            <p>
                                <i>产品型号</i>：{{ruleForm.modelNumber}}
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
                            <!-- <p>
                                <i>所在地区</i>：{{selectedOptions}}
                            </p> -->
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
                            <el-button @click="complete()">返回</el-button>
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
            value8: '',
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
            ifId: null,
            ifText: '',
            resultsTitle: '',
            ifHave: false,
            /* 表单验证 */
            ruleForm: {
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
        };
    },
    mounted() {
        //console.log(this.selectedOptions3)  
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
    },
    methods: {
        btn() {
            console.log(this.value8)
        },

        /* 院址搜索 */
        querySearch(queryString, cb) {
            var list = this.list;
            var results = queryString ? list.filter(this.createFilter(queryString)) : list;
            // 调用 callback 返回建议列表的数据
            if (results.length == 1) {
                this.resultsTitle = results[0].value;
                this.ifId = results[0].uuid;
                console.log(this.resultsTitle + '输入触发')
            } else {
                this.ifHave = true;
            }
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        /* 点击搜索下拉框触发 */
        handleSelect(item) {
            //console.log(item.value);
            this.ifId = item.uuid;
            this.resultsTitle = item.value;
            console.log(this.resultsTitle + '点击搜索下拉框触发')
        },
        ifChan() {
            console.log('this.state')
        },
        Focus() {
            // alert(this.state)
            if (this.state) {
                //alert(this.state)
                if (this.ifId == '') {
                    this.ifHave = true;
                    this.ifText = '请填写或选择正确的申报院址'
                    console.log(this.ifHave)
                } else {
                    // alert(this.state)
                    this.ifHave = false;
                }
            }
        },

        Blur() {
            if (this.state) {
                //alert(this.state)
                if (this.ifId == '') {
                    this.ifHave = true;
                    this.ifText = '请填写或选择正确的申报院址'
                    console.log(this.ifHave)
                } else {
                    // alert(this.state)
                    this.ifHave = false;
                }
            }
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
            //console.log(this.selectedOptions3)
            this.$refs[formName].validate((valid) => {
                if (this.state) {
                    this.ifHave = false;
                    if (this.ifId) {
                        this.ifHave = false;
                        if (this.checked) {
                            if (valid) {
                                this.isActive = true;
                                this.stepTwo = true;
                                this.stepOne = false;
                                this.title = '确认服务资料'
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
                        this.ifText = '请填写申报院址'
                    }
                } else {
                    this.ifHave = true;
                    this.ifText = '请填写申报院址'
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
            this.$ajax({
                method: 'post',
                //url: this.psta + '/rest/pc/getPcHealthAssessment?uuid=68',
            })
                .then(response => {
                    this.stepOne = false;
                    this.stepTwo = false;
                    this.stepThree = true;
                    this.title = '完成'
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        },

        /* 第三步骤完成页面返回 */
        complete() {
            this.stepOne = true;
            this.stepTwo = false;
            this.stepThree = false;
        },
    }
}
</script>

<style lang="scss" scoped>
/* 院址搜索框 */
.el-autocomplete {
  z-index: 999;
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
</style>
