/**
 * @param {*} fn <resolve, reject>
 */
// function FaPromise(fn) {
//   console.log(typeof fn)

//   this.status = 'pending'

//   fn(resolve.bind(this), reject.bind(this))
//   function resolve(value) {
//     console.log(this, value)
//     this.status = 'resolved'
//   }
//   function reject(value) {
//     this.status = 'rejected'
//   }
//   console.log('FaPromise', this)
// }
//  new Promise(r=>setTimeout(()=>{r(9)}, 2000))

/**
 * then function
 */
// function FaPromise(fn) {
//   if (typeof fn !== 'function') return

//   this.status = 'pending'
//   this.thenFn = null

//   fn(resolve.bind(this), reject.bind(this))
//   function resolve(value) {
//     this.status = 'resolved'
//     this.thenFn && this.thenFn(value)
//   }
//   function reject(value) {
//     this.status = 'rejected'
//   }
//   console.log('FaPromise', this)
// }

// FaPromise.prototype.then = function (resolvedFn) {
//   if (resolvedFn) {
//     this.thenFn = resolvedFn
//   }
// }
// var a = new Promise(r=>setTimeout(()=>{r(9)}, 2000)).then(console.log)


//3

// const thenFn = []

// function resolve(value) {
//   // console.log('resolvedFn', this.thenFn[0])
//   this.status = 'resolved'
//   if (thenFn.length > 0) {
//     thenFn.reduce((val, fn) => {
//       this.data = fn(val)
//       return this.data
//     }, value)
//   }
// }
// function reject(value) {
//   this.status = 'rejected'
// }

// function FaPromise(fn) {
//   if (typeof fn !== 'function') return

//   this.status = 'pending'
//   this.data = void 0

//   fn(resolve.bind(this), reject.bind(this))

//   console.log('FaPromise', this)
// }

// FaPromise.prototype.then = function (resolvedFn) {
//   if (resolvedFn) {
//     return new FaPromise(function(resolve, reject){
//       thenFn.push(resolvedFn)
//     }.bind(this))
//   }
// }
// new FaPromise(r=>setTimeout(()=>{r(9)}, 2000)).then(x=>{console.log('then1',x);return 45}).then(x=>{console.log('then2', x);})


//4
// const thenFn = []

// function resolve(value) {
//   this.status = 'resolved'
//   this.data = value
//   setTimeout(()=>{
//     if (thenFn.length > 0) {
//       thenFn.reduce((val, fn) => {
//         this.data = fn(val)
//         return this.data
//       }, value)
//     }
//   })
// }
// function reject(value) {
//   this.status = 'rejected'
// }

// function FaPromise(fn) {
//   if (typeof fn !== 'function') return

//   this.status = 'pending'
//   this.data = void 0

//   fn(resolve.bind(this), reject.bind(this))

//   console.log('FaPromise', this)
// }

// FaPromise.prototype.then = function (resolvedFn) {
//   // console.log(resolvedFn.toString())
//   return new FaPromise((resolve, reject)=>{
//     // console.log('resolve', resolve)
//     if (this.status === 'pending') {
//       thenFn.push(resolvedFn)
//     }

//     if (this.status === 'resolved') {
//       const result = resolvedFn(this.data)
      
//       if (result instanceof FaPromise) {
//         console.log('result', result)
//         // console.log('resolvedFn', resolve)
//         result.then(resolve)
//       } else {
//         resolve(result)
//       }
//     }
//   })
// }

// new FaPromise(function(res){
//   console.log('promise')
//   res('resolve')
// }).then(x=>{
//   console.log('then1', x)
//   return new FaPromise(r=>r(2))
//   //return new FaPromise(res=>{setTimeout(res, 1000, 2)})
// }).then(x=>{
//   console.log('then2', x)
//   return 4
// }).then(x=>{
//   console.log('then3', x)
//   return 6
// })



const NPromise = require('./Npromise')
const EPromise = require('./EPromise')


// function resolve(value) {
//   // 1️⃣then 中要异步
//   setTimeout(() => {
//     if (this.status === 'pending') {
//       this.status = 'resolved'
//       this.data = value
//       this.thenFn.map(fn => fn(value))
//     }
//   })
// }
// function reject(value) {
//   this.status = 'rejected'
// }


// function FaPromise(fn) {
//   if (typeof fn !== 'function') return

