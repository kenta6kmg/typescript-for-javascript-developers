export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'wood',
  age: 30,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'kenta',
  age: 31,
};

// friend.age++;
