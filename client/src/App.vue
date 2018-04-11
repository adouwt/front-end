<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      isadmin: false
    }
  },
  computed: {

  },
  // watch: {
  //   '$route': 'judegAdmin' // 路由变化重新调用方法 判断是否是admin
  // },
  methods: {
    // judegAdmin () {
    //   let hasAdminRouter = window.location.href.includes('/wtadmin')
    //   if (hasAdminRouter && !this.isadmin) {
    //     router.push({ path: '/error' })
    //   }
    // }
  }
}
</script>

<style lang="less">
html{
  font-size: 62.5%;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
body {
  font-size: 1.4rem;
  overflow: hidden;
  margin: 0;
}
.text-center {
  text-align: center;
}
.common-mt-md {
  margin-top: 2rem;
}
.common-ml-md {
  margin-left: 2rem;
}
a {
  color: #00c1de;
  text-decoration: none;
}
.text-left {
  text-align: left;
}
.blog-width-full {
  width: 100%;
}
.blog-common-ml-sm {
  margin-left: 10px;
}
.blog-pull-right {
  float: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  >div>.el-container {
    max-width: 1440px;
    margin: 0 auto;
    .blog-wrapper {
      max-width: 1440px;
      margin: 0 auto;
    } 
  }
}
.el-aside {
  border-top: 2px solid #ddd;
}
.el-main {
  text-align: left;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.blog-wrapper.el-container {
  // min-height: calc(100vh - 60px); 此方法不知道为什么没有作用
  position: absolute;
  left: 0;
  right:0;
  bottom: 0;
  top: 60px;
}
</style>
