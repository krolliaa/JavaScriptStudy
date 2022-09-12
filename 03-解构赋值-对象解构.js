let user = {name: "kk", age: 18};
//传统对象解构
let name1 = user.name;
let age1 = user.age;
console.log(name1, age1);
//ES6对象解构 ---> 属性名要保持一致
let {name, age} = user;
console.log(name, age);