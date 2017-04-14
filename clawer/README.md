## node 爬虫总结

### ① http.get+cheerio+iconv-lite
#### 这种方式还是比较简单的，容易理解，直接使用http的get方法进行请求url，将得到的内容给cheerio解析，用jquery的方式解析出我们要东西即可。

> 要点：
##### 得到的结果中文乱码如何解决呢，用iconv-lite模块将得到的内容进行转码即可。
```javascript
http.get(options,function(result){
  var body = [];
	result.on('data',function(chunk){
		body.push(chunk);
	});
	result.on('end', function () {
		var html = iconv.decode(Buffer.concat(body), 'gb2312');  //注意这里body是数组
    var $ = cheerio.load(html);
    ...
  });
});
```

### ② request+cheerio+iconv-lite
#### 这种方式在获取内容的方式上与上有些不同,可以直接获取到Buffer类型的数据。然后将得到的内容给cheerio解析，用jquery的方式解析出我们要东西即可。

> 要点：
##### 结果中文乱码如何解决，用iconv-lite模块将得到的内容进行转码即可。
```javascript
request(options,function(err,res,body){
	if(err)console.log(err);
  if(!err&&res.statusCode==200){
		var html = iconv.decode(body, 'gb2312');     //这里body是直接拿到的是Buffer类型的数据，可以直接解码。
		var $ = cheerio.load(html);
        ...
  }
});
```

### ③ superagent+cheerio+superagent-charset
#### 这种方式是比前面两个有较大差别，用了superagent的get方法发起请求，解码的时候用到了superagent-charse，用法还是很简单的，之后再将获取到的内容给cheerio解析，用jquery的方式解析出我们要东西即可。

> 要点：
##### 结果中文乱码解决用superagent-charset模块进行转码，方式较之上面有点差别。

##### 首先看它的加载方式：
```javascript
var charset = require("superagent-charset");
var superagent = charset(require("superagent"));   //将superagent模块传递给superagent-charset
```
##### 解码方式：
```javascript
superagent.get(url)
	.charset('gb2312')                                //用charset方法达到解码效果。
	.end(function(err,result){
		if(err) console.log(err);
		var $ = cheerio.load(result.text);
```

### 总结：三种方式都可以达到我们的目的，前两种容易理解，最后一种解码方式很方便，很顺手。
