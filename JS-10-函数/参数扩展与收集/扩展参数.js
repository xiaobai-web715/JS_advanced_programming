// arguments这个类数组又来保存你所传入的参数(按传入顺序来保存)
let values = [1,2,3,4,5]
function getSum(){
    let sum = 0;
    console.log(arguments)
    for(let i = 0 ; i < arguments.length ; i++){
        sum = sum + arguments[i]
    }
    return sum;
}
// console.log(getSum(values)) =>这样来写数组会被当成一个整体保存在arguments里,[Arguments] { '0': [ 1, 2, 3, 4, 5 ] }
// console.log(getSum.apply(null , values)) //=>ES5的写法来实现，apply方法传入一个数组，这个数组里面的值就是要传入的每一个参数,[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
console.log(getSum(...values)) //=>ES6的写法来实现，[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

function test(a){
    console.log(arguments)
    return a
}
test(1)