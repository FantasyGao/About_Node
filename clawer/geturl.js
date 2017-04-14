var fs =require("fs");
var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');


var options = {
    hostname: 'health.people.com.cn',
    path: '/GB/26466/401878/404200/404225/index.html',
	port:80,
    headers: {
      'Accept':'text/html',
      'Content-Type':'application/x-www-form-urlencoded'
    }
};

http.get(options,function(result){
	var chunks = new String();
	var body = [];
	// 设置编码
    //result.setEncoding('utf-8');
	result.on('data',function(chunk){
		body.push(chunk);
	});
	result.on('end', function () {
		var html = iconv.decode(Buffer.concat(body), 'gb2312');
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
		fs.writeFile('./text_get_url.json',JSON.stringify(data),function(err){
			if(err){console.log("save fail")}
			console.log("save success");
		});
    });
	
})
