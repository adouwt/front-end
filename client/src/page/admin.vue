<template>
  <div>
    <el-container>
      <div class="blog-width-full">
        <v-header :blog-title = blogTitle :is-admin = isAdmin></v-header>
      </div>
      <el-container class="blog-wrapper">
        <el-container>
          <el-main>
            <div>this is a admin page!</div>
          </el-main>
          <el-footer>
            <v-footer></v-footer>
          </el-footer>
        </el-container>
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
      blogTitle: this.$store.state.blogTitle,
      isAdmin: true
    };
  },
  created () {
    this.$store.commit('changeTitle', '迩伶贰的blog');
    this.blogTitle = this.$store.state.blogTitle  
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
