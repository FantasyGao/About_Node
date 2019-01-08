'use strict';
/** 
 * Consumer 消费者
 */

const kafka = require('kafka-node');

/**
 * @param connectionString: string, 
 * @param clientId?: string, 
 * @param options?: ZKOptions, 
 * @param noBatchOptions?: AckBatchOptions, 
 * @param sslOptions?: any
 **/
const client = new kafka.Client('127.0.0.1:2181')

/**
 * @param fetchRequest {}
 *  topic: string;
 *  partition?: number;
 *  offset?: number;
 */
const fetchRequest = [{
  topic: 'test-topic1',
  partition: 0
},{
  topic: 'test-topic3',
},{
  topic: 'test-topic4',
}]

const options = {
  autoCommit: true,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024
}

const consumer = new kafka.Consumer(client, fetchRequest, options)

/** 
 * @event  message cb: (message: Message) =>
 * @event  error cb: (error: any) => any
 * @event  offsetOutOfRange cb: (error: any) => any
*/
consumer.on('error', err => {
  console.error('consumer error:', err)
})

consumer.on('message', message => {
  if (message.topic === 'test-topic1') {
    console.log('inteval message', message.offset, message.value)
  } else {
    console.log(message.topic, message.value)
  }
})