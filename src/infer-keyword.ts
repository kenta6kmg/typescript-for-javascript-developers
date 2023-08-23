export {};

// 関数の戻り値の型を返してくれる便利なutility型
function add(a: number, b: number) {
  return a + b;
}

type ReturnTypeFromAdd = ReturnType<typeof add>;
// 裏でこのような動き
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
