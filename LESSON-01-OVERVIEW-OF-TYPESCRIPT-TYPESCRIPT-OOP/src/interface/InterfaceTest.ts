interface Flyable {
  fly(): string;
}

class Bird implements Flyable {
  fly() {
    return "Vỗ cánh bay";
  }
}
// Bird has-a Flyable

class AirPlane implements Flyable {
  fly() {
    return "Khởi động động cơ để bay";
  }
}
// AirPlane has-a Flyable

let sparrow: Bird = new Bird();
console.log(sparrow.fly());

let vietJet: AirPlane = new AirPlane();
console.log(vietJet.fly());
