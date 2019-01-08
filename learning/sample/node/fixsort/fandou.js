function debounce(fn) {
  let timer = null
  return function() {
    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this)
    })
  }
}

function throttle(fn, loop) {
  let last = 0, timer = null
  return function() {
    let now = Date.now()
    if (now - last > loop) {
      timer && clearTimeout(timer)
      fn.apply(this)
      last = now
    } else {
      timer && clearTimeout(timer)
      timer = setTimeout (()=>{
        fn.apply(this)
        last = now
      }, 3000)
    }
  }
}

const arr = [5, 2, 7, 11, 2, 8, 6, 9]
function quicksort(start=0, end=arr.length-1, temp=arr[0]) {
  // let start = 0
  // let end = arr.length-1
  // let temp = arr[0]

  let left = start
  let right = end

  if (left < right) {
    while(start<end) {
      console.log(start, end)
      back()
      prev()
    }
    quicksort(left, start-1, arr[left])
    quicksort(end+1, right, arr[end+1])
    console.log(arr)
  }

  function back(){
    let i = end
    for(i; i>=start; i--) {
      end=i
      if (arr[i]<temp) {
        [arr[i], arr[start]] = [temp, arr[i]]
        break
      }
    }
  }
  function prev() {
    let i=start
    for(i; i<=end; i++) {
      start = i
      if (arr[i]>temp) {
        [arr[i], arr[end]] = [temp, arr[i]]
        break
      }
    }
  }
}
//quicksort()

function select() {
  for(let i=0; i<arr.length; i++) {
    let tmp = i
    for(let j=i; j<arr.length; j++) {
      if (arr[j] < arr[tmp]) tmp = j
    }
    if (tmp!=i) {
      [arr[tmp], arr[i]] = [arr[i], arr[tmp]] 
    }
  }
  console.log(arr)
}
//select()

function buble() {
  let flag =false
  let n = 0
  while (!flag) {
    flag = true
    for(let i=0; i<arr.length-n; i++) {
      if(arr[i]>arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        flag = false
      }
    }
    n++
  }
  console.log(arr)
}
// buble()

function insert() {
  for(let i=0; i<arr.length; i++) {
    let tmp = i
    for(let j=i; j>=0; j--) {
      if (arr[j] > arr[tmp]) {
        [arr[j], arr[tmp]] = [arr[tmp], arr[j]]
        tmp = j
      }
    }
  }
  console.log(arr)
}
// insert()

function shell() {
  let x = parseInt(arr.length / 2)
  while(x>0) {
    console.log(x)
    for(let i=0; i<arr.length; i++) {
      let tmp = i
      for(let j=i; j>=0; j-=x) {
        if (arr[j] > arr[tmp]) {
          [arr[j], arr[tmp]] = [arr[tmp], arr[j]]
          tmp = j
        }
      }
    }
    x = parseInt(x / 2)
  }
  console.log(arr)
}
//shell()

function quick2(arr, start, end, temp) {

  let left = start, right=end

  const back= ()=> {
    for(let i=end; i>=start; i--) {
      end = i
      if (arr[i] < temp) {
        [arr[i], arr[start] ] = [arr[start], arr[i] ]
      }
    }
  }

  const front = ()=>{
    for(let i=start; i<=end; i++) {
      start = i
      if (arr[i] > temp) {
        [arr[i], arr[end] ] = [arr[end], arr[i] ]
      }
    }
  }

  if (left<right) {
    while(start<end) {
      back()
      front()
    }
    quick2(arr, left, start-1, arr[left])
    quick2(arr, end+1, right, arr[end+1])
  }
  console.log(arr)
}


//quick2(arr, 0, arr.length-1, arr[0])

function shell2() {
  let x = parseInt(arr.length / 2)
  while(x>0) {
    for(let i=0; i<arr.length; i++) {
      let temp = i
      for (let j=i; j>=0; j-=x) {
        if (arr[j] > arr[temp]) {
          [arr[j], arr[temp]] = [arr[temp], arr[j]]
          temp = j
        }
      }
      console.log(arr)
    }
    x = parseInt(x/2)
  }
  console.log(arr)
}

shell2()