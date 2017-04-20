console.log('b starting');                          console.log('B-1');
exports.done = 'C-content';                         console.log('B-2');
var a = require('./a.js');                          console.log('B-3');
console.log('in b, a.done = %j', a.done);           console.log('B-4');
exports.done = 'D-content';                         console.log('B-5');
console.log('b done');                              console.log('B-6');