// 封装基于axios 请求接口 http 方法
import axios from "axios";
import Vue from "vue";
import router from "./router";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api"
  // baseURL: 'http://localhost:3000/admin/api'
});

http.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // 在请求头中添加token
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 之后你可能需要能移除 Interceptors ：

// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// 也可以为axios实例添加一个Interceptors：

// const instance = axios.create();
// instance.interceptors.request.use(function () {/*...*/});

// 给封装的http请求 设置一个拦截器
http.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message
      });

      if (err.response.status === 401) {
        router.push("/login");
      }
    }

    return Promise.reject(err);
  }
);

export default http;
