console.log('main starting');console.log('1');
var a = require('./a.js');console.log('2');
var b = require('./b.js');console.log('3');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);console.log('4');