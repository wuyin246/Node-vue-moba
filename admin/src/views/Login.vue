<template>
  <div class="full-screen">
    <starbg></starbg>
    <div class="login-container">
      <el-card class="login-card text-center" header="Login">
        <el-form @submit.native.prevent="login">
          <el-form-item label="Account">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="model.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit" style="width:100%;"
              >Submit</el-button
            >
          </el-form-item>
          <el-form-item class="flex-row">
            <i class="fab fa-github"></i>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token //浏览器关闭后token仍存在
      localStorage.username = res.data.username
      localStorage.userid = res.data.userid
      localStorage.limitslist = JSON.stringify(res.data.limitslist)
      //sessionStorage.token = res.data.token; // 浏览器关闭后token销毁
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功',
      })
    },
  },
  created() {},
  components: {
    starbg: () => import('@/components/StarRepaint'),
  },
}
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
  position: relative;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25rem;
  transform: translate(-50%, -50%);
}

.text-center {
  text-align: center;
}
</style>
