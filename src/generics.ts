export {};

// 型が異なるだけで処理は同じような関数を共通化したい。
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo1 = (arg: number): number => {
//   return arg;
// };

// ジェネリクス型
const echo1 = <T>(arg: T): T => {
  return arg;
};

// 関数実行時に型を指定する。
console.log(echo1<number>(100));
console.log(echo1<string>('hello!'));
console.log(echo1<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('generics!').echo());
console.log(new Mirror<boolean>(true).echo());
