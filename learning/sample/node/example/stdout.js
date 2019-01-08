const { spawn } = require('child_process');
const ls = spawn('tail', ['-f', '/Users/a123/go/src/test/node/package-lock.json2']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});