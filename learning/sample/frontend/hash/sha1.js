const stream1 = require('fs').createReadStream('./20181230_2.pdf')
const stream2 = require('fs').createReadStream('./20181230_3.pdf')
const hash1 = require('crypto').createHash('sha1')
const hash2 = require('crypto').createHash('sha1')

stream1.on('data', data => hash1.update(data))
stream2.on('data', data => hash2.update(data))

stream1.on('end', ()=>console.log('file1 hash', hash1.digest('hex')))
stream2.on('end', ()=>console.log('file2 hash', hash2.digest('hex')))