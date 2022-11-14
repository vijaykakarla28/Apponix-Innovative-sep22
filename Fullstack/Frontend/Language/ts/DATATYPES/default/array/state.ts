// console.log(1)
// setTimeout(()=>{console.log(2)},2000)

// console.log(3)
var initailstate=0
var initialstateofminutes=0
setInterval(() => { 
    console.log("sec:",initailstate++, "minutes:", initialstateofminutes, "hours")
if(initailstate==10) {
    initialstateofminutes++
    console.log("minutes", initialstateofminutes)
   }
}, 1000)

