const express = require("express");
const router = express.Router();

const products = require("../data/products");

// Route: Home
router.get('/', (req, res) => {
    res.status(200).json({products: products});
});

// Route: Filter Products
router.get('/products', (req, res) => {
    let filteredProducts = products;
    const {category, maxPrice} = req.query;

    // Filter by category if provided
    if (category) {
        filteredProducts = filteredProducts.filter(p =>
            p.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by maxPrice if provided
    if (maxPrice) {
        filteredProducts = filteredProducts.filter(p =>
            p.price <= parseInt(maxPrice, 10)
        );
    }

    // Final response
    if (filteredProducts.length > 0) {
        res.status(200).json({
            message: `Filtered products${category ? ` in category '${category}'` : ""}${maxPrice ? ` with price <= ${maxPrice}` : ""}:`,
            products: filteredProducts
        });
    } else {
        res.status(404).json({message: "No matching products found."});
    }
});

router.post('/products', (req, res) => {
    const {name,price,category} = req.body;
    if (!name || !price || !category) {
        res.status(404).json({message: `the product is invalid`});
    }
    const newproduct = {
        id: products.length + 1,
        name,
        price,
        category
    };


    products.push(newproduct)
    res.status(201).json({message: `The product ${newproduct.name} has been added`});

})

module.exports = router;