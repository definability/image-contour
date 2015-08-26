var Link = function (start, finish) {
    this.points = new Set([start, finish])
    this.highlight = false
}

Link.prototype.getPointsIterator = function () {
    return this.points.values()
}
