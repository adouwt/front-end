<template>
  <div class="ticket-manage">
    <div>
      <router-link class="el-icon-arrow-left ticket-manage-return" to="/"></router-link>
      <h3 class="text-center">填写电影院数据</h3>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="电影院名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="片名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="票价" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
        <span class="el-icon-plus ticket-manage-timeinput" @click="addTime(this)"></span>
      </el-form-item>

      <el-form-item label="时间" prop="name" v-for="item in timeArr" :key='item.id'>
        <el-input v-model="ruleForm.name"></el-input>
        <span class="el-icon-minus ticket-manage-timeinput" @click="minusTime(this)"></span>
      </el-form-item>

      <el-form-item label="座位" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="虚位" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="观影须知" prop="desc">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="ruleForm.desc">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          region: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '不能为空', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写观影须知', trigger: 'blur' }
          ]
        },
        timeArr: [],
        timeInputString: '<el-input v-model="ruleForm.name"></el-input><span class="el-icon-minus"></span>'
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm.name)
            // axios.post('/doCinemaSubmit', {
            //   cinemaName : this.ruleForm.name,
            // }).then( res => {
            //   console.log(res)
            // }).catch( err => {
            //   console.log(err)
            // })
            // axios.get('v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a')
            axios.post('http://127.0.0.1:8000/doCinemaSubmit', {
              'cinemaName': 'this.ruleForm.name'
            })
            .then(succ => {
              console.log(succ, 'suc');
            }, err => {
              console.log(err, 'err')
            })
            axios.get('http://127.0.0.1:8000/hello', {
            })
            .then(succ => {
              console.log(succ, 'suc');
            }, err => {
              console.log(err, 'err')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      },
      addTime () {
        this.timeArr.push(this.timeInputString)
      },
      minusTime () {
        this.timeArr.shift(this.timeInputString)
      }
    }
  }
</script>

<style>
  .ticket-manage-return {
    float: left;
  }
  .ticket-manage-timeinput {
    position: absolute;
  }
</style>


