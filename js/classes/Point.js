var Point = function (x, y) {
    if (typeof x === 'string') {
        this.fromString(x)
    } else if (x instanceof Object) {
        this.fromObject(x)
    } else {
        this.fromXY(x, y)
    }
    this.highlight = false
}

Point.prototype.fromXY = function (x, y) {
    this.x = Number(x)
    this.y = Number(y)
}

Point.prototype.fromObject = function (point) {
    return this.fromXY(point.x, point.y)
}

Point.prototype.toObject = function () {
    return {
        x: this.x,
        y: this.y
    }
}

Point.prototype.fromString = function (str) {
    return this.fromXY.apply(this, str.split(','))
}

Point.prototype.toString = function () {
    return Point.toString(this.x, this.y)
}

Point.prototype.distance = function (x, y) {
    if (x instanceof Object) {
        y = x.y
        x = x.x
    }
    X = this.x - x
    Y = this.y - y
    return Math.sqrt(X*X + Y*Y)
}

Point.toString = function (x, y) {
    return [x, y].join(',')
}
