<template>
  <div>
    <p style="color: white;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(103, 101, 101);
    margin: 2px 0px;">联通流量趋势监控</p>
    <div id="ccc"
         style="width: 100%;height:300px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      time: [],
      data1: [],
      data2: [],
      realTimeInvokeOption: {
        legend: {
          data: ['上行流量', '下行流量']
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: []
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
            name: '总速率(mb)',
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
            name: '上行流量',
            data: [],
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
          },
          {
            name: '下行流量',
            data: [],
            stack: '总量',
            type: 'line',
            smooth: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#f37f04'
                }
              }
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#f37f04'
                },
                {
                  offset: 1,
                  color: '#f5a85880'
                }
              ])
            }
          }
        ]
      },
      xAxisDate: [],
      postDate: []
    }
  },
  methods: {
    setIntervalOfRealTime() {
      var uthis = this
      clearInterval(uthis.timeerOfRealtime)
      uthis.timeerOfRealtime = setInterval(() => {
        //39820
        uthis.$http.ZabbixFlowValue(44399).then(function(data) {
          var newData = data.reverse()
          newData = newData.splice(0, 9)
          newData.forEach(element => {
            var nv = element.value_avg / 1048576
            nv = nv.toFixed(2)
            uthis.data2.push(nv)
          })
        })
        //39800
        uthis.$http
          .ZabbixFlowValue(44441)
          .then(function(data) {
            var newData = data.reverse()
            newData = newData.splice(0, 9)
            newData.forEach(element => {
              var nv = element.value_avg / 1048576
              nv = nv.toFixed(2)
              uthis.data1.push(nv)
              var time = new Date(element.clock * 1000) + ''
              uthis.time.push(time.substring(16, 25))
            })
            uthis.realTimeInvokeChart.setOption({
              xAxis: {
                data: uthis.time.reverse()
              },
              series: [
                {
                  data: uthis.data1.reverse()
                },
                {
                  data: uthis.data2.reverse()
                }
              ]
            })
            uthis.data1 = []
            uthis.data2 = []
            uthis.time = []
          })
          .catch(function(error) {
            console.log('buttom图表数据获取失败')
            return false
          })
      }, 15000)
    }
  },
  mounted() {
    this.realTimeInvokeChart = echarts.init(
      document.getElementById('ccc'),
      'liangdawang'
    )
    this.setIntervalOfRealTime()
    this.realTimeInvokeChart.setOption(this.realTimeInvokeOption)
  }
}
</script>

<style>
#anaiysis-bottom {
  flex: 5;
  width: 1000px;
  height: 400px;
  padding-left: 20px;
  padding-top: 10px;
}
</style>