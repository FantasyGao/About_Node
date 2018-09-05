const amqp = require('amqplib')

const { serverCfg, exchangeCfg, queueCfg } = require('./config')
const schema = 'amqp://'

module.exports = async function init() {
    try {
        let address = `${schema}${serverCfg.host}:${serverCfg.port}`
        let conn = await amqp.connect(address)
        console.info("connect to RabbitMQ success");

        //错误重连
        conn.on("error", function(err) {
            console.log(err);
            setTimeout(init, 10000);
        });

        conn.on("close", function() {
            console.error("connection to RabbitQM closed!");
            setTimeout(init, 10000);
        });

        let chan = await conn.createChannel()
        await chan.assertQueue(queueCfg.queueId)
        return chan
    }catch(e){
        console.error('init error!')
    }
}