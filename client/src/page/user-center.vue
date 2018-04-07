<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-container>
          <el-main>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>基本信息</span>
                    </div>
                    <div  class="text item">
                      <div class="blog-user-msg">
                        <img src="../assets/logo.png" alt="avatar">
                        <div>
                          <h3>我是用户名</h3>
                          <el-button size="small" type="success" round>老司机</el-button>
                          <span class="el-icon-star-on"></span>
                          <span class="el-icon-star-on"></span>
                          <span class="el-icon-star-on"></span>
                          <span class="el-icon-star-on"></span>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>修改信息</span>
                    </div>
                    <div  class="text item">
                      <div class="blog-user-msg">
                        <img src="../assets/logo.png" alt="avatar">
                        <div>
                          <el-form :model="ruleModify" status-icon :rules="modifyRule" ref="ruleModify" label-width="60px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username">
                              <el-input type="text" v-model="ruleModify.username" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pwd">
                              <el-input type="password" v-model="ruleModify.pwd" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="phoneCode">
                              <el-input type="text" v-model="ruleModify.phoneCode" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" size="small" @click="submitForm('ruleModify')">提交</el-button>
                            </el-form-item>
                          </el-form>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>不要害羞</span>
                    </div>
                    <div  class="text item">
                      <div class="blog-user-desc">
                        <div>
                          <p>最缺的就是自我表扬了</p>
                          <p>
                            <textarea name="" id="" class="blog-user-desc-msg" placeholder="来来来，尽情吹牛逼吧，这里不限制你的才华横溢"></textarea>
                          </p>
                        </div>
                        <div>
                          <el-button type="success" size="small">保存</el-button>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <h3>我的博客</h3>
                <div class="grid-content">
                  <blog-list></blog-list>     
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
        <el-footer>
          <v-footer></v-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from '@/components/common-header';
import leftSide from '@/components/common-left';
import rightSide from '@/components/common-right';
import vMain from '@/components/common-main';
import vFooter from '@/components/common-footer';

import blogList from '@/components/blog-list'

export default {
  components: {
    vHeader,
    leftSide,
    rightSide,
    vMain,
    vFooter,
    blogList
  },
 data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleModify.username !== '') {
          // console.log(this.$refs.ruleModify,'123')
          // this.$refs.ruleModify.validate('username'); // 此检验方法有问题 
        }
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleModify.pwd !== '') {
          // this.$refs.ruleModify.validateField('pwd');
        }
        callback();
      }
    };
     var validatePhoneCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机码'));
      } else {
        if (this.modifyRule.blogCode !== '') {
          // this.$refs.ruleModify.validateField('blogCode');
        }
        callback();
      }
    };
    return {
      ruleModify: {
        username: '',
        pwd: '',
        phoneCode: '',
        description: ''
      },
      modifyRule: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePwd, trigger: 'blur' }
        ],
        phoneCode: [
          { validator: validatePhoneCode, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
   .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .blog-user-msg {
    display: flex;
    >img {
      flex: 1;
      border-radius: 50%;
    }
    >div {
      flex: 1;
    }
    
    .el-form-item {
      margin-bottom: 9px;
    }
    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
    .el-form-item__error {
      padding-top: 0px;
    }
  }
  .blog-user-desc {
    .blog-user-desc-msg {
      width: 100%;
      height: 100px;
    }
  }
</style>
