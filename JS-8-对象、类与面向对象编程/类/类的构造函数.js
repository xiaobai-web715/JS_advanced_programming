//类表达式赋值给变量后,可以通过name属性取得类表达式的名称字符串,但是不能在类表达式作用域的外部访问这个标识符
let Person = class PersonName {
    //像这样直接写在类块里面的方法,实例化之后可以通过.node()的形式直接调用
    identify(){
        console.log(Person.name , PersonName.name)
    }
}
//类的实例化
let p = new Person()
p.identify()
console.log(Person.name)
console.log(PersonName) //这一行会报错,不能在类表达式的外部访问这个标识符