var MongodbClient=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    var myid={id:"123"}
    var myobj2={$set:{name:'sumanth',chocolate:'perk',hero:'prabhas'}}
    dbo.collection('test-student').updateOne(myid,myobj2,(err:any,res:any)=>{
        if(err) throw err
        console.log('value updated')
        db.close()
    })
})