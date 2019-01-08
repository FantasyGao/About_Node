const test = require('module');
const life = require('life')
const resolve = require('path').resolve
console.log(require('fs').statSync(resolve('./index.js')).isFile())

console.log(process.execArgv)
