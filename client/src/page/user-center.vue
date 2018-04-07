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
            <div class="blog-user-center">
              <div class="blog-user-center-avatar"></div>
              <div class="blog-user-center-msg"></div>
            </div>
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
    };
  },
  methods: {
    
  }
}
</script>

<style lang="less">

</style>
