import express ,{response} from "express"
import cors from "cors"
import mongoose from "mongoose"

const  app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
var url="mongodb://127.0.0.1:27017/VijayDB"
mongoose.connect(url,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('db connected')
    }
})

//Schema Creation
const useSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User = new mongoose.model("User",useSchema)

//routes
app.post("/login",(req,res)=>{
   const {email,password} = req.body
   User.findOne({email:email},(err,user)=>{
    if(user){
        if (password === user.password){
            res.send({message:"Login Successful",user:user})
        }
        else{
            res.send({message:"password didn't match"})
        }
        }
        else {
            res.send({message:"user not registered"})
    }
   })
})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password,
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"successfully registered"})
                }
            })
        }
    })
})

app.listen(8003,() => {
    console.log("Server Started")
})