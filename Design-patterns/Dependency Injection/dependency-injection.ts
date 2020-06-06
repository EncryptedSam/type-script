/**
 * In Short:
 * Dependency injection is a technique in which an object(Bike) receives other objects(Engine,Tyres..etc) 
 * that it depends on. These other objects are called dependencies.
 */
interface Engine{
    model:string;
    mmp:number;
}

class TwoStroke implements Engine{
    model:string = "s2e"
    mmp:number = 3;
}
class FourStroke implements Engine{
    model:string = "s4e"
    mmp:number = 9;

}

// Short hand for di
// class Bike{
//     constructor(public engine:Engine){}
// }

class Bike{
    public engine:Engine
    constructor(engine:Engine){
        this.engine = engine;
    }
}


var yamaha_rx_z = new Bike(new TwoStroke());
console.log(yamaha_rx_z.engine.mmp)

var yamaha_ybx = new Bike(new FourStroke());
console.log(yamaha_ybx.engine.mmp)


/**
 * DI as a design pattern:
 * DI is a coding pattern in which a class receives its dependencies 
 * from external sources rather than creating them itself
 */

class Bikee{
    public engine:Engine;
    constructor(){
        this.engine = new TwoStroke();
    }
}






























/**
 * How For loop works
 */

// let employee = [
//     {"id":1,"name":"Andrew","age":30},
//     {"id":2,"name":"Brandon","age":25},
//     {"id":3,"name":"Christina","age":26},
//     {"id":4,"name":"Elena","age":28}
//   ]

// for(let emp of employee){
//     console.log(emp.id, emp.age, emp.name);
// }