async function foo(){
    //如果不加await返回的是Promise { 'foo' }
    console.log(await Promise.resolve('foo'))//foo
    //没有显示的返回,所以返回的是undefined并通过Promise.resolve()进行包装
}
foo().then((e)=>{console.log('我执行啦' , e)})//我执行啦 undefined

async function test(){
    //显示的通过return返回了
    return await Promise.resolve('foo')
}
test().then((e)=>{console.log('我也执行了' , e)})//我也执行了 foo

async function app(){
    //只要在async关键字标注的函数里面出现throw关键字,无论是不是await标注,都会返回一个失败的期约
    // throw 'foo'
    await (() => {throw 'foo'})()
    //throw关键字抛出错误之后后面的程序不会继续执行
    console.log('123')
}
console.log(app())//Promise { <rejected> 'foo' }第一行就会打印,因为前面两个函数里面的await会使得先跳出当前函数的执行,执行下面的同步操作