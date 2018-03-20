<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="ticket-index-title">
          <div class="text-center">Hello,Movie</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="ticket-index-header">
          <div class="img text-center">
            <img src="../assets/sys-img/images.jpeg" alt="">
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="commom-clear"></div>
    <el-row type="flex" class="ticket-index-content-first">
      <el-col :span="12" class="ticket-index-content-item">
        <router-link class="ticket-index-content-item-box" to="/cinemadata" tag='div'>
          <div class="el-icon-success ticket-index-content-item-icon"></div>
          <div class="ticket-index-content-item-text">
            座位导出
          </div>
        </router-link>
      </el-col>
      <el-col :span="12" class="ticket-index-content-item">
        <router-link class="ticket-index-content-item-box" to="/manage" tag='div'>
          <div class="el-icon-circle-plus ticket-index-content-item-icon"></div>
          <div class="ticket-index-content-item-text">
            添加电影
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
      <el-col :span="12" class="ticket-index-content-item">
        <router-link class="ticket-index-content-item-box" to="/countrecord" tag='div'>
          <div class="el-icon-tickets ticket-index-content-item-icon"></div>
          <div class="ticket-index-content-item-text">
            历史数据
          </div>
        </router-link>
      </el-col>
      <el-col :span="12" class="ticket-index-content-item">
        <router-link class="ticket-index-content-item-box" to="/deleteData" tag='div'>
          <div class="el-icon-delete ticket-index-content-item-icon"></div>
          <div class="ticket-index-content-item-text">
            核销数据
          </div>
        </router-link>
      </el-col>
    </el-row>
    <h3 class='text-left common-ml-md'>最新电影</h3>
    <el-carousel :interval="3000" type="card" height="200px" class="common-mt-md">
      <el-carousel-item v-for="item in movieArr" :key="item.id" class="text-center">
        <img v-bind:src="item.images.small" alt="电影封面" class="ticket-index-movie-img">
      </el-carousel-item>
      <div v-if="!movieArr.length" class="ticket-index-movie-loading">
        <span class="el-icon-loading "></span>
      </div>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        movieArr: []
      }
    },
    created () {
      this.getDoubanTopMovie();
      this.getHello()
    },
    methods: {
      getDoubanTopMovie () {
        this.$http.get('v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then(succ => {
          // console.log(succ, 'suc');
          var number = Math.floor(Math.random() * (40 - 1) + 1);
          this.movieArr = succ.body.entries.splice(number, 5)
        }, err => {
          console.log(err, 'err')
        })
      },
      getHello () {
        this.$http.get('http://127.0.0.1:8008/api/essayNote')
        .then(succ => {
          console.log('success', succ)
        }, err => {
          console.log(err, 'err')
        })
      }
    }
  }
</script>

<style lang="less">
  .ticket-index-title {
    div {
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
  .ticket-index-header {
    background: #ddd;
    .img {
      height: 10rem;
      width: 100%;
      background-color: #eee;
      img {
        width: 100%;
      }
    }
  }
  .ticket-index-content-first {
    border-bottom: 1px solid #fff;
  }
  .ticket-index-content-item {
    >div {
      background-color: #999;
      height: 10rem;
    }
    >div:last-child{
      border-left: 1px solid #fff;
    }
    .ticket-index-content-item-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        font-size: 2.4rem;
      }
      .ticket-index-content-item-icon {
        margin-bottom: 1rem;
      }
    }
  }
  
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
  .ticket-index-movie-loading {
    width: 8rem;
    margin: 0 auto;
    span {
      font-size: 8rem;
      opacity: 0.8;
    }
  }
  .ticket-index-movie-img {
    max-height: 100%;
  }
  .commom-clear {
    clear: both;
  }
</style>

