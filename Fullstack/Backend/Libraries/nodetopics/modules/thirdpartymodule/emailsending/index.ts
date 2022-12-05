var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vijaykakarla28@gmail.com',
        pass:'bekydqjktikzdemw'
    }
})
var maildata={
    from:'vijaykakarla28@gmail.com',
    to:'kakarlaanuf18@gmail.com ',
    subject:'Hi anna atlunnav',
text:'Wish you happy new year'
}
transport.sendMail(maildata,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})