let p = Promise.resolve('hello' , console.log('1'))
//虽然这里写成了Promise.resolve但是等价于new Promise(resolve => resolve('hello')),所以这里是一个主线程任务
p.then(
    res => {
        console.log(res) //微任务里面的
    }
)
console.log('2')//主线程任务