function alertName():void {
  console.log('some alert')
}

let a:void
let b:void = a

let c 
c = 7
c = 'ss'

let d:number|string
d='ss'
d=2

interface My {
  readonly id: number;
  [p:string]: number;
}

let My:My = {
  id: 2
}

let arr: any[] = [1, 2, '3']
let arr2: Array<number> = [1, 2, 2]

interface ArrObj {
  [idx:number]: number
}

let arr3:ArrObj = [1, 3, 5,7, 6]
let arrobj: ArrObj = {
  0: 1
}

function funA() {
  let args: IArguments = arguments
}

interface FuncA {
  (name: string, age?: number): boolean
}

let func: FuncA = (name: string, age: number=100) => {
  console.log('age', age)
  return false
}
func('gao')

function getLength(content: string|number ): boolean {
  if ((<string>content).length) {
    return (<string>content).length === 1
  } else {
    return content.toString().length === 1
  }
}
console.log(getLength(1))

type stype = string;
type stype2 = () => null;
type stype3 = stype | stype2;

function funcB(name: stype2, bike: stype2): stype {
  if (typeof name === 'string') {
    return name
  } else {
    return name()
  }
}


type classs = 'a' | 'b' | 'c'

function funcC(name: classs): classs {
  return name
}

funcC('a')

let myarr: [number, string] = [12213, '1212']
myarr.push(2)

interface EEE{
  
}
function funcE<gtr>(name:gtr, xin:gtr): gtr {
  return name
}
console.log(funcE<number>(1, 2)) 

function identity<T>(arg: T): T {
  return arg;
}

// function funF<T>[](arg: T[]): T[]{
//   return arg.length
// }

// function loggingIdentity<T>[](arg: T[]): T[] {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }

interface Iner {
  length: string
  getAge(): void
}

// class Minte implements Iner {
//   getAge():void {
//     console.log('getAge runing...')
//   } 
// }

// let me = new Minte()

// function funcF<T extends Iner>(name: string):T{
//   console.log(name.length);
//   return name;
// }

// let two2 : <T>(a : T[]) => T = function (a) {
//   return a[0];
// }

function funcG<T>(name: T):T {
  return name
}
let funcH: <T>(name: T)=>T =function(name) {
  return name
}
interface InerA {
  <T>(name: T):T
}
let funcI:InerA = funcG
