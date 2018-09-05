const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');

const writeStream = fs.createWriteStream(__dirname+'/rl.yaml');
const readStream =  process.stdin;

const rl = readline.createInterface({
    input: readStream,
    output: process.stdout
});

readStream.on('data', function(msg){
    writeStream.write(msg)
});

rl.question('请输入需加密内容：', ()=>{
    rl.close();
    process.stdout.write('start crypto and Gzip\n');
    cryptoGzip();
})


function cryptoGzip(){
    const readStream2 = fs.createReadStream(__dirname+'/rl.yaml');
    const writeStream2 = fs.createWriteStream(__dirname+'/rl.zip');

    const gzip = zlib.createGzip();
    
    const password = new Buffer('tingrong');
    const cryptoStream = crypto.createCipher('aes-256-cbc', password);

    readStream2
      .pipe(cryptoStream)
      .pipe(gzip)
      .pipe(writeStream2)
      .on('finish', ()=>{
          console.log('crypto and zlib finished!')
          decryptoGzip()
      })
}

function decryptoGzip(){
    const readStream3 = fs.createReadStream(__dirname+'/rl.zip');
    const writeStream3 = fs.createWriteStream(__dirname+'/real.yaml');

    const gzip = zlib.createGunzip();
    
    const password =new Buffer('tingrong');
    const cryptoStream = crypto.createDecipher('aes-256-cbc', password);

    readStream3
      .pipe(gzip)
      .pipe(cryptoStream)
      .pipe(writeStream3)
      .on('finish', ()=>{
          console.log('decrypto and unzlib finished!')
      })
}