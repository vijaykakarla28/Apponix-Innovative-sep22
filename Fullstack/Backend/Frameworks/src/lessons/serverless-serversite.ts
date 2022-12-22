app.get('/index',(req:any,res:any)=>{
    res.send('<h1>Hello all</h1>')
})

app.get('/serverless',(req:any,res:any)=>{
    res.redirect('http://127.0.0.1:5500/test.html')
    })
