var LinesDrawer = extend(Drawer)

LinesDrawer.prototype.renderObject = function (line) {
    this.context.lineTo(line.to.x, line.to.y)
}

LinesDrawer.prototype.render = function () {
    this.context.moveTo(this.objects[0].from.x, this.objects[0].from.y)
    LinesDrawer.__super__.render.apply(this)
    this.context.stroke()
}

LinesDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
}

