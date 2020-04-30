import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import './style.css'

//引入 并 写入Vue原型上  this.$http 来调用
import http from './http'

import store from './store'
Vue.prototype.$http = http

// 混入附件上传url计算属性，放置头部token方法
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    },
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`,
      }
    },
  },
})

// 全局引入返回顶部组件
// import BackToTop from './components/BackToTop.vue'
// Vue.component('BackToTop', BackToTop)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
