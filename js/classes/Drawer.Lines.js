var LinesDrawer = extend(Drawer)

LinesDrawer.prototype.renderObject = function (link) {
    var pointsIterator = link.getPointsIterator()
    var currentPoint = null
    this.context.strokeStyle=link.highlight? '#AAAAFF':'#CCCCCC'
    this.context.beginPath()
    currentPoint = pointsIterator.next().value
    this.context.moveTo(currentPoint.x, currentPoint.y)
    currentPoint = pointsIterator.next().value
    this.context.lineTo(currentPoint.x, currentPoint.y)
    this.context.stroke()
}

LinesDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
}

