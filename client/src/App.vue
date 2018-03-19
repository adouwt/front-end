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
.ticket-manage-return {
  float: left;
  font-weight: bold;
  font-size: 1.6rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px auto;
  width: 95%;
}
</style>
