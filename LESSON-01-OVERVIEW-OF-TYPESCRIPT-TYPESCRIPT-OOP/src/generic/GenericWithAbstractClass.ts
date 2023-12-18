abstract class Animal02<T> {
  abstract speak(name: T): T;
}

class Cat02 extends Animal02<string> {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  speak(name: string): string {
    return "Hello" + name;
  }
}

let meo02 = new Cat02("meoMun");
console.log(meo02);
