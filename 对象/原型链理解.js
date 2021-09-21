function SuperType(){
    this.property = true;
}
//给SuperType构造函数的原型添加一个getSuperValue方法
SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subproperty = false;
}
//给SubType构造函数的原型添加一个getSubValue方法
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}

//重写SubType的原型,变为SuperType对象的实例(这样的话就将SubType的原型与SuperType的原型串联起来的)
SubType.prototype = new SuperType()
//这样构造函数作为SuperType的实例,里面有一个__proto__指向SuperType.prototype(你也可以这样理解SubType.prototype.__proto__ === SuperType.prototype)
let target = new SubType();
//这样不就通过原型链拿到了你想用的getSuperValue函数了
//不过真实的路径是这样的(target.__proto__ <==> SubType.prototype ; SubType.prototype.__proto__ <==> SuperType.prototype)
console.log(target.getSuperValue())