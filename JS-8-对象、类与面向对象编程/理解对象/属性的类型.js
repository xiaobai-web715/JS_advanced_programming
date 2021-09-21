//访问器属性
let book = {
    year : 1999,
    edition : 0
};
//设置属性lxh为访问器属性，且有一个get()和一个set()，会在lxh这个属性被读取以及写入的时候调用。
Object.defineProperty(book , 'lxh' , {
    get(){
        this.nowYear = 2008;
        return 2021;
    },
    set(newValue){
        if(newValue > this.year){
            this.age = 98
            this.year = newValue;
            this.edition += newValue - 1999;
        }
    }
})
//21行访问这个访问器属性会调用get()函数
console.log('book.lxh',book.lxh)
console.log('book.nowYear',book.nowYear)
//24行对这个访问器属性写入一个值，也就是newValue = 2022
book.lxh = 2022;
console.log('book.age',book.age)
console.log('book.edition',book.edition)