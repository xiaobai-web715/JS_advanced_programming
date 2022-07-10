async function foo(){
    //异步函数当中没有await关键字
    let p = new Promise((resolve , reject) => setTimeout(resolve , 1000 , 3))
    console.log(p) //Promise { <pending> }
}
foo()


//并且当执行async定义的函数的时候,碰到await关键字会先执行异步函数后面的代码,也就是16行比13行执行的早,打印的结果 4 3
async function test(){
    //异步函数当中有await关键字
    let p = await new Promise((resolve , reject) => {setTimeout(resolve , 1000 , 3)})
    console.log(p) //3 await后面的执行语句会等到该行语句执行完成之后才会继续执行
}
test()
console.log(4)

