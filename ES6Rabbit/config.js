/**
 * @return 
 * @param server rabbitMQ服务器配置
 * @param exchange exchange配置
 * @param queue 队列配置
*/

exports.serverCfg = Object.defineProperties(Object.create(null), {
    host: {
      value: '127.0.0.1',
      configurable: false,
      writable: false,
      enumerable: true
    },
    port: {
      value: 5673,
      configurable: false,
      writable: false,
      enumerable: true
    },
    user: { value: '',},
    password: { value: '',},
    vhost: { value: '',}
  })
  
  exports.exchangeCfg = Object.defineProperties(Object.create(null), {
    exId: {
      value: 'myExc',
      configurable: false,
      writable: false,
      enumerable: true
    },
    exType: {
      value: 'direct',
      configurable: false,
      writable: false,
      enumerable: true
    }
  })
  
  exports.queueCfg = Object.defineProperties(Object.create(null), {
    queueId: {
      value: 'myQue',
      configurable: false,
      writable: false,
      enumerable: true
    },
    exclusive: {
      value: false,
      configurable: false,
      writable: false,
      enumerable: true
    }
  })