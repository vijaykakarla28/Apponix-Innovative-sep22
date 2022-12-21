var express=require('express')
var app=express()
var cors=require('cors')
var bodyParser=require('body-parser')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.post('/cars',(req:any,res:any)=>{
    console.log(req.query)
    console.log(req.body)

    //console.log(req.body)
    res.send('Welcome to this website')
})

app.post('/cars',(req:any,res:any)=>{
    console.log(req.query.username)
    res.send(req.query.username)
})

app.get('/user/:id',(req:any,res:any)=>{
    console.log(req.params.id)
    res.send(req.params.id)
})



app.listen(8003,()=>{
    console.log('server started on port no 8003')
})