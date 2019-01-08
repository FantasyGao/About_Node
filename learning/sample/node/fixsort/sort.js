const a = [4, 1, 8, 9, 23, 2, 6]

// 冒泡
function buble() {
  for(let i=0; i<a.length; i++) {
    for(let j=0; j<a.length; j++) {
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1], a[j]]
      }
    }
  }
  console.log(a) 
}

// 选择
function select(){
  for(let j=0; j<a.length; j++) {
    let temp = j
    for(let i=j; i<a.length;i++) {
      if(a[temp] > a[i]) {
        temp = i
      }
    }
    if (temp !== j) {
      [a[j], a[temp]] = [a[temp], a[j]]
    }
  }
  console.log(a)
}

// 插入
function insert() {
  for(let j=0; j<a.length; j++) {
    let temp = j
    for(let i=j; i>=0; i--) {
      if(a[temp] < a[i]) {
        [a[i], a[temp]] = [a[temp], a[i]]
        temp = i
      }
    }
  }
  console.log(a)
}


// 希尔
function shell() {
  let x = parseInt(a.length / 2)
  while(x>0) {
    console.log('x', x)
    for(let i=0; i < a.length; i++) {
      let temp = i
      for (let j=i; j>=0; j-=x) {
        if (a[j] > a[temp]) {
          [a[j], a[temp]] = [a[temp], a[j]]
          temp = j
        }
      }
    }
    console.log(a)
    x = parseInt(x / 2)
  }
  console.log(a)
}

// 快排
function quick(start=0, end=a.length-1, temp=a[0]) {
  // let start = 0
  // let end = a.length
  // let temp = a[0]

  let left = start
  let right = end

  if (left < right) {
    while(start < end ){
      console.log(start, end, temp)
      back()
      prev()
    }
    a[start] = temp
    console.log(a)
    quick(left, start-1, a[left])
    quick(end+1, right, a[end+1])
  }


  function back() {
    let i = end
    for(i; i>=start; i--) {
      end = i
      if (a[i] < temp) {
        a[start] = a[i]
        break
      }
    }
  }

  function prev() {
    let i=start
    for(i; i<=end; i++) {
      start = i
      if (a[i] > temp) {
        a[end] = a[i]
        break
      }
    }
  }
}

// quick()
// console.log(a)
function test() { 
  console.log('nextTick')
  process.nextTick(() => test());
}
// test()
function testS() { 
  console.log('setTimeout')
  setTimeout(() => testS(), 0);
}

[
  "减少http请求",
  "缓存域名，减少DNS查询",
  "图片使用强缓存，HTML使用协商缓存，chunkhash",
  "压缩js和css等代码",
  "减少回流",
  "使用CDN资源服务",
  "使用gzip压缩文件",
  "多使用get请求，而减少post，发数据包个数",
  "减少cookie体积",
  "合理使用事件委托,减少监听节点",
  "尽早处理事件，在DOMCONTENTLOADED",
  "CSS Sprite"
]

var num1 = '12342421321321'
var num2 = 11821231
const assert = require('assert')

function bigAdd(a, b) {
  assert(!isNaN(a), 'a is not a number')
  assert(!isNaN(b), 'b is not a number')
  a = String(a)
  b = String(b)
  a = a.split('').reverse()
  b = b.split('').reverse()
  let result = []
  let temp = 0
  for(let i=0; i<Math.max(a.length, b.length); i++) {
    !a[i] && (a[i] = 0)
    !b[i] && (b[i] = 0)

    sum = Number(a[i]) + Number(b[i]) 
    val = 0
    if (sum > 9) {
      val = sum % 10
    }

    result[i] = Number(a[i]) + Number(b[i]) + temp
    temp = sum > 9 ? 1 : 0
  }
  result = result.reverse().join('')
  return result
}

console.log(bigAdd(num1, num2))