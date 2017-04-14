console.log('b starting');console.log('11');
exports.done = 2;console.log('12');
var a = require('./a.js');console.log('13');
console.log('in b, a.done = %j', a.done);console.log('14');
exports.done = 3;console.log('15');
console.log('b done');console.log('16');