import { userExist } from "../register"

const {UserRegInfo}=require('../../../models')
export const  userlogin_Post=(req:any,res:any)=>{
var email=req.body.email
var password=req.body.password
const logincallback=(data:boolean)=>{
if(data==true){
    console.log('login success')
}else{
    console.log('user do not exits')
}
}
    userExist(email,logincallback)
res.status(200).send(200)
}