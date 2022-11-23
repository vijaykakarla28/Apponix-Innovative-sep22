import { mystyle } from "./mystyle";
import './mycss.css'
interface IMyH1{
    a:string,
    bg:string,
}

// var mystyle={
//     color:'green',
//     fontSize:'60px'
// }

export const MyH1:React.FC<IMyH1>=(props)=>{
    // alert(props.bg)
return <>
<h2 style={mystyle}>Hello</h2>
<h1 style={{backgroundColor:props.bg}}>{props.a}</h1></>
}