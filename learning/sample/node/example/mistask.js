const http = require('http')

console.log(1)

process.nextTick(()=>{
  console.log(4)
  new Promise((reslove, reject)=>{
    console.log(5)
    reslove('down')
  }).then(()=>{
    console.log(7)
  })
})

setTimeout(()=>{
  console.log(12)
  process.nextTick(()=>{
    console.log(14)
  })
  new Promise((reslove, reject)=>{
    console.log(13)
    reslove('down')
  }).then(()=>{
    console.log(15)
  })
}, 10)

setImmediate(()=>{
  console.log(8)
  process.nextTick(()=>{
    console.log(10)
  })
  new Promise((reslove, reject)=>{
    console.log(9)
    reslove('down')
  }).then(()=>{
    console.log(11)
  })
})


http.get('http://www.baidu.com', (e, res)=>{
  console.log(16)
})

new Promise((reslove, reject)=>{
  console.log(2)
  reslove('down')
}).then(()=>{
  console.log(6)
})

console.log(3)