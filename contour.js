(function () {
    window.onload = function () {
        var canvas = document.getElementById('canvas-main')
        var ctx = document.getElementById('canvas-main').getContext('2d')

        var img = new Image()
        img.src = 'pluto.jpg'
        img.onload = function () {
            ctx.drawImage(img, 0, 0)
            ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(700,700)
            ctx.strokeStyle='white'
            ctx.lineWidth='1'
            ctx.stroke()
        }
        canvas.onclick = function (e) {
            ctx.lineTo(e.layerX, e.layerY)
            ctx.stroke()
            console.log(e)
        }
    }
})()
