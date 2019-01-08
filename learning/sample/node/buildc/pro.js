let a = setTimeout(cb, 0) === setTimeout(cb, 1);
function cb (){}
console.log(a)