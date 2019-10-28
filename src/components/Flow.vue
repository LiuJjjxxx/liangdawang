<template>
		<div>
				<div id="flow" style="width: 100%;height:300px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'

export default {
	methods:{	
	line(){
		var flow = echarts.init(document.getElementById('flow'),'liangdawang');
		
		var option = {
    xAxis: {
        type: 'category',
        data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-27']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
                 formatter: '{value} kb'
            }
    },
    legend:{
      data:['本月'],
      x:'right',
      textStyle:{//图例文字的样式
            color:'#fff',
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        name:'本月',
        itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#56b0f0'
                  }
                }
              }, 
    }],
    grid:{
        top:'10',
        bottom:'25',
        left:'60',
        right:'65',
    }
};


        flow.setOption(option);
	
		}
	},
	
	mounted(){
		 this.line()
		 
	}	
}


</script>

<style>
</style>