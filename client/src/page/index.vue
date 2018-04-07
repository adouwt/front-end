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
            <div>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>      
            <blog-list></blog-list>     
          </el-main>
        </el-container>
        <el-aside width="300px">
          <right-side></right-side>
        </el-aside>
      </el-container>
    </el-container>
    <!-- <el-container class="blog-index-footer">
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container> -->
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>

