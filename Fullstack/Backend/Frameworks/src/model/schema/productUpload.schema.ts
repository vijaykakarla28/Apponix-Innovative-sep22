import mongoose,{ Schema} from "mongoose";

var sellerUploadProduct=new Schema({
    img:String,
    title:String,
    discription:String,
    price:String

})

module.exports=mongoose.model('ProductInfo',sellerUploadProduct)