    <template>
  <div class="Topo"
       name='拓扑图'>
    <div class="Topo-con one"
         style="h">
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:10px;top:120px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:10px;top:280px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:10px;top:440px"></topoinfo>
      <topoinfo class="inherit"
                :id="'38'"
                :name="'服务器接入'"
                :img="'fuwuqi'"
                style="left:190px;top:280px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'核心交换机'"
                :img="'jiaohuanji'"
                style="left:360px;top:280px"></topoinfo>

      <topoinfo class="inherit"
                :id="'30'"
                :name="'门诊'"
                :img="'jiaohuanji'"
                style="left:210px;top:500px"></topoinfo>
      <topoinfo class="inherit"
                :id="'36'"
                :name="'医技'"
                :img="'jiaohuanji'"
                style="left:310px;top:500px"></topoinfo>
      <topoinfo opoinfo
                class="inherit"
                :id="'34'"
                :name="'住院'"
                :img="'jiaohuanji'"
                style="left:410px;top:500px"></topoinfo>
      <topoinfo class="inherit"
                :id="'32'"
                :name="'行政'"
                :img="'jiaohuanji'"
                style="left:510px;top:500px"></topoinfo>

      <topoinfo class="inherit"
                :id="'10360'"
                :name="'内外网隔离防火墙'"
                :img="'fanghuoqiang'"
                :width="120"
                :left='35'
                style="left:580px;top:100px"></topoinfo>

      <topoinfo class="inherit"
                :id="'10360'"
                :name="'边界防火墙'"
                :img="'fanghuoqiang'"
                style="left:360px;top:150px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'边界防火墙'"
                :img="'fanghuoqiang'"
                style="left:840px;top:150px"></topoinfo>

      <topoinfo class="inherit"
                :id="'10360'"
                :name="'专线-电信'"
                :img="'yun'"
                style="left:360px;top:20px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'专线-电信'"
                :img="'yun'"
                style="left:840px;top:20px"></topoinfo>

      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:1180px;top:120px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:1180px;top:280px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'服务器'"
                :img="'server'"
                style="left:1180px;top:440px"></topoinfo>
      <topoinfo class="inherit"
                :id="'39'"
                :name="'服务器接入'"
                :img="'fuwuqi'"
                style="left:1010px;top:280px"></topoinfo>
      <topoinfo class="inherit"
                :id="'10360'"
                :name="'核心交换机'"
                :img="'jiaohuanji'"
                style="left:840px;top:280px"></topoinfo>

      <topoinfo class="inherit"
                :id="'31'"
                :name="'门诊'"
                :img="'jiaohuanji'"
                style="left:690px;top:500px"></topoinfo>
      <topoinfo class="inherit"
                :id="'37'"
                :name="'医技'"
                :img="'jiaohuanji'"
                style="left:790px;top:500px"></topoinfo>
      <topoinfo class="inherit"
                :id="'35'"
                :name="'住院'"
                :img="'jiaohuanji'"
                style="left:890px;top:500px"></topoinfo>
      <topoinfo class="inherit" 
                :id="'33'"
                :name="'行政'"
                :img="'jiaohuanji'"
                style="left:990px;top:500px"></topoinfo>

    </div>

  </div>
</template>
    <script>
import topoinfo from '@/components/TopoInfo'

var post = {
  jsonrpc: '2.0',
  method: 'trigger.get',
  params: {
    output: [],
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
export default {
  data() {
    return {
      newdata: [],
      olddata: [],
      timeerOfRealtime: null
    }
  },
  components: {
    topoinfo
  },
  methods: {
    setcolor(data) {
      data.forEach(element => {
        var pc = document.getElementById(element)
        if (pc == null) return true
        else {
          this.olddata.push(element)
          pc.classList.add('warn')
        }
      })
    },
    delcolor(data) {
      this.olddata = data
      data.forEach(element => {
        var pc = document.getElementById(element)
        pc.classList.remove('warn')
      })
      this.olddata = []
    },
    setIntervalOfRealTime() {
      var uthis = this
      clearInterval(uthis.timeerOfRealtime)
      uthis.timeerOfRealtime = setInterval(() => {
        this.$http.Zabbix(post).then(data => {
          console.log(data)
          data.result.forEach(element => {
            uthis.newdata.push(element.hosts[0].hostid)
            uthis.newdata.push(element.groups[0].groupid)
            uthis.newdata.push(element.groups[1].groupid)
          })
        })
        this.delcolor(uthis.olddata)
        this.setcolor(uthis.newdata)
        uthis.newdata = []
      }, 3000)
    }
  },
  mounted() {
    this.setIntervalOfRealTime()
  }
}
</script>
    <style scoped>
.Topo {
  z-index: 101;
  position: absolute;
  width: 100%;
}
.Topo-con {
  position: absolute;
}
.inherit {
  position: inherit;
}
</style>