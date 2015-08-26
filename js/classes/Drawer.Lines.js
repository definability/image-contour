var LinesDrawer = extend(Drawer)

LinesDrawer.prototype.renderObject = function (link) {
    this.context.strokeStyle=link.highlight? '#AAAAFF':'#CCCCCC'
    this.context.beginPath()
    var pointsIterator = link.getPointsIterator()
    this.moveToPoint(pointsIterator.next().value)
    this.lineToPoint(pointsIterator.next().value)
    this.context.stroke()
}

LinesDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
}

