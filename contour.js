(function () {
    var canvases = {}
    var contexts = {}
    var points = {}
    var lastPoint = null
    var circleR = 10
    var pointsDrawer = null
    var linesDrawer = null
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
            pointsDrawer.render()
        } else {
            point = points[point]
        }
        if (lastPoint) {
            linesDrawer.addObjects([{from: lastPoint, to: point}])
            linesDrawer.render()
        }
        lastPoint = point
    }
    window.onload = function () {
        ['main', 'lines', 'points', 'upper'].forEach(function(item) {
            canvases[item] = document.getElementById(['canvas', item].join('-'))
            contexts[item] = canvases[item].getContext('2d')
        })


        pointsDrawer = new PointsDrawer('canvas-points', 10)
        linesDrawer = new LinesDrawer('canvas-lines')

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

