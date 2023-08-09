export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `${this.name}さん${this.age}歳 国籍は${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `${this.name}さん${this.age}歳 国籍は${this.nationality}`;
  }
}

let taro = new Person('太郎', 30, '日本');
console.log(taro.name);
// console.log(taro.nationality);
console.log(taro.profile());
// let hanako = new Person();
