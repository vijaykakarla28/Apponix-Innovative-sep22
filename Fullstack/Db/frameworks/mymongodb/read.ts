var MongodbClient=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    dbo.collection('test-student').findOne({name:'kalyan'},(err:any,res:any)=>{
      if(err) throw err
      console.log(res)
      db.close()
    })
})