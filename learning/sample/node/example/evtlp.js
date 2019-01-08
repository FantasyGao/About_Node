
setTimeout(() => {          // callback1
  setTimeout(() => {        // callback2
    console.log(222);
  }, 0);
  setImmediate(() => {        // callback5
    console.log(555);
  })  
}, 0);

setTimeout(() => {          // callback7              
  console.log(777);
}, 1);
