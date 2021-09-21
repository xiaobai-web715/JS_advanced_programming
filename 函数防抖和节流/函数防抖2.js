// 为了方便防抖函数的调用和传参问题，我们应该用闭包来解决这些问题
//相较于函数防抖1来看
function test(callBack , deplay){
    console.log(callBack)
    let timer;
    return function () {
        if(timer){
            clearTimeout(timer)
        }
        // setTimeout是延时函数
        timer = setTimeout(()=>{
            callBack(2)
        } , deplay)
    }
}

test(function (n){console.log(n)} , 2000)()