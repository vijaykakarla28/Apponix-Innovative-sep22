var arry1 = 'apple';
var arry2 = 'ball';
var arry3 = 'cat';
var myarry = ['apple', 'ball', 'cat'];
console.log(arry1);
console.log(arry2);
//destructin
var apple = myarry[0], ball = myarry[1], cat = myarry[2];
console.log(cat);
var myobj = {};
var s = 3;
var pen = { color: 'red', cap: 'yes' };
var myproducts = ['car', 'bike', 'mobile'];
myproducts.map(function (myitem) { console.log(myitem); });
var obj1 = { a: 20, b: 'car', c: 'bike', d: 'mobile' };
var obj2 = { a: 20, c: 'bike', d: 'mobile' };
var obj3 = { a: 20, b: 'car', c: 'bike' };
var myarry1 = [obj1, obj2, obj3];
console.log(myarry1);
myarry1.find(function (myitem) { console.log(myitem); });