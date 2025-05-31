const port =3000
const express = require('express')
const app = express()
// const products=require('./products')


app.get('/',(req,res)=>{
    res.send('hey bro!!')
})
app.listen(3000,()=>{
    console.log('Server started on port 3000')
})