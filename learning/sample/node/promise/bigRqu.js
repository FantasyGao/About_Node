const http = require('http')
const bigArr = require('./../sort/array')

const reqs = bigArr.map((i,j) => {
 // console.log('第%d个', j)
  return new Promise((res, rej)=>{
    http.get(`http://www.baidu.com?${i}`, (data)=>{
      res(data) 
    }).on('error', (e)=>{
      rej(e)
    })
  })
})
console.log(reqs)
Promise.resolve().then(reqs).catch((err)=>{
  console.log('error', err)
})