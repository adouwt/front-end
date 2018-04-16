<template>
  <div>
    <div v-if="isEditor" class="blog-edit-btn">
      <el-rate 
        v-model="value3"
        disabled
        show-text>
      </el-rate>
      <el-button type="success" size='mini' icon="el-icon-share"></el-button>
      <el-button type="primary" size='mini' icon="el-icon-edit" @click="editArticle('1234')" ></el-button>
      <el-button type="warning" size='mini' icon="el-icon-delete"  @click="open"></el-button>
    </div>
    <div v-else>
      <el-rate 
        v-model="value3"
        show-text>
      </el-rate>
      <el-button type="success" size='mini' icon="el-icon-share"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value3: 3.7,
      isEditor: false,
      judge: true
    };
  },
  created () {
    this.judgeEditor(1)
  },
  methods: {
    judgeEditor (parmes) {
      if (parmes === 1) {
        this.isEditor = true;
      }
    },
    open () {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    editArticle (id) {
      this.$router.push({
        name: 'blogNoteModify',
        params: {id}
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .blog-edit-btn {
    display: flex;
    flex-direction: row-reverse;
    align-items: center; // 垂直居中
    button {
      margin-right: 10px;
    }
  }
</style>