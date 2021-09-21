// let values = [1,2,3,4,5]
// //归并函数中的index和arr这俩参数可有可无，归并主要用的是a(归并初始值/上一个归并值) 和 b(当前值)
// let sum1 = values.reduce((a , b , index , arr)=>{
//     console.log(index , b , arr)
//     return a + b
// })
// //没有给这个reduce方法传入第二个参数，则数组的第一项作为归并的初始值，数组的第二项及以后的值作为归并函数的第二个参数
// console.log(sum1)

let value = [1,2,3,4,5]
//归并函数中的index和arr这俩参数可有可无，归并主要用的是a(归并初始值/上一个归并值) 和 b(当前值)
let sum2 = value.reduce((a , b , index , arr)=>{
    console.log(index , b , arr)
    return a + b
} , 1000)
//给reduce方法传入第二个参数,则归并函数的第一个参数的值将是这reduce方法的第二个参数的值，数组的每一项都将作为归并函数的第二个参数
console.log(sum2)