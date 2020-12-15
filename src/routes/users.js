// ENRUTADOR USERS

// const path = require('path');
const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require ('multer');
const usersController = require('../controllers/usersController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/register', usersController.register);
router.post('/register', upload.single('image') ,usersController.create);

router.get('/login', usersController.login);
router.post('/login',usersController.loginIn);

module.exports = router;