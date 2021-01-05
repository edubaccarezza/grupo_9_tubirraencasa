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
      cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/products/create', adminMiddleware, productsController.create);
router.post('/products/create',upload.any('image'), adminMiddleware, productsController.store);
router.get('/products/:id', productsController.adminDetail);
router.delete('/products/:id', productsController.delete);
router.get('/products/edit/:id', productsController.edit);
router.post('/products/edit/:id',upload.any('image'), productsController.restore);

module.exports = router; 

