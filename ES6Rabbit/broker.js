const initMQ = require('./init')

const { serverCfg, exchangeCfg, queueCfg } = require('./config')

async function sendMsg(msg) {
    const chan = await initMQ()
    await chan.sendToQueue(
        queueCfg.queueId, 
        new Buffer(msg),
        {
            // RabbitMQ关闭时，消息会被保存到磁盘
            persistent: true
        }
    );
}



setInterval(()=>{
    console.info('send message')
    sendMsg('hello queue!')
}, 2000)