// ENRUTADOR ADMIN

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');

const express = require('express');
const router = express.Router()
const path = require('path')

// const { productCart } = require('../controllers/productsController');
const multer = require('multer')
const productsController = require('../controllers/productsController');
const adminMiddleware = require('../middlewares/adminMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })


// CREAR
router.get('/products/create', productsController.create); //adminMiddleware (AGREGAR)
router.post('/products/create',upload.array('imagen',5),  productsController.store); //adminMiddleware (AGREGAR)

// DELETE
router.delete('/products/:id',  productsController.delete);

// EDITAR
router.get('/products/edit/:id', productsController.edit);
router.post('/products/edit/:id',upload.any('image'),  productsController.restore);

// DETALLE ADMIN
router.get('/products',  productsController.all)
router.get('/products/:id',  productsController.adminDetail);

module.exports = router; 

