import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    isshow: true,
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    },
  },
  actions: {
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。dwadwad
    increment(context) {
      context.commit('increment')
    },
  },
})
