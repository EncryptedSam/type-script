var TwoStroke = /** @class */ (function () {
    function TwoStroke() {
        this.model = "s2e";
        this.mmp = 3;
    }
    return TwoStroke;
}());
var FourStroke = /** @class */ (function () {
    function FourStroke() {
        this.model = "s4e";
        this.mmp = 9;
    }
    return FourStroke;
}());
// Short hand for di
// class Bike{
//     constructor(public engine:Engine){}
// }
var Bike = /** @class */ (function () {
    function Bike(engine) {
        this.engine = engine;
    }
    return Bike;
}());
var Bikee = /** @class */ (function () {
    function Bikee() {
        this.engine = new TwoStroke();
    }
    return Bikee;
}());
var employee = [
    { "id": 1, "name": "Andrew", "age": 30 },
    { "id": 2, "name": "Brandon", "age": 25 },
    { "id": 3, "name": "Christina", "age": 26 },
    { "id": 4, "name": "Elena", "age": 28 }
];
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var emp = employee_1[_i];
    console.log(emp.id, emp.age, emp.name);
}
// var yamaha_rx_z = new Bike(new TwoStroke());
// console.log(yamaha_rx_z.engine.mmp)
// var yamaha_ybx = new Bike(new FourStroke());
// console.log(yamaha_ybx.engine.mmp)
/**
 * DI as a design pattern:
 * DI is a coding pattern in which a class receives its dependencies
 * from external sources rather than creating them itself
 */
// class Bikee{
//     public engine:Engine;
//     constructor(){
//         this.engine = new TwoStroke();
//     }
// }
