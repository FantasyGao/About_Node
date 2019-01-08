const crypto = require('crypto');


const hexStr2hexArr = str => {
  let restlu = []
  for(let i = 0; i<str.length/2; i++) {
    const hexStr = str.slice(i*2, (i+1)*2)
    restlu.push(parseInt(hexStr, 16))
  }
  return restlu
}

var tst = '0e306561559aa787d00bc6f70bbdfe3404cf03659e704f8534c00ffb659c4c8740cc942feb2da115a3f4155cbb8607497386656d7d1f34a42059d78f5a8dd1ef'
var tst1= '0e306561559aa787d00bc6f70bbdfe3404cf03659e744f8534c00ffb659c4c8740cc942feb2da115a3f415dcbb8607497386656d7d1f34a42059d78f5a8dd1ef'
var bt = hexStr2hexArr(tst)
console.log(bt)
var bt1 = hexStr2hexArr(tst1)
console.log(bt1)


const hash = crypto
.createHash('md5')
.update(Buffer(bt))
.digest('hex')

const hash1 = crypto
.createHash('md5')
.update(Buffer(bt1))
.digest('hex')

console.log('hash', hash)
console.log('hash', hash1)