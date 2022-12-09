var MongodbClient=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
})