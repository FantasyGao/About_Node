var scope = "global"

function checkscope(){
  var scope = "local"
  function f(){
    return scope
  }
  return f
}

//console.log(checkscope()())

var func = (function(){
  var a=0
  return function (){
    return a++
  }
}())

// console.log(func())
// console.log(func())

function s(x){
  this.a = x
}
console.log(func.a)
s.call(func,1)

console.log(func.a)
