const port = 3000;
const express = require('express');
const app = express();
const products = require('./products')

//app.method(path,handling)

// app.get("/",(req,res)=>{
//     res.send("Welcome to the Smartwatch");
// })
app.get('/', (req, res) => {
    res.status(200).json({products: products});
})
app.get('/products', (req, res) => {
    // const id =parseInt(req.params.id,10);
    //  const price=parseInt(req.params.price)
    // const product=products.find(p=>p.id ===id);
    // if(product){
    //     res.status(200).json(product.name);
    // }
    // else{
    //     res.status(404).json("Product not found.");
    // }
//filter methods
    let filteredProducts = products;

    let {category, maxPrice} = req.query;
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());


    }
    if (maxPrice) {
        filteredProducts=filteredProducts.filter(p=>p.price <= parseInt(maxPrice,10));
    }
    res.status(200).json({
        message: `products under the category: ${category} are: `,
        products: filteredProducts

    })
    res.status(200).json({
        message: `products under the category: ${parseInt(maxPrice,10)} are: `,
        products: filteredProducts

    })
    // if (category&&maxPrice) {
    //     filteredProducts=filteredProducts.filter(p=>p.category.toLowerCase() === category.toLowerCase() && p.price <= parseInt(maxPrice,10));
    //     res.status(200).json({products:filteredProducts})
    // }
    // else{
    //     res.status(404).json("no such product");
    // }
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
})