var MongodbClient=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017/"
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err)throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    var vijay={name:'kalyan',chocolate:'5star',hero:'pavan kalyan'}
  dbo.collection('test-student').insertOne(vijay,(err:any,res:any)=>{
    if(err) throw err
    console.log('insert data',res)
    db.close()
  })  
})