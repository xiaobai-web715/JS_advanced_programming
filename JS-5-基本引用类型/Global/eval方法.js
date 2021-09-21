eval('(' + 'console.log(3)' + ')')
let a = eval('(' + '1 + 1' + ')')
console.log(a)
let str = '{ret: true, data:{count:1 , list:[{name:"张三",age:25}]}}'
let data = eval('(' + str + ')')
console.log('data:' , data , typeof data)


//eval中声明变量用var和let的区别
//用var 声明变量不会报错，但是用let声明变量会报错，不知道是不是let的暂时性的死区的特性的作用
eval('var test = "hello world"')
console.log(test)
eval('var test = () => {console.log("hello Web")}')
test()
eval('var test = function(){console.log("hello Web")}')
test()
eval('function test(){console.log("hello Web")}')
test()
