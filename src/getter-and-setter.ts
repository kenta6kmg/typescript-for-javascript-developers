export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で返納できない
//  * 参照できる
// *secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `${this._secretNumber}`;
  }
}

let card = new MyNumberCard('wood', 1234567890);
// card.owner = 'kenta';
card.secretNumber = 87654321;
console.log(card.debugPrint());
console.log(card.secretNumber);
// card._secretNumber
