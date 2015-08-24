var Drawer = function (canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.context = this.canvas.getContext('2d')
    this.objects = []
}

Drawer.prototype.add = function (objects) {
    this.objects = this.objects.concat(objects)
}

Drawer.prototype.renderObject = function () {
    throw new Error('Method is undefined')
}

Drawer.prototype.render = function () {
    this.objects.map(this.renderObject)
}

