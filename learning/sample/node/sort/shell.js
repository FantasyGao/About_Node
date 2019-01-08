const arr = [2, 3, 9, 0, 4, 7, 10, 5, 1, 8]
const correct = [0, 2, 3, 4, 7, 9, 10]
const reverse = [10, 9, 7, 4, 3, 2, 0]

const bigArr = require('./array.js')

function shell1(arr) {
  let gap = parseInt(arr.length / 2)
  while(gap>0) {
    for(let i=gap; i<arr.length; i++) {
      let j = i
      let temp = arr[i]
      for(j; j>0; j -= gap) {
        if(arr[j-gap]>temp) {
          arr[j] = arr[j-gap]
        } else break
      }
      arr[j] = temp
    }
    gap = parseInt(gap / 2)
  }
  return arr
}


function shell2(arr) {
  let gap = parseInt(arr.length / 2)
  while (gap > 0) {
    for (let i = 0; i < arr.length - gap; i++) {
      let [j, temp] = [i + gap, arr[i + gap]]
      while (temp < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = temp
    }
    gap = parseInt(gap / 2)
  }
  return arr
}


function shell3(arr) {
  let gap = Math.floor(arr.length / 2)
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      for (let j = i; j > 0; j -= gap) {
        if (arr[j - gap] > arr[j]) {
          let temp = arr[j - gap]
          arr[j - gap] = arr[j]
          arr[j] = temp
        } else break
      }
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

function shell4(arr) {
  let gap = Math.floor(arr.length / 2)
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i]
      for (let j = i; j > 0; j -= gap) {
        if (arr[j - gap] > arr[j]) {
          arr[j] = arr[j - gap]
          arr[j-gap]=temp
        } else break
      }
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}




console.time('shell2 sort time')
console.log(shell4(bigArr))
console.timeEnd('shell2 sort time')
// console.time('shell3 sort time')
// shell3(bigArr)
// console.timeEnd('shell3 sort time')