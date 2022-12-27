const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const PUBLISHABLE_KEY = "pk_test_51MHsCrSFMhi4YQSmibFtxDUbRXKSY3EVDANwLbIaBS5AnaimrLCKE0ZV77bZSKaXtwWfVNna9obYt95WWPqRTVqZ00oHPYelbn"

const SECRET_KEY = "sk_test_51MHsCrSFMhi4YQSmhdu0R6j6zvJ9yMRlbnfauzu4Y2H3RIII9rCnpZwStJ2BBHk9pqTq81npkAM4r0ZSVS7QfS1W00X9aNBVx8"

const stripe = require('stripe')(SECRET_KEY)

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set("view engine","ejs")

const PORT = process.env.PORT || 3000

app.get('/',(_req,res)=>{
      res.render('Home',{
         key:PUBLISHABLE_KEY
      })
})

app.post('/payment',(req,res)=>{
        stripe.customers.create({
            email:req.body.stripeEmail,
            source:req.body.stripeToken,
            name:'Vijay',
            address:{
                 line:'50th cross road Rajajinagar Banglore',
                 postal_code:'560010',
                 city:'Banglore',
                 state:'Karnataka',
                 country:'India'
            }
        })
        .then((customer)=>{
            return stripe.charges.create({
                amount:7000,
                description:'Web Development Product',
                currency:'USD',
                customer:customer.id
            })
        })
        .then((payment)=>{
            console.log(payment)
            res.send("Success")
        })
        .catch((err)=>{
            res.send(err)
        })
})

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})