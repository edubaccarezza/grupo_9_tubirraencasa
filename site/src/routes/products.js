// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');
const productsController = require('../controllers/productsController');

const express = require('express');
const router = express.Router()

router.get('/', productsController.all);
router.get('/carrito', productsController.productCart)
router.get('/productos', productsController.productos)
router.get('/crear', productsController.crear)

module.exports = router;