//这里你可能好奇为啥不使用箭头函数，你可以试一下，箭头函数的arguments与es5函数的arguments不太一样
function test(name = 'ls'){
    return 'hello ' + arguments[0]
    // arguments[0]只能记录传入的实现,不能够记录默认的赋值
}
console.log(test())
console.log(test('wu'))

const test1 = (name = 'ls' , numerals = name) =>{
    return 'hello ' + name + numerals;
}
console.log(test1())

function test3(name , numerals){
    // let name = 'wu'//=>这样用let再次声明的话，相当于冲突了let的规则。不过用var可以。
    name = 'ls' //但是这样来写就不会出错 =>但是这到底是重新赋值吗?
    console.log(name)
    return 'hello ' + name
}
console.log(test3('你好'))

//下面的这种写法会报错，因为给多个形参设置默认值就和let声明变量是一样标准规则，不能在变量声明之前就被调用
const test2 = (name = numerals , numerals = 'ls') =>{
    return 'hello ' + name + numerals;
}
console.log(test2())