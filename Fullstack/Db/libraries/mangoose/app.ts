require("./config/db.config")
var {User} =require('../src/model')


// var vijay=new User({name:'vijay',age:19,chocolate:'silk'})
// vijay.save()
// var kalyan=new User({name:'kalyan',age:19,chocolate:'5star'})
// kalyan.save()
// var janni=new User({name:'janni',age:19,chocolate:'munch'})
// janni.save()
// var sumanth=new User({name:'sumanth',age:19,chocolate:'perk'})
// sumanth.save()
// User.findOne({chocolate:'5star'},(err:any,res:any)=>{
//     if(err) throw err
//     console.log(res)
// })
// User.deleteOne({chocolate:'perk'},(err:any,res:any)=>{
//     if(err) throw err
//     console.log(res)
// })
User.findOneAndUpdate({chocolate:'perk'},{age:21},(err:any,res:any)=>{
    if(err) throw err
    console.log(res)
})