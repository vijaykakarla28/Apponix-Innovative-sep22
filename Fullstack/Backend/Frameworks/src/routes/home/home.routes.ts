import { Router } from "../../../config/common.config";
import { home_get } from "../../controller";

Router.route('/home')
.get(home_get)

module.exports=Router




// .post(home_post)
// .put(home_put)
// .delete(home_delete)





// var home_post=(req:any,res:any)=>{
//     res.send('hello')
// }
// var home_put=(req:any,res:any)=>{
//     res.send('hello')
// }
// var home_delete=(req:any,res:any)=>{
//     res.send('hello')
// }