//   this.status = 'pending'
//   this.data = void 0
//   this.thenFn = []

//   fn(resolve.bind(this), reject.bind(this))

//   //console.log('FaPromise-->', this)
// }

// FaPromise.prototype.then = function (resolvedFn) {
//   return new FaPromise((resolve, reject) => {
//     if (this.status === 'pending') {
//       this.thenFn.push(() => {
//         const result = resolvedFn(this.data)
//         if (result instanceof FaPromise) {
//           result.then(resolve)
//         } else {
//           resolve(result)
//         }
//       })
//     }
//   })
// }


// var a = new FaPromise(function(res){
//   console.log('promise')
//   res('resolve')
// })
// a.then(x=>{console.log('then1', x)})
// var b = a.then(x=>{
//   console.log('then1', x)
//   // return new FaPromise(r=>r(2))
//   return new FaPromise(res=>{setTimeout(res, 2000, 6)})
// })
// var c= b.then(x=>{
//   console.log('then2', x)
//   return 4
// })
// b.then(x=>{
//   console.log('then3', x)
//   return 5
// })
// var d=c.then(x=>{
//   console.log('then3', x)
//   return 6
// })
// console.log('a', a.thenFn[0])
// console.log('b', b.thenFn[0])
// console.log('c', c.thenFn[0])
// console.log('d', d.thenFn[0])



function resolve(value) {
  // 1️⃣then 中要异步
  setTimeout(() => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.data = value
      this.thenFn.map(fn => fn(value))
    }
  })
}
function reject(value) {
  // 1️⃣then 中要异步
  setTimeout(() => {
    console.log('this.catchFn', this.catchFn)
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.data = value
      this.catchFn.map(fn => fn(value))
    }
  })
}


function FaPromise(fn) {
  if (typeof fn !== 'function') return

  this.status = 'pending'
  this.data = void 0
  this.thenFn = []
  this.catchFn = []

  try {
    fn(resolve.bind(this), reject.bind(this))
  } catch (e) {

  }

  //console.log('FaPromise-->', this)
}

FaPromise.prototype.then = function (resolvedFn, rejectFn) {
  return new FaPromise((resolve, reject) => {
    if (this.status === 'pending') {
      // resolve
      resolvedFn && this.thenFn.push(() => {
        const result = resolvedFn(this.data)
        if (result instanceof FaPromise) {
          result.then(resolve, rejectFn)
        } else {
          resolve(result)
        }
      })
      // reject
      rejectFn && this.catchFn.push(() => {
        const result = rejectFn(this.data)
        console.log('reject', reject)
        if (result instanceof FaPromise) {
          result.then(resolve, reject)
        } else {
          reject(result)
        }
      })
    } else {
      console.log('this.status', this.status)
    }
  })
}

FaPromise.prototype.catch = function (rejectFn) {
  // console.log('rejectFn', rejectFn)
  return this.then(void 0, rejectFn)
}


new FaPromise(function(res, rej){
  console.log('promise')
  rej('resolve')
}).then(x=>{
  console.log('then1', x)
  return new FaPromise(function(res, rej){
    console.log('promise2')
    res('reject')
  })
}, x=>{console.log('catch1', x)})
.then(x=>{console.log('catch4', x)})
.catch(x=>{console.log('catch3', x)})


// console.log('a', a)
// console.log('b', b)
// console.log('c', c)

// var a = new FaPromise(function(res){
//   console.log('promise')
//   res('resolve')
// })
// a.then(x=>{console.log('then1', x)})
// var b = a.then(x=>{
//   console.log('then1', x)
//   // return new FaPromise(r=>r(2))
//   return new FaPromise(res=>{setTimeout(res, 2000, 6)})
// })
// var c= b.then(x=>{
//   console.log('then2', x)
//   return 4
// })
// b.then(x=>{
//   console.log('then3', x)
//   return 5
// })
// var d=c.then(x=>{
//   console.log('then3', x)
//   return 6
// })


// var k = new EPromise(function(res){
//   console.log('promise')
//   res('resolve')
// })
// k.then().catch(y=>console.log(y))
// k.catch(x=>console.log(x))
//  console.log('a', k.onRejectedCallback[0], k.onRejectedCallback[1])
// // console.log('b', b)
// // console.log('c', c)
// // console.log('d', d)