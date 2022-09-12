//拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。[假拷贝]
let person1 = {name: "kk", age:18};
let person2 = {...person1};
person2.name = "bb";
console.log(person1);
console.log(person2);