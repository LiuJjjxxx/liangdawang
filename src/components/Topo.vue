    <template>
        <div class="Topo" name='拓扑图' >
            <div class="Topo-con one" style="h">
                <topoinfo class="inherit" :id="'1001'" :name="'用户'" :img="'user'" style="left:200px"></topoinfo>
                <topoinfo class="inherit" :id="'1002'" :name="'互联网'"  :img="'yun'" style="left:450px"></topoinfo>
                <topoinfo class="inherit" :id="'1003'" :name="'银行专线'" :img="'yun'" style="left:700px"></topoinfo>
                <topoinfo class="inherit" :id="'1004'" :name="'前置交换机'" :img="'jiaohuanji'" style="left:450px;top:70px"></topoinfo>
                <topoinfo class="inherit" :id="'1005'" :name="'防病毒网关'" :img="'fanghuoqiang'" style="left:450px;top:140px"></topoinfo>
                <topoinfo class="inherit" :id="'1006'" :name="'生产防火墙'" :img="'fanghuoqiang'" style="left:450px;top:210px"></topoinfo>
                <topoinfo class="inherit" :id="'1007'" :name="'内网交换机'" :img="'jiaohuanji'" style="left:200px;top:280px"></topoinfo>
                <topoinfo class="inherit" :id="'1008'" :name="'WEB应用防护系统'" :img="'fanghu'" style="left:700px;top:280px"></topoinfo>
                <topoinfo class="inherit" :id="'1009'" :name="'数据库审计漏洞扫描'"  :img="'fuwuqi'" style="left:30px;top:350px"></topoinfo>
                <topoinfo class="inherit" :id="'1010'" :name="'堡垒机生产入侵检测'"  :img="'fuwuqi'" style="left:200px;top:350px"></topoinfo>
                <topoinfo class="inherit" :id="'1011'" :name="'核心光交换机'" :img="'jiaohuanji'" style="left:370px;top:350px"></topoinfo>
                <topoinfo class="inherit" :id="'1012'" :name="'DMZ交换机'" :img="'jiaohuanji'" style="left:700px;top:350px"></topoinfo>
                <topoinfo class="inherit" :id="'1013'" :name="'数据库集群'" :img="'jiqun'" style="left:370px;top:420px"></topoinfo>
                <topoinfo class="inherit" :id="'1014'" :name="'刀片机箱'" :img="'jixiang'" style="left:600px;top:420px"></topoinfo>
                <topoinfo class="inherit" :id="'1015'" :name="'负载均衡器'" :img="'fanghuoqiang'"  style="left:800px;top:420px"></topoinfo>
                <topoinfo class="inherit" :id="'1016'" :name="'存储交换机'" :img="'jiaohuanji'" style="left:370px;top:490px"></topoinfo>
                <topoinfo class="inherit" :id="'1017'" :name="'数据库存储'" :img="'shujuku'" style="left:370px;top:560px"></topoinfo>
                <topoinfo class="inherit" :id="'1018'" :name="'业务应用存储'"  :img="'shujuku'" style="left:600px;top:560px"></topoinfo>
            </div>
            <line_pc></line_pc>
        </div>
    </template>
    <script>
    import topoinfo from '@/components/TopoInfo' 
    import line_pc from '@/components/Line' 

    export default {
        data(){
            return{
                newdata:[],
                olddata:[],
                timeerOfRealtime:null,
            }
        },
        components:{
                topoinfo,
                line_pc
        },
        methods: {
            setcolor(data){
                data.forEach(element => {
                    var pc = document.getElementById(element)
                    if(pc==null)
                        return true
                    else{
                        this.olddata.push(element)
                        pc.classList.add("warn");
                    }
                })
            },
            delcolor(data){
                this.olddata = data
                data.forEach(element => {
                    var pc = document.getElementById(element)
                    pc.classList.remove("warn");
                })
                this.olddata = []
            },
            setIntervalOfRealTime(){
                var uthis = this;
                clearInterval(uthis.timeerOfRealtime);
                uthis.timeerOfRealtime = setInterval(() => {
                    fetch('../../static/data.txt',{
                        method:'get'
                    }).then(rs=>{
                        return rs.json()
                    }).then(data=>{
                        uthis.newdata=data.data[0]
                    })
                    this.delcolor(uthis.olddata)
                    this.setcolor(uthis.newdata)
                    uthis.newdata = []
                },3000);
            },
        },
        mounted(){
            this.setIntervalOfRealTime()
        }
    }
    </script>
    <style scoped>
    .Topo{
        position: relative;
        width: 100%;
    }
    .Topo-con{
        position: absolute;
    }
    .inherit{
        position: inherit;
    }
    </style>