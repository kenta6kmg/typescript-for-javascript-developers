export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Wood', 31);

// debugProfile関数の方を求めてParametersというユーティリティー型の型引数に設定することで型が得られる。
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Wood', 31];

debugProfile(...profile);
