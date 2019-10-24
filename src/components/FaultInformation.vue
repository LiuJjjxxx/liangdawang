<template>
		<div>
				<div id="pie" style="width: 100%;height:300px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'

export default {
	methods:{	
	pie(){
		var pie = echarts.init(document.getElementById('pie'),'liangdawang');
		
		var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend:[{
        icon:'pin',
        x:'center',
        y:'210',
        data:['直接访问','邮件营销','联盟广告']
    },{
        icon:'pin',
        x:'center',
        y:'230',
        data:['视频广告','搜索引擎']
    }],
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '35%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    formatter: '{d}%',  //label 的内容
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};


        pie.setOption(option);
	
		}
	},
	
	mounted(){
		 this.pie()
		 
	}	
}


</script>

<style>
</style>