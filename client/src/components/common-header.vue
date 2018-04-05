<template>
  <div>
    <el-header>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-menu-item index="5" class="blog-header-login" v-if="login">
            <el-button type="primary" round @click="blogLogin">登录/注册</el-button>
          </el-menu-item>
          <el-menu-item index="6" class="blog-header-login" v-else>
            <span>202 登录</span>
          </el-menu-item>
          <el-menu-item index="7" class="blog-header-login">
            <el-button type="success" round @click="blogNote">写博客</el-button>
          </el-menu-item>
          <el-menu-item index="4"  class="blog-header-login">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input21">
            </el-input>
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </el-header>
  </div>
</template>

<script>
import router from '@/router/router.js';
export default {
  data () {
    return {
      activeIndex: '1',
      login: true,
      input21: '',
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit () {
      console.log('submit!');
    },
    blogLogin () {
      router.push({ path: 'login-regist' })
    },
    blogNote () {
      router.push({ path: 'blog-note' })
    }
  }
}
</script>

<style lang="less" scoped>
  .blog-header-login {
    float: right;
  }
</style>
