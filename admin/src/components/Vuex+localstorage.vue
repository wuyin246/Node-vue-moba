<template>
  <div></div>
</template>

<script>
import Vuex from 'vuex'

let defaultCity = '上海'
try {
  // 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity) {
    defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
  }
} catch (e) {
  throw e
}
export default new Vuex.Store({
  state: {
    city: defaultCity,
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        window.localStorage.setItem('defaultCity', JSON.stringify(state.city))
        // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {
        throw e
      }
    },
  },
})
</script>

<style scoped></style>
