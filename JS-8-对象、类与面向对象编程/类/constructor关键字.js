//constructor关键字用于在类定义块内部创建类的构造函数,方法名constructor会告诉解释器在使用new操作符创建新实例时,应该调用这个函数
class Person {
    //constructor可以接收的实参就是new时,写的参数;像这样let p = new Person(3) =>这里的3就会传给constructor
    constructor(value){
        //这里的constructor函数里面使用this,是为了将this指向类;因为是在类里面调用的函数,所以constructor函数当中的this指向Person类
        console.log(this , value)
        this.num = value
    }
}
let p = new Person(3)
console.log(p)