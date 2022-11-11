var myNum = 123;
var male;
var Human = /** @class */ (function () {
    function Human() {
        this.male = true;
        this.eyes = 2;
        this.head = "head is there";
        this.nose = 1;
        this.female = false;
    }
    Human.prototype.witheyes = function () {
        return "we can see with eyes";
    };
    return Human;
}());
var vijay = new Human();
console.log(vijay);
var kalyan = new Human();
console.log(kalyan);
