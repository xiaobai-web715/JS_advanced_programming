//Object.freeze()方法冻结const定义的对象属性也不可以更改
const obj = {
    'a' : 1,
    'b' : {
        'c' : 2,
        'd' : {
            'e' : 3,
            'f' : 4
        }
    }
}
// obj.a = 100
// console.log(obj)

// Object.freeze(obj)
// obj.a = 100
// obj.b.c = 100
// console.log(obj)

//下面是一个递归函数来实现完全冻结该对象
const test = obj => {
    let arr = Object.keys(obj);
    for(let key of arr){
        if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
            test(obj[key])
        }
    }
    Object.freeze(obj)
    return obj
}
test(obj)  //可以看出当上面的递归之后，内部是对象的属性也都会被冻结
obj.a = 100
obj.b.c = 100
obj.b.d.e = 100
console.log(obj)