var cheerio = require('cheerio');
var charset = require("superagent-charset");
var superagent = charset(require("superagent"));
var fs =require("fs");



superagent.get('http://health.people.com.cn/GB/26466/401878/404200/404225/index.html')
	.charset('gb2312')
	.end(function(err,result){
		if(err) console.log(err);
		var $ = cheerio.load(result.text);
		
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
		fs.writeFile('./text.json',JSON.stringify(data),function(err){
			if(err){console.log("save fail")}
			console.log("save success");
		});
	})