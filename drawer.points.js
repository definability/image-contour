var PointsDrawer = extend(Drawer, PointsDrawer)

function PointsDrawer (canvasId, circleR) {
    PointsDrawer.__super__.constructor.apply(this, arguments)
    for (var i in this) {
        if (this[i].bind) {
            this[i] = this[i].bind(this)
        }
    }
    this.circleR = circleR
}

PointsDrawer.prototype.renderObject = function (point) {
    this.context.beginPath()
    this.context.arc(point.x, point.y, this.circleR, 0, 2*Math.PI)
    this.context.stroke()
    this.context.fill()
}

PointsDrawer.prototype.setup = function () {
    this.context.strokeStyle='white'
    this.context.lineWidth='1'
    this.context.fillStyle='#CCCCCC'
}

