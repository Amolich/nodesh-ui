<template>
  <div class="LoginCookie">
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="邮箱">
        <el-input type="textarea" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="cookie">
        <el-input type="textarea" v-model="form.cookie"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verification-box">
          <span class="verification">
            <el-input v-model="form.veriCode"></el-input>
          </span>
          <el-button type="primary" @click="onVeriCodeSend">发送验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import 'axios'
import axios from 'axios'
  // do not use same name with ref
  const form = reactive({
    cookie: '',
    veriCode: '',
    email: ''
  })

  const onSubmit = () => {
    const params = form
    axios.post('/api/setCookie', params).then((res) => {
      console.log(res)
    })
    console.log('submit!')
  }

  const onVeriCodeSend = () => {
    axios.get('/api/sendVeriCode').then((res) => {
      console.log(res)
    })
  }
</script>


<style scoped>
  .LoginCookie {
    width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .verification-box {
    flex: 1;
    display: flex;
  }
  .verification {
    width:250px;
    margin-right: 20px;
  }
</style>
