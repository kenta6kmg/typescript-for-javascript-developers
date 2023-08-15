export {};

let name = 'Wood';

name = 'Stick';

let nickname = 'Snow' as const;
nickname = 'Snow';

// constアサーション
// as constを付けることで再代入不可にできる。
// readonlyに書き換えられる
const profile = {
  name: 'Wood',
  height: 165,
} as const;
// ↓
// const profile: {
//   readonly name: 'Wood';
//   readonly height: 165;
// };
// この状態になっている。

// エラーになる。
// profile.name = 'Stick';
// profile.height = 180;
