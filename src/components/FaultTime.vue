<template>
  <div>
    <div id="falut"
         style="width: 100%;height:300px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
var post = {
  jsonrpc: '2.0',
  method: 'event.get',
  params: {
    output: ['severity', 'r_eventid']
  },
  auth: 'd93f80f6651f7f28d19ec60ac46fabbc',
  // auth: 'd93f80f6651f7f28d19ec60ac46fabbc',
  id: '1'
}
export default {
  data() {
    return {
      faultCount: [],
      faultTime: [],
      prmiseAll: [],
      data: []
    }
  },
  methods: {
    line() {
      var pie = echarts.init(document.getElementById('falut'), 'liangdawang')

      var option = {
        legend: {
          data: ['故障量']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: this.faultTime
        },
        color: ['#2783cc', '#f37f04'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        yAxis: [
          {
            name: '个',
            type: 'value'
          }
        ],

        grid: {
          left: '3%',
          right: '4%',
          bottom: '8%',
          containLabel: true
        },
        series: [
          {
            name: '故障量',
            data: this.data,
            stack: '总量',
            type: 'line',
            smooth: false,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#1c629a'
                },
                {
                  offset: 1,
                  color: 'rgba(39,131,204,.1)'
                }
              ])
            }
          }
        ]
      }
      pie.setOption(option)
    },
    getTime() {
      var date = new Date()
      var Y = date.getFullYear() //获取完整的年份(4位)
      var M = date.getMonth() //获取当前月份(0-11,0代表1月)
      var D = date.getDate() //获取当前日(1-31)
      var H = date.getHours() + ':00:00'
      return `${Y}-${M}-${D} ${H}`
    },
    fault() {
      let nTime = new Date(this.getTime())
      nTime = nTime.getTime() / 1000
      var H = 3600 * 24
      for (let i = 10; i >= 1; i--) {
        let time = nTime - H * i
        let date = String(new Date(time * 1000))
        this.faultTime.push(date.slice(8, 10) + '日')
        console.log(date)
        this.prmiseAll.push(
          this.$http.ZabbixFaultTime(time).then(data => {
            this.faultCount[10 - i] = data.length
          })
        )
      }
    }
  },
  mounted() {
    this.fault()
    Promise.all(this.prmiseAll).then(data => {
      this.faultCount.forEach((item, id) => {
        if (id === 0) {
          this.data.push(item)
        } else {
          // this.data.push(this.faultCount[id] - this.faultCount[id - 1])
          this.data.push(this.faultCount[id])
        }
      })
      // 执行图形方法
      this.line()
    })
    // console.log(this.faultCount[0])
  }
}
</script>

<style>
</style>