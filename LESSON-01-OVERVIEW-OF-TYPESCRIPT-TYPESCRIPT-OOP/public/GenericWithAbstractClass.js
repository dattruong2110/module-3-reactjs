var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal02 = /** @class */ (function () {
    function Animal02() {
    }
    return Animal02;
}());
var Cat02 = /** @class */ (function (_super) {
    __extends(Cat02, _super);
    function Cat02(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cat02.prototype.speak = function (name) {
        return "Hello" + name;
    };
    return Cat02;
}(Animal02));
var meo02 = new Cat02("meoMun");
console.log(meo02);
