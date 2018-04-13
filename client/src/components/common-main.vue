<template>
  <div>
    <h4>vuex的状态管理数据</h4>
    <h5>博客标题</h5>
    <i>
      {{this.$store.state.blogTitle}}
    </i>
    <h5>todos里面的信息</h5>
    <ul>
      <li v-for = "item in this.$store.state.todos" :key="item.id">
        <span>{{item.text}}</span> <br>
        <span>{{item.done}}</span> 
      </li>
    </ul>
    <h5>初始化访问量</h5>
    <p>
       mapState方式 {{viewsCount}}；<br>
       直接使用views {{this.$store.state.views}}
    </p>
    <h4>blogNumber数字 </h4>
    <span>state中blogNumber：{{this.$store.state.blogNumber}}</span>
    <h4>总计</h4>
    <span>state中total：{{this.$store.state.total}}</span>
    <p>
      <button @click="totalAlise">点击增加total</button>
    </p>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      checked: true
    }
  },
  created () {
    // this.$store.dispatch('addViews') // 直接通过store的方法 触发action, 改变 views 的值
    this.blogAdd() // 通过mapActions 触发mutation 从而commit ，改变state的值
  },
  computed: {
    ...mapState({
      viewsCount: 'views'
    }),
    ...mapGetters({
      todosALise: 'getToDo' // getToDo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
    })
  },
  methods: {
    ...mapMutations({
      totalAlise: 'clickTotal' // clickTotal 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
    }),
    ...mapActions({
      blogAdd: 'blogAdd' // blogAdd是定义的一个函数别名称，挂载在到this(vue)实例上，后面的一个blogAdd 才是actions里面函数方法名称
    })
  }
}
</script>
