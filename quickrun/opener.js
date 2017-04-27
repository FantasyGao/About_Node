const opener = require('opener');
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
			opener(appList[abbrList[len]]);
		} 
	}
	if(flag){
        console.log("请先配置"+abbrList[len]+"再使用！");		
	}
}