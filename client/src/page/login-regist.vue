<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-aside width="150px">
          <left-side></left-side>
        </el-aside>
        <el-container>
          <el-main>
            <div class="blog-login-regist-wrapper">
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="登录" name="first">
                  <el-form :model="ruleLogin" status-icon :rules="loginRule" ref="ruleLogin" label-width="60px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                      <el-input type="text" v-model="ruleLogin.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pwd">
                      <el-input type="password" v-model="ruleLogin.pwd" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" size="small" @click="submitForm('ruleLogin')">提交</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                  <el-form :model="ruleRegist" status-icon :rules="registRule" ref="ruleRegist" label-width="60px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                      <el-input type="text" v-model="ruleRegist.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pwd">
                      <el-input type="password" v-model="ruleRegist.pwd" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="注册码" prop="blogCode">
                      <el-input type="password" v-model="ruleRegist.blogCode" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" size="small" @click="submitForm('ruleRegist')">提交</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-main>
          <el-footer>
            <v-footer></v-footer>
          </el-footer>
        </el-container>
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

export default {
  components: {
    vHeader,
    leftSide,
    rightSide,
    vMain,
    vFooter
  },
  data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleLogin.username !== '') {
          // console.log(this.$refs.ruleLogin,'123')
          // this.$refs.ruleLogin.validate('username'); // 此检验方法有问题 
        }
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleLogin.pwd !== '') {
          // this.$refs.ruleLogin.validateField('pwd');
        }
        callback();
      }
    };
     var validateBlogCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入注册码'));
      } else {
        if (this.ruleRegist.blogCode !== '') {
          // this.$refs.ruleLogin.validateField('blogCode');
        }
        callback();
      }
    };
    return {
      activeName: 'first',
      ruleLogin: {
        username: '',
        pwd: ''
      },
      loginRule: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePwd, trigger: 'blur' }
        ]
      },
      ruleRegist: {
        username: '',
        pwd: '',
        blogCode: ''
      },
      registRule: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePwd, trigger: 'blur' }
        ],
        blogCode: [
          { validator: validateBlogCode, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
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

<style lang="less" scoped>
  .blog-login-regist-wrapper {
    width: 300px;
    min-height:300px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 10px  20px; 
    background-color: #fff;
  }
</style>
