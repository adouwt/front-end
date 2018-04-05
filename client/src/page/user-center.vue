<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-aside width="200px">
          <left-side></left-side>
        </el-aside>
        <el-container>
          <el-main>
            <div>this is a user center page!</div>
            <v-main></v-main>
          </el-main>
          <el-footer>
            <v-footer></v-footer>
          </el-footer>
        </el-container>
        <el-aside width="300px">
          <right-side></right-side>
        </el-aside>
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
    return {
      activeIndex: '1',
      activeIndex2: '1',
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
    }
  }
}
</script>

<style lang="less">
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
    // line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
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
