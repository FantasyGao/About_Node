const http    = require('http');
const fs      = require('fs'); 
const inspect = require('util').inspect;
const opener  = require('opener');
const Busboy = require('busboy');

//缓存上传文件
const content={};
 
http.createServer(function(req, res) {
	if(req.url ==='/'&&req.method === 'GET'){
		res.writeHead(200, { Connection: 'close' });
		res.end(
		    '<html><head></head><body>\
				<form method="POST" enctype="multipart/form-data">\
					<input type="file" name="file" value="请选择文件"><br />\
					<input type="submit">\
				</form>\
			</body></html>'
		);
	}
	if(req.url ==='/'&&req.method === 'POST') {
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
		//其他类型
		busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
			console.log('Field [' + fieldname + ']: value: ' + inspect(val));
		});
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
		req.pipe(busboy);
	} 
}).listen(8000, function() {
    console.log('http:127.0.0.1:8000 is listening');
	opener('http:127.0.0.1:8000');
});