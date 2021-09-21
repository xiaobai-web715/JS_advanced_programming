//函数节流面向的使用到定时器的任务，只让他触发一次定时器任务
function test(callBack , deplay){
    console.log(callBack)
    let timer;
    return function () {
        if(timer){
            return//这里想较于函数防抖就不是清除定时任务了，而是直接给你return不再执行下面的代码,也就是我有定时函数在执行,你就别想着再次触发就对了
        }
        timer = setInterval(()=>{
            callBack(2);
            timer =null;//还有这里添加了一个null,就是当定时任务的第一次执行完成之后好让它继续执行第二遍
        } , deplay)
    }
}

test(function (n){console.log(n)} , 1000)()