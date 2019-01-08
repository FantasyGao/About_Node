// let timer = setInterval(()=>{
//   console.log(new Date, 'setTimeout timer')
// }, 1000)
// timer.unref()
// let timer2 = setInterval(()=>{
//   console.log(new Date, 'setInterval timer')
// }, 1000)
// timer2.unref()

// let timer = setTimeout(()=>{
//   console.log(new Date, 'setTimeout timer')
// }, 1000)
// let timer2 = setInterval(()=>{
//   console.log(new Date, 'setInterval timer')
// }, 1000)
// timer2.unref()

// 2018-01-30T06:53:13.831Z 'setTimeout timer'
// 2018-01-30T06:53:13.836Z 'setInterval timer'


// let timer = setInterval(()=>{
//   console.log(new Date, 'setTimeout timer')
// }, 1000)
// var a = 5

// timer2.unref()
// let timer2 = setInterval(()=>{
//   console.log(new Date, 'setInterval timer')
// }, 1000)
// timer2.unref()
// debugger

const Timer = process.binding('timer_wrap').Timer;
console.log(Timer.toString())
const kOnTimeout = Timer.kOnTimeout | 0;

var mySetTimeout = function (fn, ms) {
  var timer = new Timer();
  timer.start(ms, 0);
  console.log(kOnTimeout)
  timer[kOnTimeout] = fn;
  return timer;
}

var myClearTimeout = function (timer) {
  if (timer && timer.close) {
    timer.close();
  }
}

mySetTimeout(function () {
  console.log('timeout!');
}, 1000);

// setImmediate(() => console.log('setImmediate'))
// setTimeout(() => console.log('timers API'), 0)//uv_run开始运行后才执行timers相关api，最后执行
// console.log('bootstrap')//在node LoadEnvironment(bootstrap)阶段执行，最先执行
// new Promise((resolve, reject) => { console.log('resolve task');resolve('microtask run')}).then(arg => console.log(arg))//注册到microtask_queue中
// process.nextTick(() => console.log('run next tick'))// 会在microtask之前运行
// setImmediate(() => console.log('setImmediate1'))
// ;(function name(params) {
//   console.log('func task')
// })(1)