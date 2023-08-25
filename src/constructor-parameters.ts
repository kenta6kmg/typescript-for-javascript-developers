export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let wood = new Person('wood', 31);
console.log(wood);

type PersonType = typeof Person;

// constructorの引数の型が得られる。
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Wood', 31];
const sticks = new Person(...profile)

console.log(sticks);
