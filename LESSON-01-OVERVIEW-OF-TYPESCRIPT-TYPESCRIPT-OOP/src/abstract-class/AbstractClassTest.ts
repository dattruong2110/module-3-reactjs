abstract class Animal {
  abstract speak(): string;
}

class Cat extends Animal {
  speak(): string {
    return "Meo meo";
  }
}
// Cat is-a Animal

class Duck extends Animal {
  speak(): string {
    return "Quạc quạc";
  }
}
// Duck is-a Animal

let tom: Cat = new Cat();
console.log(tom.speak());

let donan: Duck = new Duck();
console.log(donan.speak());
