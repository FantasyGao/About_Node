console.log('a starting');                  console.log('A-1');
exports.done = "A-content";                 console.log('A-2');
var b = require('./b.js');                  console.log('A-3');
console.log('in a, b.done = %j', b.done);   console.log('A-4');
exports.done = "B-content";                 console.log('A-5');
console.log('a done');                      console.log('A-6');