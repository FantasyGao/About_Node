
const urls = [1,2, 3,4,5, 6,7, 8,9]

function genPr(o) {
  console.log('enter', o)
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      if (o==5) rej(5)
      res(o)
    }, 1000)
  })
}

// console.log('promises', promises)

// Promise.all(promises).then(i=>{
//   console.log(i)
//   return promises
// }).then(x=>{
//   console.log('x',x)
//   return x
// }).then(i=>{
//   console.log(i)
// }).catch(e=>{
//   console.log('error', e)
// })

// urls.reduce((promise, x)=>{
//   console.log('exc', x)
//   return promise.then(()=>{
//     return genPr(x)
//   })
// }, Promise.resolve()).then(a=>{
//   console.log('result', a)
// })

(async function() {
  // let res = [1, 2, 3].map(async item => await genPr(item ** 2))
  let promises = [1, 2, 3].map(async item => genPr(item ** 2))
  let res = await Promise.all(promises.map(async o => {
    let a = await o
    console.log(a)
    return a
  }))
  console.log('res', res)
  
})()