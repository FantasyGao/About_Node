console.log('main starting');                                 console.log('Main-1');
var a = require('./a.js');                                    console.log('Main-2');
var b = require('./b.js');                                    console.log('Main-3');
console.log('In main, a.done=%j, b.done=%j', a.done, b.done); console.log('Main-4');