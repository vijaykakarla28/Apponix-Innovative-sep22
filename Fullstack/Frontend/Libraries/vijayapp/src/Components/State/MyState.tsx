import { useState } from "react"

interface IMyState { }
var myarry:any=[]
export const MyState: React.FC<IMyState> = (props) => {
  var [userinput,setUserInput]=useState()
  const mychange=(e:any)=>{
    console.log(e.target.value)
    setUserInput(e.target.value)
    myarry.push(e.target.value)
}
console.log(myarry)
  var p='999'
    return <>
    <input type="text" onChange={mychange} />
    
    ,<h1> {userinput}</h1>
    
    {myarry.map((s:any)=>{
        return <><li>{s}</li></>
    })}
    </>
}