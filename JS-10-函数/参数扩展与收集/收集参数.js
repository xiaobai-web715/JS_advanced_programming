function getSum (...arg){
    console.log(arguments) //=>箭头函数的arguments不是普通函数那样的是传入参数的集合，我感觉可能是和this指向有关
    console.log(arg)
    let sum = 0;
    for(let i = 0 ; i < arg.length ; i++){
        sum += arg[i]
    }
    return sum
}
console.log(getSum(1,2,3))

function test(...arg , a){
    console.log(arg)
}
test(1,2,3)