(function () {
    var line = []
    var ctx;
    function drawLine (x, y) {
        ctx.beginPath()
        if (!line.length) {
            ctx.moveTo(x, y)
        } else {
            ctx.moveTo(line[line.length-1].x, line[line.length-1].y)
            ctx.lineTo(x, y)
            ctx.stroke()
        }
        ctx.beginPath()
            ctx.arc(x, y, 3, 0, 2*Math.PI)
            ctx.stroke()
            ctx.fillStyle='#CCCCCC'
            ctx.fill()
        line.push({x: x, y: y})
    }
    window.onload = function () {
        var canvas = document.getElementById('canvas-main')
        ctx = document.getElementById('canvas-main').getContext('2d')
        ctx.strokeStyle='white'
        ctx.lineWidth='1'

        var img = new Image()
        img.src = 'pluto.jpg'
        img.onload = function () {
            ctx.drawImage(img, 0, 0)
        }
        canvas.onclick = function (e) {
            drawLine(e.layerX, e.layerY)
        }
    }
})()
