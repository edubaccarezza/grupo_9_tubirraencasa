const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/api/apiController')

router.get('/products', apiController.productsAll);
// router.get('/detail/:id', apiProductsController.productdetail);
router.get('/products/:id', apiController.productDetail)

//USERS
router.get('/users',apiController.usersAll);

router.get('/users/:id',apiController.userDetail);

module.exports = router;