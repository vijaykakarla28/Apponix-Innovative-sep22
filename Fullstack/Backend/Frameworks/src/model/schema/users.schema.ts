import mongoose,{ Schema} from "mongoose";

var userStructure=new Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model('usersRegInfo',userStructure)


// interface IRemote{color:string,shape:string,buttons:number}
// class Remote{
//     color:string;
//     shape:string;
//     buttons:number
//     constructor(props:IRemote){
//         this.color=props.color
//         this.shape=props.shape
//         this.buttons=props.buttons
//     }
// }

// var epison=new Remote({color:'red',shape:'square',buttons:3})