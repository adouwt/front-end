<template>
  <div>
    <router-link class="el-icon-arrow-left ticket-manage-return" to="/"></router-link>
    <h3 class="text-center">核销数据</h3>
    <div>
        <p class="text-center">
          将二维码显示在扫描区
        </p>
        <div class="ticket-delete-scaner">

        </div>
        <div class="common-mt-md">
          <el-input placeholder="输入票号" >
            <template slot="prepend">票号：</template>
          </el-input>
        </div>
    </div>
  </div>
</template>

<style>
  .ticket-delete-scaner {
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
    background-color: #ddd;
  }
</style>

