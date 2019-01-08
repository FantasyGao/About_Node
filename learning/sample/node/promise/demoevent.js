
const event = require('events')

const emitter = new event.EventEmitter()


setTimeout(()=>{
  //耗时操作返回结果
  emitter.emit('finish', 100)
}, 1000)

emitter.on('finish', data => {
  console.log('data', data)
})


//callback
const callback = (err, d)=>{
  if (err) throw err
  console.log('dd',d)
}
setTimeout((callback)=>{
  //耗时操作返回结果
  let result = 100
  callback(null, result)
}, 2000, callback)

const asyncFunc = ()=>{

}
// yield
function* genFunc() {
  yield asyncFunc()
}