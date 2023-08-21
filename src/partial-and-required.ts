export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

// 全てのプロパティがオプショナルな型となる型を別途定義したくなった場合など
// Partialを使用する
type PartialType = Partial<Profile>;

// 逆に全ての方を必須なものにしたい。
// Requiredを使用する
type RequiredType = Required<Profile>;
