<template>
  <div>
    <el-header>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="9" class="blog-logo" >
            <router-link to="/index">logo</router-link>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">前端</template>
            <el-menu-item index="1-1" index-id="catagoryId">
              <router-link to="/catagory-article-list/12w3e4r5t6y">html</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">css</el-menu-item>
            <el-menu-item index="1-3">javascript</el-menu-item>
            <el-menu-item index="1-4">vuejs</el-menu-item>
            <el-menu-item index="1-5">reactjs</el-menu-item>
            <el-menu-item index="1-6">angularjs</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">硬件</template>
            <el-menu-item index="2-1">单片机</el-menu-item>
            <el-menu-item index="2-2">电路设计</el-menu-item>
            <el-menu-item index="2-3">信号处理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">散文诗集</template>
            <el-menu-item index="3-1">散文</el-menu-item>
            <el-menu-item index="3-2">微信推广</el-menu-item>
          </el-submenu>
          <el-menu-item index="90" class="blog-header-login" v-if="login">
            <el-button type="primary" round @click="blogLogin">登录/注册</el-button>
          </el-menu-item>
          <el-menu-item index="91" class="blog-header-login" v-else>
            <span>202 登录</span>
          </el-menu-item>
          <el-menu-item index="7" class="blog-header-login">
            <el-button type="success" round @click="blogNote">写博客</el-button>
          </el-menu-item>
          <el-menu-item index="8"  class="blog-header-login">
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
      catagoryId: '2345t6y78u',
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
  .blog-logo {
    width: 9.5%;
    border-bottom: none;
  }
  .blog-logo.is-active ,.blog-header-login.is-active{
    border-bottom:none;
  }
</style>
