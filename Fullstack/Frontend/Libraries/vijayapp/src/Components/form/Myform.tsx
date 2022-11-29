import { useState } from "react"
import { myapi } from "./api"

export const Myform:React.FC<{}>=()=>{
var [name,setName]=useState()
var [emailid,setEmailid]=useState()
var handleNameChange=(e:any)=>{
    setName(e.target.value)
}
var handleEmailidChange=(e:any)=>{
    setEmailid(e.target.value)
}

var handlesubmit=()=>{
    alert("name: "+name+'emailid :'+emailid)
var mydata={
    url:'http://localhost:3000/posts',
    name:name!,
    emailid:emailid!
    }
    myapi(mydata)
}
return<>
<label htmlFor="">name</label>
<input type="text" onChange={handleNameChange} name="" id="" />
<label htmlFor="">email id</label>
<input type="email" onChange={handleEmailidChange} name="" id="" />
<button onClick={handlesubmit}>submit</button>
</>



}