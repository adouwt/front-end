<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header :is-admin = isAdmin></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-aside width="150px">
          <left-side></left-side>
        </el-aside>
        <el-container>
          <el-main>
            <el-form ref="form" :model="blog" label-width="80px" size="mini">
              <el-form-item label="博客标题">
                <el-input v-model="blog.title"></el-input>
              </el-form-item>
            </el-form>
            <vue-html5-editor :content="content" :height="500"></vue-html5-editor>
            <vue-markdown>
            </vue-markdown>
            <p>文章分类：</p>
            <div>
              <el-checkbox-group 
                v-model="checkedcatagories"
                :min="1"
                :max="4">
                <el-checkbox v-for="cat in catagories" :label="cat" :key="cat.id">{{cat}}</el-checkbox>
              </el-checkbox-group>
              <span class="el-icon-plus ticket-manage-timeinput" @click="addCat()"></span>
              <p></p>
              <el-input v-model="blog.otherCat" v-show="showInput" ref="catInputVal" class="blog-addCat-input"></el-input>
              <el-button size="mini" round v-show="showInput" type="success" class="blog-addCat-button" @click="AddCatSubmit()">提交</el-button>
              <el-button size="mini" round v-show="showInput" type="warning" class="blog-addCat-button" @click="cancelAddCat()">取消</el-button>
            </div>
            <p></p>
            <div class="blog-pull-right">
              <el-button size="mini"   type="success"   @click="publicBlog()">发布博客</el-button>
              <el-button size="mini"   type="warning"  @click="saveDraft()">保存草稿</el-button>
            </div>
          </el-main>
         
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import vHeader from '@/components/common-header';
import leftSide from '@/components/common-left';
import rightSide from '@/components/common-right';
import vMain from '@/components/common-main';
import vFooter from '@/components/common-footer';

// h5 富文本编辑器
import VueHtml5Editor from 'vue-html5-editor'

// markdown 编辑器
import VueMarkdown from 'vue-markdown'


Vue.use(VueHtml5Editor, {
  // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效  
  // global component name 
  name: 'vue-html5-editor',
  // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称 
  // if set true,will append module name to toolbar after icon 
  showModuleName: false,
  // 自定义各个图标的class，默认使用的是font-awesome提供的图标 
  // custom icon class of built-in modules,default using font-awesome 
  icons: {
    text: 'fa fa-pencil',
    color: 'fa fa-paint-brush',
    font: 'fa fa-font',
    align: 'fa fa-align-justify',
    list: 'fa fa-list',
    link: 'fa fa-chain',
    unlink: 'fa fa-chain-broken',
    tabulation: 'fa fa-table',
    image: 'fa fa-file-image-o',
    hr: 'fa fa-minus',
    eraser: 'fa fa-eraser',
    undo: 'fa-undo fa',
    'full-screen': 'fa fa-arrows-alt',
    info: 'fa fa-info'
  },
  // 配置图片模块 
  // config image module 
  image: {
      // 文件最大体积，单位字节  max file size 
      sizeLimit: 512 * 1024,
      // 上传参数,默认把图片转为base64而不上传 
      // upload config,default null and convert image to base64 
      upload: {
          url: null,
          headers: {},
          params: {},
          fieldName: {}
      },
      // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩 
      // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG) 
      // set null to disable compression 
      compress: {
          width: 1600,
          height: 1600,
          quality: 80
      },
      // 响应数据处理,最终返回图片链接 
      // handle response data，return image url 
      uploadHandler (responseText) {
          // default accept json data like  {ok:false,msg:'unexpected'} or {ok:true,data:'image url'} 
          var json = JSON.parse(responseText)
          if (!json.ok) {
              alert(json.msg)
          } else {
              return json.data
          }
      }
  },
  // 语言，内建的有英文（en-us）和中文（zh-cn） 
  // default en-us, en-us and zh-cn are built-in 
  language: 'zh-cn',
  // 自定义语言 
  i18n: {
    // specify your language here 
    'zh-cn': {
      'align': '对齐方式',
      'image': '图片',
      'list': '列表',
      'link': '链接',
      'unlink': '去除链接',
      'table': '表格',
      'font': '文字',
      'full screen': '全屏',
      'text': '排版',
      'eraser': '格式清除',
      'info': '关于',
      'color': '颜色',
      'please enter a url': '请输入地址',
      'create link': '创建链接',
      'bold': '加粗',
      'italic': '倾斜',
      'underline': '下划线',
      'strike through': '删除线',
      'subscript': '上标',
      'superscript': '下标',
      'heading': '标题',
      'font name': '字体',
      'font size': '文字大小',
      'left justify': '左对齐',
      'center justify': '居中',
      'right justify': '右对齐',
      'ordered list': '有序列表',
      'unordered list': '无序列表',
      'fore color': '前景色',
      'background color': '背景色',
      'row count': '行数',
      'column count': '列数',
      'save': '确定',
      'upload': '上传',
      'progress': '进度',
      'unknown': '未知',
      'please wait': '请稍等',
      'error': '错误',
      'abort': '中断',
      'reset': '重置'
    }
  },
  // 隐藏不想要显示出来的模块 
  // the modules you don't want 
  hiddenModules: [],
  // 自定义要显示的模块，并控制顺序 
  // keep only the modules you want and customize the order. 
  // can be used with hiddenModules together 
  visibleModules: [
    'text',
    'color',
    'font',
    'align',
    'list',
    'link',
    'unlink',
    'tabulation',
    'image',
    'hr',
    'eraser',
    'undo',
    'full-screen',
    'info'
  ],
  // 扩展模块，具体可以参考examples或查看源码 
  // extended modules 
  modules: {
    // omit,reference to source code of build-in modules 
  }
})

export default {
  components: {
    vHeader,
    leftSide,
    rightSide,
    vMain,
    vFooter,
    VueMarkdown
  },
  data () {
    return {
      content: '',
      blog: {
        title: '',
        addOtherCat: ''
      },
      checkedcatagories: ['js', 'reactjs'],
      catagories: ['js', 'css', 'html', 'vuejs', 'reactjs'],
      showCat: false,
      showInput: false,
      isAdmin: true
    };
  },
  created () {
    this.blog.title = '这个文章修改的文章标题';
    this.content = '这个是文章修改的文章内容'
  },
  methods: {
    addCat () {
      this.showInput = true;
    },
    cancelAddCat () {
      this.showInput = false;
      this.blog.otherCat = ''; // 通过绑定的model 清除与之绑定的value 值
      // this.$refs.catInputVal.value = '' // 这样清除值报错
    },
    AddCatSubmit () {
      // this.catagories.push(this.$refs.catInputVal.value) 赋值操作成功
      this.catagories.push(this.blog.otherCat);
    },
    publicBlog () {
      const h = this.$createElement;
      this.$notify({
        title: '发布成功',
        message: h('i', {style: 'color: teal'}, '博客发布成功，请前往首页查看')
      });
    },
    saveDraft () {
      const save = this.$createElement;
      this.$notify({
        title: '保存成功',
        message: save('i', {style: 'color: teal'}, '草稿保存成功，请前往个人中心页面查看')
      });
    }
  }
}
</script>

<style lang="less">
  .blog-addCat-input{
    display: inline-block;
    width: auto;
    input {
      width: 100px;
      line-height: 30px;
      height: 30px;
    }
  }
</style>
