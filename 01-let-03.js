//var 存在变量提升
//let 不存在变量提升
console.log(x);
var x = 'apple';
console.log(y);  //ReferenceError: Cannot access 'y' before initialization
let y = 'banana';