import { useEffect, useState } from "react"
import { jewlrydata } from "../../api/jewlry.api"
import { Card2 } from "../../Components/Mycards/Card2"
interface Ijewlry{}
export const Jewlry:React.FC<Ijewlry>=(props)=>{
    var [localstate,setLocalstate]=useState([])
    useEffect(()=>{
        jewlrydata().then((a)=>{
            setLocalstate(a)
           
        })
    },[])
    
   console.log(localstate)
    return <>
    <h1>category:</h1>
    <Card2 description={"kkk"} image={"ll"} price={0} rating={{count:7,rate:6}} title={"mm"}/>
    </>
}