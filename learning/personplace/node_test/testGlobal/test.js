(function() {
    console.log('test.js')
    let obj = Object.create(null)
    obj.getName = function (x) {
        console.log(x)
    }
    this.G = obj
})()
