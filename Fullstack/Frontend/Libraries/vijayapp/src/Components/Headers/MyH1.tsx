import { mystyle } from "./mystyle";
import './mycss.css'

interface IMyH1{
    a:string,
    bg:string,
}



// var mystyle: any{
//     color:'yellow',
//     fontSize:'60px'
// }

export const MyH1:React.FC<IMyH1>=(props)=>{
return <>
<h2 style={mystyle}>Hello</h2>
<h2 style={{backgroundColor:props.bg}}>{props.a}</h2>
</>
}