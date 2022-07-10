// const test = () => {
//     let that = this;
//     var name = 'liutao';
//     this.bigName = 'liuxinghua';
//     this.age = 22
//     //打印可以看出这里的this包含的就是上面bigName和age这两个属性
//     console.log(this) //目前可能你还不是特别清楚这里的这个this就是全局的this,name就看看12行的打印结果吧
//     //箭头函数中的this可以理解为call这种意思,将this强制绑定成当前执行上下文当中的this
//     setTimeout(() => {console.log(this.age)} , 1000) //我的理解就是箭头函数本身没有this的这个说法,所获得的这个this是隐式调用的当前执行环境当中的this的指向,而当前test函数当中this就是指向全局
//     setTimeout(function(){console.log(this.age)} , 2000) 
//     //这里用vsCode的控制台打印的是undefined,用谷歌的控制台打印的就是22,也就是this指向了全局,感觉可能是在严格模式下的原因
//     setTimeout(function(){console.log(that.age)} , 2000) 
// }
// test()
// console.log(this)//从这行的打印结果可以看出,6行的this就是全局下的this


// //对于函数来说用this声明变量和用this获得值是不同的
// let obj = {
//     name : 'liutao',
//     targetName(){
//         //这里函数内部的this是指向obj的,因为被obj对象所调用
//         this.targetname = 'liuxinghua'
//         console.log(this.targetname)
//     }
// }
// obj.targetName()
// //从下面这行的打印可以看出obj对象当中多了一个targetname的属性
// console.log(obj)



var test={ 
    a:"test", 
    msg:function(){
        //这里没有加变量声明,所以这下面这个a应该是声明在全局的变量对象当中了
        a="1234"; 
        console.log(this.a); 
        var msg1= function(){ 
            console.log(this) //这里由这个输出就可以看出a = '1234'是被定义在全局当中了
            console.log(this.a); 
        } 
        //普通的函数调用指向全局window
        msg1(); 
    } 
}
test.msg()