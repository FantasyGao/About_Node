const arr = [2, 1, 9,4,10, 0, 3]
const correct = [ 0, 2, 3, 4, 7, 9, 10 ]
const reverse = [ 10, 9, 7, 4, 3, 2, 0 ]

const bigArr = require('./array.js')

//https://www.ctolib.com/uploadImg//20170122/20170122083616_620.gif

//反序记下标
function insert1(arr) {
  for(let i=0;i<arr.length;i++) {
    let temp = arr[i]
    let x;
    for(let j=i;j>0;j--) {
      if (arr[j-1] > temp) {
        [ arr[j], x ] = [ arr[j-1], j ]
      } else break
    }
    x&&(arr[x-1] = temp)
  }
  return arr
}
//反序交换值
function insert2(arr) {
  for(let i=1;i<arr.length;i++) {
    let j=i
    let temp = arr[i]
    for(j;j>0;j--) {
      if (arr[j-1] > temp) {
        arr[j] = arr[j-1]
      } else break
    }
    arr[j] = temp
  }
  return arr
}

function insert3(arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j=i;j>0;j--) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      } else break
    }
  }
  return arr
}

//正序
function insert4(arr) {
  for(let i=0;i<arr.length;i++) {
    let temp = arr[i]
    for(let j=0;j<i;j++) {
      if (arr[j] > arr[i]) {
        for(let h=i; h>j;h--) {
          [ arr[h], arr[h-1] ] = [ arr[h-1], arr[h-2] ]
        }
        arr[j] = temp
        break
      }
    }
  }
  return arr
}

function insert5(arr){
  for (let i = 0; i < arr.length-1; i++) {
    let [j, temp ] = [ i, arr[i+1] ]
    while (temp < arr[j-1]) {
      arr[j] = arr[j-1]
      j = j-1
    }
    arr[j] = temp
  }
  return arr
}


// console.time('insert1-sort-time')
// insert1(bigArr)
// console.timeEnd('insert1-sort-time')

// console.time('insert2-sort-time')
// insert2(bigArr)
// console.timeEnd('insert2-sort-time')

console.time('insert3 sort time')
insert3(bigArr)
console.timeEnd('insert3 sort time')