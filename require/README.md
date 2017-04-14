## 相互依赖模块加载方式


### Build Setup

``` bash
# install Nodejs
安装nodejs环境

# RUN
node main.js
```

#### 总结：当模块文件在加载一次之后不会再被加载第二次，不会再次进入文件执行。有兴趣的同学欢迎clone下来一步一步执行观察结果。

> example

### a.js：
```javascript
var a = require('./a.js');
var b = require('./b.js');
```
##### 加载顺序决定了先进入那个文件。


### a.js：
```javascript
exports.done = "A-content";
var b = require('./b.js');
```
##### 当遇到require b文件时开始进入b，并且带着done属性。


### b.js：
```javascript
exports.done = 'C-content';                   
var a = require('./a.js');                   
console.log('in b, a.done = %j', a.done);         
exports.done = 'D-content';             
```
##### 进入b文件时候，b也有带着自己的done属性向下执行，然后遇到require a文件，此时因为main里面已经加载过一次a文件了，此时b文件中不会再次加载a文件，继续向下执行。但是var a = require('./a.js'); 任然是有效的，a.done打印的并非是b文件刚加的done属性，而是在a在进入b的时候里面的done属性，即为 A-content,然后带着自己的done属性（此时的done覆盖了前面的done，是b最终的done属性），然后重新回到require b文件的a文件。


### a.js：
```javascript
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);   
exports.done = "B-content";              
```
##### 进入a文件此时打印b.done就是刚才覆盖了done的最终属性，为D-content，然后再次导出自己的done属性，覆盖a文件自己的done属性。然后回到require它的的main文件。


### main.js：
```javascript
var b = require('./b.js');
console.log('In main, a.done=%j, b.done=%j', a.done, b.done);
```
#### 进入main文件此时打印a的done属性和b的done属性，即最终的两个属性B-content，D-content。
