 ### nodejs服务器文件上传
 
 #### 说明：利用了busboy模块来完成上传文件的功能。
 #### busboy模块详细内容：https://www.npmjs.com/package/busboy
 
 #### 用法：
 
  ``` shell
   文件到本地；
   npm install //完成安装
   node upload.js 即可上传
 ```
 
 #### 通过busboy.on('file',...)来监听是否是文件上传，如果是符合条件，则用定义好的content缓存上传的文件信息，利用fs.createWriteStream创建可读流，将上传的文件存入file文件夹里。
 
 ``` javascript
 	var busboy = new Busboy({ headers: req.headers });
		//文件类型
		busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
			console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
			var info = fs.createWriteStream('./file/'+filename);
			content.name = filename;
			content.type = mimetype;
			file.on('data', function(data) {
			    console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
				  info.write(data);
			});
			file.on('end', function() {
			    console.log('File [' + fieldname + '] Finished');
			});
		});
 ```
  #### 上传完成将缓存的文件内容返回到页面。用fs.readFile打开内容。
   ``` javascript
  		//上传完成
		busboy.on('finish', function(){
			console.log('Done parsing form!');
			var realPath =__dirname+'/file/'+content.name;
			//打开刚才上传的文件
			fs.readFile(realPath, 'binary', function(err, file){
				res.writeHead(200);
				res.write(file, 'binary');
				res.end();
			});
		});
 ```
