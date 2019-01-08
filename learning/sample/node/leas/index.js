var arr = [3, 5, 23, 1, 2, 44, 21, 6, 9, 3, 18]

function select() {
  for (let i=0; i<arr.length; i++) {
    console.log(arr)
    let temp = i
    let j = i + 1
    while (j<arr.length) {
      if (arr[j] < arr[temp]) {
        temp = j
      }
      j++
    }
    [arr[i], arr[temp]] = [arr[temp], arr[i]]
  }
}

function insert() {
  for(let i=0; i<arr.length; i++) {
    let temp = i + 1
    for (let j=i; j>=0; j--) {
      if (arr[j] > arr[temp]) {
        [arr[j], arr[temp]] = [arr[temp], arr[j]]
        temp = j
      } else break
    }
  }
  console.log(arr)
}

// insert()

function buble() {
  let falg = true
  let x = 0
  while (falg) {
    falg = false
    for(let i=0; i<arr.length - x; i++) {
      if (arr[i]>arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        falg = true
      }
    }
    x++
  }
  console.log(arr)
}


function shell() {
  let x = parseInt(arr.length/2)
  while(x > 0) {
    for (let i=0; i<arr.length; i++) {
      let temp = i+x
      for (let j=i; j>=0; j-=x) {
        if (arr[j] > arr[temp]) {
          [arr[j], arr[temp]] = [arr[temp], arr[j]]
          temp = j
        }
      }
    }
    x = parseInt(x/2)
  }
  console.log(arr)
}

function quick(start, end, temp) {
  let left = start
  let right = end

  const back = () => {
    for(let i=end; i>start; i--,end--) {
      if(arr[i] < temp) {
        [arr[i], arr[start] ] = [arr[start], arr[i]]
        break
      }
    }
  }

  const front = () => {
    for(let i=start; i<end; i++,start++) {
      if(arr[i] > temp) {
        [arr[i], arr[end] ] = [arr[end], arr[i]]
        break
      }
    }
  }
  if (left < right) {
    while (start<end) {
      console.log(arr)
      back()
      front()
      quick(left, start-1, arr[left])
      quick(end+1, right, arr[end+1])
    }
  }

  console.log(arr)
}

// quick(0, arr.length, arr[0])

Function.prototype.bind2 = function(){
  const self = this
  const o = arguments[0]
  const params1 = Array.prototype.slice.call(arguments, 1)
  console.log(params1)
  let result = function() {
    const params2 = Array.prototype.slice.call(arguments)
    console.log(params2)
    self.apply(this instanceof result ? this : o, params1.concat(params2))
  }
  function fn(){}
  fn.prototype = this.prototype
  result = new fn()
  return result
}

function fn(){}
var x=fn.bind2({a:2}, 12, 44)


Function.prototype.call2 = function() {
  let o = arguments[0]
  const params = Array.prototype.slice.call(arguments, 1)
  if (o === null || o === undefined) {
    o = window
  } else {
    o = Object(o)
  }
  o.fn = this
  eval(`o.fn(${params})`)
  delete o.fn
}

a=1
function fn(x, y){
  console.log(this.a)
  console.log(x, y)
}

// fn.call2({a:2}, 9, 8)

function fangdou(fn) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this)
    }, 100)
  }.bind(this)
}

function jieliu(fn) {
  let exct = Date.now()
  let timer = null
  return function () {
    if (Date.now() - exct > 500) {
      fn.apply(this)
    } else {
      clearTimeout(timer)
      timer = setTimeout(()=>{
        fn.apply(this)
      }, 100)
    }
  }.bind(this)
}
