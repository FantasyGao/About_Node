const amqp = require('amqplib')
const { serverCfg, exchangeCfg, queueCfg } = require('./config')

const schema = 'amqp://'

const init = function* () {
  let address = `${schema}${serverCfg.host}:${serverCfg.port}`
  /**
  * @param rabbitMQ服务器地址
  * @return rabbitMQ实例
  */
  let conn = yield amqp.connect(address)

  /**
   * @return 创建通道
   */
  let ch = yield conn.createChannel()

  /**
   * @param exType类型 direct (point-to-point), topic (publish-subscribe) and fanout (multicast)。
   * @param {durable: true} 确保RabbitMQ永远不会丢失掉我们的任务队列
   * @return 连接交换机
   */
  let exCh = yield ch.assertExchange(exchangeCfg.exId, exchangeCfg.exType, { durable: true })


  /**
   * @param que 队列名称
   * @param {exclusive: } 排他性
   * 该队列的特点是：
   * 1.只对首次声明它的连接（Connection）可见
   * 2.会在其连接断开的时候自动删除。
   * @return 队列
   */
  let defque = yield ch.assertQueue(queueCfg.queueId, { exclusive: queueCfg.exclusive })

  //worker同时最多只会派发到1个任务
  ch.prefetch(1)
  /**
   * @param que 队列名称
   * @param {exclusive: false} 确保RabbitMQ永远不会丢失掉我们的任务队列
   * @param exType Rounting KEY
   * @return 交换机绑定队列
   */
  yield ch.bindQueue(defque.queue, exCh.exchange, exchangeCfg.exType)

  console.info('init RabbitMQ succcess!')
  return ch
}

module.exports = init