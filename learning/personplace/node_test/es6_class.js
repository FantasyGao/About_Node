let A = class {
    constructor(a, b) {
        console.log('--->constructor')
        this.a = a
        this.b = b
    }
    get x() {
        console.log('--->x')
        return this.way()
    } 
    xe() {
        console.log('--->xe')
        return this.a * this.b
    }
    way () {
        console.log('--->way')
        return this.a * this.b
    }
    static sway() {
        console.log('--->sway')
        return this.a * this.b
    }
}

class B extends A {
   way() {
       console.log('---.》b.way')
       return this.a+this.b
   } 
}

let o = new A(3, 4)
let j = new B(5,6)

// console.log(o)
// console.log(A)
// console.log(o.way())
// console.log(A.sway())
// console.log(j.way())
// console.log(j.x())

// class MyArray extends Array {
//     // Overwrite species to the parent Array constructor
//     //static get [Symbol.species]() { return Array; }
// }
// var a = new MyArray(1, 2, 3);
// var mapped = a.map(x => x * x);

// console.log(mapped);
// // false
// console.log(mapped instanceof Array);   

// var a = { b: { c: 1 } };
// console.log(a);
// a.b.c = 2;

setImmediate(() => console.log(2));
setTimeout(() => console.log(1),1);
// process.nextTick(() => console.log(3));
// Promise.resolve().then(() => console.log(4));
// (() => console.log(5))();