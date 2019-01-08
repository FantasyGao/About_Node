const arr = [2, 1, 9,4,10, 0, 3]
const correct = [ 0, 2, 3, 4, 7, 9, 10 ]
const reverse = [ 10, 9, 7, 4, 3, 2, 0 ]

const bigArr = require('./array.js')

function mergeSort(arr) {  // 采用自上而下的递归方法
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
  var result = [];

  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());

  return result;
}

function merge2(arr) {
  function min(x, y) {
    return x < y ? x : y;
  }
  let a = arr
  let b = []
  for (let seg = 1; seg < arr.length; seg += seg) {
    console.log('seg', seg, arr)
    for (let start = 0; start < arr.length; start += seg + seg) {
      let mid = min(start + seg, arr.length)
      let high = min(start + seg + seg, arr.length)
      let k = start;
      let start1 = start, end1 = mid
      let start2 = mid, end2 = high
      while (start1 < end1 && start2 < end2)
        b[k++] = a[start1] < a[start2] ? a[start1++] : a[start2++]
      while (start1 < end1)
        b[k++] = a[start1++]
      while (start2 < end2)
        b[k++] = a[start2++]
    }
    let temp = a;
    a = b;
    b = temp;
  }
  if (a != arr) {
    let i;
    for (i = 0; i < arr.length; i++)
      b[i] = a[i];
    b = a;
  }
  return arr
}


console.time('insert3 sort time')
console.log(merge2(arr))
console.timeEnd('insert3 sort time')


function merge3(arr, start=0, end=arr.length) {
  let left = start
  let right = end
  if (end > start) {
    let pos = parseInt((end+start)/2)
    merge3(arr, left, pos)
    merge3(arr, pos, right)
  }
}