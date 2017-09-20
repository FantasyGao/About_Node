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
