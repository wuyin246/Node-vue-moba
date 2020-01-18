<template>
  <div class="sky" ref="sky">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    let _this = this;
    _this.$refs.sky.width = window.innerWidth;
    _this.$refs.sky.height = window.innerHeight;

    function Star(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 2) + 1;
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = "rgba(255,255,255," + alpha + ")";
    }

    Star.prototype.draw = function() {
      ctx.fillStyle = this.color; //填充色
      ctx.shadowBlur = this.r * 2; //阴影
      ctx.beginPath(); //起始路径
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); //弧
      ctx.closePath(); //闭合路径
      ctx.fill(); //图形填充
    };

    Star.prototype.move = function() {
      this.y -= 1;
      if (this.y <= 10) this.y = _height + 10;
      this.draw();
    };

    Star.prototype.die = function() {
      stars[this.id] = null;
      delete stars[this.id];
    };

    var canvas = _this.$refs.canvas,
      ctx = canvas.getContext("2d"),
      _width = _this.$refs.sky.width,
      _height = _this.$refs.sky.height,
      stars = [],
      initStarPopulation = 80;

    setCanvasSize();

    __init__();
    function setCanvasSize() {
      canvas.setAttribute("width", _width);
      canvas.setAttribute("height", _height);
    }

    function __init__() {
      ctx.strokeStyle = "white";
      ctx.shadowColor = "white";
      for (var i = 0; i < initStarPopulation; i++) {
        stars[i] = new Star(
          i,
          Math.floor(Math.random() * _width),
          Math.floor(Math.random() * _height)
        );
      }
      ctx.shadowBlur = 0;
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, _width, _height);
      for (var i in stars) {
        stars[i].move();
      }
      requestAnimationFrame(animate);
    }
  }
};
</script>

<style lang="scss" scoped>
.sky {
  background: radial-gradient(
    220% 105% at bottom center,
    #f7f7b6 10%,
    #e96f92 40%,
    #75517d 65%,
    #1b2947
  );
}
</style>