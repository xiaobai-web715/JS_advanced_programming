//substring()方法用来截取指定索引范围内的字符片段，第一个参数代表索引开始的位置，第二个参数代表索引结束的位置。
let str = 'some text'
let s1 = str.substring(2 , 3)
// console.log(s1)
str.color = 'red'
console.log(str.color)

//可以把第3步想象成执行了如下3行
let  s2 = new String(str) //=>创建一个String类型的实例 =>也就是说明我new出来的其实就是一个实例化对象,也就是'i' === new String('i')返回false的原因
// console.log('i' === new String('i'))
let s3 = s2.substring(2 , 3) //=>调用实例上对应的方法
// s2 = null; //=>销毁实例
// console.log(s3)
s2.color = 'blue'
console.log(s2.color)