var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* () {
  console.log('start');
  var f1 = yield readFile('/Users/a123/go/src/test/test.go');
  console.log('middle');
  console.log(f1.toString());
  var f2 = yield readFile('/Users/a123/go/src/test/generate.js');
  console.log('end');
  console.log(f1.toString());
  console.log(f2.toString());
};

var g = gen();

g.next().value.then(function (data) {
  g.next(data).value.then(function (data) {
    g.next(data);
  });
})