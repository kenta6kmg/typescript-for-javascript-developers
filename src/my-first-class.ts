export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile():string {
    return `${this.name}さん${this.age}歳`;
  }
}
let taro = new Person('太郎', 30);
// console.log(taro.profile());

// let hanako = new Person();
