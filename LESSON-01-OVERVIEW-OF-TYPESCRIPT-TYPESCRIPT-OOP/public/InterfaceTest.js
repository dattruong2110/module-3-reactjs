var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        return "Vỗ cánh bay";
    };
    return Bird;
}());
// Bird has-a Flyable
var AirPlane = /** @class */ (function () {
    function AirPlane() {
    }
    AirPlane.prototype.fly = function () {
        return "Khởi động động cơ để bay";
    };
    return AirPlane;
}());
// AirPlane has-a Flyable
var sparrow = new Bird();
console.log(sparrow.fly());
var vietJet = new AirPlane();
console.log(vietJet.fly());
