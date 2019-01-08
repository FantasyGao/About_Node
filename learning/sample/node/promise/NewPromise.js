
function MyPromise(fn) {
  this.state = 'pending'
  this.value = void 0
  this.resolveFn = []
  this.rejectFn = []

  try {
    fn(resolve.bind(this), reject.bind(this))
  } catch (e) {
    reject()
  }
  function resolve() {
    this.state = 'resolved'
    setTimeout(()=>{
      this.resolveFn.map(cb=>{
        let result = fn(this.value)
        if (result instanceof MyPromise) {
          result.then(cb.resolve, cb.reject)
        } else {
          this.value = result
        }
      })
    })
  }
  function reject() {
    this.state = 'rejected'
    setTimeout(()=>{
      this.rejectFn.map(fn=>fn(this.value))
    })
  }
}

MyPromise.prototype.then = function(resoveFn, rejectFn) {
  return new MyPromise((resolve, reject)=>{
    this.rejectFn.push({resolve, resoveFn})
    this.rejectFn.push({reject, rejectFn})
  })
}

function ajax(o) {
  const xhr = new XMLHttpRequest()
  xhr.open(o.type, o.url, true)
  xhr.send(null)
  xhr.onreadystatechange = function(){
    if (xhr.readyState===4 && xhr.status==200) {
      result = xhr.responseText
      o.succuss(result)
    } else {
      o.error(xhr.status)
    }
  }
}