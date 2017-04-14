var request = require("request");
var fs =require("fs");
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var options = {
  url: 'http://health.people.com.cn/GB/26466/401878/404200/404225/index.html',
  encoding: null,
  headers: {
    'User-Agent': 'request',
	'Accept':'text/html',
	'Content-Type':'application/x-www-form-urlencoded'
  }
};

request(options,function(err,res,body){
	if(err)console.log(err);
	if(!err&&res.statusCode==200){
		var html = iconv.decode(body, 'gb2312');
		var $ = cheerio.load(html);
		var data = [
			{
				time:'',
				title:'',
				url:''
			}
		];
		$('.p2_con .p2_list .new_list .list_14 li').each(function(i,el){
			if(i<5){
				data[i] = {};
				data[i].title = el.children[0].children[0].data;
				data[i].description ='发表时间：'+ el.children[2].children[0].data;
				data[i].url = el.children[0].attribs.href;
			}
		});
		fs.writeFileSync('request_test.json', JSON.stringify(data), 'utf8');
	}
})
