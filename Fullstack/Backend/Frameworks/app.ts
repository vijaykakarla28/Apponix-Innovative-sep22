import { express } from "./config/common.config"


require('dotenv').config()
require("./config/db.config")

var app=express()
var cors=require('cors')
var bodyParser=require('body-parser')
var path=require('path')
var ejs=require('ejs')
var endpoint=require('./src/routes')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'src/public/img')))
app.use(express.static(path.join(__dirname,'src/video/waterfall')))

app.use('/api',endpoint.homeRoute)

app.route('/')
.get((req:any,res:any)=>{
    res.send('welcome')
})

app.route('*')
.get((req:any,res:any)=>{
    res.send({route:404})
})


app.listen(process.env.PORT,()=>{
    console.log(`server started on the port no ${process.env.PORT}`)
})