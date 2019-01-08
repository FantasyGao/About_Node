function INTERNAL () {}
function isFunction (func) {
  return typeof func === 'function'
}
function isObject (obj) {
  return typeof obj === 'object'
}
function isArray (arr) {
  return Array.isArray(arr)
}

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

module.exports = Promise

function Promise (resolver) {
  if (!isFunction(resolver)) {
    throw new TypeError('resolver must be a function')
  }
  this.state = PENDING
  this.value = void 0
  this.queue = []
  if (resolver !== INTERNAL) {
    safelyResolveThen(this, resolver)
  }
  console.log(this)
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if ((!isFunction(onFulfilled) && this.state === FULFILLED) ||
    (!isFunction(onRejected) && this.state === REJECTED)) {
    return this
  }

  const promise = new this.constructor(INTERNAL)
  if (this.state !== PENDING) {
    const resolver = this.state === FULFILLED ? onFulfilled : onRejected
    unwrap(promise, resolver, this.value)
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected))
  }
  return promise
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

function QueueItem (promise, onFulfilled, onRejected) {
  this.promise = promise
  this.callFulfilled = function (value) {
    doResolve(this.promise, value)
  }
  this.callRejected = function (error) {
    doReject(this.promise, error)
  }
  if (isFunction(onFulfilled)) {
    this.callFulfilled = function (value) {
      unwrap(this.promise, onFulfilled, value)
    }
  }
  if (isFunction(onRejected)) {
    this.callRejected = function (error) {
      unwrap(this.promise, onRejected, error)
    }
  }
}

function unwrap (promise, func, value) {
  process.nextTick(function () {
    let returnValue
    try {
      returnValue = func(value)
    } catch (error) {
      return doReject(promise, error)
    }
    if (returnValue === promise) {
      doReject(promise, new TypeError('Cannot resolve promise with itself'))
    } else {
      doResolve(promise, returnValue)
    }
  })
}

function doResolve (self, value) {
  try {
    const then = getThen(value)
    if (then) {
      safelyResolveThen(self, then)
    } else {
      self.state = FULFILLED
      self.value = value
      self.queue.forEach(function (queueItem) {
        queueItem.callFulfilled(value)
      })
    }
    return self
  } catch (error) {
    return doReject(self, error)
  }
}

function doReject (self, error) {
  self.state = REJECTED
  self.value = error
  self.queue.forEach(function (queueItem) {
    queueItem.callRejected(error)
  })
  return self
}

function getThen (promise) {
  const then = promise && promise.then
  if (promise && (isObject(promise) || isFunction(promise)) && isFunction(then)) {
    return function applyThen () {
      then.apply(promise, arguments)
    }
  }
}

function safelyResolveThen (self, then) {
  let called = false
  try {
    then(function (value) {
      if (called) {
        return
      }
      called = true
      doResolve(self, value)
    }, function (error) {
      if (called) {
        return
      }
      called = true
      doReject(self, error)
    })
  } catch (error) {
    if (called) {
      return
    }
    called = true
    doReject(self, error)
  }
}

Promise.resolve = resolve
function resolve (value) {
  if (value instanceof this) {
    return value
  }
  return doResolve(new this(INTERNAL), value)
}

Promise.reject = reject
function reject (reason) {
  return doReject(new this(INTERNAL), reason)
}

Promise.all = all
function all (iterable) {
  const self = this
  if (!isArray(iterable)) {
    return this.reject(new TypeError('must be an array'))
  }

  const len = iterable.length
  let called = false
  if (!len) {
    return this.resolve([])
  }

  const values = new Array(len)
  let resolved = 0
  let i = -1
  const promise = new this(INTERNAL)

  while (++i < len) {
    allResolver(iterable[i], i)
  }
  return promise
  function allResolver (value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true
        doReject(promise, error)
      }
    })
    function resolveFromAll (outValue) {
      values[i] = outValue
      if (++resolved === len && !called) {
        called = true
        doResolve(promise, values)
      }
    }
  }
}

Promise.race = race
function race (iterable) {
  const self = this
  if (!isArray(iterable)) {
    return this.reject(new TypeError('must be an array'))
  }

  const len = iterable.length
  let called = false
  if (!len) {
    return this.resolve([])
  }

  let i = -1
  const promise = new this(INTERNAL)

  while (++i < len) {
    resolver(iterable[i])
  }
  return promise
  function resolver (value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true
        doResolve(promise, response)
      }
    }, function (error) {
      if (!called) {
        called = true
        doReject(promise, error)
      }
    })
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
CPromise = Promise

new CPromise((res, rej)=>res(6))
.then(r=>{
  console.log('then', r)
  return new CPromise((res, rej)=>{
    setTimeout(res, 1000, 8)
  }).then(x=>{
    console.log('then->', x)
    return 999
  })
})
.then(1)
.then(null,x=>{
  console.log('catch', x)
  throw Error('error find')
  // return 985
})
.then(x=>{
  console.log('then2', x)
}).catch(x=>{
  console.log('catch error', x)
})