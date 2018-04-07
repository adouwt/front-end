<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-aside width="150px">
          <left-side></left-side>
        </el-aside>
        <el-container>
          <el-main>
            <div>this is a article-list page!</div>
            <blog-list></blog-list>  
          </el-main>
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
import blogList from '@/components/blog-list'

export default {
  components: {
    vHeader,
    leftSide,
    rightSide,
    vMain,
    blogList,
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

</style>
