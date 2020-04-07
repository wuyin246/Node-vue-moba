import Vue from "vue";
import App from "./App.vue";

import "./assets/iconfont/iconfont.css";
import "./assets/scss/style.scss";
import router from "./router";
import store from "./store";
import "../plugins/element";

import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// 引入自定义卡片组件
import Card from "./components/Card.vue";
Vue.component("m-card", Card);

import ListCard from "./components/ListCard.vue";
Vue.component("m-list-card", ListCard);

import BackToTop from "./components/BackToTop.vue";
Vue.component("BackToTop", BackToTop);

import PullToRefresh from "./components/PullToRefresh.vue";
Vue.component("m-pull-refresh", PullToRefresh);

import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/web/api",
  // baseURL: 'http://localhost:3000/web/api'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
