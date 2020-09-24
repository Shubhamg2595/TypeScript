var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.printName = function () {
        console.log("name of employee", this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('tes1');
console.log('tes1', emp1.printName());
var empObj = {
    employeeName: 'test2',
    printName: emp1.printName
};
empObj.printName();
