const arr = [2, 3, 7, 0, 4, 9, 10]
const correct = [0, 2, 3, 4, 7, 9, 10]
const reverse = [10, 9, 7, 4, 3, 2, 0]

const bigArr = require('./array.js')

//https://www.ctolib.com/uploadImg//20170122/20170122083522_509.gif
function select(arr) {
  for (let j = 0; j < arr.length; j++) {
    let temp = j
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[temp] > arr[i]) {
        temp = i
      }
    }
    if (temp != j)[arr[j], arr[temp]] = [arr[temp], arr[j]]
  }
  return arr
}

console.time('select sort time')
select(bigArr)
console.timeEnd('select sort time')