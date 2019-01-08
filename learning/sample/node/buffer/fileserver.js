const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  console.log('=======>>>>')
  fs.readFile('./small.file', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8000);
