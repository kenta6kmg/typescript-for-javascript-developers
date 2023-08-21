export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// How to write index signatures
// { [ index: typeForIndex ]:typeForValue }
let profile: Profile = { name: 'snow', underTwenty: false };

profile.name = 'Wood';
profile.age = 30;
profile.nationality = 'Japan';

// console.log(profile);
