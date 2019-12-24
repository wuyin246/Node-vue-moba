<template>
  <div class="login-container">
    <el-card class="login-card" header="请先登录">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token; //浏览器关闭后token仍存在
      //sessionStorage.token = res.data.token; // 浏览器关闭后token销毁
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功"
      });
    }
  },
  created() {}
};
</script>

<style scoped>
.login-container {
  width: 25rem;
  margin: 10rem auto;
}
</style>