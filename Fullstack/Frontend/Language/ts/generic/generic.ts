interface Iglass{
    frame:string,
    shape:string,
    color:string,
    [key:string]:string
}

var glass:Iglass={
    frame:'square',
    shape:'square',
    color:'red'
};
console.log(glass);
glass.ktm='yes'


