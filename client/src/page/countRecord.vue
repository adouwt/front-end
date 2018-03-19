<template>
  <div>
    <router-link class="el-icon-arrow-left ticket-manage-return" to="/"></router-link>
    <h3 class="text-center">历史数据统计</h3>
    <el-table
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        label="时间"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="片名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cinemaName"
        label="电影院"
        width="120">
      </el-table-column>
      <el-table-column
        prop="price"
        label="票价"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="totlePrice"
        label="总收入"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          price: '¥45',
          totlePrice: '2345',
          cinemaName: '河马影城'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          price: '¥45',
          totlePrice: '2345',
          cinemaName: '河马影城'
        }],
        multipleSelection: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },

    methods: {
      
    }
  }
</script>