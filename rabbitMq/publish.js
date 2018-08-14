const co = require('co');
const { exchangeCfg } = require('./config')
const MQInit = require('./init')

co(function* () {
  let ch = yield MQInit()
  let message = JSON.stringify({ info: "test message!" })
  
  // 发布消息
  let falg = ch.publish(
    exchangeCfg.exId,
    exchangeCfg.exType,
    new Buffer(message)
  )
  if (falg) {
    console.log(`publish message success`)
  } else {
    console.log(`publish message fail`)
  }
}).catch(e => {
  console.log('publish error:', String(e))
})