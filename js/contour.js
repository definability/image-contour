(function () {
    var canvases = {}
    var contexts = {}
    var square = new Polygon(
        new Point(100, 100),
        new Point(200, 100),
        new Point(200, 200),
        new Point(100, 200)
    )
    var innerTriangle = new Polygon(
        new Point(120, 120),
        new Point(120, 150),
        new Point(150, 150)
    )
    var triangle = new Polygon(
        new Point(300, 300),
        new Point(300, 400),
        new Point(400, 400)
    )
    var figures = [square, triangle, innerTriangle]
    var lines = merge(figures.map(function (item) {
        return item.getLines()
    }))
    var points = merge(figures.map(function (item) {
        return item.getPoints()
    }))
    var circleR = 5
    var chosenPoint = null
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

        canvases.upper.onclick = function (e) {
            if (!chosenPoint) {
                for (var i=points.length-1; i>-1; i--) {
                    if (points[i].distance(e.layerX, e.layerY) > circleR) {
                        continue
                    }
                    chosenPoint = points[i]
                    break
                }
                if (chosenPoint) {
                    chosenPoint.highlight = true
                    lines.filter(function (line) {
                        return line.from === chosenPoint || line.to === chosenPoint
                    }).map(function (line) {
                        line.highlight = true
                    })
                    pointsDrawer.render()
                    linesDrawer.render()
                }
            } else {
                chosenPoint.x = e.layerX
                chosenPoint.y = e.layerY
                chosenPoint.highlight = false
                lines.map(function (line) {
                    line.highlight = false
                })

                chosenPoint = null
                linesDrawer.render()
                pointsDrawer.render()
            }
        }
    }
})()

