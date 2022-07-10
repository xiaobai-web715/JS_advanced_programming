const test1 = (value) => {
    return value + 10
}
const test2 = value => {
    return value + 100
}

const test3 = value => {
    return value + 1000
}

const api = (...fns) => {
    //这里当然是返回一个箭头函数,因为我们要通过返回的函数接收一个初始值x
    return x => fns.reduce((promise , fn) => {
        return promise.then(fn) //这里的return要加,我们是想将promise.then(fn)传递给下一个处理函数,所以要将它当做返回值,箭头函数加了花括号就要添加return关键字
    } , Promise.resolve(x))
}
let target = api(test1 , test2 , test3)
target(1).then(value => {console.log(value)})