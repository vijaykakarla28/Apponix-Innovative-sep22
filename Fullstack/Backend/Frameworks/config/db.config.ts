const mongoose=require('mongoose')
var url="mongodb://127.0.0.1:27017/testDB"
mongoose.connect(url,(err:any,res:any)=>{
    if(err){console.log(err)}
    else{console.log('db connect')}
})