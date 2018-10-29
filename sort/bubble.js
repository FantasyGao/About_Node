const arr = [2, 3, 7, 0, 4, 9, 10]
const correct = [ 0, 2, 3, 4, 7, 9, 10 ]
const reverse = [ 10, 9, 7, 4, 3, 2, 0 ]

const bigArr = require('./array.js')

//https://www.ctolib.com/uploadImg//20170122/20170122083403_805.gif
function bubble(arr){
  let falg = true
  let j=0
  while(falg){
    falg = false
    for(let i=0; i< arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
        falg = true
      }
    }
  }
  return arr
}

console.time('bubble sort time')
bubble(bigArr)
console.timeEnd('bubble sort time')