interface Imarrage{
    gift1?:number|boolean,
    gift2?:string|number|boolean,
}

function marrage(props:Imarrage){
    console.log(props)
}
marrage({gift1:0o0})


var glass:Iglass={
     frame:'squre',
     shape:'squre',
     color:'red',
    
     }
     interface  Iglass{
         frame:string,
         shape:string,
         color:string,
     spec1?:number
     }
console.log(glass)
    glass.spec1