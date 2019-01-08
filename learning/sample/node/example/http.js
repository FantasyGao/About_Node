const http = require("http").createServer
const url = require("url")

http((req, res)=>{
    let u = url.parse(req.url).path
    console.log(u)
    if (u === '/a') {
        console.log(11)
        while(true) {}
        res.end()
    } else if (u === '/b') {
        console.log(1122)
        setTimeout(()=>{
            res.end()
        }, 1000*60*100)
    }
}).listen(9090)