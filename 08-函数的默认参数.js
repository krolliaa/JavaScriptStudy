//函数在JavaScript中也是一种数据类型，JavaScript中没有方法的重载
function showInfo(name, age = 18) {
    console.log(name + "," + age);
};
// 只有在未传递参数，或者参数为 undefined 时，才会使用默认参数。null 值被认为是有效的值传递。
showInfo("kk", 20);
showInfo("kk");
showInfo("kk", undefined);
showInfo("kk", null);//