const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  res.end(fs.readFileSync('./big.file'))
});

server.listen(8000);