console.log('a starting');console.log('5');
exports.done = 1;console.log('6');
var b = require('./b.js');console.log('7');
console.log('in a, b.done = %j', b.done);console.log('8');
exports.done = 4;console.log('9');
console.log('a done');console.log('10');