// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');

const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router()
const controller = require('../controllers/productsController');


//search
router.get('/search', productsController.search)
router.get('/categorias/:id' ,controller.categorias )


router.get('/', controller.root);
router.get('/cart', controller.cart);
router.get('/:id', controller.detail);






module.exports = router; 