var fs=require('fs')
const {ProductInfo}=require('../../model')

export const sellerUpload_Post=async(req:any,res:any)=>{
    let img=req.files.img
    let discription=req.body.discription
    let title=req.body.title
    let price=req.body.price
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    console.log(req.files.img.name)
    var myfilename = req.files.img.name
    fs.WriteFile(`./src/public/img/${myfilename}`,req.files.img.data,()=>{
        console.log('OK')
    })
    saveProductDetailsToDbService(discription,title,price,myfilename)
    res.status(200).send('Uploaded')
}
const saveProductDetailsToDbService=(discription:any,title:any,price:any,myfilename:any)=>{
    var basePath='http://localhost:8005/img'
    var mydata={basePath:basePath,discription:discription,title:title,img_name:myfilename}
    var productdata = new ProductInfo(mydata)
    productdata.save()
}