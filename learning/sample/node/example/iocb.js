const fs = require('fs')

console.time('test')

fs.readFile('/Users/tingrong/Desktop/learning/sample/node/buffer/big.file', (err, data)=>{
    console.timeEnd('test')
    if (err) {
        return console.error(err);
    }
    setTimeout(()=>{
        console.info('setTimeout')
    }, 0)
    setImmediate(()=>{
        console.info('setImmediate')
    })
})