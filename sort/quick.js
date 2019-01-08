const arr = [8, 12 ,3, 13,7, 0, 4, 9, 5, 10, 6, 11]
const correct = [ 0, 2, 3, 4, 7, 9, 10 ]
const reverse = [ 10, 9, 7, 4, 3, 2, 0 ]
const bigArr = require('./array.js')


// console.time('quick1 sort time')
// console.log(quick1(bigArr))
// console.timeEnd('quick1 sort time')

function quick1(arr, start=0, end=arr.length-1) {
  let left = start
  let right = end
  if (right > left) {
    while (start != end) {
      end = back1(arr, end, start)
      start = prev1(arr, start, end)
    }
    quick1(arr, left, end-1)
    quick1(arr, start+1, right)
  }
  return arr
}
  
/**
 *  back 从后往前  
 */
function back1(arr, pos, prev){
  let j = pos
  for(j; j>prev; j--) {
    if(arr[j] < arr[prev]) {
      let temp = arr[prev]
      arr[prev] = arr[j]
      arr[j] = temp
      break
    }
  }
  return j
}
  
function prev1(arr, pos, back){
  let j=pos
  for(j; j<back; j++) {
    if (arr[j] > arr[back]) {
      let temp = arr[back]
      arr[back] = arr[j]
      arr[j] = temp
      break
    }
  }
  return j
}


// console.time('quick sort time')
// console.log(quick(bigArr))
// console.timeEnd('quick sort time')

function quick(arr, i=0, l=arr.length-1, r=0) {
  let left = r, right = l
  if (left < right) {
    let temp = arr[i]
    while (l !== r) {
      l = back(arr, temp, l, r)
      r = prev(arr, temp, r, l)
    }
    arr[r] = temp
    quick(arr, left, l, left)
    quick(arr, l+1, right, l+1)
  }
  return arr
}
  
  /**
   *  back 从后往前  
   */
  
  function back(arr, temp, pos, prev){
    let j = pos
    for(j; j>prev; j--) {
      if(arr[j] < temp) {
        arr[prev] = arr[j]
        break
      }
    }
    return j
  }
  
  function prev(arr, temp, pos, back){
    let j=pos
    for(j; j<back; j++) {
      if (arr[j] > temp) {
        arr[back] = arr[j]
        break
      }
    }
    return j
  }

  

function quickSort(arr, low=0, high=arr.length){
  //判断当前序列中是否有元素
  if (low < high){
      //将序列的两端都戳上指针
      let left = low;
      let right = high-1;
      //将序列的第一个元素作为基准值
      //通过循环实现在某个位置，该位置的左面（包括该位置）都小于基准值，改位置的右面都大于基准值
      while (left < right){
          //通过循环找到序列左面第一个比基准值大的位置
          for (; left < high&&arr[left] <= arr[low];left++);
          //通过循环找到序列的右面第一个比基准值小的元素
          for (; right > low&&arr[right]>arr[low];right--);
          if (left < right){
              //说明在当前序列中left和right都找到了符合条件的位置
              //交换data[left]和data[right]的值实现在left的左面元素值都比基准值小，right的右面都比基准值大
              let temp = arr[left];
              arr[left]=arr[right];
              arr[right] = temp;
          }
      }
      //通过交换data[low]和datap[right]的值实现在基准值的左面元素都比基准值小，基准值的右面元素都比基准值大
      let temp = arr[low];
      arr[low] = arr[right];
      arr[right] = temp;

      //左递归调用
      quickSort(arr, low, right);
      //右递归调用
      quickSort(arr, right + 1, high);
  }
  return arr
}

const move = (arr, pos, key) => {
  let j =  pos
  if (pos > key) {
    for(j; j>key; j--) {
      if(arr[j] < arr[key]) {
        let temp = arr[key]
        arr[key] = arr[j]
        arr[j] = temp
        break
      }
    } 
  } else {
    for(j; j<key; j++) {
      if (arr[j] > arr[key]) {
        let temp = arr[key]
        arr[key] = arr[j]
        arr[j] = temp
        break
      }
    }
  }
  return j
}

function quick2(arr, start=0, end=arr.length-1) {
  let left = start
  let right = end
  if (right > left) {
    while (start != end) {
      end = move(arr, end, start)
      start = move(arr, start, end)
    }
    quick2(arr, left, end-1)
    quick2(arr, start+1, right)
  }
  return arr
}

console.time('quick2 sort time')
console.log(quick2(bigArr))
console.timeEnd('quick2 sort time')