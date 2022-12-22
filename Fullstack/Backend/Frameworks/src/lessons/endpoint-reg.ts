// it looks at starting and ending in b/w u give anything

app.get('/c*ars',(req:any,res:any)=>{
    res.send('hello')
})

app.get('/ca?rs',(req:any,res:any)=>{
    res.send('Hello')
})


// multiple path

app.get('/api/cars',(req:any,res:any)=>{
    res.send('hello')
})


app.get('/ca+rs',(req:any,res:any)=>{
    res.send('Helllo')
})

app.get('/cars/:id/:name',(req:any,res:any)=>{
    res.send('Hello')
})