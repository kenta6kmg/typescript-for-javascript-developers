export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// 必要なメンバがnameとweightだけだった場合。
// 必要なものだけを取り出して方を作りたい。
// Pickを使用する。
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// 逆に除外したい。
// Omitを使用する。
type SmallProfile = Omit<DetailedProfile, 'height'>;
