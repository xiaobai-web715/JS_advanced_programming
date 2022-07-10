let p1 = Promise.resolve()
console.log(p1) //Promise { <pending> }
let p2 = p1.then(()=>{console.log('我调用了')})
console.log(p2) //这个是主线程任务的打印结果Promise { <pending> } ,这个结果是情理之中的，因为主线程执行的时候，还轮不到微任务去执行，所以现在p2的值就是期约等待状态的值
setTimeout(() => {console.log(p2)} , 1000) //这个是宏任务打印的结果Promise { undefined }，then方法中的成功处理程序执行完成返回一个通过Promise.resolve()包装的新的期约,因为then方法中的成功处理函数没有显示的返回值,所以是undefined
setTimeout(() => {console.log(p1 === p2)} , 1000)//这里的false是我不太明白的,你可以试着把第三行的成功处理程序去掉,这里打印的结果还是false =>我的理解是如果then方法最后是通过Promise.resolve()进行包装的,那不应该满足幂等原则吗,我前面的返回值是一个期约状态,那为啥会不相等呢



//下面是Promise.resolve()包装的幂等测试
let test1 = new Promise((reject) => {reject()})
console.log(test1 === Promise.resolve(test1) , test1) //可以看一下打印结果这里就是true Promise {<fulfilled>: undefined} 谷歌浏览器打印的结果