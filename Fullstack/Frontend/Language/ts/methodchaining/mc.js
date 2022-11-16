var Remote = /** @class */ (function () {
    function Remote() {
        this.color = 'red';
        this.buttons = 'on off button';
        this.battery = '2cells';
    }
    Remote.prototype.remotecolor = function () {
        console.log(this.color);
        return 'blue';
    };
    Remote.prototype.remotebuttons = function () {
        console.log(this.buttons);
        return this;
    };
    Remote.prototype.remotebattery = function () {
        console.log(this.battery);
        return this;
    };
    return Remote;
}());
var myprojecterremote = new Remote();
console.log(myprojecterremote);
myprojecterremote.remotebattery().remotebuttons().remotecolor();
