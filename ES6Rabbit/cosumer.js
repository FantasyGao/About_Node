const { serverCfg, exchangeCfg, queueCfg } = require('./config')
const initMQ = require('./init')

async function consMsg() {
    try{
        console.info('consumer listening...!')
        const chan = await initMQ()
        await chan.consume(queueCfg.queueId, function(msg){
            console.log(msg.content.toString())
            chan.ack(msg)
        }, { noAck: false })
    } catch(e) {
        console.log(String(e))
    }
}
consMsg()