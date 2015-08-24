(function () {
    var points = new Set()
    var lastPoint = null
    var ctx = null
    var circleR = 10
    function findPoint (x, y) {
        var epsilon = circleR
        var point = null
        var iterator = points.values()
        while (point = iterator.next().value) {
            point = new Point(point)
            if (point.distance(x, y) < epsilon) {
                return point
            }
        }
        return null
    }
    function drawLine (x, y) {
        var point = findPoint(x, y)
        var needArc = !point
        if (!point) {
            point = new Point(x, y)
            points.add(point.toString())
        }
        ctx.beginPath()
        if (!lastPoint) {
            ctx.moveTo(point.x, point.y)
        } else {
            ctx.moveTo(lastPoint.x, lastPoint.y)
            ctx.lineTo(point.x, point.y)
            ctx.stroke()
        }
        if (needArc) {
            ctx.beginPath()
            ctx.arc(point.x, point.y, circleR, 0, 2*Math.PI)
            ctx.stroke()
            ctx.fillStyle='#CCCCCC'
            ctx.fill()
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
