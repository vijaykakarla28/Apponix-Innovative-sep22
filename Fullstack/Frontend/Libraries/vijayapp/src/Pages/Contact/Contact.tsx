// import { MyH1 } from "../../components/headres/MyH1"
import { useEffect, useState } from "react"
import { flipkartdata } from "../../api/flipkart.api"
import { MyH1 } from "../../Components"
import { Mycard } from "../../Components/Mycards/Mycard"


export const Contact = () => {
    var [pro, setPro] = useState([])
    useEffect(() => {
        flipkartdata().then((a) => {

            setPro(a)
        })
    }, [])
    console.log(pro)
    return <>
        {pro.map((d: any) => { return <><Mycard img={d.image} title={d.title} price={d.price} /></> })}
        <MyH1 a={"im contact"} bg={"red"} />
    </>
}