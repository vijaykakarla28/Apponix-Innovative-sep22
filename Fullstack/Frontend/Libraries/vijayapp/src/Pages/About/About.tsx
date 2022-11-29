export const About:React.FC<{}>=()=>{
    parent()
    return <>
    <Pa>
        <Chi1/>
        <Chi2/>
    </Pa>

    </>
}
const Pa=(props:any)=>{
    return<>
    <h1>React</h1>
    <h1>Angular</h1>
    <h1>Development</h1>
    {props.children}
    </>
}
const Chi1=()=>{
    return<>123</>
}
const Chi2=()=>{
    return<>456</>
}

function parent(){
    console.log('iam parent')
    var mon=10
    child1(mon)
    child2(mon)

}
function child1(a:any){
    console.log('iam child1',a)
}
function child2(a:any){
    console.log('iam child2',a)
}