//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
let timer;
function test(callback , delay){
    clearTimeout(timer);
    timer = setTimeout(function(){
        callback();
    } , delay)
}

//通过事件点击来触发test函数执行,然后通过延迟函数的销毁与产生来达到只执行一次的结果(就防止了在delay时间内可以多次点击的结果)