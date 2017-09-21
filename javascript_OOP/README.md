### javascript面向对象

>jiavascript面向对象：对象封装，原型链继承

#### 函数封装
```javascript
function Person(name,age) {
　　let obj = {
　　　　name:name,
　　　　age:age
　　}
    return obj
}

var me = Person('FantasyGao', 22)
var you = Person('Demi', 21)

console.log(me.name)
```

#### 构造函数生成

```javascript
// new 构造函数生成对象
function Person(name,age) {
　　this.name = name
    this.age = age
}

var me = new Person('FantasyGao', 22)

console.log(me.name)
```

#### prototype承载属性/方法
```javascript
// prototype承载属性/方法
function Person(name,age) {
　　this.name = name
    this.age = age
}

Person.prototype.country = 'China'
Person.prototype.say = function(){
	return 'i am Chinese'
}

var me = new Person('FantasyGao', 22)
var you = new Person('Demi', 21)

console.log(me.name)   //FantasyGao
console.log(me.say())  //China
console.log(you.say())  //China

console.log(me === you)  //false 
console.log(me.say === you.say)  //true（地址相同）
```

#### 继承其他构造函数属性方法
```javascript
// 继承其他构造函数属性方法

function Status(identity) {
　　this.identity = identity
}

function Person(name,age) {
　　this.name = name
    this.age = age
}

var me = new Person('FantasyGao', 22)

Status.call(me,'developer')
//Status.apply(me,['developer'])
//Status.bind(me)('developer')

console.log(me.identity)   // developer
```

####  继承其他构造函数属性方法结合prototype
```javascript
// 继承其他构造函数属性方法结合prototype

function Status(identity) {
　　this.identity = identity
}

function Person(name,age) {
　　this.name = name
    this.age = age
}

Person.prototype = new Status('developer')  //利用prototype给Person绑定继承属性

var me = new Person('FantasyGao', 22)


console.log(me.identity)   // developer  原型链查找identity


// 原型链指示器错误修正
console.log(Person.prototype.constructor)  // Status

Person.prototype.constructor = Person

console.log(Person.prototype.constructor)  // Person
```

#### 拷贝继承
```javascript
// 拷贝继承
function deepCopy(obj,newObj={}){
  for(var k in obj){
    newObj[k]=obj[k]
    if(typeof(obj[k])==='object'){
      newObj[k]=(obj[k].constructor===Array)?[]:{}
      deepCopy(obj[k],newObj[k])
    }else {
      newObj[k]=obj[k]
    }
  }
  return newObj
}
var myObj={
  name:'FantasyGao',
  details:{
    sex:'男',
    data:[
     2,
     4,
     6
    ]
  },
  func:function() {
    this.status = 'func’s status'
  }
}

var myO= deepCopy(myObj)
var my1= deepCopy(myObj)

console.log(myO==my1)   //false
```
