const port = 3000;
const express = require('express');
const app = express();
const product_routes = require('./routes/products_routing');

app.use(express.json());
app.use(product_routes)
// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
