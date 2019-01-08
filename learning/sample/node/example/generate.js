// function* fibonacci() {
//   let [prev, curr] = [0, 1]
//   for (; ;) {
//     [prev, curr] = [curr, prev + curr]
//     // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
//     yield curr
//   }
// }
// console.log(fibonacci())

// for (let n of fibonacci()) {
//   if (n > 1000) {
//     break
//   }
//   console.log(n)
// }

function* test(params) {
  yield 12

}

console.log(test.constructor)
let a = test()
console.log(a.constructor)
console.log(Object.prototype.toLocaleString.call(a))

console.log(a.next())
// console.log(a.throw())
console.log(test().throw)