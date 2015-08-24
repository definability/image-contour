function bindAll (obj) {
    for (var i in obj) {
        if (obj[i].bind) {
            obj[i] = obj[i].bind(obj)
        }
    }
}

function extend (parent, child) {
    if (child === undefined) {
        child = function () {
            parent.prototype.constructor.apply(this, arguments)
            bindAll(this)
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
