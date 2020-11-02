<template>
  <div>
    <div id="data"
         style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Axios from 'axios'
export default {
  data() {
    return {
      names: ['待受理', '处理中', '已结束'],
      data: [],
      list: {},
      rich: null,
      func: null,
      total: null,
      leaveChart: null
    }
  },
  methods: {
    leave() {
      this.leaveChart = echarts.init(
        document.getElementById('data'),
        'liangdawang'
      )

      var option = {
        tooltip: {
          show: false
        },
        legend: {
          orient: 'vertical',
          data: this.names,
          icon: 'circle',
          right: '5px',
          top: '10px',
          textStyle: {
            color: '#fff',
            fontSize: 15
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            clockWise: false,
            startAngle: '90',
            center: ['45%', '35%'],
            radius: ['40%', '41%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  formatter: this.func,
                  rich: this.rich
                },
                labelLine: {
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            data: this.list,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return idx * 50
            }
          },
          {
            name: '',
            type: 'pie',
            center: ['45%', '35%'],
            radius: ['79%', '49%'],
            itemStyle: {
              color: 'transparant'
            },
            startAngle: '90',
            data: [
              {
                value: this.total,
                name: '',
                label: {
                  normal: {
                    show: true,
                    formatter: '{c|{c}} {b|条工单}',
                    rich: {
                      c: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        fontWeight: 'bold',
                        lineHeight: 5
                      },
                      b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        lineHeight: 5
                      }
                    },
                    textStyle: {
                      fontSize: 15,
                      fontWeight: 'bold'
                    },
                    position: 'center'
                  }
                }
              }
            ]
          }
        ]
      }
      this.leaveChart.setOption(option)
    },
    leaveData() {
      let color = ['#ff4343', '#4caf50', '#f6d54a']
      let list = []
      let total = 0
      for (let i in this.data) {
        total += this.data[i]
      }
      this.total = total
      let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }

      this.rich = {
        white: {
          align: 'center',
          padding: [3, 0]
        }
      }

      for (let i in this.data) {
        list.push(
          {
            value: this.data[i],
            name: this.names[i],
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i]
              }
            }
          },
          {
            value: this.total / 30,
            name: '',
            itemStyle: placeHolderStyle
          }
        )
      }

      this.func = params => {
        let percent = ((params.value / this.total) * 100).toFixed(1)
        let name = params.name.replace(/\n/g, '')
        if (params.name !== '') {
          return name + '\n{white|' + percent + '%}'
        } else {
          return ''
        }
      }
      this.list = list
    }
  },

  mounted() {
    Axios.get('http://172.16.8.103:8069/today_is_data').then(data => {
      this.data = [data.data.accepted, data.data.pending, data.data.closed]
      this.leaveData()
      this.leave()
    })
  }
}
</script>

<style>
</style>

