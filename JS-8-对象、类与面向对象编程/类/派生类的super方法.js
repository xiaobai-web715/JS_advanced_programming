// class Father{
//     constructor(){
//         this.name = '刘兴华'
//         //new Father的时候this指向Father { age: 22, name: '刘兴华' }
//         //new Son的时候this指向Son { age: 22, name: '刘兴华' }
//         console.log('Father' , this)
//     }
//     age = 22
// }

// class Son extends Father{
//     constructor(){
//         //派生类的类构造函数constructor在调用super之前不能使用this
//         super()
//         this.sex = '男'
//         //new Son的时候this指向Son { age: 22, name: '刘兴华', sex: '男' }
//         console.log('Son' , this)
//     }
// }
// let father = new Father()
// let person = new Son()
// console.log(father)//Father { age: 22, name: '刘兴华' }
// console.log(person)//Son { age: 22, name: '刘兴华', sex: '男' }


//派生类静态方法中super方法调用父类中定义的静态方法
class Test1 {
    static sayName () {
        console.log('刘兴华' , this)
    }
    //无论是添加到原型对象还是添加到实例本身的方法,内部出现的变量只要在外层没有定义过,就必须带this
    sayAge(){
        console.log('刘涛' , this)
        this.name = 'liuxinghua' //这个name被谁调用就写入哪里
    }
    hello = () => {
        this.jiguan = '山东'
    }
    //类块当中变量赋值和函数表达式的形式,不加var、let、const的方式会默认添加this指向实例自身
    age = 22
}

// let test1 = new Test1()
// console.log(test1)//Test1 {}静态类不会写入实例自身成员的部分
// console.log(Test1.prototype)//{constructor: ƒ, sayAge: ƒ}静态类方法也不会写入原型对象当中
// Test1.sayName()//刘兴华 [class Test1]目前看来类块当中定义的静态方法只能通过类名进行调用

class Test2 extends Test1 {
    constructor(){
        super() //目前来看派生类构造函数当中只能这样来写
        // this.age += 1
    } 
    static youName(){
        super.sayName()//静态方法中super这样调用
        return 1;
    }
}

let test2 = new Test2()
console.log('test2的成员' , test2)//test2的成员 Test2 { age: 22 }
console.log('Test2.prototype' , Test2.prototype)//Test1 {constructor: ƒ} 和对象原型链一样,派生类的原型对象是父类,不过区别就是对于类来说父类添加到实例自身的方法是直接加在了派生类实例上
console.log(Test2.youName())//刘兴华 [class Test2 extends Test1]
test2.sayAge()
console.log(test2)//Test2 { age: 22, name: 'liuxinghua' } =>可以看出父类的类块当中定义的方法通过this添加的name属性添加到了test2实例本身
Test1.prototype.sayAge()
console.log('Test1.prototype' , Test1.prototype)//{ name: 'liuxinghua' } =>可以看出通过原型对象方式调用,this指向原型对象,将name属性添加到了Test1的原型对象当中
test2.hello()
console.log(test2)//Test2 {hello: [Function: hello],age: 22,name: 'liuxinghua',jiguan: '山东'}