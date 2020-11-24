const path = require ('path')
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/carrito', mainController.productCart)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/productos', mainController.productos)
router.get('/actualizar', mainController.actualizar)


module.exports = router;

