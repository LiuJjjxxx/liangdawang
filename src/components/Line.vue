<template>
  <div class="container">
    <div class="sparkLine">
      <div class="sparkParticle">
      </div>
      <div class="fonts"
           style="left:600px">内网</div>
      <div class="fonts"
           style="left:1300px">外网</div>
      <div class="lineWhite"></div>
      <div class="lineWhite1"></div>

    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  methods: {
    createLine(num, width, height, speed, left, top, deg, color = 'white') {
      //粒子数（px），颜色，宽度，高度，速度，位置左，位置右，角度
      var $sparkLine = $('<div class="sparkLine"></div>')
      $sparkLine.css('top', top)
      $sparkLine.css('left', left)
      $sparkLine.css('height', height)
      $sparkLine.css('transform', ' rotateZ(' + deg + 'deg)')
      for (var i = 0; i < num; i++) {
        var $sparkParticle = $('<div class="sparkParticle"></div>')
        $sparkParticle.css(
          'animation',
          'fade ' + speed + 's ' + i / 100 + 's infinite'
        )
        $sparkParticle.css('width', width)
        $sparkParticle.css('height', height)
        $sparkParticle.css('background', color)
        $sparkLine.append($sparkParticle)
      }

      $('.container').append($sparkLine)
    }
  },
  mounted() {
    this.createLine(36, 2, 2, 2, 371, 206, 90)
    this.createLine(36, 2, 2, 2, 370, 438, 270)
    this.createLine(42, 2, 2, 2, 409, 320, 0)
    this.createLine(37, 2, 2, 2, 589, 320, 0)

    this.createLine(36, 2, 2, 2, 1540, 206, 90)
    this.createLine(36, 2, 2, 2, 1540, 438, 270)
    this.createLine(37, 2, 2, 2, 1482, 320, 180)
    this.createLine(37, 2, 2, 2, 1314, 320, 180)

    this.createLine(27, 2, 2, 2, 720, 366, 90, 'rgba(100,149,237,.9)')
    this.createLine(27, 2, 2, 2, 1200, 366, 90, 'rgba(100,149,237,.9)')

    this.createLine(105, 2, 2, 2, 758, 320, 320)
    this.createLine(109, 2, 2, 2, 1142, 320, 218)
    this.createLine(26, 2, 2, 2, 1200, 287, 270)
    this.createLine(26, 2, 2, 2, 718, 287, 270)

    this.createLine(26, 2, 2, 2, 1200, 157, 270)
    this.createLine(26, 2, 2, 2, 720, 157, 270)

    this.createLine(36, 2, 2, 2, 570, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 770, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 670, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 870, 425, 90, 'rgba(100,149,237,.9)')

    this.createLine(36, 2, 2, 2, 1050, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 1150, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 1250, 425, 90, 'rgba(100,149,237,.9)')
    this.createLine(36, 2, 2, 2, 1350, 425, 90, 'rgba(100,149,237,.9)')

    // this.createLine(20,2,2,2,600,446,90,'rgba(100,149,237,.9)');
    // this.createLine(113,2,2,2,657,440,17,'rgba(100,149,237,.9)');
    // this.createLine(120,2,2,2,883,442,163,'rgba(100,149,237,.9)');
    // this.createLine(20,2,2,2,940,446,90,'rgba(100,149,237,.9)');
    // this.createLine(30,2,2,2,885,536,154,'rgba(100,149,237,.9)');
    // this.createLine(30,2,2,2,650,534,24,'rgba(100,149,237,.9)');
    // this.createLine(35,2,2,2,1268,476,90,'rgba(100,149,237,.9)');
  }
}
</script>
<style>
.container {
  background: transparent;
  position: relative;
  width: 100%;
  height: 600px;
  z-index: -1;
}
.sparkLine {
  position: absolute;
  transform-origin: left top;
}
.sparkLine .sparkParticle {
  width: 1px;
  height: 1px;
  float: left;
  color: white;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px white;
  opacity: 0;
}

.lineWhite {
  position: absolute;
  width: 302px;
  height: 1px;
  background: white;
  left: 568px;
  top: 421px;
}

.lineWhite1 {
  position: absolute;
  width: 302px;
  height: 1px;
  background: white;
  left: 1048px;
  top: 421px;
}
.fonts {
  color: white;
  width: 70px;
  font-size: 25px;
  top: -15px;
  position: absolute;
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