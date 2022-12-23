var express=require('express')
var app=express()
var cors=require('cors')
var bodyParser=require('body-parser')
var path=require('path')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'src/public/')))


app.listen(8003,()=>{
    console.log('server started on port no 8003')
})