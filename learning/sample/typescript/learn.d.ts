declare function alertName(): void;
declare let a: void;
declare let b: void;
declare let c: any;
declare let d: number | string;
interface My {
    readonly id: number;
    [p: string]: number;
}
declare let My: My;
declare let arr: any[];
declare let arr2: Array<number>;
interface ArrObj {
    [idx: number]: number;
}
declare let arr3: ArrObj;
declare let arrobj: ArrObj;
declare function funA(): void;
interface FuncA {
    (name: string, age?: number): boolean;
}
declare let func: FuncA;
declare function getLength(content: string | number): boolean;
declare type stype = string;
declare type stype2 = () => null;
declare type stype3 = stype | stype2;
declare function funcB(name: stype2, bike: stype2): stype;
declare type classs = 'a' | 'b' | 'c';
declare function funcC(name: classs): classs;
declare let myarr: [number, string];
interface EEE {
}
declare function funcE<gtr>(name: gtr, xin: gtr): gtr;
declare function identity<T>(arg: T): T;
interface Iner {
    length: string;
    getAge(): void;
}
declare let two2: <T>(a: T[]) => T;
