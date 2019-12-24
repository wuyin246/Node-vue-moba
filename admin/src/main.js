import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import './style.css'
//引入 并 写入Vue原型上  this.$http 来调用
import http from './http'
Vue.prototype.$http = http;


Vue.mixin({
    computed: {
        uploadUrl() {
            return this.$http.defaults.baseURL + '/upload'
        }
    },
    methods: {
        getAuthHeaders() {
            return {
                Authorization: `Bearer ${localStorage.token || ''}`
            }
        }
    },
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
