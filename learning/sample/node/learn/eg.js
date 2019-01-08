// const http = require('http')
// const PORT = 9000

// const server = http.createServer((req, res)=>{
//   if (req.url != '/favicon.ico') {
//     console.log('request reveive!')
//     setTimeout(()=>{
//       res.statusCode = 200
//       res.write('response finish!')
//       res.end()
//     }, 100000)
//     console.log('js down')
//   }
// })
// server.listen(PORT, ()=>{
//   console.info('localhost %d is runing..', PORT)
// })

// const http = require('http')
// const PORT = 9000

// const server = http.createServer((req, res)=>{
//   if (req.url != '/favicon.ico') {
//     console.log('request reveive!')
//     while(1) {}
//     res.statusCode = 200
//     res.write('response finish!')
//     res.end()
//     console.log('js down')
//   }
// })
// server.listen(PORT, ()=>{
//   console.info('localhost %d is runing..', PORT)
// })

const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    console.log('request reveive!')
    while(1) {}
    res.writeHead(200)
    res.end('response finish!')
  }).listen(9000)
}