var LinesDrawer = extend(Drawer)

LinesDrawer.prototype.renderObject = function (line) {
    this.context.beginPath()
    this.context.moveTo(line.from.x, line.from.y)
    this.context.strokeStyle=line.highlight? '#AAAAFF':'#CCCCCC'
    this.context.lineTo(line.to.x, line.to.y)
    this.context.stroke()
}

LinesDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
}

