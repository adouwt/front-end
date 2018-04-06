<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{
  font-size: 62.5%;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
body {
  font-size: 1.4rem;
  overflow: hidden;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
.el-aside {
  border-top: 2px solid #ddd;
}
.el-main {
  text-align: left;
}
</style>
