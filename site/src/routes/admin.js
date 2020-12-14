// ENRUTADOR ADMIN

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');

const express = require('express');
const router = express.Router()
const path = require('path')

// const { productCart } = require('../controllers/productsController');
const multer = require('multer')
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/products/create', productsController.create);
router.post('/products/create',upload.any('image'), productsController.store);
router.get('/products/:id', productsController.adminDetail);
router.delete('/products/:id', (req, res) => res.send('borraste un producto'))

module.exports = router;

