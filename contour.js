(function () {
    var canvases = {}
    var contexts = {}
    var square = [
        new Point(100, 100),
        new Point(200, 100),
        new Point(200, 200),
        new Point(100, 200)
    ]
    var innerTriangle = [
        new Point(120, 120),
        new Point(120, 150),
        new Point(150, 150)
    ]
    var triangle = [
        new Point(300, 300),
        new Point(300, 400),
        new Point(400, 400)
    ]
    var figures = [square, triangle, innerTriangle]
    function closedFigureLines (points) {
        var result = []
        for (var i=0; i<points.length; i++) {
            result.push({from: points[i], to: points[(i+1)%points.length]})
        }
        return result
    }
    var lines = merge(figures.map(closedFigureLines))
    var points = merge(figures)
    var circleR = 5
    var pointsDrawer = null
    var linesDrawer = null
    window.onload = function () {
        ['main', 'lines', 'points', 'upper'].forEach(function(item) {
            canvases[item] = document.getElementById(['canvas', item].join('-'))
            contexts[item] = canvases[item].getContext('2d')
        })

        pointsDrawer = new PointsDrawer('canvas-points', circleR)
        linesDrawer = new LinesDrawer('canvas-lines')

        var img = new Image()
        img.src = 'pluto.jpg'
        img.onload = function () {
            contexts.main.drawImage(img, 0, 0)
        }
        pointsDrawer.addObjects(points)
        linesDrawer.addObjects(lines)

        linesDrawer.render()
        pointsDrawer.render()
    }
})()

