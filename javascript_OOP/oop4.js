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