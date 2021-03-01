const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api/apiProductsController')

router.get('/products', apiProductsController.productsAll);
// router.get('/detail/:id', apiProductsController.productdetail);
router.get('/products/:id', apiProductsController.productDetail)

module.exports = router;