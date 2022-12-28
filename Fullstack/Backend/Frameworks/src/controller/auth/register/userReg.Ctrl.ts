const {UserRegInfo}=require('../../../model')
export const userReg_Post=(req:any,res:any)=>{
    var name=req.body.name
    var email=req.body.email
    var password=req.body.password
    savingUserInfoService(name,email,password)
    res.send('i am working')
}

const savingUserInfoService=(name: any, email: any, password: any)=> {
    console.log(name,email,password)
    var userReg=new UserRegInfo({name,email,password})
    userReg.save()
}

