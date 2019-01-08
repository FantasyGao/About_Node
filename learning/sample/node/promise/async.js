// let x = 2
// async function async1(){
//   console.log('async1 start')
//   x = await async2()
//   console.log('x---', x)
//   console.log('async1 end')
// }
// async function async2(){
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function(){
//   console.log('setTimeout')
// },0)  
// async1();
// new Promise(function(resolve){
//   console.log('x', x)
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// })
// console.log('script end')


// function async1(){
//   return new Promise(resolve=>{
//     console.log('async1 start')
//     resolve(1)
//     return new Promise(res2=>{
//       console.log('-->2')
//       console.log('async2')
//       res2(2)
//     }).then(s=>{
//       console.log('-->3', s)
//       console.log('async1 end')
//     })
//   })
// }

// console.log('script start')
// // (async function(){
// //   let a = await async1();
// //   console.log('-->1', a)
// // })()
// new Promise((res)=>{
//   async1().then(a=>{
//     console.log('-->1', a)
//   })
// })
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// })
// console.log('script end')


// console.log('start')
// async function async1() {
//   console.log('enter async1')
//   await sync2()
//   console.log('finish async1')
// }
// function sync2(){
//   console.log('enter sync2')
// }
// async1()
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve(1);
// }).then(x=>{
//   console.log('Promise then', x)
// })
// console.log('end')


// async function async1(){
//   await 1
//   console.log('async1 end')
// }

// async1();
// new Promise(function(resolve){
//   resolve();
// }).then(function(){
//   console.log('promise2')
// })

function async1(){
  Promise.resolve().then(x=>{
    console.log('async1 end')
  })
}
async1()
new Promise(function(resolve){
  resolve();
}).then(function(){
  console.log('promise2')
})