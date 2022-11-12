var mynum2 = 2;
console.log(mynum2);
var mynum3 = 3;
console.log(mynum3);
var mystring = 'Hello';
console.log(mystring);
var mystring2 = new String('hello');
console.log(mystring2);
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.cameras = 3;
        this.screensize = 6;
        this.fingerprint = "fingerprint is there";
        this.speakers = true;
    }
    return Mobile;
}());
var mymobile = new Mobile();
console.log(mymobile);
