<template>
  <div class="col-md-4">
    <p style="color: white;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(103, 101, 101);
    margin: 2px 0px;">事件信息</p>
    <div class="king-block king-block-themed bk-ranger-box mb10"
         id="disk_sum">
      <div class="swiper-container">
        <thead class>
          <th style="width:200px;white-space:nowrap;">所在群组</th>
          <th style="width:800px">故障名称</th>
          <th style="width:150px;white-space:nowrap;">故障等级</th>
          <th style="width:100px;white-space:nowrap;">目标主机</th>
        </thead>
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="index in sum">
            <tbody id>
              <tr style="width:100%"
                  v-for="(item,key) in goodsList"
                  :key="item.triggerid"
                  v-if="key<(7*index) && key>(7*index-8)">
                <td style="width:200px;font-size:13px">{{item.groups[0].groupid | group}}</td>
                <td style="width:800px;font-size:13px">{{item.description}}</td>
                <td style="width:150px;">{{item.priority | leave}}</td>
                <td style="width:100px;padding-right:10px">{{item.hosts[0].host}}</td>
              </tr>
            </tbody>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
var post = {
  jsonrpc: '2.0',
  method: 'trigger.get',
  params: {
    output: ['description', 'priority', 'host'],
    filter: {
      value: 1
    },
    sortfield: 'priority',
    sortorder: 'DESC',
    selectHosts: ['host'],
    selectGroups: ['group']
  },
  auth: 'd93f80f6651f7f28d19ec60ac46fabbc',
  id: 1
}
import Axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data() {
    return {
      goodsList: [],
      sum: null
    }
  },
  methods: {
    getServerFault() {
      Axios.post('', post).then(data => {
        this.goodsList = data.data.result
        this.sum = parseInt(this.goodsList.length / 7)
      })
    }
  },
  mounted() {
    var _this = this
      this.sum = parseInt(this.goodsList.length / 7)

    clearInterval(_this.setTime)
    _this.setTime = setInterval(() => {
      this.getServerFault()
    }, 10000)
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      observer: true,
      observeParents: true,
      freeMode: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  filters: {
    leave: val => {
      if (val === '0') val = '未分类'
      else if (val === '1') val = '信息'
      else if (val === '2') val = '警告'
      else if (val === '3') val = '严重'
      else if (val === '4') val = '高'
      else if (val === '5') val = '灾难'
      return val
    },
    group: val => {
      if (val === '15') val = 'windows server'
      else if (val === '2') val = 'Linux server'
      else if (val === '34') val = '住院楼内网'
      else if (val === '35') val = '住院楼外网'
      else if (val === '36') val = '医技楼内网'
      else if (val === '37') val = '医技楼外网'
      else if (val === '32') val = '行政楼内网'
      else if (val === '33') val = '行政楼外网'
      else if (val === '30') val = '门诊楼外网'
      else if (val === '31') val = '门诊楼外网'
      else if (val === '22') val = '虚拟化'
      else if (val === '20') val = '服务器SNMP'
      else if (val === '38') val = '服务器内网接入交换机'
      else if (val === '39') val = '服务器外网接入交换机'
      else if (val === '16') val = 'AC'
      else if (val === '26') val = 'Carestream'
      else if (val === '41') val = '服务器虚拟化'
      else if (val === '42') val = '服务器存储设备'
      else if (val === '21') val = '存储'
      else if (val === '17') val = '交换机'
      else if (val === '4') val = 'Zabbix server'
      else val = '未知'
      return val
    }
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
  height: 20px;
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
  text-shadow: 0 0 10px blue;
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
  padding-top: 10px;
}
tr:hover {
  box-shadow: inset 1px 3px 20px 0px rgba(10, 10, 255, 0.3);
}
.on_click_true {
  text-shadow: 0 0 10px red;
  color: red;
}
.swiper-container {
  width: 1295px;
  height: 300px;
}
.swiper-slide {
  /* Specify Slides's Size: */
  width: 100%;
  height: 100%;
}
</style>