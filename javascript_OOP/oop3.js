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