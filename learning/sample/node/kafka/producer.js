'use strict'
/** /
 * @example kafka learning
 * @example https://github.com/SOHU-Co/kafka-node
 * */

const kafka = require('kafka-node')

/**
 * @param connectionString: string, 
 * @param clientId?: string, 
 * @param options?: ZKOptions, 
 * @param noBatchOptions?: AckBatchOptions, 
 * @param sslOptions?: any
 **/
const client = new kafka.Client('127.0.0.1:2181')

/**
 * @event 'brokersChanged' | 'close' | 'connect' | 'ready' | 'reconnect' | 'zkReconnect', cb: () => any): this;
 * @event 'error' | 'socket_error', cb: (error: any) => any): this;
 * */
client.on('connect', ()=> {
  console.log('client connect')
})

/** /
 * @param client: Client
 * @param options?: ProducerOptions
 * ProducerOptions {
 *   requireAcks?: number;
 *   ackTimeoutMs?: number;
 *   partitionerType?: number (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
 * }
 * @param customPartitioner?: CustomPartitioner
 **/
const producer = new kafka.Producer(client, {
  requireAcks: 1,
  ackTimeoutMs: 1000,
  partitionerType: 1
})

/**
 * @event ready
 * @event error
*/
producer.on('error', err=>{
  console.error('producer error', err)
})

producer.on('ready', ()=>{
  console.log('producer ready')
  /**
   * @param payloads 
   * topic: string;
   * messages: any; // string[] | Array<KeyedMessage> | string | KeyedMessage
   * key?: string; string or buffer, only needed when using keyed partitioner
   * partition?: number;
   * attributes?: number;
   * attributes controls compression of the message set. It supports the following values:
   *   0: No compression
   *   1: Compress using GZip
   *   2: Compress using snappy
   *  */
  const payloads = [{
    topic: 'test-topic1',
    messages: ['test', 'message'],
    key: 'myKey',
    partition: 0,
    attributes: 2
  },{
    topic: 'test-topic2',
    messages: 'hello kafka',
    partition: 0
  }]
  producer.send(payloads, (err, data) => {
    if (err) console.error('send error', err)
    console.log('send topic', data)
  })
  // createTopics
  const topics = ['test-topic3', 'test-topic4']
  const partitioner = [{
    topic: 'test-topic1',
    messages: 'hello kafka',
    partition: 3
  }]
  producer.createTopics(topics, false, (err, data) => {
    if (err) console.error('createTopics error', err)
    const topics = [{
      topic: 'test-topic3',
      messages: 'hello create topics kafka',
      partition: 0
    }]
    producer.send(topics, (err, data) => {
      if (err) console.error('new topics send error', err)
      else {
        console.log('new topic', data)
      }
    })
    setInterval(()=>{
      producer.send(partitioner, (err, data) => {
        if (err) console.error('new new topics send error', err)
        else {
          console.log('intelval topic', data)
        }
      })
    }, 3000)
  })
})
