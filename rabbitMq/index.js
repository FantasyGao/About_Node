const {queueCfg} = require('./config')
const MQInit = require('./init')
const co = require('co');


co(function* () {
  let channel = yield MQInit()
  //消费者
  /** 
   * @param 队列名称
   * @param noAck 是否反馈发送信息
  */
  // channel.consume(defque.queue, function (msg) {
  //   console.log("consumer Received message", msg.content.toString());
  // }, { noAck: true });

  channel.consume(queueCfg.queueId, function (msg) {
    console.log("consumer Received message", msg.content.toString());
    setTimeout(function () {
      console.log("consumer Received message finish");
      channel.ack(msg);
    }, 1000);
  }, { noAck: false });
  console.info('consumer listening...!')
}).catch(e=>{
  console.log('error:',String(e))
})