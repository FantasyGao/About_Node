  function spliceOne (list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k]
    }
    list.pop()
  }

 var arr = [1, 3, 5]  
 spliceOne(arr, 2)
 console.log(arr)
