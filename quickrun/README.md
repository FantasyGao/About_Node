### 快速启动程序


### Getting Start

```
> cd quickrun
> npm install 
> npm start +需要执行的程序简称（可支持一次打开多个）
```
### 说明

#### 我们将经常要用到的程序位置放到config.js文件中，给对应的程序娶一个简称，执行的时候用到。执行的时候直接npm start 将要打开的文件名以参数形式跟在后面。 例如：npm start wx sbl，将会打开微信客户端和sublime。 

### 第一种方式：利用子进程模块child_process的spwan方法完成。

### 解析参数 
``` javascript
  const child_process = require('child_process');
  const appList = require('./config.js');

  let abbrList = process.argv.splice(2);   //解析参数，取第二个后面的。
```
### 开启多个子进程
``` javascript
for(let len=0;len<abbrList.length;len++){           
	flag = true;                    //全局变量，用来判断用户是否输错
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
```
### 第二种方式：利用opener模块完成。

### 还是利用了子进程模块child_process来完成，除了方便点，过程都一样。
``` javascript
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
			opener(appList[abbrList[len]]);               //利用opener直接打开程序
		} 
	}
	if(flag){
        console.log("请先配置"+abbrList[len]+"再使用！");		
	}
}
```
