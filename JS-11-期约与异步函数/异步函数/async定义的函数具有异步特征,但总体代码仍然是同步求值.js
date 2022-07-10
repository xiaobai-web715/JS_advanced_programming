async function test () {
    console.log(1)
    //async定义的函数return显示的返回值会通过Promise.resolve()包装成一个期约
    return 3
}
console.log(test())//Promise { 3 }
test().then((e) => {console.log(e)})
console.log(2)