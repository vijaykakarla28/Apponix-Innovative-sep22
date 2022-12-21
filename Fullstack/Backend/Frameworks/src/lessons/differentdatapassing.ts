app.use(middle)
app.use(cors())

app.get('/',(req:any,res:any)=>{
    res.send([{a:'apple',b:'ball'}])
})

app.get('/a',(req:any,res:any)=>{
    res.send([{a:'apple',b:'ball'}])
})