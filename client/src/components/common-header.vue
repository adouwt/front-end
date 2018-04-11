<template>
  <div>
    <el-header>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="9" class="blog-logo" >
            <router-link to="/index">{{blogTitle || '202博客'}}</router-link>
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
          <el-menu-item index="90" class="blog-header-login" v-if="!login">
            <el-button type="primary" round @click="blogLogin">登录/注册</el-button>
          </el-menu-item>
          <el-menu-item index="91" class="blog-header-login" v-else>
            <router-link to="/user-center">
              202 登录
            </router-link>
            <el-button type="warning" round @click="signout">退出</el-button>
          </el-menu-item>
          <el-menu-item index="10" class="blog-header-login" v-if="isAdmin">
            <router-link to="/wtadmin">
              超管管理
            </router-link>
          </el-menu-item>
          <el-menu-item index="7" class="blog-header-login">
            <el-button type="success" round @click="blogNote">写博客</el-button>
          </el-menu-item>
          <el-menu-item index="8"  class="blog-header-login">
            <el-input v-on:keyup.enter.native="inputSubmit"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="inputVal">
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
import {getCookie, removeCookie} from '../utils/authService'

export default {
  props: {
    blogTitle: {
      type: String
    }
  },
  data () {
    return {
      activeIndex: '1',
      login: '',
      inputVal: '',
      catagoryId: '2345t6y78u',
      isAdmin: ''
    };
  },
  created () {
    this.isAdmin = getCookie('isadmin'); // 读取 登录时候存取的cookie的超管判断字段
    this.login = getCookie('token'); // 读取 登录时候存取的cookie的超管判断字段
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit () {
      console.log('submit!');
    },
    blogLogin () {
      router.push({ path: '/login-regist' })
      // router.push({ path: 'login-regist' }) // 如果这样写的话，会寻找路由最近的 / 然后在后面直接拼接login-regist 
    },
    blogNote () {
      router.push({ path: '/blog-note' })
    },
    inputSubmit () {
      this.$emit('searchInput', this.inputVal)  // 子组件传值给父组件，通过事件触发
    },
    signout () {
      removeCookie('token');
      removeCookie('isadmin');
      router.push({ path: '/index' })
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
