export { };

type Mojiretu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretu = 'Hello';

const example1 = {
  name: 'Wood',
  age: 22
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Wood',
  age: 22
};

type Prpfile2 = typeof example1;