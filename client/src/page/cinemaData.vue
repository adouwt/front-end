<template>
  <div>
    <router-link class="el-icon-arrow-left ticket-manage-return" to="/"></router-link>
    <h3 class="text-center">电影票导出</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <hr>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        label="时间"
        >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="片名"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="票价"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="position"
        label="座位"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="ticketid"
        label="票号"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="text-center common-mt-md">
      <p v-if="!multipleSelection.length">
        <el-button type="success" round disabled>导出</el-button>
      </p>
      <p v-else>
        <el-button type="success" round >导出</el-button>
      </p>
    </div>
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
          position: '10排7列',
          ticketid: '5677890ghjbnm7890ghj'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          price: '¥45',
          position: '10排7列',
          ticketid: '5677890ghjbnm7890ghj'
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
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val;
      }
    }
  }
</script>