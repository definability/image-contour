var LinesDrawer = extend(Drawer)

LinesDrawer.prototype.renderObject = function (line) {
    this.context.moveTo(line.from.x, line.from.y)
    this.context.lineTo(line.to.x, line.to.y)
}

LinesDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
}

