class Vehicle {
    constructor(){
        this.hasEngine = true;
        this.sayVehicleName =() => {
            console.log('吾虽浪迹天涯,但从未失其本心')
        }
        console.log('Vehicle' , this)
    }
    sayName(){
        console.log('时间不在于你拥有多少,而在于你如何去使用')
    }
}
class Bus extends Vehicle{
    // constructor(){
    //     super()  //这里相当于super.constructor()(调用的父类的)
    //     // console.log(this instanceof Vehicle);
    //     console.log('Bus' , this)
    // }
}
let B = new Bus()
// B.sayVehicleName()
B.sayName()