const port =3000;
const express = require('express');
const app = express();
const products=require('./products')

//app.method(path,handling)

// app.get("/",(req,res)=>{
//     res.send("Welcome to the Smartwatch");
// })
app.get('/', (req, res) => {
    res.status(200).json({products:products});
})
app.get('/price/:price', (req, res) => {
   // const id =parseInt(req.params.id,10);
    const price=parseInt(req.params.price)
   const product=products.find(p=>p.price ===price);
   if(product){
       res.status(200).json(product.name);
   }
   else{
       res.status(404).json("Product not found.");
   }

})
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})