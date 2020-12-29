<template>
  <div>
    <div id="myCharts-News" ref="myChartsNews"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted() {
    const myCharts = echarts.init(this.$refs.myChartsNews)
    let options = {
      backgroundColor: '#2c343c',

      title: {
        text: 'How to visit',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc',
        },
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: 'Source of visit',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'Direct access' },
            { value: 310, name: 'Email marketing' },
            { value: 274, name: 'Alliance advertising' },
            { value: 235, name: 'Video advertising' },
            { value: 400, name: 'Search engines' },
          ].sort(function(a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function() {
            return Math.random() * 200
          },
        },
      ],
    }

    myCharts.setOption(options)
  },
}
</script>

<style scoped>
#myCharts-News {
  width: 600px;
  height: 400px;
}
</style>
