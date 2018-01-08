var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    // ? means optional parameter
    // default values will be undefined here..because its a javascript after compilation
    function Employee(eid, name, status) {
        this.eid = eid;
        this.name = name;
        this.status = status;
    }
    Employee.prototype.getEid = function () {
        return this.eid;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getStatus = function () {
        return this.status;
    };
    return Employee;
}());
// only single inheritance possible in TS
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(eid, name, status, teamcount) {
        var _this = _super.call(this, eid, name, status) || this;
        _this.teamCount = teamcount;
        return _this;
    }
    Manager.prototype.getTeamCount = function () {
        return this.teamCount;
    };
    return Manager;
}(Employee));
var employee = new Employee(101, "John", true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());
var manager = new Manager(102, "Smith", true, 10);
console.log(manager.getEid());
console.log(manager.getName());
console.log(manager.getStatus());
console.log(manager.getTeamCount());


// is static instance possible here?
// or if we can make constructor as private?