var Drawer = function (canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.context = this.canvas.getContext('2d')
    this.objects = []
    this.setup()
}

Drawer.prototype.setup = function () {
}

Drawer.prototype.addObjects = function (objects) {
    this.objects = this.objects.concat(objects)
}

Drawer.prototype.renderObject = function (obj) {
    throw new Error('Method is undefined')
}

Drawer.prototype.render = function (flag) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.objects.map(this.renderObject)
}

Drawer.prototype.moveToPoint = function (point) {
    return this.context.moveTo(point.x, point.y)
}

Drawer.prototype.lineToPoint = function (point) {
    return this.context.lineTo(point.x, point.y)
}
