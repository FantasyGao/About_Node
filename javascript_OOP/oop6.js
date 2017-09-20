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

console.log(myO==my1)