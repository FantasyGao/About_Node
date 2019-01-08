

function FPromise(fn){

  this.state = 'ing'
  this.value = void 0
  this.thenfn = []

  fn(resolve.bind(this), reject.bind(this))

  function resolve(value){
    console.log('value', value)
    setTimeout(()=> {
      this.state = 'success'
      this.value = value
      this.thenfn.map(fn=>fn(value))
    })
  }
  
  function reject(value){
    setTimeout(()=> {
      this.state = 'fail'
      this.value = value
    })
  }
}

FPromise.prototype.then = function(resFn, rejFn) {
  const { state, thenfn } = this
  console.log('then this', this)
  const obj = new FPromise(function(resolve, reject) {
    function cb(value) {
      const result = resFn(value)
      if (result instanceof FPromise) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    }
    if (state === 'ing') {
      thenfn.push(cb)
    }
    if (state === 'success') {

    }
  })
  return obj
}

var a = new FPromise(r=>r(5))
var b = a.then(x=>{
  console.log('then1', x)
  return new FPromise(x=>x(8))
})
var c = b.then(x=>{
  console.log('then2', x)
})

// console.log('a', a.thenfn[0])
// console.log('b', b)
// console.log('c', c)
