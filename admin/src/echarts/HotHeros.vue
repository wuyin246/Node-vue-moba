<template>
  <div>
    <div id="myCharts-Hero" ref="myChartsHero"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted() {
    const myCharts = echarts.init(this.$refs.myChartsHero)

    let dataAxis = [
      '赵云',
      '虞姬',
      '项羽',
      '韩信',
      '鲁班',
      '李白',
      '阿珂',
      '曹操',
      '瑶',
      '耀',
      '李信',
      '钟馗',
    ]
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
    let yMax = 500
    let dataShadow = []

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax)
    }
    let options = {
      title: {
        text: 'Hot Heros',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
        left: 'center',
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)',
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' },
              ]),
            },
          },
          data: data,
        },
      ],
    }

    // Enable data zoom when user click bar.
    var zoomSize = 6
    myCharts.setOption(options)
    myCharts.on('click', function(params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
      myCharts.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
      })
    })
  },
}
</script>

<style scoped>
#myCharts-Hero {
  width: 600px;
  height: 400px;
}
</style>
