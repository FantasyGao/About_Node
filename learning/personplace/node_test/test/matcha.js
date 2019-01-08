/* global suite bench */
'use strict'

const ma =new require('matcha')
const suite = ma.Suite

suite('key / value store', function () {

  function Store () {}
  Store.prototype = Object.create(null)

  bench('let store = new Map()', function () {
    let store = new Map()
    store.set('key', 'value')
  })

  bench('let store = Object.create(null)', function () {
    let store = Object.create(null)
    store.key = 'value'
  })

  bench('EventEmitter way', function () {
    let store = new Store()
    store.key = 'value'
  })
})

