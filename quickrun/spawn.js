
const child_process = require('child_process');
const appList = require('./config.js');

let abbrList = process.argv.splice(2);

var flag;

if(abbrList.length==0){
	console.log("请输入程序简称！");
    return;	
}

for(let len=0;len<abbrList.length;len++){
	flag = true;
	for(let item in appList){
		if(abbrList[len]==item){
			flag = false;
			var app = child_process.spawn(appList[abbrList[len]],{
			detached: true,   //子进程与父进程不连接
				stdio: 'ignore'  // 备注：如果不置为 ignore，那么 父进程还是不会退出
			});
			app.unref();   //终止父进程	
		} 
	}
	if(flag){
        console.log("请先配置"+abbrList[len]+"再使用！");		
	}
}