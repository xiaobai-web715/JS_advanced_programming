class Person1{
    //constructor(){}类构造函数当中通过this定义的成员会成为实例本身的成员
    constructor(){
        this.name = 'liuxinghua'
    }
    sex = '男'
    //这样的函数表达式就会被当成实例对象本省当中的属性
    jiguan = function(){console.log('山东')}
    //类块当中定义的成员会成为prototype（原型对象）当中的成员，好像是只有这样写（感觉类似于函数声明的写法）的才会被当做原型对象当中的成员
    age(){console.log(22)}
}
let p1 = new Person1();
console.log('p1' , p1)//{sex: '男', name: 'liuxinghua', jiguan: ƒ}
console.log('Person1.prototype' , Person1.prototype)//这里在控制台上打印确实什么也没有,但是在谷歌的控制台上就可以看到原型对象当中所包含的成员{constructor: ƒ, age: ƒ}



class Preson {
    constructor(){
        this.location1 = () => console.log('instance')
    }
    //Preson {zhixiang: ƒ, location1: ƒ}可见,函数表达式写法的this指向Person,所以实例化之后就是实例成员本身自有的属性了,age = 11也是一个道理
    zhixiang = () => {console.log('类块当中函数表达式的写法的this到底指向谁' , this)}
    //{constructor: ƒ, location2: ƒ};函数声明的写法,this指向的就是类的原型对象(prototype对象)
    location2(){
        console.log('prototype' , this)
    }
}
let p3 = new Preson()
console.log(p3)//Preson {zhixiang: ƒ, location1: ƒ}
console.log(Preson.prototype)//{constructor: ƒ, location2: ƒ}