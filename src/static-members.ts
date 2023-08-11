export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'wood';
  static lastName: string = 'sticks';

  static work() {
    return `hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let't dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
