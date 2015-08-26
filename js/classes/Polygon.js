var Polygon = function (points) {
    this.generateLinks(points)
    this.points = points
}

Polygon.prototype.getPoints = function () {
    return this.points
}

Polygon.prototype.getLinks = function () {
    return this.links
}

Polygon.prototype.generateLinks = function (points) {
    this.links = []
    var tmpLink = null
    for (var i=0; i<points.length; i++) {
        tmpLink = new Link(points[i], points[(i+1)%points.length])
        points[i].addLink(tmpLink)
        points[(i+1)%points.length].addLink(tmpLink)
        this.links.push(tmpLink)
    }
}
