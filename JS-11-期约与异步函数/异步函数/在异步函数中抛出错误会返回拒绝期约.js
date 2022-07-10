// let p = null;
// try{
//     p = new Promise((resolve , reject) => {
//         //异步抛出的错误没办法通过try/catch捕获到
//         throw 3 //可以直接抛出错误
//         // reject(new Error(3))//new Error()还是要reject()返回才有用
//     })
// }catch(e){
//     console.log('e' , e)
// }
// p.catch((value) => {console.log('value' , value)})


// try{
//     // throw('刘兴华') =》throw关键字抛出的错误
//     // new Error('刘兴华') =>这样也不算是错误
// }catch(target){
//     console.log('target' , target)
// }


let test = async() => {
    throw '刘涛'
}
console.log(test())//Promise { <rejected> '刘涛' } =>可以看出直接通过throw关键字扔出错误,async定义的函数会返回一个失败状态的期约
test().catch((value) => {console.log('value' , value)})


//不过拒绝期约的错误不会被异步函数捕获
let person = async function(){
    Promise.reject('刘兴华')
}
console.log(person())//Promise { undefined }
person().then(() => {console.log('虽然返回值是undefined但是我还是执行了')})