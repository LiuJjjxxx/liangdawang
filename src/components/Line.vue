<template>
    <div class="container">
			<div class="sparkLine">
			    <div class="sparkParticle">
				</div>
			</div>
		</div>
</template>
<script>
import $ from 'jquery'
export default {
    methods: {
		createLine(num,width,height,speed,left,top,deg,color){
				//粒子数（px），颜色，宽度，高度，速度，位置左，位置右，角度
				color = color | 'white'
				var $sparkLine=$('<div class="sparkLine"></div>');
				$sparkLine.css("top",top);
				$sparkLine.css("left",left);
				$sparkLine.css("height",height);
				$sparkLine.css("transform",' rotateZ('+deg+'deg)');
				for(var i=0;i<num;i++){
					var $sparkParticle=$('<div class="sparkParticle"></div>');
					$sparkParticle.css("animation","fade "+speed+"s "+i/100+"s infinite");
					$sparkParticle.css("width",width);
					$sparkParticle.css("height",height);
					$sparkLine.append($sparkParticle)
				}
				$(".container").append($sparkLine)
			},
	},
	mounted(){
		// 第一层
		this.createLine(20,2,2,2,510,45,90);
		this.createLine(98,2,2,2,260,45,13);
		this.createLine(100,2,2,2,760,46,167);
		// 第二层
		this.createLine(20,2,2,2,510,115,90);
		// 第三层
		this.createLine(20,2,2,2,510,185,90);
		// 第四层
		this.createLine(93,2,2,2,520,255,15);
		this.createLine(94,2,2,2,500,257,165);
		// 第五层 左
		this.createLine(20,2,2,2,260,325,90);
		this.createLine(57,2,2,2,260,325,13);
		this.createLine(59,2,2,2,260,326,166);
		// 第五层 右
		this.createLine(20,2,2,2,760,325,90);
		// 第六层 左
		this.createLine(20,2,2,2,430,395,90);
		// 第六层 右
		this.createLine(20,2,2,2,770,395,35);
		this.createLine(20,2,2,2,750,396,145);
		// 第七层 左
		this.createLine(20,2,2,2,430,465,90);
		// 第七层 右
		this.createLine(50,2,2,2,660,465,90);
		// 第八层 左
		this.createLine(20,2,2,2,430,535,90);
	}
}
</script>
<style>

			.container{
				background:transparent;
				position:relative;
				width:100%;height:600px;
				z-index: -1;
			}
			.sparkLine{
				position: absolute;
                transform-origin:left top;

			}
			.sparkLine .sparkParticle{
				width:1px;height:1px;
				float:left;
				color:white;
				background: rgba(255, 255, 255,.9);
				box-shadow: 0 0 10px white;	
				opacity: 0;
			}

			@keyframes fade {
			  0% {
			    opacity: 0;
			  }
			  50% {
			    opacity: 1;
			  }
			  100% {
			    opacity: 0;
			  }
			}
</style>