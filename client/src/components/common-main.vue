<template>
  <div>
    <div v-for="item in 3" :key='item'>
      
      <h3>二次开发 element-ui 主题你需要知道的东西</h3>
      <div class="blog-detials-small-msg">
        <span>阅读</span>
        <span>2399</span>

        <span>收藏</span>
        <span>35</span>

        <time>2018-3-6</time>

        <el-checkbox v-model="checked" class="blog-common-ml-sm">点击收藏</el-checkbox>
      </div>
      <div class="blog-detials-main">
        <h4>element-theme-default 语法解析</h4>
        <p>首先是element-theme-default采用的是下一代CSS风格的开发方式，
          用了基于PostCss的Post-salad来编译，而不是我之前认为的SCSS\LESS等预处理。不过总体而言如果有预处理的经验
          ，还是能够很快上手。
        </p>
        <ol>
          <li>
            采用var进行全局样式变量定义
          </li>
          <li>
            采用var进行全局样式变量定义
          </li>
          <li>
            采用var进行全局样式变量定义
          </li>
          <li>
            采用var进行全局样式变量定义
          </li>
        </ol>
        <div>
          <code>
            .foo {
                color: tint(#BADA55, 42%);
              }

              .bar {
                background-color: shade(#663399, 42%);
              }
          </code>
        </div>
        <h4>element-theme-default 二次开发指南</h4>
        <p>
          官方给出的例子目前还有一些问题，由于缺少了vue-popup组件，在et --watch的时候会报错。
          我fork的仓库里加入了vue-popup的组件，
          在官方解决这个问题之前暂时可以采用如下方式（目前跟官方仓库保持同步）：
        </p>
        <h5>
          首先是安装工具：
        </h5>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
