interface Imyapi{
    url:string,
    name:string,
    emailid:string
}

export const myapi=async(props:Imyapi)=>{
var data3={name:props.name , emailid:props.emailid}
var data=fetch(props.url,{
   method:'post',
   headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
   },
   body:JSON.stringify(data3)
})
console.log(await (await data).json)
return await (await data).json
}