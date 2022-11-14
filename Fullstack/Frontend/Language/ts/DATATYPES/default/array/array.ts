let arry1='apple'
let arry2='ball'
let arry3='cat'
let myarry=['apple','ball','cat']
console.log(arry1)
console.log(arry2)
//destructin


let [apple,ball,cat]=myarry
console.log(cat)
var myobj={}
var s=3
var pen={color:'red',cap:'yes'}

let myproducts=['car','bike','mobile']
myproducts.map((myitem)=>{console.log(myitem)})
var obj1={a:20,b:'car',c:'bike',d:'mobile'}
var obj2={a:20,c:'bike',d:'mobile'}
var obj3={a:20,b:'car',c:'bike'}
var myarry1=[obj1,obj2,obj3]
console.log(myarry1)
myarry1.find((myitem)=>{console.log(myitem)})

