(function () {
    var points = {}
    var lastPoint = null
    var ctx = null
    var circleR = 10
    function findPoint (x, y) {
        var epsilon = circleR
        var point = null
        for (var i in points) {
            if (points[i].distance(x, y) < epsilon) {
                return i
            }
        }
        return ''
    }
    function drawLine (x, y) {
        var point = findPoint(x, y)
        if (!point) {
            ctx.beginPath()
            ctx.arc(x, y, circleR, 0, 2*Math.PI)
            ctx.stroke()
            ctx.fillStyle='#CCCCCC'
            ctx.fill()

            point = new Point(x, y)
            points[point.toString()] = point
        } else {
            point = points[point]
        }
        ctx.beginPath()
        if (!lastPoint) {
            ctx.moveTo(point.x, point.y)
        } else {
            ctx.moveTo(lastPoint.x, lastPoint.y)
            ctx.lineTo(point.x, point.y)
            ctx.stroke()
        }
        lastPoint = point
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
