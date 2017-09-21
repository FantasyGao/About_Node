javascript 原型链学习
```javascript

function Person(name){
	this.name = name
}

Person.prototype.sayName = function(){
	console.log(this===me)       //true 
	console.log(this.__proto__===Person.prototype)       //true 
	return this.name
}

var me = new Person('FantasyGao')

var obj = {}

me.sayName()


console.log(me.constructor===Person)                                     //true  实例对象指向Person
console.log(me.__proto__.constructor===Person)                           //true  实例对象的__proto__指向Object
console.log(obj.constructor===Object)                                    //true  定义对象指向Object
console.log(obj.__proto__.constructor===Object)                          //true  定义对象的__proto__指向Object
console.log(Person.constructor===Function)                               //true  构造函数对象指向Function
console.log(Person.__proto__.constructor===Function)                     //true  构造函数对象的__proto__指向Function
console.log(Function.constructor===Function)                             //true  Function函数对象指向Function
console.log(Function.__proto__.constructor===Function)                   //true  Function函数对象的__proto__指Function
console.log(Object.constructor===Function)                               //true  Object指向Function
console.log(Object.__proto__.constructor===Function)                     //true  Object的__proto__指向Function

console.log(me.__proto__===Person.prototype)                              //true 实例对象的__proto__即构造函数的prototype
console.log(obj.__proto__===Object.prototype)                             //true 定义对象的__proto__即Object的prototype
console.log(Person.__proto__===Function.prototype)                        //true 构造函数对象的__proto__即Function的prototype
console.log(Object.__proto__===Function.prototype)                        //true Object的__proto__即Function的prototype
console.log(Function.__proto__===Function.prototype)                      //true Function的__proto__即Function的prototype

console.log(Function.prototype.__proto__===Object.prototype)              //true Function.prototype的__proto__即Object的prototype
console.log(Object.prototype.__proto__===null)                            //true Object.prototype的__proto__即null

console.log(typeof me) // object
console.log(typeof obj) // object
console.log(typeof Person) // function
console.log(typeof me.__proto__) // object
console.log(typeof obj.__proto__) // object

console.log(typeof Person.__proto__)  //function
console.log(typeof Function.__proto__)  //function
console.log(typeof Object.__proto__)  //function
```
