<template>
  <div>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" class="el-menu-demo">
        <el-menu-item index="0">首页</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">管理</el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<style lang="less">

</style>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    
  }
}
</script>


