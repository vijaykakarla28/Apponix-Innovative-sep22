var http=require('http')
console.log(http)
var url=require('url')
http.createServer((req:any,res:any)=>{
    if(req.url=='/vijay'){
        res.write('hi i am vijay')
        res.end()
    }
}).listen(8006,()=>{console.log('server is started in port 8006')})