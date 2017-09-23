
function MyFunc () {
  this.name = 'func'
  this.sayName = ()=>{
    return 'my name is '+this.name
  }
}
console.log(typeof(MyFunc))

MyFunc.age = function(){
  console.log(22)
  return 1
}
var obj = {}

MyFunc.call(obj)


MyFunc.prototype.sayAge = function () {
  return this.name
};

var func = new MyFunc()
console.log(typeof(func))

console.log(obj.sayName())
// console.log(func.name)
// console.log(func.sayName())
//console.log('age:'+MyFunc.age())
// console.log('sayAge'+func.sayAge())

for(var key in MyFunc){
  //console.log(key+'is'+MyFunc[key])
}
Object.defineProperty(MyFunc, 'name', {value:'asdf',enumerable: true})
for(var key in MyFunc){
  //console.log(key+'is'+MyFunc[key])
}


function deepCopy(obj,newObj={}){
  console.log(1)
  for(var k in obj){
    newObj[k]=obj[k]
    console.log(k)
    console.log(typeof(obj[k]))
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
  a:1,
  b:"dsada",
  // c:{
  //   m:2,
  //   n:[
  //     2,
  //     4,
  //     "数组"
  //   ]
  // },
  func:function() {
    this.b='修改后'
  }
}
var myO= deepCopy(myObj)
console.log(myO)
myO.b=4
console.log(myO)
console.log(myObj)
