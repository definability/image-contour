function extend (parent, child) {
    if (child === undefined) {
        child = function () {
            parent.prototype.constructor.apply(this, arguments)
            for (var i in this) {
                if (this[i].bind) {
                    this[i] = this[i].bind(this)
                }
            }
        }
    }

    Object.keys(parent).filter(parent.hasOwnProperty).map(function (key) {
        child[key] = parent[key]
    })

    function ctor() {
        this.constructor = child
    }
    ctor.prototype = parent.prototype;

    child.prototype = new ctor();
    child.__super__ = parent.prototype;

    return child;
}

