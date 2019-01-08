const Timer = process.binding('timer_wrap').Timer

const timer = new Timer()

// timer.setTimeout(() => {
//     console.log("timer")
// }, 10);
timer.start(function(){console.log(1)}, 1000)
console.log(timer.start)
