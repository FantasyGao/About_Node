const http = require('http')
const fs = require('fs')

function getPkgStat(hostname, port, path, dir) {
    let options = {
      hostname: hostname,
      port: port,
      path: path,
      method: 'get',
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }

    let curSize = 0
    let exist = fs.existsSync(dir)
    if (exist) curSize = fs.statSync(dir).size || 0
    options.headers['range'] = `bytes=${curSize}-`
    
    http.get(options, res => {
      if (res.statusCode === 206) {
        //code 206 正常下载
        let pkgSize = res.headers['content-length']
        let total = Number(curSize) + Number(pkgSize)
        let stream = fs.createWriteStream(dir, {flags: 'a+'})
        res.pipe(stream)
        genRatio(res, dir, total)
      } else {
        console.log('已下载完成')
      }
    })
  }

  function genRatio(res, dir, total) {
    res.on('data', () => {
      let size = fs.statSync(dir).size
      let rate = size / total
      console.log(rate.toFixed(2))
      //socket.emit ratio
    })
    res.on('end', () => {
      console.log('end data')
      //socket.emit end flag
    })
  }
  let
    dir = `/opt/packages/node-8.11.4.tar.gz`,
    hostname = 'sbeta.fengjr.inc',
    port = 9011,
    path = '/software/node-v8.11.4-linux-x64.tar.gz'

  getPkgStat(hostname, port, path, dir)