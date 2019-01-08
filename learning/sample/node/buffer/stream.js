const {
  Readable,
  Writable,
  Duplex,
  Transform
} = require('stream')

const myReadStream = new Readable({
  read(size){
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
});

// myReadStream.push('mystreamtest\n');
// myReadStream.push('mystreamtest2\n');
// myReadStream.push('mystreamtest3\n');

// myReadStream.push(null)

// myReadStream.pipe(process.stdout)

myReadStream.currentCharCode = 65

myReadStream.pipe(process.stdout);


const plexStream = new Duplex({
  read(size){
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
  write(ch, encod, cb){
    console.log(ch.toString())
    cb
  }
})

plexStream.currentCharCode = 65;

// process.stdin.pipe(plexStream).pipe(process.stdout);

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
