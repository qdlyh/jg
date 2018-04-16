<template>
    <div>
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
                            <i style="margin-left:5px">填写资料</i>
                        </span>
                        <span>
                            <div class="step" :class="{ sign: isActive }">2</div>
                            <i style="margin-left:22px">完成</i>
                        </span>
                    </div>
                    <div class="form-text">
                        <img src="../assets/18518919.png" alt="">
                        <h1>产品服务资料</h1>
                    </div>
                    <hr>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
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
                        <el-form-item label="活动时间" required>
                            <el-col :span="12">
                                <el-form-item prop="date">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="服务类型" prop="serve">
                            <el-select v-model="ruleForm.serve" placeholder="维修/安装/跟换/拆卸" style="width:380px;">
                                <el-option label="维修" value="维修"></el-option>
                                <el-option label="安装" value="安装"></el-option>
                                <el-option label="跟换" value="跟换"></el-option>
                                <el-option label="拆卸" value="拆卸"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="phone">
                            <el-input type="phone" v-model.number="ruleForm.phone" auto-complete="off"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="所在地区">
                            <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
                        </el-form-item> -->
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
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
                serve: [{ required: true, message: '请选择服务类型', trigger: 'change' }],
                date: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '年龄不能为空' }, { pattern: /^1[345789][0-9]{9}$/, message: '手机号格式错误' }
                ],
            },
        };
    },
    mounted() {
        //console.log(this.selectedOptions3)  
    },
    methods: {
        submitForm(formName) {
            this.isActive = true;
            console.log(this.ruleForm.serve)
            console.log(this.selectedOptions3)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.el-input {
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
      .form {
        margin-top: 100px;
        margin-left: 20%;
      }
      hr {
        height: 1px;
        background: #f1ab23;
        border: none;
      }
    }
  }
}
.sign {
  background: #2ad003 !important;
}
</style>
