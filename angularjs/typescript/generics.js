var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.addData = function (data) {
        this.data = data;
    };
    Box.prototype.getData = function () {
        return this.data;
    };
    return Box;
}());
var box = new Box();
box.addData("John");
console.log(box.getData());
var box2 = new Box();
box2.addData(21);
console.log(box2.getData());
var names = new Array();
names.push("John");
names.push("Tom");
names.forEach(function (name) {
    console.log(name);
});
