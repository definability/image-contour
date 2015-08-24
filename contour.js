(function () {
    var canvases = {}
    var contexts = {}
    var points = {}
    var lastPoint = null
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
            contexts.points.beginPath()
            contexts.points.arc(x, y, circleR, 0, 2*Math.PI)
            contexts.points.stroke()
            contexts.points.fill()

            point = new Point(x, y)
            points[point.toString()] = point
        } else {
            point = points[point]
        }
        if (!lastPoint) {
            contexts.lines.beginPath()
            contexts.lines.moveTo(point.x, point.y)
        } else {
            contexts.lines.lineTo(point.x, point.y)
            contexts.lines.stroke()
        }
        lastPoint = point
    }
    window.onload = function () {
        ['main', 'lines', 'points', 'upper'].forEach(function(item) {
            canvases[item] = document.getElementById(['canvas', item].join('-'))
            contexts[item] = canvases[item].getContext('2d')
        })

        contexts.lines.strokeStyle='white'
        contexts.lines.lineWidth='1'

        contexts.points.strokeStyle='white'
        contexts.points.lineWidth='1'
        contexts.points.fillStyle='#CCCCCC'

        var img = new Image()
        img.src = 'pluto.jpg'
        img.onload = function () {
            contexts.main.drawImage(img, 0, 0)
        }
        canvases.upper.onclick = function (e) {
            drawLine(e.layerX, e.layerY)
        }
    }
})()
