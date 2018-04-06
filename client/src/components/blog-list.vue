<template>
  <div>
    <div class="blog-list" v-for="item in 6" :key="item.id">
      <div>
        <h3>
          <router-link to='/catagory-article/1234'>
            javascript 的设计模式-策略模式
          </router-link>
        </h3>
        <div class='blog-list-logo'>
          <span>图片logo</span>
          <div>javascript 的设计模式-策略模式,javascript 的设计模式-策略模式,
            javascript 的设计模式-策略模式.
            javascript 的设计模式-策略模式.
            javascript 的设计模式-策略模式.
          </div>
        </div>
        <p class="blog-small-msg">
          <strong>js</strong>
          <span class="el-icon-info"></span>
          <span>这是一个OK男</span>
          <span>2018-4-6</span>
        </p>
      </div>
      <div>
        <p class="el--primary">浏览量</p>
        <p>14567</p>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
  .blog-list {
    display: flex;
    border-bottom: 1px solid #ddd;
    >div:nth-child(1){
    flex: 4;
    text-align: left;
    }
    div.blog-list-logo>div {
      flex: 10;
    }
    >div:nth-child(2){
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: right;
      >p {
        flex: 1;
        align-items: center;
        justify-content: center;
        color: #409EFF;
      }
    }
    .blog-list-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        flex: 1;
      }
      div {
        flex: 10;
      }
    }
    .blog-small-msg {
      span {
        margin-left: 1em;
      }
      span:nth-child(3) {
        margin-left: 0px;
      }
    }
  }
</style>