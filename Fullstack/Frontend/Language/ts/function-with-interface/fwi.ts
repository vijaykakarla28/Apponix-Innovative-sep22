function marriage2(props:Imarriage2)
{console.log(props)}

marriage2({gift1:'watch',gift2:100})
marriage2({gift1:'watch'})
interface Imarriage2{
    gift1:string,
    gift2?:number
}