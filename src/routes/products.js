// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');

const express = require('express');
const router = express.Router()
const controller = require('../controllers/productsController');


router.get('/', controller.root);
router.get('/cart', controller.cart);
router.get('/:id', controller.detail);




module.exports = router; 