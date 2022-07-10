//一种方式是扩展Promise类,为它添加notify()方法
class TrackablePromise extends Promise {
    //constructor代表着构造函数
    constructor(executor){
        const notifyHandlers = [];
        super((resolve , reject) => {
            return executor(resolve , reject , (status) => {
                //这里的这个notifyHandlers引用的就是const声明的那个变量,但this.notifyHandlers = notifyHandlers,这意味着修改任何一个都会影响另一个的值
                // console.log('这里的这个notifyHandlers' , notifyHandlers)
                notifyHandlers.map((handler) => handler(status));
            })
        })
        //这里将实例化本身的notifyHandlers成员指向这里声明的notifyHandlers,这两个的任何一个成员改变都会影响另一个
        this.notifyHandlers = notifyHandlers
    }
    notify(notifyHandler){
        //这里面的this被谁调用就指向谁,这里指向了类自身,也就是实例化之后的自有属性,所以这里也就直接导致了5行定义的notifyHandlers变量发生同样的变化
        this.notifyHandlers.push(notifyHandler);
        //谁调用这个方法,这个方法里面的this就指向谁
        // console.log('notify函数' , this)
        return this;
    }
}
//这样就可以在执行函数中使用notify()函数了
let p = new TrackablePromise((resolve , reject , notify2) => {
    function countdown(x){
        if(x > 0){
            // console.log('notify2' , notify2)
            setTimeout(() => {notify2(`${20 * x}% remaining`);} , 0)
            // notify2(`${20 * x}% remaining`); //这里这样打印不会出现100%,是因为第一次执行这个countdown函数的时候p.notify()方法还没有被调用,5行定义的notifyHandlers仍然是空10行的操作也就不会发生,下面的setTimeout是宏任务,再执行的时候p.notify()已经调用了,所以能够打印出80%以下的
            setTimeout(() => countdown(x - 1) , 1000)
        }else{
            resolve()
        }
    }
    countdown(5)
})
p.notify((x) => setTimeout(() => {console.log(`a:${x}`)}))
.notify((x) => setTimeout(() => {console.log(`b:${x}`)}))
.notify((x) => setTimeout(() => {console.log(`c:${x}`)}))
p.then(() => setTimeout(() => {console.log('completed')}))
console.log('p' , p)//TrackablePromise [Promise] {<pending>,notifyHandlers: [ [Function (anonymous)] ]}
