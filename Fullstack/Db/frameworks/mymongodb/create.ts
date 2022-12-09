var MongodbClient=require('mongodb').MongoClient
var db_server_url="mongodb://127.0.0.1:27017/"
MongodbClient.connect(db_server_url,(err:any,db:any)=>{
    if(err)throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    dbo.createCollection('test-student',(err:any,res:any)=>{
        if(err) throw err
        console.log('create one collection')
        db.close()
    })
})



