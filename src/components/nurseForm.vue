<template>
    <div>

        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
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
                        <router-link to="/" class="active-text">护理培训</router-link>
                        <router-link to="/">技术服务</router-link>
                        <h1>护理培训报名</h1>
                    </div>
                    <div class="icon">
                        <span v-for="item in data">
                            <div class="step sign">{{item}}</div>
                            <i style="margin-left:-5px"></i>
                        </span>
                        <!-- <span>
                            <div class="step sign">1</div>
                            <i style="margin-left:-5px">填写个人资料</i>
                        </span>
                        <span>
                            <div class="step" :class="{ sign: isActive }">2</div>
                            <i style="margin-left:22px">完成</i>
                        </span> -->
                    </div>
                    <div class="form-text">
                        <img src="../assets/31231231.png" alt="">
                        <h1>培训项信息</h1>
                    </div>
                    <hr>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
                        <el-form-item label="培训项目" prop="project">
                            <el-input v-model="ruleForm.project" style="width:380px;"></el-input>
                        </el-form-item>
                        <el-form-item label="活动名称" prop="name">
                            <el-input v-model="ruleForm.name" style="width:380px;"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group v-model="ruleForm.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="学历" prop="education">
                            <el-select v-model="ruleForm.education" placeholder="请选择学历" style="width:380px;">
                                <el-option label="小学" value="小学"></el-option>
                                <el-option label="初中" value="初中"></el-option>
                                <el-option label="高中" value="高中"></el-option>
                                <el-option label="中专" value="中专"></el-option>
                                <el-option label="大专" value="大专"></el-option>
                                <el-option label="本科" value="本科"></el-option>
                                <el-option label="本科以上" value="本科以上"></el-option>
                            </el-select>
                        </el-form-item>
                        <!-- <el-form-item label="所在地区">
                            <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
                        </el-form-item> -->
                        <el-form-item label="年龄" prop="age">
                            <el-input type="age" v-model.number="ruleForm.age" auto-complete="off" style="width:380px;"></el-input>
                        </el-form-item>
                        <el-form-item prop="email" label="邮箱">
                            <el-input v-model="ruleForm.email" style="width:380px;"></el-input>
                        </el-form-item>
                        <div @click="centerDialogVisible = true" class="checked">
                            <el-checkbox v-model="checked">阅读条款</el-checkbox>
                        </div>
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
            data:1,
            isActive: false,
            checked: false,
            centerDialogVisible: false,
            ruleForm: {
                project: '',
                name: '',
                sex: '',
                age: '',
                email: '',
                education: '',
            },
            rules: {
                project: [
                    { required: true, message: '请输入培训项目', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                age: [
                    { required: true, message: '年龄不能为空' }, { type: 'number', message: '年龄必须为数字值' }
                ],
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ],
                education: [
                    { required: true, message: '请选择学历', trigger: 'change' }
                ],
            },
        };
    },
    mounted() {
        //console.log(this.selectedOptions3)  
    },
    methods: {
        submitForm(formName) {
            this.data++;
            this.isActive = true;
            console.log(this.selectedOptions3)
            this.$refs[formName].validate((valid) => {
                if (this.checked) {
                    if (valid) {
                        alert('submit!');
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
            });
        },
        clause() {
            alert('1')
        }
    }
}
</script>

<style lang="scss" scoped>
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
.checked {
  margin: 10px 0 100px 100px;
}
.sign {
  background: #2ad003 !important;
}
</style>
