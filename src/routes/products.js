// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');

const express = require('express');
const router = express.Router()
const controller = require('../controllers/productsController');


router.get('/', controller.root);
router.get('/:id', controller.detail);
router.get('/carrito', controller.cart)



module.exports = router;