export {};

class Mahotsukai {}
class Souryo {}

//TypeScriptでは一つのクラスしか継承できない(単一継承)
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

// 複数のインターフェイスを継承するようなことはできる。
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
