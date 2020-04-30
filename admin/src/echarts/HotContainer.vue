<template>
  <div>
    <div class="echart-container">
      <div class="echart-item">
        <hotnews></hotnews>
      </div>
      <div class="echart-item">
        <hotheros></hotheros>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    hotnews: () => import('./HotNews'),
    hotheros: () => import('./HotHeros'),
  },
}
</script>

<style scoped>
.echart-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.echart-item {
  width: 600px;
  height: 400px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
  transition: all 0.6s;
}

.echart-item:hover {
  transform: scale(1.04);
}
</style>
