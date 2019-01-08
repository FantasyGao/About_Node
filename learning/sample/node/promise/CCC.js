function CPromise(fn) {
  if (typeof fn !== 'function' ) throw new Error('The argument must be a function!')

  this._state = 'pending'
  this.value = void 0
  this._callback = []

  try {
    fn(resolve.bind(this), reject.bind(this))
  } catch (e) {
    reject(e)
  }

  function resolve(value){
    setTimeout(()=>{
      if (this._state === 'pending') {
        this._state = 'resolved'
        this.value = value
        this._callback.map(cb => {
          let result = value
          if (typeof cb.onResolved === 'function') {
            try {
              result = cb.onResolved(value)
            } catch (e) {
              cb.reject(e)
              return
            }
            if (result instanceof CPromise) {
              result.then(cb.resolve, cb.reject)
              return
            }
          }
          cb.resolve(result)
        })
      }
    })
  }

  function reject(value){
    if (this._state === 'pending') {
      setTimeout(()=>{
        this._state = 'rejected'
        this.value = value
        this._callback.map(cb => {
          let result = value
          if (typeof cb.onRejected === 'function') {
            try {
              result = cb.onRejected(value)
            } catch (e) {
              cb.reject(e)
              return
            }
            if (result instanceof CPromise) {
              result.then(cb.resolve, cb.reject)
              return
            } else {
              cb.resolve(result)
              return
            }
          }
          cb.reject(result)
        })
      })
    }
  }
}

CPromise.resolve = function(params) {
  if (params instanceof CPromise) {
    return params
  } else {
    return new CPromise((resolve) =>{
      resolve(params)
    })
  }
}


CPromise.reject = function(params) {
  return new CPromise((_, reject) =>{
    reject(params)
  })
}

CPromise.prototype.then = function(onResolved, onRejected) {
  if (
    (typeof onResolved !== 'function' && this._state === 'resolved')
    ||
    (typeof onRejected !== 'function' && this._state === 'rejected')
  ) {
    return this
  }

  return new CPromise((resolve, reject)=>{
    this._callback.push({
      resolve, onResolved, reject, onRejected
    })
  })
}

CPromise.prototype.catch = function(onRejected) {
  return this.then(void 0, onRejected)
}

// new CPromise((res, rej)=>res(6))
// .then(r=>{
//   console.log('then', r)
//   return new CPromise((res, rej)=>{
//     setTimeout(res, 1000, 8)
//   }).then(x=>{
//     throw Error('error find')
//     console.log('then->', x)
//     return 999
//   })
// })
// .then(1)
// .then(null,x=>{
//   console.log('catch', x)
//   throw Error('error find')
//   // return 985
// })
// .then(x=>{
//   console.log('then2', x)
// }).catch(x=>{
//   console.log('catch error', x)
// })

new CPromise(res=>setTimeout(res, 2000, 5)).then(undefined).then(CPromise.resolve(1)).then(x=>{console.log('x', x)})
// CPromise.reject({a:2}).then((y)=>console.log(y))


CPromise.defer = CPromise.deferred = function () {
  let dfd = {}
  dfd.promise = new CPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

module.exports = CPromise