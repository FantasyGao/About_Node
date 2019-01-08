//console.log(require('crypto').createHash('sha256').update('password', 'utf8').digest('hex'));

//console.log(require('mysql-aes').decrypt('480AE3E13FA619C5CBF3921E447A6C79', 'my-key'));

const aes = require('crypto').createCipher('aes192', 'my-key')
const secret = aes.update('手机号','utf8', 'hex') + aes.final('hex')
console.log(secret);

const des = require('crypto').createDecipher('aes192', 'my-key')
des.update(secret, 'hex', 'utf8')
console.log(des.final('utf8'));

