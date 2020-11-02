<template>
  <div class="col-md-4">
    <!-- <div id="cpu" style="width: 100%;height:300px;"></div> -->

    <p style="color:white;padding:5px 10px;border-bottom:1px solid #676565;margin:2px 0px;text-align:center;">Cpu利用率Top5</p>
    <div class="king-block king-block-themed bk-ranger-box mb10"
         id="disk_sum">
      <div class="ranger-wrapper">
        <table class="mb0 pr15 ranger-header-box color">
          <thead class>
            <!-- <th> </th> -->
            <th>IP</th>
            <th>利用率</th>
          </thead>
          <tbody id>
            <tr v-for="(item,key) in list"
                :key="key"
                v-if="key<5">
              <!-- <td style="width:35%;text-align: left;color:#9e9e9e;white-space:nowrap">{{item.name}}</td> -->
              <td style="width:45%;color:#9e9e9e">{{item.host}}</td>
              <td style="width:50%;color:#03a9f4">{{item.value | value}}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
var post = {
  jsonrpc: '2.0',
  method: 'event.get',
  params: {
    output: ['hosts', 'r_eventid'],
    selectHosts: ['host']
  },
  auth: 'd93f80f6651f7f28d19ec60ac46fabbc',
  id: '1'
}
import echarts from 'echarts'

export default {
  data() {
    return {
      goodsList: [],
      arrGoods: [],
      letter: 'value', //默认不排序 // 排序字段
      original: true //默认从大到大排列
    }
  },
  filters: {
    value: function(val) {
      val = val.slice(0, 4)
      return val
    },
    name: function(value) {
      value = value.slice(0, 10) + '...'
      return value
    }
  },
  methods: {
    Getdata: function() {
      var _this = this
      _this.goodsList = []
      _this.$http.ZabbixServerAll(15).then(function(data) {
        data.result.forEach(function(element) {
          _this.$http.ZabbixGetCpuKey(element.hostid).then(function(data) {
            _this.$http.ZabbixGetKeyValue(data[0].itemid).then(function(data) {
              element['value'] = data[data.length - 1].value_avg
              _this.goodsList.push(element)
            })
          })
        })
      })
    }
  },
  computed: {
    list: function() {
      var _this = this
      // 筛选
      var arrGoods = []
      for (var i = 0; i < this.goodsList.length; i++) {
        // 如果匹配成功, 向空数组添加数据
        if (this.goodsList[i].name.search(this.searchVal) != -1) {
          arrGoods.push(this.goodsList[i])
        }
      }
      // 升序降序排列
      // false:升序  true:降序
      if (this.letter != '') {
        arrGoods.sort(function(a, b) {
          if (_this.original) {
            return b[_this.letter] - a[_this.letter]
          } else {
            return a[_this.letter] - b[_this.letter]
          }
        })
      }

      return arrGoods
    }
  },
  mounted() {
    var _this = this
    clearInterval(_this.setTime)
    _this.setTime = setInterval(() => {
      this.Getdata()
    }, 60000)
    this.Getdata()

  }
}
</script>
<style scoped>
td {
  color: white;
  margin: auto;
}
table {
  margin-left: 20px;
  width: 95%;
}
thead {
  color: white;
  font-size: 15px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  border-top-left-radius: 13%;
  border-top-right-radius: 13%;
}
tbody {
  text-align: center;
  font-family: 'Audiowide';
}
.font1 {
  font-family: 'Audiowide';
  text-align: center;
  color: rgb(188, 188, 255);
}
.ranger-wrapper {
  overflow-x: hidden;
  height: 280px;
  width: 100%;
}

.ranger-wrapper::-webkit-scrollbar {
  display: none;
}
.king-block {
  padding-top: 0px;
}
tr:hover {
  box-shadow: inset 1px 3px 20px 0px rgba(10, 10, 255, 0.3);
}
.on_click_true {
  text-shadow: 0 0 10px red;
  color: red;
}
</style>