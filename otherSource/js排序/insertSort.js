const arr = [22, 14, 42, 6, 10, 87, 33, 69, 35, 10]

function quickSort(arr){
	var index
	for(var i=0;i<arr.length;i++){
		index = i
		console.log(arr[i+1])
		console.log(arr[index])
		if(arr[i+1] < arr[index]){
			var temp = arr[i+1]
			for(var j=index+1;j<i+1-index;j++){
				console.log(j)
				arr[j+1]=arr[j]
			}
			arr[index] = temp
			index++
		}
	}
	return arr
}
console.log(quickSort(arr))

















// 希尔排序
function shallSort(array) {
 var increment = array.length;
 var i
 var temp; //暂存
 var count = 0;
 do {
    //设置增量
   increment = Math.floor(increment / 3) + 1;
   for (i = increment ; i < array.length; i++) {
    console.log(increment);
     if (array[i] < array[i - increment]) {
       temp = array[i];
       for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
           array[j + increment] = array[j];
       }
       array[j + increment] = temp;
     }
   }
 }
 while (increment > 1)
 return array;
}





function InsertSort(arr){
  for(let i=1;i<arr.length;i++){
    let index = i   // 移动下标
    let moveItem = arr[index]
    let j = i - 1  //与前一个开始比较
    for(j;j>=0;j--){
      if(moveItem < arr[j]){
        arr[j+1] = arr[j]
        index = j
      } else {
        break
      }
    }
    arr[index] = moveItem
  }
  return arr
}
function maopao(arr){
  for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
  }
  return arr
}
function choose(arr){
  let list = []
  let len = arr.length
  for(let j=0;j<len;j++){
    let min = arr[0]
    let x=0
    for(let i=1;i<arr.length;i++){
      if(arr[i]<min){
        min = arr[i]
        x = i
      }
    }
    arr.splice(x,1)
    list.push(min)
  }
  return list
}
