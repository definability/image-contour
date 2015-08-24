var Polygon = function () {
    if (arguments[0].length) {
        this.points = arguments[0]
    } else {
        this.points = Array.prototype.slice.call(arguments)
    }
    this.generateLines(this.points)
}

Polygon.prototype.getPoints = function () {
    return this.points
}

Polygon.prototype.getLines = function () {
    return this.lines
}

Polygon.prototype.generateLines = function (points) {
    this.lines = []
    for (var i=0; i<points.length; i++) {
        this.lines.push({from: points[i], to: points[(i+1)%points.length]})
    }
}
