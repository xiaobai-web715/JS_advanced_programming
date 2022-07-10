Promise.all([3,4]).then((value) => {console.log('all' , value)})
//all [ 3, 4 ] => 对于Promise.all来说,这一组期约实例都是成功的状态,n那么传给成功处理程序的参数值就是这一个期约实例返回值的数组
Promise.race([3,4]).then((value) => {console.log('race' , value)})
//race 3  =>可见Promise.race()方法不会区分成功还是失败状态,会将第一个变成落定状态期约的返回值作为参数传给相对应的成功/失败处理程序