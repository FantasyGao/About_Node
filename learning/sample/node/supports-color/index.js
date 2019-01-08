const supportsColor = require('supports-color')



if (supportsColor.stdout) {
  console.log('Terminal stdout supports color');
}

if (supportsColor.stdout.has256) {
  console.log('Terminal stdout supports 256 colors');
}

if (supportsColor.stderr.has16m) {
  console.log('Terminal stderr supports 16 million colors (truecolor)');
}