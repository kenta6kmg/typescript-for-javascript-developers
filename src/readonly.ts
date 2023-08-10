export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('wood');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ken';
