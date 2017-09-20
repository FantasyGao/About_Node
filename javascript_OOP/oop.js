// 函数封装
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