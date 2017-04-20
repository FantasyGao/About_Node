const eventproxy = require('eventproxy')
const cheerio = require('cheerio')
const superagent = require('superagent')
const url = require('url')

const ep = new eventproxy()

var gitUrl = 'https://github.com/FantasyGao?tab=repositories'
var rootUrl = 'https://github.com/'

//引入promise解决镶套问题
var promise = new Promise((resolve,reject)=>{
        superagent.get(gitUrl)
            .end((err,res)=>{
                if(err){
                    reject(new Error(err));
                }
                var $ = cheerio.load(res.text)
                var dataArry = [];
                $('#user-repositories-list .js-repo-list li').each((index,elem)=>{
                    var $element = cheerio.load(elem);
                    var data = {}
                    data.name = $element('.d-inline-block h3 a').text().trim()
                    data.href = url.resolve(rootUrl,$element('.d-inline-block h3 a').attr().href)
                    dataArry.push(data)
                })
                resolve(dataArry)         //拿到所有项目信息
        })
    })
    //并发发起请求
    promise.then((dataArry)=>{
        dataArry.forEach((item,i)=>{
            superagent.get(item.href)
                .end((err,response)=>{
                    if(err){
                        return console.error(err)
                    }
                    console.log('fetch ' + item.name + ' successful');
                    //触发并发控制事件
                    ep.emit('star_page', [item.name,item.href,response.text]);
                })
        });
        //ep.after 计数监听 拿到数据
        ep.after('star_page',dataArry.length,(starDatas)=>{
            var starData = starDatas.map((data)=>{
                var starName = data[0]
                var starUrl = data[1]
                var starPage = data[2]
                var $ = cheerio.load(starPage)
                var starObj = {}
                starObj.name = starName
                starObj.url = starUrl
                starObj.stars = $('.social-count').text().trim().slice(24)
                return starObj
            })
            console.log(starData)
        })
    }).catch((err)=>{
        console.log(err)
    })