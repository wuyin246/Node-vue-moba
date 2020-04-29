<template>
  <div>
    {{ msg }}

    <app-header @titleChanged="updateTitle"></app-header>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import Header from './Header'
export default {
  data() {
    return {
      msg: 'Error 404',
      title: '传递的是一个值',
    }
  },
  methods: {
    updateTitle(e) {
      //声明这个函数
      this.title = e
    },
  },
  components: {
    'app-header': Header,
  },
}
</script>

<style scoped></style>
