export {};

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('wood',32)
console.log(me);

