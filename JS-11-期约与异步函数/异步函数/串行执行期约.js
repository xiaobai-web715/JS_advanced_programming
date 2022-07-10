function addTwo(x){return x + 2};
function addThree(x){return x + 3};
function addFive(x){return x + 5};

async function addTen(x){
    for(let target of [addTwo , addThree , addFive]){
        x = target(x)
    }
    //async定义的函数的特点是return返回的值会通过Promise.resolve()进行包装返回一个期约,可以通过then或catch串行执行
    return x
}
addTen(9).then((e) => {console.log(e)})