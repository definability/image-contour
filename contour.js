(function () {
    var canvases = {}
    var contexts = {}
    var points = {}
    var lastPoint = null
    var circleR = 10
    var pointsDrawer = null
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
            point = new Point(x, y)
            points[point.toString()] = point
            pointsDrawer.addObjects([point])
            pointsDrawer.render.call(pointsDrawer)
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

        pointsDrawer = new PointsDrawer('canvas-points', 10)

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

