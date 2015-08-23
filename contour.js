(function () {
    var line = []
    var ctx
    var circleR = 50
    function distance (point1, point2) {
        var x = point1.x - point2.x
        var y = point1.y - point2.y
        return Math.sqrt(x*x + y*y)
    }
    function findPoint (x, y) {
        var epsilon = circleR
        for (var i = line.length-1; i >= 0; i--) {
            if (distance({x: x, y: y}, line[i]) < epsilon) {
                return i
            }
        }
        return -1
    }
    function drawLine (x, y) {
        var pointIndex = findPoint (x, y)
        var needArc = pointIndex == -1
        if (pointIndex > -1) {
            x = line[pointIndex].x
            y = line[pointIndex].y
        }
        ctx.beginPath()
        if (!line.length) {
            ctx.moveTo(x, y)
        } else {
            ctx.moveTo(line[line.length-1].x, line[line.length-1].y)
            ctx.lineTo(x, y)
            ctx.stroke()
        }
        if (needArc) {
            ctx.beginPath()
            ctx.arc(x, y, circleR, 0, 2*Math.PI)
            ctx.stroke()
            ctx.fillStyle='#CCCCCC'
            ctx.fill()
        }
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
