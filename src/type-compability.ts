export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// undefined
console.log(typeof fooCompatible);

// このように代入できる時any型はstring型と互換性があるということになる。
fooCompatible = barCompatible;

// string型に遷移している。
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// 型の互換性がない為エラーとなる。
// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1991 = 1991;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(30, 'wood');
