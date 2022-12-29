import { Router } from "../../../../config/common.config";
import { userReg_Post } from "../../../controller";

Router.route('/register')
.post(userReg_Post)
module.exports=Router
